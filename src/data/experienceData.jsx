import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import wpbrigade from "../assets/wpbrigade.jpg";
import wsolutionz from "../assets/wsolutionz.jpg";
export const experienceData = [
    {
        id: "wpbrigade-junior",
        title: "Junior Software Engineer",
        company: "WPBrigade",
        type: "Full-time",
        startDate: "2026-01-01",
        endDate: "Present",
        location: "Sialkot, Punjab, Pakistan",
        locationType: "On-site",
        shortDescription: "Product Team member working on LoginPress, Analytify, and Simple Social Buttons, driving the transition of WordPress products to React.",
        detailedDescription: `
Role Overview:
As a Junior Software Engineer in the Product Team, I contribute to the development and enhancement of industry-leading WordPress plugins used by thousands of websites globally. My core focus is on modernizing our plugin ecosystem by integrating React.js into traditional WordPress environments.

Key Contributions:
• Product Development: Actively working on flagship products including LoginPress (Custom Login Page Customizer), Analytify (Google Analytics Dashboard), and Simple Social Buttons (SSB).
• Modernization Initiative: Spearheading the migration of legacy interfaces to modern, component-based architectures using React.js. This initiative aligns maintaining our products with the evolving WordPress ecosystem (Gutenberg/Block Editor).
• Feature Implementation: Developing interactive UI components and optimizing frontend performance to ensure seamless user experiences.
• Collaboration: Working closely with senior engineers to implement best practices in code quality, scalability, and maintainability.
    `,
        icon: () => <img src={wpbrigade} alt="WPBrigade" className="w-8 h-8 rounded-full" />,
        color: "blue"
    },
    {
        id: "wpbrigade-intern",
        title: "Software Engineer Intern",
        company: "WPBrigade",
        type: "Internship",
        startDate: "2025-10-01",
        endDate: "2026-01-01",
        location: "Sialkot, Punjab, Pakistan",
        locationType: "On-site",
        shortDescription: "Intensive 3-month internship focused on mastering WordPress core and modern frontend technologies.",
        detailedDescription: `
Role Overview:
As a Software Engineer Intern in the Product Team, I contribute to the development and enhancement of industry-leading WordPress plugins used by thousands of websites globally. My core focus is on modernizing our plugin ecosystem by integrating React.js into traditional WordPress environments.

Key Contributions:
• Product Development: Actively working on flagship products including LoginPress (Custom Login Page Customizer), Analytify (Google Analytics Dashboard), and Simple Social Buttons (SSB).
• Modernization Initiative: Spearheading the migration of legacy interfaces to modern, component-based architectures using React.js. This initiative aligns maintaining our products with the evolving WordPress ecosystem (Gutenberg/Block Editor).
• Feature Implementation: Developing interactive UI components and optimizing frontend performance to ensure seamless user experiences.
• Collaboration: Working closely with senior engineers to implement best practices in code quality, scalability, and maintainability.
    `,
        icon: () => <img src={wpbrigade} alt="WPBrigade" className="w-8 h-8 rounded-full" />,
        color: "blue"
    },
    {
        id: "university-sialkot",
        title: "Bachelor of Computer Science",
        company: "University of Sialkot",
        startDate: "2021-09-01",
        endDate: "2025-06-30",
        location: "Sialkot, Punjab, Pakistan",
        shortDescription: "4-Year Degree with a strong focus on self-directed learning. Developed full-stack projects including Traveler, CraftKit, and Foodie.",
        detailedDescription: `
Graduated with a Bachelor of Computer Science, combining academic foundations with extensive self-directed practical learning.

Key Projects (Self-Learning & FYP):
• Traveler (Full Stack Social Platform): A social networking platform for travel enthusiasts featuring route management, travel stories, and gamification. Built with MERN Stack (MongoDB, Express, React, Node.js).
• CraftKit (Resume Builder): A Next.js based application allowing users to build professional resumes with customizable templates.
• Foodie (Food Delivery App): A comprehensive food ordering system with separate frontend and backend services.

My time at university was defined by a passion for building real-world applications and exploring modern web technologies beyond the classroom curriculum.
    `,
        icon: FaGraduationCap,
        color: "green"
    },
    {
        id: "wsolutionz",
        title: "WORDPRESS DESIGNER",
        company: "WSolutionz",
        location: "Kotli Loharan West Sialkot, Punjab, Pakistan",
        startDate: "2021-06-01",
        endDate: "2022-3-01",
        shortDescription: "Delivered professional WordPress solutions for international and local clients, specifically in the Export sector.",
        detailedDescription: `
Worked as a WordPress Designer during my academic years, delivering tailored web solutions for a diverse client base.

• Client Portfolio: Specialized in creating professional digital presences for Exporter Companies in Pakistan, ensuring their products were showcased effectively to international markets.
• Custom Development: Designed and developed premium custom themes and layouts, customizing typography and branding to meet specific client requirements.
• Optimization: Configured and optimized plugins for SEO and Performance, ensuring high search rankings and fast load times.
• Client Management: Collaborated directly with clients to gather requirements, translating business needs into functional, responsive websites.
    `,
        icon: () => <img src={wsolutionz} alt="WSolutionz" className="w-8 h-8 rounded-full" />,
        color: "purple"
    }
];
