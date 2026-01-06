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

// --- Ecosystem Links (For Footer) ---
export const ecosystemLinks = {
  oreimc: { name: "Ore IMC Agency", url: "https://oreagency.vn/" },
  vietProducer: { name: "Viet Producer", url: "https://vietproducer.com/" },
  studioVietnam: { name: "Studio Vietnam", url: "https://studiovietnam.com/" },
  artcity: { name: "Artcity", url: "https://artcity.vn/" },
  szone: { name: "Szone Game Studio", url: "https://szonestudio.com/" },
  skrice: { name: "Skrice Studio", url: "https://skrice.com/" },
  lumina: { name: "Lumina Academy", url: "https://www.lumina.edu.vn/" },
  igcGroup: { name: "IGC Group", url: "https://igc.vn" },
};

// --- Featured Projects with Case Studies ---
export const featuredProjects = [
  {
    id: "van-lang-skylake",
    title: "Văn Lang SkyLake",
    category: "Bất Động Sản",
    description: "Integrated Marketing Campaign",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Strategy", "Digital", "Production"],
    caseStudy: {
      problem:
        "Văn Lang SkyLake là dự án căn hộ cao cấp tại Hà Nội với vị trí đắc địa nhưng đối mặt với sự cạnh tranh khốc liệt từ các dự án BĐS lân cận. Thương hiệu cần tạo sự khác biệt và tiếp cận đúng tệp khách hàng mục tiêu.",
      solution:
        "Ore IMC triển khai chiến lược IMC tổng thể:\n• Digital Marketing đa kênh (Facebook, Google, Zalo)\n• TVC quảng cáo với storytelling sâu sắc\n• Event ra mắt sản phẩm ấn tượng\n• PR truyền thông đồng bộ trên báo chí",
      result:
        "• Tăng 150% lượng leads trong 2 tháng đầu\n• Sold out 80% căn hộ trong 3 tháng\n• Brand awareness tăng 200% theo khảo sát\n• ROI quảng cáo đạt 5.2x",
    },
  },
  {
    id: "duoc-pham-nibifa",
    title: "Dược phẩm Nibifa",
    category: "TVC Storytelling",
    description: "TVC & Brand Campaign",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["TVC", "Healthcare", "Storytelling"],
    caseStudy: {
      problem:
        "Nibifa là thương hiệu dược phẩm uy tín nhưng gặp khó khăn trong việc kết nối cảm xúc với người tiêu dùng. TVC cũ không tạo được ấn tượng và khác biệt so với đối thủ.",
      solution:
        "Viet Producer thực hiện TVC theo hướng storytelling:\n• Kịch bản cảm xúc lấy cảm hứng từ câu chuyện thực\n• Quay phim chất lượng điện ảnh\n• Âm nhạc và color grading chuyên nghiệp\n• Phát sóng trên VTV và digital platforms",
      result:
        "• TVC đạt 5 triệu views trên YouTube\n• Brand recall tăng 180%\n• Doanh số tăng 45% sau chiến dịch\n• Giải thưởng TVC xuất sắc tại Marketing Awards",
    },
  },
  {
    id: "bia-ha-long-legend",
    title: "Bia Hạ Long Legend",
    category: "FMCG / TVC",
    description: "Launch Campaign",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=600&fit=crop",
    tags: ["FMCG", "TVC", "Launch"],
    caseStudy: {
      problem:
        "Bia Hạ Long Legend là sản phẩm mới ra mắt trong thị trường bia vô cùng cạnh tranh, cần chiến lược launch mạnh mẽ để tạo dấu ấn và giành thị phần từ các thương hiệu lớn.",
      solution:
        "Chiến dịch launch đa kênh:\n• TVC quảng cáo với concept 'Huyền thoại Việt Nam'\n• Sampling campaign tại 500+ điểm bán\n• KOL collaboration với các influencer ẩm thực\n• Digital activation và mini-game viral",
      result:
        "• Đạt top 3 thị phần vùng trong 6 tháng\n• 2 triệu người tiếp cận qua digital\n• Trial rate đạt 35% tại các điểm sampling\n• Brand awareness đạt 60% tại thị trường mục tiêu",
    },
  },
  {
    id: "baekje-galbi",
    title: "Nhà hàng Baekje Galbi",
    category: "F&B / Photography",
    description: "Food Photography & Content",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    tags: ["F&B", "Photography", "Content"],
    caseStudy: {
      problem:
        "Baekje Galbi là nhà hàng Hàn Quốc cao cấp tại Hà Nội, cần bộ ảnh ẩm thực chuyên nghiệp và content marketing để nâng cao hình ảnh thương hiệu và thu hút khách hàng qua social media.",
      solution:
        "Studio Vietnam thực hiện:\n• Chụp ảnh ẩm thực phong cách Hàn Quốc hiện đại\n• Quay video behind-the-scenes đầu bếp\n• Xây dựng content calendar cho Facebook/Instagram\n• Food styling và set design chuyên nghiệp",
      result:
        "• Engagement rate tăng 300% trên social\n• Lượng đặt bàn online tăng 120%\n• UGC content từ khách hàng tăng đáng kể\n• Được feature trên các trang review ẩm thực lớn",
    },
  },
];
