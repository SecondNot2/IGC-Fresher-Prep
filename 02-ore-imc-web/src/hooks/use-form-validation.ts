import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { z, ZodSchema } from "zod";

interface UseFormValidationOptions<T> {
  schema: ZodSchema<T>;
  initialValues: T;
  onSuccess: (data: T) => void | Promise<void>;
}

interface UseFormValidationReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  isSubmitting: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  reset: () => void;
  setFieldValue: (field: keyof T, value: string) => void;
  setFieldError: (field: keyof T, error: string) => void;
  clearErrors: () => void;
}

/**
 * Generic form validation hook using Zod
 *
 * @example
 * const { values, errors, handleChange, handleSubmit } = useFormValidation({
 *   schema: contactSchema,
 *   initialValues: { name: '', email: '', message: '' },
 *   onSuccess: (data) => sendEmail(data),
 * });
 */
function useFormValidation<T extends Record<string, unknown>>({
  schema,
  initialValues,
  onSuccess,
}: UseFormValidationOptions<T>): UseFormValidationReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name as keyof T]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const setFieldValue = useCallback((field: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setErrors({});
      setIsSubmitting(true);

      try {
        const result = schema.safeParse(values);

        if (!result.success) {
          const fieldErrors: Partial<Record<keyof T, string>> = {};
          result.error.errors.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as keyof T] = err.message;
            }
          });
          setErrors(fieldErrors);
          setIsSubmitting(false);
          return;
        }

        await onSuccess(result.data);
        reset();
      } catch (error) {
        console.error("Form submission error:", error);
        setIsSubmitting(false);
      }
    },
    [schema, values, onSuccess, reset]
  );

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
    clearErrors,
  };
}

export default useFormValidation;
