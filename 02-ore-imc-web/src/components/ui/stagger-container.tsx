import { motion, Variants } from "framer-motion";
import React from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * StaggerContainer - Container for staggered children animations
 * Wrap around a list of items to animate them in sequence
 *
 * @example
 * <StaggerContainer className="grid grid-cols-3 gap-4">
 *   {items.map(item => (
 *     <StaggerItem key={item.id}>
 *       <Card>{item.content}</Card>
 *     </StaggerItem>
 *   ))}
 * </StaggerContainer>
 */
const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  duration = 0.5,
  className = "",
  once = true,
}: StaggerContainerProps) => {
  const customContainerVariants: Variants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-30px" }}
      variants={customContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem - Individual item within a StaggerContainer
 * Must be a direct child of StaggerContainer for animation to work
 */
const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export { StaggerContainer, StaggerItem, itemVariants };
export default StaggerContainer;
