import {
  Target,
  Film,
  Camera,
  Palette,
  Gamepad2,
  Box,
  GraduationCap,
} from "lucide-react";

// ============================================================
// IGC GROUP & ORE IMC - VERIFIED COMPANY DATA
// Source: https://igc.vn & https://oreagency.vn (2026-01-06)
// ============================================================

// --- IGC Group Info ---
export const igcGroup = {
  name: "IGC Group",
  fullName: "Công ty Cổ phần Tập đoàn Truyền thông & Công nghệ IGC",
  vision:
    "The first innovation ecosystem in Vietnam. Converging and developing the Vietnamese innovation generation – Conquer the world.",
  mission:
    "Become a leading communication and technology corporation in Vietnam.",
  coreValues: ["Respect", "Trust", "Create"],
  website: "https://igc.vn",
  navigation: {
    home: "https://igc.vn/",
    about: "https://igc.vn/about/",
    domainsMembers: "https://igc.vn/domains-members/",
    news: "https://igc.vn/news/",
    contact: "https://igc.vn/contact/",
  },
};

// --- Office Addresses (Verified) ---
export const offices = [
  {
    city: "Hà Nội",
    type: "Trụ sở chính",
    address:
      "Tầng 2, Tháp B, Central Point, 219 Trung Kính, P. Yên Hòa, Q. Cầu Giấy, TP. Hà Nội",
    shortAddress: "219 Trung Kính, Cầu Giấy, Hà Nội",
    phone: "+84 947 98 22 99",
  },
  {
    city: "TP. Hồ Chí Minh",
    type: "Chi nhánh",
    address: "27 AB Trần Nhật Duật, Phường Tân Định, Quận 1, TP HCM",
    shortAddress: "27 AB Trần Nhật Duật, Quận 1, TP HCM",
    phone: "091 105 6362",
  },
  {
    city: "Đà Nẵng",
    type: "Chi nhánh",
    address: "17 Đào Duy Anh, P. Thạc Gián, Q. Thanh Khê, TP. Đà Nẵng",
    shortAddress: "17 Đào Duy Anh, Thanh Khê, Đà Nẵng",
    phone: "091 105 6362",
  },
];

// --- Contact Info (Verified) ---
export const contact = {
  igc: {
    phone: "+84 947 98 22 99",
    email: "info@igc.vn",
  },
  ore: {
    phone: "091 105 6362",
    email: "ceo@oreagency.vn",
  },
};

// --- Social Media Links (Verified) ---
export const socialLinks = {
  facebook: "https://www.facebook.com/ore.imcmkt.agency",
  youtube: "https://www.youtube.com/@ore.imcmkt.agency",
  linkedin: "https://www.linkedin.com/company/ore-imc-marketing-agency/",
};

// --- Brand Assets ---
export const brandAssets = {
  logo: "https://oreagency.vn/public/upload/2.png",
  favicon: "https://oreagency.vn/public/upload/24.png",
};

// --- Partner/Client Logos (Verified) ---
export const partnerLogos = [
  "https://oreagency.vn/public/upload/1_1.png",
  "https://oreagency.vn/public/upload/47-logo-CVI.png",
  "https://oreagency.vn/public/upload/1557363485_logotulap-01.w-240.h-240.png",
  "https://oreagency.vn/public/upload/An_Khanh_Ecomony_Logo.png",
  "https://oreagency.vn/public/upload/Hawee-1.png",
  "https://oreagency.vn/public/upload/LOGO-gold-coast-vung-tau.png",
  "https://oreagency.vn/public/upload/Logo-Vinhomes.jpg",
  "https://oreagency.vn/public/upload/LogoCityrise_1-1.png",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%201.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%202.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%203.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%204.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%205.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%206.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%207.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%209.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%2010.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%2011.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%2012.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%2013.jpg",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%2017.png",
  "https://oreagency.vn/public/upload/T%E1%BB%B1%20l%E1%BA%ADp%2021.jpg",
  "https://oreagency.vn/public/upload/Untitled%20design%20(1)_1.png",
  "https://oreagency.vn/public/upload/Untitled%20design%20(4).png",
  "https://oreagency.vn/public/upload/ab2348e8-15d4-4e0b-8e85-d572d3d5ea87.jpg",
  "https://oreagency.vn/public/upload/avatar1695871507.png",
  "https://oreagency.vn/public/upload/images.png",
  "https://oreagency.vn/public/upload/images_1.png",
  "https://oreagency.vn/public/upload/images_2.png",
  "https://oreagency.vn/public/upload/logo-1022x1024.jpg",
  "https://oreagency.vn/public/upload/logo-danko-riverside.png",
  "https://oreagency.vn/public/upload/logo-hai-phat-land.png",
  "https://oreagency.vn/public/upload/logo_2.png",
  "https://oreagency.vn/public/upload/logo_dahop.png",
  "https://oreagency.vn/public/upload/logo_tuyendung.png",
  "https://oreagency.vn/public/upload/vicostone.png",
  "https://oreagency.vn/public/upload/z6603316882986_c756cd6d38b34e9b7863446a8ea8b71b.jpg",
  "https://oreagency.vn/public/upload/z6603316896148_7773e444f114355e6e1ca12b6e4cce19.jpg",
];
export const ecosystemMembers = [
  {
    name: "Ore IMC Agency",
    tagline: "Integrated Marketing Communication",
    description:
      "Tư vấn chiến lược Marketing tổng thể, xây dựng định vị thương hiệu và kế hoạch truyền thông đa kênh.",
    services: [
      "Brand Strategy",
      "Digital Marketing",
      "Media Planning",
      "Performance Marketing",
    ],
    icon: Target,
    url: "https://www.oreagency.vn/",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    name: "Viet Producer",
    tagline: "Film Production",
    description:
      "Sản xuất TVC, Phim doanh nghiệp, Viral Video với đội ngũ đạo diễn và kỹ thuật hàng đầu.",
    services: [
      "TVC Production",
      "Corporate Films",
      "Viral Content",
      "Motion Graphics",
    ],
    icon: Film,
    url: "https://vietproducer.com/",
    gradient: "from-gold-light/20 to-gold-dark/5",
  },
  {
    name: "Studio Vietnam",
    tagline: "Commercial Photography",
    description:
      "Nhiếp ảnh thương mại chuyên nghiệp: Sản phẩm, Ẩm thực, Profile doanh nghiệp và Lifestyle.",
    services: [
      "Product Photography",
      "Food Photography",
      "Profile Shooting",
      "E-commerce Content",
    ],
    icon: Camera,
    url: "https://studiovietnam.com/",
    gradient: "from-cream/10 to-transparent",
  },
  {
    name: "Artcity",
    tagline: "Branding Design",
    description:
      "Xây dựng bộ nhận diện thương hiệu độc đáo, thiết kế sáng tạo gắn liền với chiến lược rõ ràng.",
    services: [
      "Brand Identity",
      "Packaging Design",
      "Visual Design",
      "Print Materials",
    ],
    icon: Palette,
    url: "https://artcity.vn/",
    gradient: "from-primary/15 to-gold-light/5",
  },
  {
    name: "Szone Game Studio",
    tagline: "Game Development",
    description:
      "Ra mắt NFT games với cốt truyện độc đáo, chân thực trong từng chi tiết hội thoại và đặc tính nhân vật.",
    services: ["NFT Games", "Game Design", "Storytelling", "E-sports"],
    icon: Gamepad2,
    url: "https://szonestudio.com/",
    gradient: "from-gold-dark/15 to-primary/5",
  },
  {
    name: "Skrice Studio",
    tagline: "3D Animation & Virtual Characters",
    description:
      "Dẫn đầu ngành về chất lượng nhân vật ảo, sáng tạo trong xây dựng môi trường và hoạt hình 3D.",
    services: [
      "3D Animation",
      "Virtual Characters",
      "Environment Design",
      "Motion Capture",
    ],
    icon: Box,
    url: "https://skrice.com/",
    gradient: "from-cream/15 to-gold-light/5",
  },
  {
    name: "Lumina Academy",
    tagline: "Education (3D, Tech, AI)",
    description:
      'Đào tạo thiết kế 3D, công nghệ và AI với tầm nhìn "Đưa nền giáo dục 3D châu Âu đến Việt Nam".',
    services: [
      "3D Design Training",
      "Technology Courses",
      "AI Education",
      "Professional Certification",
    ],
    icon: GraduationCap,
    url: "https://www.lumina.edu.vn/",
    gradient: "from-primary/10 to-cream/5",
  },
];

// --- Leadership Team (4 Verified) ---
export const leadershipTeam = [
  {
    name: "Mrs. Hiền Đoàn",
    role: "Chief Executive Officer",
    description:
      "Hơn 15 năm kinh nghiệm trong lĩnh vực Marketing & Truyền thông. Định hướng chiến lược và phát triển toàn diện hệ sinh thái Ore.",
    profileUrl: "https://oreagency.vn/mrs-hien-doan-342527",
    image: "https://oreagency.vn/public/upload/image_4.jpg",
  },
  {
    name: "Mrs. Vân Anh Vũ",
    role: "Strategy Manager",
    description:
      "Chuyên gia tư vấn chiến lược thương hiệu với background từ các tập đoàn đa quốc gia. Dẫn dắt đội ngũ Planner xuất sắc.",
    profileUrl: "https://oreagency.vn/mrs-van-anh-342526",
    image: "https://oreagency.vn/public/upload/FY8A3719.jpg",
  },
  {
    name: "Mrs. Tiên Nguyễn",
    role: "Creative Director",
    description:
      "Đạo diễn sáng tạo với hơn 10 năm kinh nghiệm trong Production. Đảm bảo chất lượng sáng tạo của mọi dự án.",
    profileUrl: "https://oreagency.vn/mrs-tien-nguyen-342525",
    image: "https://oreagency.vn/public/upload/oreagency-02.png",
  },
  {
    name: "Mrs. Hường Nguyễn",
    role: "Operations Manager",
    description:
      "Quản lý vận hành và điều phối dự án. Đảm bảo quy trình chặt chẽ và tiến độ chuẩn xác cho mọi chiến dịch.",
    profileUrl: "https://oreagency.vn/mrs-huong-342524",
    image: "https://oreagency.vn/public/upload/oreagency-18.png",
  },
];

// --- Ore Agency Navigation (Verified) ---
export const oreNavigation = {
  home: "https://oreagency.vn/",
  marketing: "https://oreagency.vn/marketing",
  graphicsDesign: "https://oreagency.vn/graphics-design",
  filmProduction: "https://oreagency.vn/film-production",
  photography: "https://oreagency.vn/photography",
  projects: "https://oreagency.vn/projects-25232",
  contact: "https://oreagency.vn/lien-he",
  blogs: "https://oreagency.vn/blogs-252331",
};
