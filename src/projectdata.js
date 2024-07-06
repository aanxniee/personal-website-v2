// src/projectdata.js
const data = {
    projects: [
        {
            title: "The Oakville and Milton Humane Society",
            techs: "React, Typescript, Node.js, Express.js, PostgreSQL, Docker, Firebase, ChakraUI",
            para: "(UW Blueprint) Leading a team of designers and developers to build an application that streamlines the volunteering and adoption process at The Oakville and Milton Humane Society, a non-profit organization dedicated to protecting animals.",
            imageSrc: "/images/omhs.png",
            url: "https://github.com/uwblueprint/humane-society",
        },
        {
            title: "Recruitment Tool",
            techs: "React, Typescript, Node.js, Express.js, GraphQL, PostgreSQL, Docker, Firebase, Material UI",
            para: "(UW Blueprint) Internal recruitment tool that helps automate some of the tedious tasks when it comes to hiring.",
            imageSrc: "/images/uwbp.png",
            url: "https://github.com/uwblueprint/website-bp",
        },
        {
            title: "Spotifeel",
            techs: "React, Typescript, Next.js, Python, Flask, scikit-learn, NumPy, pandas",
            para: "Full-stack dynamic playlist generator based on audio emotion recognition. Model trained using scikit-learn's NN, using the RAVDESS dataset, with 94.77% accuracy.",
            imageSrc: "/images/spotifeel.png",
            url: "https://github.com/aanxniee/spotifeel/",
        },
        {
            title: "Apollo",
            techs: "Python, OpenCV, Mediapipe, scikit-learn, NumPy, pandas,",
            para: "ML model that aims to detect early signs of cerebral palsy, a motor disability in children. Uses CV and ML to retrieve the body coordinates and analyzes these coordinates to produce a HINE score, a standardized clinical neurological examination score.",
            imageSrc: "/images/apollo.png",
            url: "https://github.com/uwblueprint/website-bp",
        },
    ],
};

export default data;
