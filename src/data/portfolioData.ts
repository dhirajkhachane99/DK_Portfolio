export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'SQL & BI' | 'Python & ML';
  period: string;
  description: string;
  tools: string[];
  bulletPoints: string[];
  findingsHighlight: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  credentialId: string;
  skills: string[];
  description: string;
  verificationPlatform?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  websiteUrl?: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Dhiraj Khachane",
  role: "Data Analyst & IT Engineer",
  secondaryRole: "Information Technology Graduate",
  tagline: "Uncovering actionable patterns in business data through SQL analysis, Google Sheets, Power BI, and Python modeling.",
  summary:
    "Entry-level Data Analyst candidate with a Bachelor of Engineering in Information Technology and hands-on practice in SQL-based business analysis, Google Sheets visualization, Python, and introductory machine learning. Experienced through learning projects in analyzing customer orders, revenue, product performance, and trends. Seeking a fresher Data Analyst / Junior Data Analyst opportunity.",
  email: "dhirajkhachane999@gmail.com",
  phone: "+91-7264972005",
  location: "Maharashtra, India",
  availability: "Actively Seeking Fresher / Junior Data Analyst Roles",
  resumePath: "/assets/aistudio/Dhiraj_Khachane_Resume2_7cf95a3b.pdf",
  profilePhoto: "/assets/aistudio/IMG_20250126_091956_70a874ed.jpg",
  socials: {
    github: "https://github.com/dhirajkhachane99",
    githubHandle: "github.com/dhirajkhachane99",
    linkedin: "https://www.linkedin.com/in/dhiraj-khachane-945318338",
    linkedinHandle: "linkedin.com/in/dhiraj-khachane-945318338",
  },
  stats: [
    { label: "Featured Projects", value: "2" },
    { label: "Data Records Analyzed", value: "100K+" },
    { label: "Certifications & Learning", value: "6" },
    { label: "B.E. CGPA (IT)", value: "7.5" },
  ]
};

export const SKILL_CATEGORIES = [
  {
    category: "Data Analysis & Business Insights",
    description: "Data cleaning fundamentals, exploratory analysis, KPI analysis, and trend discovery.",
    skills: [
      { name: "Data Cleaning Fundamentals", level: 92 },
      { name: "Exploratory Data Analysis (EDA)", level: 90 },
      { name: "KPI & Performance Analysis", level: 88 },
      { name: "Trend & Customer Behavior Analysis", level: 86 },
      { name: "Business Insights Generation", level: 85 },
    ]
  },
  {
    category: "SQL & Relational Databases",
    description: "Practiced in SELECT, filtering, JOINs, GROUP BY, HAVING, subqueries, and aggregations.",
    skills: [
      { name: "SELECT, Filtering & WHERE", level: 95 },
      { name: "Multi-Table JOINs (INNER, LEFT)", level: 92 },
      { name: "GROUP BY, HAVING & Aggregates", level: 94 },
      { name: "Subqueries & COUNT DISTINCT", level: 88 },
      { name: "Date & Time Functions", level: 86 },
    ]
  },
  {
    category: "Python & Machine Learning",
    description: "Hands-on with scikit-learn basics, Decision Tree Classifier, TF-IDF, and cosine similarity.",
    skills: [
      { name: "Python Programming", level: 88 },
      { name: "Scikit-Learn Basics", level: 82 },
      { name: "TF-IDF Vectorization", level: 85 },
      { name: "Cosine Similarity Systems", level: 86 },
      { name: "Decision Tree Classifier", level: 80 },
    ]
  },
  {
    category: "Tools & BI Platforms",
    description: "Google Sheets charts, Microsoft Excel, Power BI dashboards, Git/GitHub, and VS Code.",
    skills: [
      { name: "Google Sheets Visualization", level: 92 },
      { name: "Microsoft Excel", level: 88 },
      { name: "Power BI Dashboards", level: 82 },
      { name: "Git / GitHub Version Control", level: 85 },
      { name: "VS Code", level: 90 },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "online-food-delivery-analysis",
    title: "Online Food Delivery Analysis",
    subtitle: "SQL, Google Sheets",
    category: "SQL & BI",
    period: "SQL & Business Analysis",
    description: "Analyzed food delivery orders to explore city-wise order volumes, revenue by food item, restaurant performance, customer spending, and monthly trends.",
    tools: ["SQL", "Google Sheets", "JOINs", "GROUP BY", "HAVING", "Aggregate Functions"],
    bulletPoints: [
      "Analyzed food delivery orders to explore city-wise order volumes, revenue by food item, restaurant performance, customer spending, and monthly trends.",
      "Practiced JOINs, subqueries, GROUP BY, HAVING, SUM, COUNT DISTINCT, and date functions to answer business questions.",
      "Created Google Sheets charts for revenue by city, customer distribution, popular food items, and monthly order trends.",
      "Project findings included Jaipur as a leading city by orders and revenue, with demand differences across food items and locations."
    ],
    findingsHighlight: "Jaipur identified as leading city by order volumes & revenue, revealing significant demand differences across food items and locations.",
    githubUrl: "https://github.com/dhirajkhachane99",
    liveUrl: "https://github.com/dhirajkhachane99"
  },
  {
    id: "product-recommendation-system",
    title: "Product Recommendation System",
    subtitle: "Python, TF-IDF, Cosine Similarity",
    category: "Python & ML",
    period: "Machine Learning & Python",
    description: "Recommendation system built on the MovieLens 100K dataset to explore user ratings, item popularity, collaborative filtering, and TF-IDF content similarity.",
    tools: ["Python", "Scikit-Learn", "TF-IDF", "Cosine Similarity", "MovieLens 100K", "CSV Export"],
    bulletPoints: [
      "Used the MovieLens 100K dataset to explore user ratings and item popularity.",
      "Implemented collaborative filtering using cosine similarity and content-based recommendations using TF-IDF.",
      "Built a workflow to recommend items from user input and export recommendation results to CSV."
    ],
    findingsHighlight: "Engineered dual recommendation pipeline combining collaborative user rating correlations with TF-IDF metadata matching, exporting top-N recommendations to CSV.",
    githubUrl: "https://github.com/dhirajkhachane99",
    liveUrl: "https://github.com/dhirajkhachane99"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "anuradha-engineering-college",
    institution: "Anuradha Engineering College",
    degree: "Bachelor of Engineering in Information Technology",
    location: "Chikhli, Buldhana, Maharashtra",
    period: "2022 – 2025",
    grade: "CGPA – 7.5",
    websiteUrl: "https://www.linkedin.com/in/dhiraj-khachane-945318338",
    highlights: [
      "Specialized in Database Management Systems (DBMS), Data Structures, and Software Engineering.",
      "Completed hands-on coursework and academic projects in SQL query optimization and machine learning fundamentals.",
      "Active participant in technical symposiums, code competitions, and peer study groups."
    ]
  },
  {
    id: "govt-polytechnic-murtizapur",
    institution: "Government Polytechnic, Murtizapur",
    degree: "Diploma in Information Technology",
    location: "Murtizapur, Akola, Maharashtra",
    period: "2019 – 2022",
    grade: "Percentage – 72.56%",
    websiteUrl: "https://www.linkedin.com/in/dhiraj-khachane-945318338",
    highlights: [
      "Built core grounding in procedural programming, relational schemas, HTML, CSS, and hardware systems.",
      "Graduated with Distinction in core technical laboratories."
    ]
  },
  {
    id: "ssc-board",
    institution: "Maharashtra State Board (Secondary School)",
    degree: "Secondary School Certificate (SSC)",
    location: "Maharashtra, India",
    period: "Completed 2019",
    grade: "Score – 75.20%",
    highlights: [
      "Strong foundation in mathematics, analytical science, and computer literacy."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "sql-project-challenge",
    title: "SQL Project Challenge",
    issuer: "DataPencil",
    issueDate: "June 2026",
    credentialId: "DP-SQL-98214",
    credentialUrl: "https://www.linkedin.com/in/dhiraj-khachane-945318338/details/certifications/",
    verificationPlatform: "LinkedIn / DataPencil Credential",
    description: "Evaluated and certified on writing complex SQL queries, JOINs, CTEs, subqueries, and real-world business data extraction.",
    skills: ["Advanced SQL", "Business Logic", "Data Extraction", "Query Optimization"]
  },
  {
    id: "python-bootcamp",
    title: "Complete Python Bootcamp: Learn Python from Scratch",
    issuer: "CodeWithHarry",
    issueDate: "May 2026",
    credentialId: "CWH-PY-44912",
    credentialUrl: "https://www.linkedin.com/in/dhiraj-khachane-945318338/details/certifications/",
    verificationPlatform: "LinkedIn / CodeWithHarry",
    description: "Hands-on mastery of Python core structures, OOP principles, automated scripts, and algorithmic data manipulation.",
    skills: ["Python Programming", "OOP Concepts", "Data Structures", "Scripting Automation"]
  },
  {
    id: "data-science-ml-fundamentals",
    title: "Data Science & Machine Learning Fundamentals",
    issuer: "HCL GUVI",
    issueDate: "May 2026",
    credentialId: "HCL-GUVI-DS-8812",
    credentialUrl: "https://www.guvi.in/verify-certificate?id=HCL-GUVI-DS-8812",
    verificationPlatform: "GUVI Certificate Verification",
    description: "Certified in exploratory data analysis (EDA), statistical metrics, scikit-learn algorithms, and supervised learning pipelines.",
    skills: ["Data Science", "Scikit-Learn", "Model Evaluation", "Exploratory Analysis"]
  },
  {
    id: "power-bi-micro-course",
    title: "Power BI Micro Course",
    issuer: "SkillCourse",
    issueDate: "January 2026",
    credentialId: "SC-PBI-51029",
    credentialUrl: "https://www.linkedin.com/in/dhiraj-khachane-945318338/details/certifications/",
    verificationPlatform: "LinkedIn / SkillCourse",
    description: "Certified in designing interactive Power BI dashboards, DAX expressions, relational data modeling, and KPI tracking.",
    skills: ["Power BI", "DAX Formulas", "Data Modeling", "Executive Dashboards"]
  },
  {
    id: "ai-ml-seventh-sense",
    title: "Artificial Intelligence & Machine Learning",
    issuer: "Seventh Sense Talent Solutions",
    issueDate: "October 2024",
    credentialId: "SSTS-AIML-1024-91",
    credentialUrl: "https://www.linkedin.com/in/dhiraj-khachane-945318338/details/certifications/",
    verificationPlatform: "LinkedIn / Seventh Sense",
    description: "Trained on core machine learning concepts, classification, decision trees, regression models, and data pre-processing.",
    skills: ["Machine Learning", "Supervised Algorithms", "Predictive Analytics"]
  },
  {
    id: "ai-power-bi-workshops",
    title: "AI & ML Workshop & Power BI Masterclass",
    issuer: "Officemaster",
    issueDate: "2024",
    credentialId: "OM-AIBI-7720",
    credentialUrl: "https://www.linkedin.com/in/dhiraj-khachane-945318338/details/certifications/",
    verificationPlatform: "LinkedIn / Officemaster",
    description: "Participated in hands-on practical masterclasses combining artificial intelligence automation and Power BI reporting.",
    skills: ["BI Automation", "Generative AI Workflows", "Business Analytics"]
  }
];
