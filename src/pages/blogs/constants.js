import { FiCode, FiTrendingUp, FiUsers, FiLayers, FiMonitor, FiShield ,FiBriefcase  } from "react-icons/fi";

export const BLOG_CATEGORIES = [
  { id: "all", label: "All Posts" },
  { id: "ourCompany", label: "Our Company", icon: FiBriefcase  },
  { id: "design", label: "Design", icon: FiLayers },
  { id: "development", label: "Development", icon: FiCode },
  { id: "business", label: "Business", icon: FiTrendingUp },
  { id: "technology", label: "Technology", icon: FiMonitor },
  { id: "security", label: "Security", icon: FiShield },
  { id: "ux", label: "User Experience", icon: FiUsers }
];

export const FEATURED_POSTS = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge trends shaping the future of web design, from AI-driven interfaces to immersive experiences.",
    content: `
      <p>The web design landscape is constantly evolving, and 2024 promises to bring exciting innovations that will reshape how we create and experience digital interfaces. In this comprehensive guide, we'll explore the key trends that are set to dominate the industry.</p>

      <h2>1. AI-Driven Design Systems</h2>
      <p>Artificial Intelligence is revolutionizing how we approach web design. From automated layout suggestions to intelligent color palette generation, AI tools are becoming indispensable in the designer's toolkit.</p>

      <h2>2. Immersive Experiences</h2>
      <p>Virtual and augmented reality are no longer just gaming concepts. Web designers are incorporating these technologies to create deeply engaging website experiences that blur the line between digital and physical.</p>

      <h2>3. Sustainable Web Design</h2>
      <p>As environmental consciousness grows, web designers are focusing on creating eco-friendly websites that minimize energy consumption while maintaining high performance and visual appeal.</p>
    `,
    image: "/images/blogs/blog-1.webp",
    category: "design",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/team/sarah.webp",
      role: "Lead Designer"
    },
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Design Trends", "Web Design", "UI/UX"]
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices",
    excerpt: "Learn how to architect and implement scalable applications using microservices architecture and modern tools.",
    content: `
      <p>Microservices architecture has become the go-to approach for building scalable, maintainable applications. This article explores best practices and real-world implementation strategies.</p>

      <h2>Understanding Microservices</h2>
      <p>Microservices are an architectural style that structures an application as a collection of small autonomous services, modeled around a business domain.</p>

      <h2>Key Benefits</h2>
      <ul>
        <li>Improved scalability</li>
        <li>Better fault isolation</li>
        <li>Easier deployment</li>
        <li>Technology flexibility</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>We'll explore practical approaches to implementing microservices, including service discovery, API gateways, and containerization.</p>
    `,
    image: "/images/blogs/blog-2.webp",
    category: "development",
    author: {
      name: "Michael Chen",
      avatar: "/images/team/michael.webp",
      role: "Senior Developer"
    },
    date: "March 12, 2024",
    readTime: "8 min read",
    tags: ["Microservices", "Architecture", "Scalability"]
  }
];

export const BLOG_POSTS = [
  {
    id: 3,
    title: "CosmoMedia – Digital Solutions Agency in Casablanca",
    excerpt: "CosmoMedia delivers modern, user-centric web and mobile solutions for businesses in Morocco and beyond. Based in Casablanca, the agency combines creativity and technical expertise to create impactful digital experiences.",
    content: `
      <p>CosmoMedia is a digital agency based in Casablanca, Morocco, specializing in web and mobile development. Their services encompass the design and development of websites and mobile applications, aiming to provide tailored digital solutions to meet diverse client needs. With a focus on innovation and user experience, CosmoMedia strives to deliver high-quality digital products that enhance online presence and functionality.</p>


    `,
    image: "/images/blogs/cosmomedia.jpg",
    category: "ourCompany",
    author: {
      name: "Najib EL Mechmachi",
      avatar: "/images/team/najib.webp",
      role: "CosmoMedia "
    },
    date: "May 03, 2025",
    readTime: "6 min read",
    tags: ["UX Design", "Conversion", "User Research"]
  },
  {
    id: 4,
    title: "Mastering User Experience: A Guide to Better Conversions",
    excerpt: "Discover proven strategies and techniques to enhance user experience and drive better conversion rates.",
    content: `
      <p>User experience (UX) design is crucial for the success of any digital product. This guide explores practical strategies to improve UX and boost conversions.</p>

      <h2>Understanding User Behavior</h2>
      <p>Learn how to analyze user behavior and use data-driven insights to make informed design decisions.</p>

      <h2>Conversion Optimization</h2>
      <p>Explore proven techniques to optimize your conversion funnel and reduce user friction points.</p>

      <h2>Testing and Iteration</h2>
      <p>Discover the importance of continuous testing and iteration in UX design.</p>
    `,
    image: "/images/blogs/UX.jpg",
    category: "ux",
    author: {
      name: "Youssef Salih",
      avatar: "/images/team/youssef.webp",
      role: "UX Researcher"
    },
    date: "March 10, 2024",
    readTime: "6 min read",
    tags: ["UX Design", "Conversion", "User Research"]
  },
  {
    id: 5,
    title: "Securing Your Web Applications: Best Practices",
    excerpt: "Learn essential security practices to protect your web applications from common vulnerabilities and threats.",
    content: `
      <p>Web application security is more important than ever. This guide covers essential practices to protect your applications from various threats.</p>

      <h2>Common Vulnerabilities</h2>
      <p>Understanding and preventing common security vulnerabilities in web applications.</p>

      <h2>Implementation Guide</h2>
      <p>Step-by-step guide to implementing security best practices in your applications.</p>

      <h2>Security Tools</h2>
      <p>Overview of essential security tools and how to use them effectively.</p>
    `,
    image: "/images/blogs/Securing.jpg",
    category: "security",
    author: {
      name: "Imad Jamoussi",
      avatar: "/images/team/imad.webp",
      role: "Security Expert"
    },
    date: "May 01, 2025",
    readTime: "7 min read",
    tags: ["Security", "Web Development", "Best Practices"]
  },
  {
    id: 6,
    title: "The Impact of AI on Modern Business Operations",
    excerpt: "Explore how artificial intelligence is transforming business operations and creating new opportunities.",
    content: `
      <p>Artificial Intelligence is revolutionizing how businesses operate. This article explores the practical applications and benefits of AI in modern business.</p>

      <h2>AI in Business</h2>
      <p>Understanding how AI is transforming various aspects of business operations.</p>

      <h2>Implementation Strategies</h2>
      <p>Practical strategies for implementing AI solutions in your business.</p>

      <h2>Future Trends</h2>
      <p>Exploring upcoming trends in AI and their potential impact on business.</p>
    `,
    image: "/images/blogs/impact.jpg",
    category: "business",
    author: {
      name: "Najib EL Mechmachi",
      avatar: "/images/team/najib.webp",
      role: "Business Analyst"
    },
    date: "May 01, 2025",
    readTime: "6 min read",
    tags: ["AI", "Business", "Innovation"]
  },
  {
    id: 7,
    title: "Modern Frontend Development with React and TypeScript",
    excerpt: "A comprehensive guide to building robust frontend applications using React and TypeScript.",
    content: `
      <p>React and TypeScript have become the go-to combination for building modern frontend applications. This guide explores best practices and advanced techniques.</p>

      <h2>TypeScript Fundamentals</h2>
      <p>Understanding TypeScript's key features and how they improve React development.</p>

      <h2>React Best Practices</h2>
      <p>Exploring modern React patterns and best practices for scalable applications.</p>

      <h2>Advanced Techniques</h2>
      <p>Deep dive into advanced React and TypeScript techniques for complex applications.</p>
    `,
    image: "/images/blogs/Modern.jpg",
    category: "development",
    author: {
      name: "Imad Jamoussi",
      avatar: "/images/team/imad.webp",
      role: "Frontend Developer"
    },
    date: "May 01, 2025",
    readTime: "10 min read",
    tags: ["React", "TypeScript", "Frontend"]
  }
];
