/**
 * ============================================================
 * OOP DEMO - TypeScript (Node.js)
 * ============================================================
 * 4 Nguyên tắc OOP được demo:
 * 1. Encapsulation (Đóng gói) - private, protected, public modifiers
 * 2. Inheritance (Kế thừa) - extends keyword
 * 3. Polymorphism (Đa hình) - method overriding
 * 4. Abstraction (Trừu tượng) - abstract class, interface
 * ============================================================
 */

// ============================================================
// PHẦN 1: BỐI CẢNH GAME (Skrice Studios)
// ============================================================

/**
 * ABSTRACTION: Abstract Class Character
 * - Định nghĩa "bản thiết kế" chung cho tất cả nhân vật
 * - Không thể khởi tạo trực tiếp (new Character() sẽ lỗi)
 */
abstract class Character {
  // ENCAPSULATION: private - chỉ truy cập được trong class này
  private _name: string;
  private _hp: number;

  // ENCAPSULATION: protected - truy cập được trong class này và class con
  protected damage: number;

  constructor(name: string, hp: number, damage: number) {
    this._name = name;
    this._hp = hp;
    this.damage = damage;
  }

  // ENCAPSULATION: Getter để đọc giá trị private từ bên ngoài
  public get name(): string {
    return this._name;
  }

  public get hp(): number {
    return this._hp;
  }

  // ENCAPSULATION: Setter với validation
  protected set hp(value: number) {
    this._hp = Math.max(0, value); // HP không thể âm
  }

  /**
   * ABSTRACTION: Abstract method
   * - Bắt buộc class con phải implement
   * - Mỗi class con sẽ có cách attack khác nhau (Polymorphism)
   */
  public abstract attack(target: Character): void;

  /**
   * Method để nhận sát thương
   */
  public takeDamage(amount: number): void {
    const oldHp = this._hp;
    this._hp = Math.max(0, this._hp - amount);
    console.log(`  💔 ${this._name} mất ${amount} HP (${oldHp} → ${this._hp})`);

    if (this._hp === 0) {
      console.log(`  ☠️ ${this._name} đã bị hạ gục!`);
    }
  }

  /**
   * Kiểm tra còn sống không
   */
  public isAlive(): boolean {
    return this._hp > 0;
  }

  /**
   * Hiển thị thông tin nhân vật
   */
  public showStatus(): void {
    console.log(`📊 ${this._name} | HP: ${this._hp} | Damage: ${this.damage}`);
  }
}

/**
 * INHERITANCE: Class Hero kế thừa từ Character
 * POLYMORPHISM: Override method attack() với logic riêng
 */
class Hero extends Character {
  // ENCAPSULATION: private - thuộc tính riêng của Hero
  private weapon: string;

  constructor(name: string, hp: number, damage: number, weapon: string) {
    // Gọi constructor của class cha
    super(name, hp, damage);
    this.weapon = weapon;
  }

  // Getter cho weapon
  public getWeapon(): string {
    return this.weapon;
  }

  /**
   * POLYMORPHISM: Hero attack bằng vũ khí
   */
  public attack(target: Character): void {
    console.log(
      `⚔️ Hero ${this.name} vung ${this.weapon} tấn công ${target.name}!`
    );
    target.takeDamage(this.damage);
  }

  /**
   * Kỹ năng đặc biệt của Hero
   */
  public specialAttack(target: Character): void {
    const critDamage = this.damage * 2;
    console.log(
      `🔥 Hero ${this.name} sử dụng chiêu đặc biệt với ${this.weapon}!`
    );
    console.log(`  💥 CRITICAL HIT!`);
    target.takeDamage(critDamage);
  }

  /**
   * ENCAPSULATION: Hồi máu với validation
   * - Kiểm tra điều kiện trước khi thay đổi _hp
   * - Đảm bảo không vượt quá MAX_HP (edge case)
   */
  public heal(amount: number): void {
    const MAX_HP = 100;

    if (this.hp >= MAX_HP) {
      console.log(`💚 ${this.name} đã đầy máu, không cần hồi phục!`);
      return;
    }

    const oldHp = this.hp;
    // Sử dụng setter protected từ class cha
    this.hp = Math.min(this.hp + amount, MAX_HP);

    console.log(
      `💚 ${this.name} hồi ${amount} HP. Máu hiện tại: ${oldHp} → ${this.hp}/${MAX_HP}`
    );
  }

  public override showStatus(): void {
    super.showStatus();
    console.log(`  🗡️ Vũ khí: ${this.weapon}`);
  }
}

/**
 * INHERITANCE: Class Monster kế thừa từ Character
 * POLYMORPHISM: Override method attack() với logic riêng
 */
class Monster extends Character {
  // ENCAPSULATION: private - thuộc tính riêng của Monster
  private monsterType: string;

  constructor(name: string, hp: number, damage: number, monsterType: string) {
    super(name, hp, damage);
    this.monsterType = monsterType;
  }

  public getMonsterType(): string {
    return this.monsterType;
  }

  /**
   * POLYMORPHISM: Monster attack bằng cào cấu
   */
  public attack(target: Character): void {
    console.log(
      `👹 Monster ${this.name} (${this.monsterType}) cào cấu điên cuồng vào ${target.name}!`
    );
    target.takeDamage(this.damage);
  }

  /**
   * Kỹ năng của Monster
   */
  public roar(): void {
    console.log(`🔊 ${this.name} gầm rú đáng sợ! ROAARRR!!!`);
  }

  public override showStatus(): void {
    super.showStatus();
    console.log(`  👾 Loại: ${this.monsterType}`);
  }
}

// ============================================================
// PHẦN 2: BỐI CẢNH QUẢN LÝ (Ore IMC)
// ============================================================

/**
 * ABSTRACTION: Interface định nghĩa "hợp đồng" cho Employee
 * - Liệt kê các thuộc tính và method bắt buộc phải có
 */
interface IEmployee {
  readonly id: string;
  name: string;
  baseSalary: number;

  work(): void;
  calculateSalary(): number;
  calculateBonus(): number;
  showInfo(): void;
}

/**
 * ABSTRACTION: Abstract Class thực hiện một phần Interface
 * - Kết hợp Interface và Abstract Class
 */
abstract class Employee implements IEmployee {
  // ENCAPSULATION: readonly - chỉ đọc, không thể thay đổi sau khi khởi tạo
  public readonly id: string;

  // ENCAPSULATION: protected - có thể truy cập từ class con
  protected _name: string;
  protected _baseSalary: number;

  constructor(id: string, name: string, baseSalary: number) {
    this.id = id;
    this._name = name;
    this._baseSalary = baseSalary;
  }

  // Getters và Setters
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.trim().length === 0) {
      throw new Error("Tên không được để trống!");
    }
    this._name = value;
  }

  public get baseSalary(): number {
    return this._baseSalary;
  }

  public set baseSalary(value: number) {
    if (value < 0) {
      throw new Error("Lương không thể âm!");
    }
    this._baseSalary = value;
  }

  /**
   * ABSTRACTION: Abstract method - class con phải implement
   */
  public abstract work(): void;
  public abstract calculateSalary(): number;
  public abstract calculateBonus(): number;

  /**
   * Method chung cho tất cả Employee
   */
  public showInfo(): void {
    console.log(`📋 ID: ${this.id}`);
    console.log(`   👤 Tên: ${this._name}`);
    console.log(`   💰 Lương cơ bản: ${this.formatCurrency(this._baseSalary)}`);
  }

  /**
   * Helper method để format tiền tệ
   */
  protected formatCurrency(amount: number): string {
    return amount.toLocaleString("vi-VN") + " VNĐ";
  }
}

/**
 * INHERITANCE: Developer kế thừa từ Employee
 */
class Developer extends Employee {
  // ENCAPSULATION: private - thuộc tính riêng
  private programmingLanguage: string;
  private seniorityLevel: "Junior" | "Mid" | "Senior";

  constructor(
    id: string,
    name: string,
    baseSalary: number,
    programmingLanguage: string,
    seniorityLevel: "Junior" | "Mid" | "Senior" = "Junior"
  ) {
    super(id, name, baseSalary);
    this.programmingLanguage = programmingLanguage;
    this.seniorityLevel = seniorityLevel;
  }

  public getProgrammingLanguage(): string {
    return this.programmingLanguage;
  }

  public getSeniorityLevel(): string {
    return this.seniorityLevel;
  }

  /**
   * POLYMORPHISM: Developer có cách work() riêng
   */
  public work(): void {
    console.log(
      `💻 Developer ${this._name} đang code bằng ${this.programmingLanguage}...`
    );
    console.log(
      `   📝 Viết clean code, review PR, fix bugs, và uống cà phê ☕`
    );
  }

  /**
   * POLYMORPHISM: Tính lương theo cấp bậc
   */
  public calculateSalary(): number {
    const multiplier =
      this.seniorityLevel === "Senior"
        ? 2.0
        : this.seniorityLevel === "Mid"
        ? 1.5
        : 1.0;

    return this._baseSalary * multiplier;
  }

  public override showInfo(): void {
    super.showInfo();
    console.log(`   🔧 Ngôn ngữ: ${this.programmingLanguage}`);
    console.log(`   📊 Cấp bậc: ${this.seniorityLevel}`);
    console.log(
      `   💵 Lương thực nhận: ${this.formatCurrency(this.calculateSalary())}`
    );
  }

  /**
   * POLYMORPHISM: Developer có bonus 10% lương cơ bản
   */
  public calculateBonus(): number {
    return this._baseSalary * 0.1;
  }

  /**
   * Method riêng của Developer
   */
  public codeReview(): void {
    console.log(`🔍 ${this._name} đang review code của đồng nghiệp...`);
  }
}

/**
 * INHERITANCE: Marketer kế thừa từ Employee
 */
class Marketer extends Employee {
  // ENCAPSULATION: private - thuộc tính riêng
  private kpi: number; // 0-100%
  private specialty: string;

  constructor(
    id: string,
    name: string,
    baseSalary: number,
    kpi: number,
    specialty: string
  ) {
    super(id, name, baseSalary);
    this.kpi = Math.min(100, Math.max(0, kpi)); // Giới hạn 0-100
    this.specialty = specialty;
  }

  public getKpi(): number {
    return this.kpi;
  }

  public setKpi(value: number): void {
    this.kpi = Math.min(100, Math.max(0, value));
  }

  public getSpecialty(): string {
    return this.specialty;
  }

  /**
   * POLYMORPHISM: Marketer có cách work() riêng
   */
  public work(): void {
    console.log(
      `📢 Marketer ${this._name} đang thực hiện chiến dịch ${this.specialty}...`
    );
    console.log(
      `   📊 Phân tích data, chạy ads, tạo content, và theo dõi KPI 📈`
    );
  }

  /**
   * POLYMORPHISM: Tính lương theo KPI
   */
  public calculateSalary(): number {
    // Bonus = 50% lương cơ bản nếu KPI đạt 100%
    const kpiBonus = (this.kpi / 100) * (this._baseSalary * 0.5);
    return this._baseSalary + kpiBonus;
  }

  public override showInfo(): void {
    super.showInfo();
    console.log(`   🎯 KPI: ${this.kpi}%`);
    console.log(`   📱 Chuyên môn: ${this.specialty}`);
    console.log(
      `   💵 Lương thực nhận: ${this.formatCurrency(this.calculateSalary())}`
    );
  }

  /**
   * POLYMORPHISM: Marketer có bonus 5% lương cơ bản
   */
  public calculateBonus(): number {
    return this._baseSalary * 0.05;
  }

  /**
   * Method riêng của Marketer
   */
  public runCampaign(campaignName: string): void {
    console.log(`🚀 ${this._name} khởi chạy chiến dịch "${campaignName}"!`);
  }
}

// ============================================================
// PHẦN 3: MAIN FUNCTION - MOCK DATA & DEMO
// ============================================================

function main(): void {
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║          🎮 OOP DEMO - TypeScript (Node.js) 🎮             ║");
  console.log("╚════════════════════════════════════════════════════════════╝");
  console.log();

  // ==================== GAME CONTEXT ====================
  console.log("┌────────────────────────────────────────────────────────────┐");
  console.log("│  🎮 BỐI CẢNH GAME (Skrice Studios)                         │");
  console.log("└────────────────────────────────────────────────────────────┘");
  console.log();

  // Tạo Mock Data cho Game
  const hero1 = new Hero("Arthur", 100, 25, "Excalibur");
  const hero2 = new Hero("Luna", 80, 30, "Magic Staff");
  const monster1 = new Monster("Goblin", 50, 10, "Creature");
  const monster2 = new Monster("Dragon", 200, 40, "Boss");

  // Hiển thị thông tin nhân vật
  console.log("📋 DANH SÁCH NHÂN VẬT:");
  console.log("─".repeat(50));
  hero1.showStatus();
  console.log();
  hero2.showStatus();
  console.log();
  monster1.showStatus();
  console.log();
  monster2.showStatus();
  console.log();

  // Demo POLYMORPHISM: Cùng method attack() nhưng hành vi khác nhau
  console.log("⚔️ TRẬN CHIẾN BẮT ĐẦU!");
  console.log("─".repeat(50));

  // Hero tấn công Monster
  hero1.attack(monster1);
  console.log();

  // Monster tấn công Hero
  monster1.attack(hero1);
  console.log();

  // Demo ENCAPSULATION: Heal với validation
  console.log("💊 DEMO ENCAPSULATION - HỒI MÁU:");
  console.log("─".repeat(50));
  hero1.heal(20); // Hồi máu bình thường
  hero1.heal(50); // Hồi máu nhưng bị cap ở MAX_HP
  hero1.heal(10); // Đã đầy máu, không cần hồi
  console.log();

  // Hero sử dụng chiêu đặc biệt
  hero2.specialAttack(monster1);
  console.log();

  // Boss xuất hiện!
  monster2.roar();
  monster2.attack(hero1);
  console.log();

  // Demo POLYMORPHISM với mảng Character
  console.log("🔄 DEMO POLYMORPHISM với Array<Character>:");
  console.log("─".repeat(50));
  const allCharacters: Character[] = [hero1, hero2, monster1, monster2];

  // Gọi attack() trên tất cả - mỗi loại có hành vi khác
  const dummyTarget = new Monster("Training Dummy", 999, 0, "Target");
  for (const char of allCharacters) {
    if (char.isAlive()) {
      char.attack(dummyTarget);
    }
  }

  console.log();

  // ==================== MANAGEMENT CONTEXT ====================
  console.log("┌────────────────────────────────────────────────────────────┐");
  console.log("│  🏢 BỐI CẢNH QUẢN LÝ (Ore IMC)                             │");
  console.log("└────────────────────────────────────────────────────────────┘");
  console.log();

  // Tạo Mock Data cho Management
  const dev1 = new Developer(
    "DEV001",
    "Nguyễn Văn An",
    20000000,
    "TypeScript",
    "Senior"
  );
  const dev2 = new Developer(
    "DEV002",
    "Trần Thị Bình",
    15000000,
    "Python",
    "Mid"
  );
  const dev3 = new Developer(
    "DEV003",
    "Lê Văn Cường",
    10000000,
    "JavaScript",
    "Junior"
  );

  const marketer1 = new Marketer(
    "MKT001",
    "Phạm Thị Dung",
    18000000,
    95,
    "Digital Marketing"
  );
  const marketer2 = new Marketer(
    "MKT002",
    "Hoàng Văn Em",
    15000000,
    70,
    "Content Marketing"
  );

  // Hiển thị thông tin nhân viên
  console.log("📋 DANH SÁCH NHÂN VIÊN:");
  console.log("─".repeat(50));
  dev1.showInfo();
  console.log();
  dev2.showInfo();
  console.log();
  dev3.showInfo();
  console.log();
  marketer1.showInfo();
  console.log();
  marketer2.showInfo();
  console.log();

  // Demo POLYMORPHISM: Cùng method work() nhưng hành vi khác nhau
  console.log("💼 CÔNG VIỆC HÀNG NGÀY:");
  console.log("─".repeat(50));
  dev1.work();
  console.log();
  marketer1.work();
  console.log();

  // Method riêng của từng loại nhân viên
  console.log("🔧 HOẠT ĐỘNG ĐẶC THÙ:");
  console.log("─".repeat(50));
  dev1.codeReview();
  marketer1.runCampaign("Tết 2026 - Sale Up to 50%");
  console.log();

  // Demo POLYMORPHISM với mảng Employee
  console.log("🔄 DEMO POLYMORPHISM với Array<IEmployee>:");
  console.log("─".repeat(50));
  const allEmployees: IEmployee[] = [dev1, dev2, dev3, marketer1, marketer2];

  console.log("📊 BẢNG TỔNG KẾT LƯƠNG:");
  let totalSalary = 0;
  for (const emp of allEmployees) {
    const salary = emp.calculateSalary();
    totalSalary += salary;
    console.log(`   ${emp.name}: ${salary.toLocaleString("vi-VN")} VNĐ`);
  }
  console.log("─".repeat(50));
  console.log(
    `   💰 TỔNG QUỸ LƯƠNG: ${totalSalary.toLocaleString("vi-VN")} VNĐ`
  );

  // Demo POLYMORPHISM: calculateBonus() khác nhau cho mỗi loại nhân viên
  console.log();
  console.log("🎁 DEMO POLYMORPHISM - TÍNH THƯỞNG:");
  console.log("─".repeat(50));
  console.log("   (Developer: 10% lương | Marketer: 5% lương)");
  let totalBonus = 0;
  for (const emp of allEmployees) {
    const bonus = emp.calculateBonus();
    totalBonus += bonus;
    console.log(`   ${emp.name}: +${bonus.toLocaleString("vi-VN")} VNĐ`);
  }
  console.log("─".repeat(50));
  console.log(
    `   🎁 TỔNG TIỀN THƯỞNG: ${totalBonus.toLocaleString("vi-VN")} VNĐ`
  );

  console.log();
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║                    ✅ DEMO HOÀN TẤT!                       ║");
  console.log("╚════════════════════════════════════════════════════════════╝");
}

// Chạy chương trình
main();
