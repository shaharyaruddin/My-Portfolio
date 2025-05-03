/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammad Raza",
  title: "Hi, it's Mohammad Raza",
  subTitle: emoji(
    "A passionate Mern-Stack Developer with 2+ years of hands-on experience in building and scaling modern web applications from the ground up. I specialize in both frontend and backend development, user-focused solutions that are fast, and scalable.A problem-solver at heart ❤️."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1I9wxE4XVw4sUTP5xSofXCrxTE03YhreD/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mohammadraza123",
  linkedin: "https://www.linkedin.com/in/mohammad-raza-2210b9243/",
  gmail: "mohammadrazaarain10@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend / User Interfaces for web and mobile applications."
    ),
    emoji("⚡ Build powerful, scalable Backend APIs and server-side logic using modern technologies."),
    emoji("⚡ Create Progressive Web Applications (PWA) with Single Page Application (SPA) architecture."),
    emoji("⚡  Seamless integration of third-party services like Firebase, Stripe, Cloudinary, and more."),
    emoji("⚡ Passionate about delivering high-quality, performance-optimized full stack solutions."),

  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      imageSrc: require("./assets/images/js.png"), // or use a URL
    },
    {
      skillName: "TypeScript",
      imageSrc: require("./assets/images/ts.png"),
    },
    {
      skillName: "Reactjs",
      imageSrc: require("./assets/images/react.png"),
    },
    {
      skillName: "Nextjs",
      imageSrc: require("./assets/images/next.png"),
    },
    {
      skillName: "React Native",
      imageSrc: require("./assets/images/react.png"),
    },
    {
      skillName: "Expressjs",
      imageSrc: require("./assets/images/express1.png"),
    },
    {
      skillName: "Nodejs",
      imageSrc: require("./assets/images/node.png"),
    },
    {
      skillName: "MongoDB",
      imageSrc: require("./assets/images/mongodb.png"),
    },
    {
      skillName: "Firebase",
      imageSrc: require("./assets/images/firebase.png"),
    },
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Intermediate",
      logo: require("./assets/images/college.jpg"),
      subHeader: "In Computer Science",
      duration: "2023",
      descBullets: [
        "Gained foundational knowledge in programming, algorithms, and data structures.",
        "Hands-on experience with problem-solving, software development, and computer systems."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Mobile Apps (React Native)",
      progressPercentage: "76%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "JavaScript Developer",
      company: "IT Panda",
      companylogo: require("./assets/images/itpanda.jpg"),
      date: "May 2023 – January 2024",
      descBullets: [
        "Built interactive web applications using React.js and modern JavaScript frameworks, focusing on performance and scalability.",
        "Wrote clean, efficient, and ES6+ standard code to develop fast and responsive websites.",
        "Enhanced UI interactivity, functionality, and user experience by leveraging core JavaScript skills and best practices.",
        "Collaborated in agile development teams, delivering real-world web solutions aligned with project requirements."
      ]
    },
    {
      role: "Reactjs Developer",
      company: "Rayon Studios",
      companylogo: require("./assets/images/rayon.png"),
      date: "March 2024 – December 2025",
      descBullets: [
        "Built responsive and dynamic web applications using React.js, focusing on performance, scalability, and clean architecture.",
        "Designed and developed reusable components to ensure maintainability and efficient UI development.",
        "Worked with Backend development using Node.js, Express.js, and MongoDB to build RESTful APIs and server-side logic.",
        "Implemented responsive designs across devices, improving user experience and interface consistency."
      ]
    },
    {
      role: "Mern Stack Developer",
      company: "Digital Bee Studio",
      companylogo: require("./assets/images/digital_bee_studio_logo.jpg"),
      date: "January 2025 – Present",
      descBullets: [
        "Developed responsive and dynamic frontend applications using React.js, focusing on reusable components and optimized performance.",
        "Built and maintained backend services with Node.js, Express.js, and MongoDB, creating secure and scalable RESTful APIs.",
        "Integrated frontend and backend systems to deliver complete, high-performance full-stack web applications.",
        "Optimized application performance and improved scalability through best practices in full stack development."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF THE PROJECTS OF MY CAREER",
  projects: [
    {
      // image: require("./assets/images/boorowbe.png"),
      projectName: "Borrowbe",
      images: [
        require("./assets/images/borrowbe-1.png"),
        require("./assets/images/borrowbe-2.png"),
        require("./assets/images/borrowbe-3.png"),
      ], // Add multiple images here
      projectDesc: [
        {
          description:
            "BorrowBe is an online marketplace that enables users to rent out or lease products, services, and spaces..."
        },
        {
          description:
          <>
          <strong>Tech Stack:</strong> NextJS, Redux, Firebase, Node.js, Express.js, MongoDB, Tailwind CSS
        </>
        },
        {
          description: "Free ad posting for rental listings"
        },
        {
          description: "Category-wise browsing (real estate, vehicles, services, etc.)"
        },
        {
          description: "Real-time chat functionality between renters and providers"
        },
        {
          description: "Secure backend with Express.js and MongoDB for listing and transaction management"
        },
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://borrowbe.com/"
        }
      ]
    },
    {
      image: require("./assets/images/emporia.png"),
      projectName: "Crystal Emporia (E-commerce)",
      images: [
        require("./assets/images/emporia-1.png"),
        require("./assets/images/emporia-2.png"),
        require("./assets/images/emporia-3.png"),
      ], // Add multiple images here
      projectDesc: [
        {
          description:
            "Crystal Emporia is a fully functional e-commerce platform. It provides a seamless shopping experience..."
        },
        {
          description:
          <>
          <strong>Tech Stack:</strong> ReactJS, Redux, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS
        </>
        },
        {
          description:
            "I created the platform using a modern MERN stack architecture (MongoDB, Express.js, React, Node.js)..."
        },
        {
          description:
            "Implemented advanced features including product search, category filtering, cart and wishlist management..."
        },
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://crystalemporia.com/"
        }
      ]
    },
    {
      image: require("./assets/images/olx.png"),
      projectName: "Olx Project",
      images: [
        require("./assets/images/olx-1.png"),
        require("./assets/images/olx-2.png"),
        require("./assets/images/olx-3.png"),
      ], // Add multiple images here
      projectDesc: [
        {
          description:
            "I created an OLX Clone project using React, Firebase, Redux, and React Router. This project involved..."
        },
        {
          description:
          <>
            <strong>Tech Stack:</strong> ReactJS, Redux, Firebase, React Router, Tailwind CSS
          </>
        },
        {
          description: "Managed global state with Redux and implemented dynamic routing for smooth navigation..."
        },
        {
          description:
            "The project demonstrates building a full-stack responsive marketplace application..."
        },
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://olx-ecommerce.vercel.app/"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !"

  // achievementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle:
  //       "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLoo.webp"),
  //     imageAlt: "Google Code-In Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
  //       },
  //       {
  //         name: "Award Letter",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
  //       },
  //       {
  //         name: "Google Code-in Blog",
  //         url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle:
  //       "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     imageAlt: "Google Assistant Action Logo",
  //     footerLink: [
  //       {
  //         name: "View Google Assistant Action",
  //         url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
  //       }
  //     ]
  //   },

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     imageAlt: "PWA Logo",
  //     footerLink: [
  //       {name: "Certification", url: ""},
  //       {
  //         name: "Final Project",
  //         url: "https://pakistan-olx-1.firebaseapp.com/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Reach out me via",
  number: "+92-3068565775",
  email_address: "mohammadrazaarain10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
