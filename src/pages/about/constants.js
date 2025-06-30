import { COLORS } from "../../constants/colors";

export const OUR_COMPANY = {
  title: "About Our Company",
  subtitle:
    "We design and develop outstanding Digital Products and digital-first Brands.",
  description:
    "Platea vehicula rutrum curae magna taciti acut malesuada inceptos phasellus massa, eget ultrices tempor lacinia dictumst tincidunt leo mollis luctus varius gravida eleifend cursus litora consequat...",
  icon1: " Professional Creative Team Members",
  icon2: "Provide Market Standard Service to Client’s",
};

export const TEAM_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Team collaboration",
    position: { top: 0, left: "" },
    size: { width: "100%", height: "auto" }, // optional if handled in className
    delay: 0,
    className: "animate-float w-full max-w-[440px] h-auto", // responsive image
  },

  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Business meeting",
    position: { top: "25%", right: "5%" },
    size: { width: 340, height: 440 },
    delay: 0.2,
    className: `animate-float-delay-1`,
    style: {
      borderTop: `6px solid #00F5CC`,
      borderLeft: `6px solid ${COLORS.primary}`,
    },
  },
];

export const NAVIGATION_BUTTONS = [
  {
    id: 1,
    text: "View Services",
    to: "/services",
    className: "bg-[#1E293B] hover:bg-[#334155]",
  },
  {
    id: 2,
    text: "Make A Reservation",
    to: "/contact",
    className: "bg-[#4F46E5] hover:bg-[#4338CA]",
  },
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Client Consultation",
    description:
      "Autem vel eum repreh enderit eu in ea velit esse quame nihil molestiae",
  },
  {
    id: 2,
    title: "Research and Analysis",
    description:
      "Autem vel eum repreh enderit eu in ea velit esse quame nihil molestiae",
  },
  {
    id: 3,
    title: "Project Revisions Launch",
    description:
      "Autem vel eum repreh enderit eu in ea velit esse quame nihil molestiae",
  },
];

export const PARTNERS = [
  {
    name: "Google",
    logo: "/partners/google.svg",
  },
  {
    name: "Amazon",
    logo: "/partners/amazon.svg",
  },
  {
    name: "Microsoft",
    logo: "/partners/microsoft.svg",
  },
  {
    name: "Apple",
    logo: "/partners/apple.svg",
  },
  {
    name: "Meta",
    logo: "/partners/meta.svg",
  },
  {
    name: "IBM",
    logo: "/partners/ibm.svg",
  },
  {
    name: "Oracle",
    logo: "/partners/oracle.svg",
  },
  {
    name: "Intel",
    logo: "/partners/intel.svg",
  },
];

const Image_1 = "/images/about-1.jpg";
const Image_2 = "/images/about-2.jpg";
const Image_3 = "/images/about-3.jpg";

export const writers = [
  {
    id: 1,
    name: "Youssef Al Alawi", 
    role: "Director of Digital",
    description:
      "Their attention to detail in UI/UX design made our platform intuitive for customers. The project was completed 2 weeks ahead of schedule, with flawless performance across all devices.",
    image: Image_1,
    active: true,
  },
  {
    id: 2,
    name: "Fatima Zahra Bennani" ,// 
    role: "WRICTO, Finova Inc.",
    description:
      "Their developers solved complex backend challenges we’d struggled with for months. The scalable architecture they built now supports our rapid growth without hiccups.",
    image: Image_2,
    active: true,
  },
  {
    id: 3,
    name: "Soufiane El Marini", // 
    role: "CEO, TechStart Solutions",
    description:
      "From the first consultation to final deployment, their team demonstrated exceptional technical expertise. Our app’s user engagement increased by 40% post-launch, and their ongoing support has been invaluable.",
    image: Image_3,
    active: true,
  },
];


export const teamMembers = [
  {
    name: "Charlotte Amitina",
    role: "UI/UX DESIGNER",
    image: "/images/about-1.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#",
      behance: "#",
    },
  },
  {
    name: "William Edward",
    role: "PROJECT MANAGER",
    image: "/images/about-3.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Hannah Chloe",
    role: "PRODUCT DESIGNER",
    image: "/images/about-2.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#",
    },
  },
];