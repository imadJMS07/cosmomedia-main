import { FiMonitor, FiSmartphone, FiShoppingBag, FiPieChart, FiTrendingUp, FiLayers } from "react-icons/fi";

export const SERVICES = [
  {
    id: 1,
    title: "Web Development",
    icon: FiMonitor,
    description: "Create stunning, responsive websites that drive results",
    content: {
      overview: "We craft modern, high-performance websites that engage your audience and drive conversions. Our web development solutions are tailored to your unique needs.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "Website Maintenance",
        "Performance Optimization",
        "SEO Integration"
      ],
      technologies: ["React", "Next.js", "Node.js", "WordPress", "WooCommerce"],
      image: "/images/services/web-dev.webp"
    }
  },
  {
    id: 2,
    title: "Mobile Development",
    icon: FiSmartphone,
    description: "Build powerful mobile apps for iOS and Android",
    content: {
      overview: "Transform your ideas into powerful mobile applications that users love. We develop native and cross-platform apps that deliver exceptional experiences.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Mobile UI/UX Design",
        "App Maintenance"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      image: "/images/services/Mobile Development.jpg"
    }
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    icon: FiShoppingBag,
    description: "Create powerful online stores that drive sales",
    content: {
      overview: "Build and scale your online business with our comprehensive e-commerce solutions. We help you create seamless shopping experiences that convert.",
      features: [
        "Custom E-commerce Development",
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Inventory Management",
        "Order Processing",
        "Analytics Integration"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
      image: "/images/services/E-commerce Solutions.jpg"
    }
  },
  {
    id: 4,
    title: "Digital Marketing",
    icon: FiPieChart,
    description: "Grow your online presence and reach more customers",
    content: {
      overview: "Drive growth with data-driven digital marketing strategies. We help you reach your target audience and achieve measurable results.",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Analytics & Reporting"
      ],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp"],
      image: "/images/services/Digital Marketing.jpg"
    }
  },
  {
    id: 5,
    title: "Business Analytics",
    icon: FiTrendingUp,
    description: "Make data-driven decisions for your business",
    content: {
      overview: "Transform your data into actionable insights. Our analytics solutions help you understand your business better and make informed decisions.",
      features: [
        "Data Analysis",
        "Business Intelligence",
        "Performance Tracking",
        "Custom Reporting",
        "Predictive Analytics",
        "Data Visualization"
      ],
      technologies: ["Tableau", "Power BI", "Python", "R", "SQL"],
      image: "/images/services/analytics.jpg"
    }
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: FiLayers,
    description: "Create beautiful, user-friendly interfaces",
    content: {
      overview: "Design intuitive and engaging user experiences that delight your customers. We combine aesthetics with functionality to create memorable designs.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems",
        "Mobile App Design",
        "Website Design"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      image: "/images/services/ui-ux.jpg"
    }
  }
]; 