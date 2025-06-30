import { FiCode, FiShoppingBag,FiSmartphone ,FiTarget , FiDatabase, FiGlobe, FiServer } from "react-icons/fi";
// FiTarget FiServer FiCode
export const PROJECTS_DATA = [
  {
    id: 1,
    src: "/images/projects/E-Commerce_Platform.jpg",
    title: "E-Commerce Platform",
    description: "Modern and scalable e-commerce platform for seamless online shopping experiences.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    category: "Web Development",
    icon: FiShoppingBag,
    demoLink: "https://demo.example.com/ecommerce",
    sections: [
      {
        title: "Project Overview",
        description: "We analyzed current e-commerce trends, user expectations, and technological gaps in existing platforms. This informed the creation of a scalable architecture and a customer-centric interface. The project roadmap included user journey mapping, competitor analysis, and defining core features like product discovery, checkout optimization, and mobile responsiveness.",
        images: [
          "/images/projects/Eco1.jpg",
        ]
      },
      {
        title: "Technical Implementation",
        description: "Post-launch, the platform demonstrated increased customer retention, higher conversion rates, and improved operational efficiency. Highlights include a 30% increase in average order value, faster page load times, and high availability (99.9% uptime) during peak traffic.",
        images: [
          "/images/projects/Eco2.jpg",
        ]
      },
      {
        title: "Impact & Results",
        description: "Increased conversion rates by 35% and reduced cart abandonment by 22% through optimized checkout flow.",
        images: [
          "/images/projects/Eco3.jpg",
        ]
      }
    ],
    features: [
      {
        icon:FiCode ,
        title: "Project Overview",
        description: "Strategic planning and market research led to the development of a robust e-commerce solution tailored to both user behavior and business growth."
      },
      {
        icon: FiServer ,
        title: "Project Goals",
        description: "Enhance user experience, streamline operations, and increase sales through intuitive design and powerful backend capabilities."
      },
      {
        icon:FiTarget  ,
        title: "Target Audience",
        description: "Designed for retailers and consumers seeking fast, secure, and enjoyable online shopping with personalized features."
      }
    ]
  },
  {
    id: 2,
    src: "/images/projects/Education_platform.jpg",
    title: "Education Platform",
    description: "Innovative and accessible education platform for enhanced learning experiences.",
    technologies: ["React", "TailwindCSS", "Spring Boot"],
    category: "Web Development",
    icon: FiSmartphone,
    demoLink: "https://demo.example.com/banking",
    sections: [
      {
        title: "Project Overview",
        description: "Our team conducted in-depth research into current educational challenges, identifying barriers to accessibility, engagement, and personalization. We devised a strategic plan to deliver a dynamic platform that adapts to diverse learning styles while meeting institutional requirements. Key milestones were set to guide development from ideation to deployment.",
        images: [
          "/images/projects/Edu1.jpg"
        ]
      },
      {
        title: "Technical Implementation",
        description: "Using modern web technologies and cloud infrastructure, we developed a responsive, user-friendly platform that supports real-time collaboration, multimedia content, and analytics. The development followed agile principles, ensuring iterative progress, early feedback integration, and adaptive feature expansion.",
        images: [
          "/images/projects/Edu2.jpg"
        ]
      },
      {
        title: "Impact & Results",
        description: "The platform has enhanced learning outcomes, boosted student engagement, and reduced administrative burden for educators. Notable achievements include improved course completion rates, increased platform usage, and positive feedback from both learners and instructors.",
        images: [
          "/images/projects/Edu3.jpg"
        ]
      }
    ],
    features: [
      {
        icon:FiCode  ,
        title: "Project Overview",
        description: "Comprehensive analysis and strategic planning to create a user-focused, scalable educational solution."
      },
      {
        icon:FiServer  ,
        title: "Project Goals",
        description: "Defined educational objectives, improved learner outcomes, and seamless digital access to resources and tools."
      },
      {
        icon:FiTarget  ,
        title: "Target Audience",
        description: "Tailored for students, educators, and institutions seeking flexible, effective, and engaging learning experiences."
      }
    ]
  },
  {
    id: 3,
    src: "/images/projects/AI.jpg",
    title: "AI Content Platform",
    description: "Content management system powered by artificial intelligence and machine learning.",
    technologies: ["Python", "TensorFlow", "React"],
    category: "AI Development",
    icon: FiDatabase,
    demoLink: "https://demo.example.com/ai-platform",
    sections: [
      {
        title: "Project Overview",
        description: "We identified inefficiencies in traditional content creation workflows—such as time-consuming drafting, lack of consistency, and limited scalability. Our team conducted extensive research on user pain points and emerging AI technologies to architect a solution that integrates natural language processing (NLP) and machine learning to streamline ideation, creation, and publishing.",
        images: [
          "/images/projects/AI2.jpg"
        ]
      },
      {
        title: "Technical Implementation",
        description: "The platform is built using advanced AI models for language generation and semantic analysis, supported by a microservices architecture for performance and modularity. Key features include real-time AI-assisted writing, automated content optimization, grammar/style enhancements, and multi-user collaboration tools. Agile practices allowed us to release iterative updates and rapidly incorporate user feedback.",
        images: [
          "/images/projects/AI3.jpg"

        ]
      },
      {
        title: "Impact & Results",
        description: "The platform significantly increased productivity and reduced turnaround time for content teams. Key results include a 50% reduction in content creation time, improved consistency and SEO performance, and strong user adoption across marketing and editorial departments.",
        images: [
          "/images/projects/AI4.jpg"
        ]
      }
    ],
    features: [
      {
        icon: FiCode ,
        title: "Project Overview",
        description: "Strategic development of an AI-driven content ecosystem designed to automate workflows and enhance creativity for individuals and teams."
      },
      {
        icon: FiServer ,
        title: "Project Goals",
        description: "Accelerate content production, improve quality through AI assistance, and provide seamless collaboration tools within a secure and scalable environment."
      },
      {
        icon: FiTarget ,
        title: "Target Audience",
        description: "Content creators, marketers, publishers, and enterprises seeking smart solutions for generating, editing, and managing digital content."
      }
    ]
  },
  {
    id: 4,
    src: "/images/projects/VOPA.jpg",
    title: "VOPA Healthy Food",
    description: "Nutrition tracking and meal planning platform with personalized recommendations.",
    technologies: ["Vue.js", "D3.js", "GraphQL"],
    category: "Web Development",
    icon: FiGlobe,
    demoLink: "https://demo.example.com/analytics",
    sections: [
      {
        title: "Project Overview",
        description: "We explored the growing demand for accessible healthy food and identified challenges such as limited personalized options, lack of transparency in ingredients, and poor digital access to local providers. Our strategy focused on delivering a clean, intuitive platform that empowers users to make informed nutritional decisions and discover healthy, sustainable food choices.",
        images: [
          "/images/projects/VOPA1.jpg",
        ]
      },
      {
        title: "Technical Implementation",
        description: "Built with responsive web and mobile frameworks, the platform includes features like personalized meal recommendations, nutritional breakdowns, subscription-based healthy meal plans, and integration with local suppliers. The use of secure APIs and cloud infrastructure ensures fast performance, scalability, and data protection. Agile development cycles allowed for continuous feature enhancement and real-time user feedback loops.",
        images: [
          "/images/projects/VOPA2.jpg",

        ]
      },
      {
        title: "Impact & Results",
        description: "VOPA Healthy Food has increased access to balanced meal options, improved user lifestyle outcomes, and fostered partnerships with local food providers. Notable results include high user retention, positive health feedback from users, and measurable growth in orders for customized healthy meals.",
        images: [
          "/images/projects/VOPA3.jpg",

        ]
      }
    ],
    features: [
      {
        icon:FiCode,
        title: "Project Overview",
        description: "Careful market research and health-focused strategy led to the creation of a digital platform that connects users with nutritious food options tailored to their lifestyle and goals."
      },
      {
        icon:FiServer  ,
        title: "Project Goals",
        description: "Promote healthy eating habits, simplify meal planning, and support local food producers through a user-friendly, scalable, and data-driven solution."
      },
      {
        icon:FiTarget  ,
        title: "Target Audience",
        description: "Health-conscious individuals, fitness enthusiasts, and families looking for convenient, nutritious, and trustworthy food options."
      }
    ]
  }
];