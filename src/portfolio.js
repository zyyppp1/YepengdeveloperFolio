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
  username: "Joey Zhu",
  title: "Hi all, I'm Joey",
  subTitle: emoji(
    "A passionate Full Stack Software Developer🚀 2024 Graduate in London,earned £2000+ with self-made scripts in two weeks.Hands-on experiences in both frontend and backend.(🤫If you want to know the top 10 chinese restaurants in London,reach out to me!)"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WZ6e5LVyyOYKwNuNQmSvgpZunmUKJ_DY/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zyyppp1",
  linkedin: "https://www.linkedin.com/in/joey-zhu-9b0021314/",
  gmail: "joey.yepeng@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),   
    emoji(
      "⚡ Design scalable and stable back end to process upcoming data. "
    ),

    emoji("⚡ Good version control ability with Git"),
    emoji(
      "⚡ Integration of third party services such as Docker/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: require("./assets/images/golang.svg") // 确保你有这个 SVG 文件
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Nottingham",
      logo: require("./assets/images/NottinghamLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - December 2024",
      desc: "Merit Award Graduate.",
      descBullets: [
        "Led two different groups for team work and got great grades .",
        "Write a Python Selenium script to search US visa interview slots and earned a lot."
      ]
    },
    {
      schoolName: "Beijing Union University",
      logo: require("./assets/images/Beijing_Union_University_logo.png"),
      subHeader: "Bachelor of Engineer in Software Engineering",
      duration: "September 2019 - Jul 2023",
      desc: "Graduated with GPA:83.Ranked top 10% in the program. Took courses about Software Engineering, Network Security, Operating Systems,Python,Java...",
      descBullets: [
      "Led a class as class president and an association with 100 members.",
      "One publication on path planning for robots and several awards in application development in BUU."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "QA engineer / Software Engineer in Test",
      company: "Everbridge",
      companylogo: require("./assets/images/EVBG.png"),
      date: "Jul 2022 – Mar 2023",
      descBullets: [
        "In an agile development team using Scrum .Successfully validating 31 version updates in 8 months.",
        "Managing over 500 web test cases,automated over 200 test scenarios using Selenium, significantly reducing manual testing efforts and accelerating release cycles by 25-30%.",
        "Once new issues arose,worked with front-end and back-end developers to promptly resolve them,creating targeted test cases as necessary to ensure thorough validation."
      ]
    },
    {
      role: "Vice President",
      company: "Intelligent Interaction Association in BUU",
      companylogo: require("./assets/images/BUU.png"),
      date: "Sep 2020 – Jul 2022",
      descBullets: [
        "Coordinate with the president to manage an association of 100 people, investigate popular technical directions and invite relevant lecturers to give lectures at the school.",
        " Organize team competitions and association activities.",

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solution Architect-Associate Level",
      subtitle:
        "Learn the AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3),Learn the Serverless Fundamentals (Lambda, DynamoDB, Cognito, API Gateway),Understand the Well Architected Framework, Disaster Recovery.",
      image: require("./assets/images/586aaf811fdce414493f5105.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View SAA Certification",
          url: "https://www.udemy.com/certificate/UC-c012515b-9b18-49d3-ab69-0a8e44871f73/"
        }
      ]
    },
    {
      title: "Publication",
      subtitle:
        "Using neural networks to explore path planning algorithms for robots.",
      image: require("./assets/images/WX20250205-011741@2x.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Publication Website",
          url: "https://www.ewadirect.com/proceedings/ace/article/view/2259"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44-7900218816",
  email_address: "joey.yepeng@gmail.com"
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
