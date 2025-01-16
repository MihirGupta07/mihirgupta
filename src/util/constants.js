export const aboutMe = `Hi, I’m Mihir Gupta! I’m a B.Tech graduate in Computer Science and Engineering from Vellore Institute of Technology, Vellore. I’ve had the chance to work on Web Development, Full Stack Development, and even dive into Machine Learning. Right now, I’m an MTS-1 intern at Byju’s, contributing to the WhitehatJr and Neo platforms.

In the past, I’ve interned at TapTalent.ai as a Web Developer, Appskill Technologies as a Frontend Developer, and The Happy Turtle as a Frontend Web Developer. Each of these roles has taught me something new and helped me grow as a developer.

I’m always curious to explore new areas in computer science and love using my skills to create software solutions that make a difference. There’s always more to learn, and I’m excited about what’s next!`;
export const projects = [
  {
    name: "Scythe Chat",
    description: `Fullstack development using HTML CSS React JS and Firebase. A
        group chatting application with features similar to WhatsApp.`,
    links: [
      {
        text: "Github",
        url: "https://github.com/MihirGupta07/ScytheChat",
      },
      {
        text: "View Site",
        url: "https://scythechat-70f85.web.app/",
      },
    ],
  },
  {
    name: "Am I Okay",
    description: `Web development and ML submission for Hoya- Hacks’22.
        Implemented using HTML CSS Flask Machine Learning on aKaggle
        dataset and Google Maps API. An online disease predictor can also
        suggest medicines and nearby hospitals based on the three symptoms.`,
    links: [
      {
        text: "Github",
        url: "https://github.com/suhaasbadada/amiokay",
      },
      {
        text: "Devpost",
        url: "https://devpost.com/software/amiok",
      },
    ],
  },
  {
    name: "VocaPrep",
    description: `Fullstack development using React Js and Firebase. Help students
        preparing for exams like TOEFL, IELTS, CAT, IPM etc polish their
        English Vocabulary using flashcards. `,
    links: [
      {
        text: "Github",
        url: "https://github.com/MihirGupta07/VocaPrep",
      },
      {
        text: "View Site",
        url: "https://vocaprep.web.app/",
      },
    ],
  },
];

export const experience = [
  {
    companyName: "Almond",
    designation: "Founding Software Engineer",
    description: `At Almond, I worked as a Founding Software Engineer, helping build the company’s core technology from scratch. I used tools like Next.js, PostgreSQL, and tRPC to create new features that made the product both innovative and user-friendly. I collaborated closely with the founders to ensure the tech aligned with the company’s goals. Together, we built a digital trade platform designed to save businesses time, cut costs, and help them grow. It was an exciting experience where I got to combine hands-on coding with a big-picture approach.`,
    from: `Aug 2024`,
    to: `Present`,
  },
  {
    companyName: "Ivory",
    designation: "Founding Software Engineer",
    description: `At Ivory, I was a Founding Software Engineer, playing a key role in building the company’s technology from the ground up. I worked with tools like ReactJs, NodeJs, and MongoDB to develop innovative solutions, including a progressive web app (PWA). I partnered closely with the co-founders to align the tech with the company’s mission of empowering the elderly and improving their cognitive wellness. This role allowed me to explore creative ways to use technology to make a meaningful difference in people’s lives.`,
    from: `Jan 2024`,
    to: `Aug 2024`,
  },
  {
    companyName: "Byjus",
    designation: "MTS-1",
    description: `At BYJU'S, I worked as a Member of Technical Staff 1, contributing to two major teams—WhiteHat Jr and BYJU'S Neo InClass. I developed optimized APIs in Golang to enhance performance and scalability for the Neo InClass platform. Using ReactJS, I implemented features that reduced user drop-offs by 45%, significantly improving the WhiteHat Jr InClass experience. I also independently handled the development and delivery of over 10 product requirement documents (PRDs), showcasing my ability to translate ideas into impactful solutions while maintaining high technical standards.`,
    from: `Jan 2023`,
    to: `Jan 2024`,
  },
  {
    companyName: "TapTalent.ai",
    designation: "Web Development Intern",
    description: `At TapTalent.ai, I worked as a Web Development Intern, contributing to the development and improvement of two core products. I used ReactJS to create responsive web interfaces, enhancing the user experience and ensuring compatibility across various browsers. During my time there, I collaborated with a cross-functional team, implemented new features, and refined existing ones, gaining hands-on experience in web development and strengthening my skills in building user-friendly digital solutions.`,
    from: `Jun 2022`,
    to: `Aug 2022`,
  },

  {
    companyName: "The Happy Turtle",
    designation: "Frontend Web Developer",
    description: `
        At The Happy Turtle, I worked as a Frontend Web Developer, where I focused on creating engaging and user-friendly web interfaces. I developed responsive designs and implemented features that enhanced the website’s usability and functionality. This role allowed me to refine my frontend development skills while contributing to a project aimed at making a positive impact.`,
    from: `Feb 2022`,
    to: `Apr 2022`,
  },
];

export const myEmail = `mihirgupta0712@gmail.com`;
export const githubURL = `https://github.com/MihirGupta07`;
export const linkedInURL = `https://www.linkedin.com/in/mihirgupta7`;
export const resumeURL = `https://drive.google.com/file/d/175dqryU9cNT5K5cgkaTI3DRtl-SMwlG5/view?usp=sharing`;

export const gradients = [
  //0
  {
    color1: "#176B87", //dark
    color2: "#64CCC5", //Mid
    color3: "#DAFFFB", //light
    colorbg: "#001C30", //background
  },
  //1
  {
    color1: "#0B666A",
    color2: "#35A29F",
    color3: "#97FEED",
    colorbg: "#071952",
  },
  //2
  {
    color1: "#1B6B93",
    color2: "#4FC0D0",
    color3: "#A2FF86",
    colorbg: "#164B60",
  },
  //3
  {
    color1: "#088395",
    color2: "#05BFDB",
    color3: "#00FFCA",
    colorbg: "#0A4D68",
  },
  //4
  {
    color1: "#144272",
    color2: "#205295",
    color3: "#2C74B3",
    colorbg: "#0A2647",
  },
  //5
  {
    color1: "#6D9886",
    color2: "#F2E7D5",
    color3: "#F7F7F7",
    colorbg: "#393E46",
  },
  //6
  {
    color1: "#256D85",
    color2: "#47B5FF",
    color3: "#DFF6FF",
    colorbg: "#06283D",
  },
];

export const gradientSnippet = (colorNumber) =>
  `linear-gradient(135deg,${gradients[colorNumber].color3} 0%,${gradients[colorNumber].color2} 13%, ${gradients[colorNumber].color1} 19%,transparent 28%, transparent 72%,  ${gradients[colorNumber].color1} 81%,${gradients[colorNumber].color2} 87%,${gradients[colorNumber].color3} 100% )`;
export const buttonGradientSnippet = (colorNumber) => `linear-gradient(135deg,
    ${gradients[colorNumber].color3} 0%,
    ${gradients[colorNumber].color2} 50%,
    ${gradients[colorNumber].color1} 100%
    )`;
export const HeadingGradientSnippet = (colorNumber) => `linear-gradient(135deg,
        ${gradients[colorNumber].color1} 0%,
        ${gradients[colorNumber].color2} 20%,
        ${gradients[colorNumber].color2} 40%,
        ${gradients[colorNumber].color3} 60%,
        ${gradients[colorNumber].color3} 80%,
        ${gradients[colorNumber].color1} 100%
            )`;
export const DescriptionGradientSnippet = (
  colorNumber
) => `linear-gradient(0deg,
                ${gradients[colorNumber].color1} 0%,
                ${gradients[colorNumber].color2} 20%,
                ${gradients[colorNumber].color2} 40%,
                ${gradients[colorNumber].color3} 60%,
                ${gradients[colorNumber].color3} 80%,
                ${gradients[colorNumber].color1} 100%
                    )`;
