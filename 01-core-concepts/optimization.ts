/**
 * ============================================================
 * OPTIMIZATION DEMO - Big O Complexity Analysis
 * ============================================================
 *
 * Bài toán: Tìm các phần tử trùng lặp giữa 2 mảng lớn
 *
 * So sánh 2 cách tiếp cận:
 * - Cách 1: Nested Loops (O(n²)) - Brute Force
 * - Cách 2: Hash Set (O(n)) - Optimal
 *
 * ============================================================
 */

// ============================================================
// PHẦN 0: GIẢI THÍCH LÝ THUYẾT
// ============================================================

/**
 * 📚 BIG O NOTATION - PHÂN TÍCH ĐỘ PHỨC TẠP THỜI GIAN
 *
 * Big O mô tả TỐC ĐỘ TĂNG của thời gian chạy khi INPUT TĂNG.
 *
 * ┌─────────────┬─────────────────────────────────────────────────────┐
 * │ Big O       │ Mô tả                                               │
 * ├─────────────┼─────────────────────────────────────────────────────┤
 * │ O(1)        │ Constant - Không phụ thuộc input size               │
 * │ O(log n)    │ Logarithmic - Binary Search                         │
 * │ O(n)        │ Linear - Duyệt 1 lần qua mảng                       │
 * │ O(n log n)  │ Linearithmic - Merge Sort, Quick Sort               │
 * │ O(n²)       │ Quadratic - Nested loops (2 vòng for lồng nhau)     │
 * │ O(2ⁿ)       │ Exponential - Đệ quy không tối ưu (Fibonacci naive) │
 * └─────────────┴─────────────────────────────────────────────────────┘
 *
 * VỚI n = 50,000:
 * - O(n)   = 50,000 operations          ≈ 0.05 giây
 * - O(n²)  = 2,500,000,000 operations   ≈ 20+ giây (2.5 tỷ phép tính!)
 *
 * ⚠️ O(n²) TỆ VỚI DỮ LIỆU LỚN VÌ:
 * - Khi n tăng gấp đôi → thời gian tăng GẤP 4 (2² = 4)
 * - Khi n tăng 10 lần → thời gian tăng GẤP 100 (10² = 100)
 */

/**
 * 📚 TẠI SAO Set.has() NHANH HƠN DUYỆT MẢNG?
 *
 * ┌────────────────────┬──────────────────────────────────────────────┐
 * │ Phương pháp        │ Cách hoạt động                               │
 * ├────────────────────┼──────────────────────────────────────────────┤
 * │ Array.includes()   │ Duyệt TUẦN TỰ từ đầu đến cuối: O(n)          │
 * │ for loop           │ Tương tự, duyệt từng phần tử: O(n)           │
 * ├────────────────────┼──────────────────────────────────────────────┤
 * │ Set.has()          │ Sử dụng HASH TABLE: O(1) *trung bình*        │
 * │ Map.has()          │ Tương tự, dùng hash function: O(1)           │
 * └────────────────────┴──────────────────────────────────────────────┘
 *
 * 💡 HASH TABLE hoạt động như thế nào?
 *
 * 1. Khi thêm "user_0@igc.vn" vào Set:
 *    - JS chạy hash function: hash("user_0@igc.vn") → 12345
 *    - Lưu tại bucket[12345] = "user_0@igc.vn"
 *
 * 2. Khi kiểm tra Set.has("user_0@igc.vn"):
 *    - JS tính lại: hash("user_0@igc.vn") → 12345
 *    - Nhảy TRỰC TIẾP đến bucket[12345] để kiểm tra
 *    - KHÔNG CẦN DUYỆT qua các phần tử khác!
 *
 * Ví dụ trực quan:
 *
 * 📦 Mảng (Array) - Tìm sách trong kho KHÔNG SẮP XẾP:
 *    → Phải lục từng kệ, từng cuốn sách: O(n)
 *
 * 🏷️ Set (Hash Table) - Tìm sách trong THƯ VIỆN CÓ MÃ SỐ:
 *    → "Cuốn này mã 12345" → Đi thẳng kệ 12345: O(1)
 */

// ============================================================
// PHẦN 1: CHUẨN BỊ DỮ LIỆU TEST
// ============================================================

// Hàm tạo dữ liệu giả (Mock Data) số lượng lớn
const createLargeData = (size: number): string[] => {
  const data: string[] = [];
  for (let i = 0; i < size; i++) {
    data.push(`user_${i}@igc.vn`);
  }
  return data;
};

// Chuẩn bị dữ liệu: 2 danh sách lớn
const listA = createLargeData(50000); // 50k users
const listB = createLargeData(50000); // 50k users

// Thêm một vài user trùng nhau để test
listB[0] = listA[0];
listB[100] = listA[100];

console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║      📊 OPTIMIZATION DEMO - Big O Complexity              ║");
console.log("╚════════════════════════════════════════════════════════════╝");
console.log();
console.log(
  `📋 Dữ liệu test: listA = ${listA.length.toLocaleString()} items, listB = ${listB.length.toLocaleString()} items`
);
console.log();

// ============================================================
// PHẦN 2: CÁCH CHẬM - NESTED LOOPS O(n²)
// ============================================================

console.log("┌────────────────────────────────────────────────────────────┐");
console.log("│  ❌ CÁCH 1: Nested Loops - O(n²)                           │");
console.log("└────────────────────────────────────────────────────────────┘");
console.log();

/**
 * ❌ PHÂN TÍCH THUẬT TOÁN NESTED LOOPS:
 *
 * Với listA có n phần tử, listB có m phần tử:
 *
 * for (let i = 0; i < n; i++) {       // Lặp n lần
 *   for (let j = 0; j < m; j++) {     // Mỗi lần lặp m lần
 *     if (listA[i] === listB[j])      // 1 phép so sánh
 *   }
 * }
 *
 * Tổng số phép so sánh = n × m
 *
 * Nếu n = m = 50,000:
 * → 50,000 × 50,000 = 2,500,000,000 (2.5 TỶ phép tính!)
 *
 * Big O: O(n × m) hoặc O(n²) khi n ≈ m
 */

console.log("⏳ Đang chạy thuật toán O(n²)... Vui lòng chờ!");
console.log(
  `   Số phép tính: ${(listA.length * listB.length).toLocaleString()} (n × m)`
);
console.log();

console.time("❌ Slow_Method (O(n²))");

const duplicatesSlow: string[] = [];
for (let i = 0; i < listA.length; i++) {
  for (let j = 0; j < listB.length; j++) {
    if (listA[i] === listB[j]) {
      duplicatesSlow.push(listA[i]);
    }
  }
}

console.timeEnd("❌ Slow_Method (O(n²))");
console.log(`   Tìm thấy ${duplicatesSlow.length} user trùng.`);
console.log();

// ============================================================
// PHẦN 3: CÁCH NHANH - HASH SET O(n)
// ============================================================

console.log("┌────────────────────────────────────────────────────────────┐");
console.log("│  ✅ CÁCH 2: Hash Set - O(n)                                │");
console.log("└────────────────────────────────────────────────────────────┘");
console.log();

/**
 * ✅ THUẬT TOÁN TỐI ƯU VỚI SET:
 *
 * Bước 1: Chuyển listA thành Set      → O(n) - duyệt n phần tử
 * Bước 2: Duyệt listB, kiểm tra Set   → O(m) - duyệt m phần tử
 *         Mỗi lần Set.has() chỉ tốn   → O(1)
 *
 * Tổng: O(n) + O(m) = O(n + m) ≈ O(n) [Linear Time]
 *
 * Nếu n = m = 50,000:
 * → 50,000 + 50,000 = 100,000 (chỉ 100K phép tính!)
 *
 * SO SÁNH:
 * - O(n²): 2,500,000,000 phép tính
 * - O(n):  100,000 phép tính
 * → Nhanh hơn 25,000 lần! 🚀
 */

/**
 * Hàm tìm phần tử trùng lặp tối ưu với Set
 * @param arr1 - Mảng thứ nhất
 * @param arr2 - Mảng thứ hai
 * @returns Mảng chứa các phần tử trùng lặp
 *
 * Time Complexity: O(n + m) ≈ O(n)
 * Space Complexity: O(n) - lưu Set
 */
function findDuplicatesFast<T>(arr1: T[], arr2: T[]): T[] {
  // Bước 1: Chuyển arr1 thành Set để lookup O(1)
  const setA = new Set<T>(arr1); // O(n)

  // Bước 2: Duyệt arr2, kiểm tra từng phần tử trong Set
  const duplicates: T[] = [];

  for (const item of arr2) {
    // O(m)
    if (setA.has(item)) {
      // O(1) - Hash lookup!
      duplicates.push(item);
    }
  }

  return duplicates;
}

console.log("⚡ Đang chạy thuật toán O(n)...");
console.log(
  `   Số phép tính: ${(listA.length + listB.length).toLocaleString()} (n + m)`
);
console.log();

console.time("✅ Fast_Method (O(n))");

const duplicatesFast = findDuplicatesFast(listA, listB);

console.timeEnd("✅ Fast_Method (O(n))");
console.log(`   Tìm thấy ${duplicatesFast.length} user trùng.`);
console.log();

// ============================================================
// PHẦN 4: SO SÁNH KẾT QUẢ
// ============================================================

console.log("┌────────────────────────────────────────────────────────────┐");
console.log("│  📊 KẾT LUẬN                                               │");
console.log("└────────────────────────────────────────────────────────────┘");
console.log();

console.log("┌──────────────────┬─────────────────┬────────────────────────┐");
console.log("│ Phương pháp      │ Độ phức tạp     │ Số phép tính (50K)     │");
console.log("├──────────────────┼─────────────────┼────────────────────────┤");
console.log("│ Nested Loops     │ O(n²)           │ 2,500,000,000          │");
console.log("│ Hash Set         │ O(n)            │ 100,000                │");
console.log("└──────────────────┴─────────────────┴────────────────────────┘");
console.log();
console.log("💡 KEY TAKEAWAYS:");
console.log("   1. Luôn nghĩ về Big O trước khi code");
console.log("   2. Set/Map có lookup time O(1) nhờ Hash Table");
console.log(
  "   3. Space-Time Tradeoff: Hash Set tốn RAM hơn để đổi lấy tốc độ cực nhanh."
);
console.log("   4. Với dữ liệu lớn, sự khác biệt là HÀNG NGHÌN LẦN");
console.log();
console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║                    ✅ DEMO HOÀN TẤT!                       ║");
console.log("╚════════════════════════════════════════════════════════════╝");
