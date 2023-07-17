export const aboutMe = "My name is Mihir Gupta. I'm a 2023 BTech CSE graduate from Vellore Institute of Technology, Vellore with experience in Web Development, Full Stack Development and Machine Learning. I am currently working with Byjus as MTS-1 intern on WhitehatJr and Neo platforms. I've worked at TapTalent.ai as a Web Development Intern, at Appskill Technologies Private Limited as a Frontend Developer Intern and at The Happy Turtle as a Frontend Web Developer. I'm looking to learn and explore new areas in computer science and also to leverage my existing skillset to contribute to software projects!";

export const projects = [
    {
        name: "Scythe Chat",
        description: `Fullstack development using HTML CSS React JS and Firebase. A
        group chatting application with features similar to WhatsApp.`,
        links: [
            {
                text: "Github",
                url: "https://github.com/MihirGupta07/ScytheChat"
            },
            {
                text: "View Site",
                url: "https://scythechat-70f85.web.app/"
            }
        ]

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
                url: "https://github.com/suhaasbadada/amiokay"
            },
            {
                text: "Devpost",
                url: "https://devpost.com/software/amiok"
            }
        ]

    },
    {
        name: "VocaPrep",
        description: `Fullstack development using React Js and Firebase. Help students
        preparing for exams like TOEFL, IELTS, CAT, IPM etc polish their
        English Vocabulary using flashcards. `,
        links: [
            {
                text: "Github",
                url: "https://github.com/MihirGupta07/VocaPrep"
            },
            {
                text: "View Site",
                url: "https://vocaprep.web.app/"
            }
        ]

    },
];

export const experience = [
    {
        companyName: "Byjus",
        designation: "MTS-1",
        description: `
        Actively collaborated with WhitehatJr and Byjus Neo InClass teams
         Implemented multiple features to enhance the WhitehatJr InClass experience for students and teachers using ReactJS.
        Took ownership of multiple PRDs and successfully executed them from scratch.
     Played a vital role in resolving production bugs to improve the overall WhitehatJr InClass experience.
         Demonstrated strong teamwork skills and effectively worked with cross-functional teams.
         Contributed to a cohesive and productive work environment by actively engaging with the team.`,
        from: `Jan 2023`,
        to: `Present`,
    },
    {
        companyName: "TapTalent.ai",
        designation: "Web Development Intern",
        description: `Worked as Web Development Intern contributing towards building
        their product using ReactJS.`,
        from: `Jun 2022`,
        to: `Aug 2022`,
    },
    {
        companyName: "Appskill Technologies Private Limited",
        designation: "Frontend Developer Intern",
        description: `
        Worked as a Front-end development intern, efficiently building the website's front-end for the client using ReactJS.`,
        from: `Feb 2022`,
        to: `Apr 2022`,
    },
    {
        companyName: "The Happy Turtle",
        designation: "Frontend Web Developer",
        description: `
        Worked as a Front-end development intern, contributed towards building the front-end part of revamping the website using ReactJS.`,
    }

];

export const myEmail = `mihirgupta0712@gmail.com`;
export const githubURL = `https://github.com/MihirGupta07`;
export const linkedInURL = `https://www.linkedin.com/in/mihirgupta7`;

export const gradients = [
    //0
    {
        color1: "#176B87",  //dark
        color2: "#64CCC5",  //Mid
        color3: "#DAFFFB",  //light
        colorbg: '#001C30', //background
    },
    //1
    {
        color1: "#0B666A",
        color2: "#35A29F",
        color3: "#97FEED",
        colorbg: '#071952',
    },
    //2
    {
        color1: "#1B6B93",
        color2: "#4FC0D0",
        color3: "#A2FF86",
        colorbg: '#164B60',
    },
    //3
    {
        color1: "#088395",
        color2: "#05BFDB",
        color3: "#00FFCA",
        colorbg: '#0A4D68',
    },
    //4
    {
        color1: "#144272",
        color2: "#205295",
        color3: "#2C74B3",
        colorbg: '#0A2647',
    },
    //5
    {
        color1: "#6D9886",
        color2: "#F2E7D5",
        color3: "#F7F7F7",
        colorbg: '#393E46',
    },
    //6
    {
        color1: "#256D85",
        color2: "#47B5FF",
        color3: "#DFF6FF",
        colorbg: '#06283D',
    },

]

export const gradientSnippet = (colorNumber) => `linear-gradient(135deg,${gradients[colorNumber].color3} 0%,${gradients[colorNumber].color2} 5%, ${gradients[colorNumber].color1} 10%,transparent 20%, transparent 80%,  ${gradients[colorNumber].color1} 90%,${gradients[colorNumber].color2} 95%,${gradients[colorNumber].color3} 100% )`
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
export const DescriptionGradientSnippet = (colorNumber) => `linear-gradient(0deg,
                ${gradients[colorNumber].color1} 0%,
                ${gradients[colorNumber].color2} 20%,
                ${gradients[colorNumber].color2} 40%,
                ${gradients[colorNumber].color3} 60%,
                ${gradients[colorNumber].color3} 80%,
                ${gradients[colorNumber].color1} 100%
                    )`;