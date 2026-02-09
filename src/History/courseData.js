const courseData = [
  {
    id: 1,
    slug: "ai-for-everyone",
    title: "AI for Everyone",
    category: "AI & Machine Learning",
    description:
      "Learn the fundamentals of Artificial Intelligence and how it is used in real-world applications.",
    duration: "6 Weeks",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",

    overview: {
      about: [
        "This course introduces Artificial Intelligence in a simple and non-technical way.",
        "You will learn how AI is transforming industries and everyday life.",
      ], 
      learn: [
        "Understand basic AI concepts",
        "Identify real-world AI applications",
        "Learn ethical AI principles",
        "Explore AI career opportunities",
      ],
      requirements: [
        "No prior AI experience required",
        "Basic computer skills",
      ],
      forWho: ["Beginners", "Students", "Non-technical professionals"],
    },

    curriculum: [
      {
        section: "Week 1",
        title: "Introduction to AI",
        lessons: [
          {
            id: 1,
            slug: "what-is-ai",
            title: "What is AI?",
            content:
              "Artificial Intelligence (AI) is the simulation of human intelligence in machines.",
          },
          {
            id: 2,
            slug: "history-of-ai",
            title: "History of AI",
            content: `
## What is Artificial Intelligence?

Artificial Intelligence (**AI**) is the simulation of human intelligence in machines.

### In this lesson, you will learn:
- What AI means
- Where AI is used
- Why AI is important

### Example
\`\`\`js
const ai = "Machine Intelligence";
console.log(ai);
\`\`\`
`,
          },
        ],
      },
    ],

    instructor: {
      name: "Dr. John Smith",
      title: "AI Specialist",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "10+ years of experience in Artificial Intelligence research and teaching.",
    },

    reviews: { total: 1200, average: 4.9 },
  },

  {
    id: 2,
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    category: "Web Development",
    description:
      "Build modern, responsive websites using HTML, CSS, JavaScript, and backend technologies.",
    duration: "8 Weeks",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",

    overview: {
      about: [
        "Learn how to build complete web applications from frontend to backend.",
      ],
      learn: [
        "HTML, CSS, JavaScript",
        "Frontend frameworks",
        "Backend APIs",
        "Databases",
      ],
      requirements: ["Basic computer skills"],
      forWho: ["Beginners", "Aspiring web developers"],
    },

    curriculum: [
      {
        section: "Week 1–2",
        title: "Frontend Basics",
        lessons: [
          {
            id: 1,
            slug: "html-basics",
            title: "HTML Basics",
            content: "Learn the structure of web pages using HTML.",
          },
          {
            id: 2,
            slug: "css-basics",
            title: "CSS Basics",
            content: "Style websites using CSS.",
          },
          {
            id: 3,
            slug: "javascript-basics",
            title: "JavaScript Basics",
            content: "Learn programming fundamentals with JavaScript.",
          },
        ],
      },
      {
        section: "Week 3–4",
        title: "Advanced Frontend",
        lessons: [
          {
            id: 4,
            slug: "responsive-design",
            title: "Responsive Design",
            content: "Build layouts that work on all screen sizes.",
          },
          {
            id: 5,
            slug: "react-basics",
            title: "React Basics",
            content: "Learn component-based frontend development.",
          },
        ],
      },
    ],

    instructor: {
      name: "Sarah Johnson",
      title: "Senior Web Developer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Full-stack developer with 8+ years of industry experience.",
    },

    reviews: { total: 980, average: 4.8 },
  },

  {
    id: 3,
    slug: "cybersecurity-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    category: "Cybersecurity",
    description:
      "Protect systems and networks by learning ethical hacking and cyber defense techniques.",
    duration: "10 Weeks",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60",

    overview: {
      about: [
        "Learn how hackers think and how to defend systems against attacks.",
      ],
      learn: [
        "Network security",
        "Ethical hacking tools",
        "Cyber defense techniques",
      ],
      requirements: ["Basic IT knowledge"],
      forWho: ["IT students", "Security enthusiasts"],
    },

    curriculum: [
      {
        section: "Week 1",
        title: "Cybersecurity Fundamentals",
        lessons: [
          {
            id: 1,
            slug: "security-threats",
            title: "Security Threats",
            content: "Understand common cybersecurity threats.",
          },
          {
            id: 2,
            slug: "vulnerabilities",
            title: "Vulnerabilities",
            content: "Learn how vulnerabilities are exploited.",
          },
        ],
      },
    ],

    instructor: {
      name: "Michael Brown",
      title: "Cybersecurity Analyst",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      bio: "Certified ethical hacker with 12 years of experience.",
    },

    reviews: { total: 760, average: 4.7 },
  },

  {
    id: 4,
    slug: "flutter-mobile-development",
    title: "Mobile App Development with Flutter",
    category: "Mobile Development",
    description:
      "Create cross-platform mobile applications for Android and iOS using Flutter.",
    duration: "5 Weeks",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60",

    overview: {
      about: ["Build beautiful mobile apps using Flutter and Dart."],
      learn: ["Flutter widgets", "State management", "Navigation"],
      requirements: ["Basic programming knowledge"],
      forWho: ["Beginner mobile developers"],
    },

    curriculum: [
      {
        section: "Week 1",
        title: "Flutter Basics",
        lessons: [
          {
            id: 1,
            slug: "dart-basics",
            title: "Dart Basics",
            content: "Learn the Dart programming language.",
          },
          {
            id: 2,
            slug: "flutter-widgets",
            title: "Flutter Widgets",
            content: "Build UI using Flutter widgets.",
          },
        ],
      },
    ],

    instructor: {
      name: "Emily Davis",
      title: "Flutter Developer",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Mobile developer specializing in Flutter apps.",
    },

    reviews: { total: 540, average: 4.6 },
  },

  {
    id: 5,
    slug: "database-design-sql",
    title: "Database Design & SQL Fundamentals",
    category: "Database",
    description:
      "Learn how to design databases and write efficient SQL queries.",
    duration: "7 Weeks",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=60",

    overview: {
      about: ["Understand how databases work behind applications."],
      learn: ["Database design", "SQL queries", "Indexes"],
      requirements: ["Basic computer skills"],
      forWho: ["Beginners", "Backend developers"],
    },

    curriculum: [
      {
        section: "Week 1",
        title: "Database Basics",
        lessons: [
          {
            id: 1,
            slug: "tables-and-keys",
            title: "Tables & Keys",
            content: "Learn about tables, primary keys, and relationships.",
          },
        ],
      },
    ],

    instructor: {
      name: "Robert Wilson",
      title: "Database Engineer",
      avatar: "https://randomuser.me/api/portraits/men/70.jpg",
      bio: "Database expert with 15 years of experience.",
    },

    reviews: { total: 860, average: 4.9 },
  },
];

export default courseData;
