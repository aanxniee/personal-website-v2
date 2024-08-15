// src/projectdata.js
const data = {
    projects: [
        {
            title: "Humane Society",
            techs: "React Typescript Express.js PostgreSQL Docker Firebase",
            para: "UW Blueprint: Leading a team of designers and developers to build an application that streamlines the volunteering and adoption process at The Oakville and Milton Humane Society, a non-profit organization dedicated to protecting animals.",
            imageSrc: "/images/omhs.png",
            url: "https://github.com/uwblueprint/humane-society",
        },
        {
            title: "Recruitment Tool",
            techs: "React Typescript Express.js GraphQL PostgreSQL Docker Firebase",
            para: "UW Blueprint: Internal recruitment tool that helps automate some of the tedious tasks when it comes to hiring.",
            imageSrc: "/images/uwbp.png",
            url: "https://github.com/uwblueprint/website-bp",
        },
        {
            title: "Spotifeel",
            techs: "React Typescript Next.js Python Flask scikit-learn NumPy pandas",
            para: "Full-stack dynamic playlist generator based on audio emotion recognition. Model trained using scikit-learn's NN, using the RAVDESS dataset, with 94.77% accuracy.",
            imageSrc: "/images/spotifeel.png",
            url: "https://github.com/aanxniee/spotifeel/",
        },
        {
            title: "Cafe Management System",
            techs: "Angular Typescipt Spring Boot Java Docker MySQL",
            para: "Retail management system (RMS) that handles basic cafe operations. Features a JWT authentication system, mailing system, and CRUD operations for managing categories, products, bills, and staff.",
            imageSrc: "/images/cafe.png",
            url: "https://github.com/aanxniee/cafe-management",
        },
        {
            title: "Sign:Here",
            techs: "React Javascript Python Flask co:here Qdrant",
            para: "Chat-bot that answers questions about legal documents. ents, helping individuals better understand the legal documents that they are signing. First deep dive into systems design, RAG and LLM pipelines!",
            imageSrc: "/images/signhere.png",
            url: "https://github.com/aanxniee/sign-here",
        },
        {
            title: "Apollo",
            techs: "Python OpenCV Mediapipe scikit-learn NumPy pandas",
            para: "ML model that aims to detect early signs of cerebral palsy, a motor disability in children. Uses CV and ML to retrieve the body coordinates and analyzes these coordinates to produce a HINE score, a standardized clinical neurological examination score.",
            imageSrc: "/images/apollo.png",
            url: "https://github.com/aanxniee/apollo",
        },
        {
            title: "Write:Here",
            techs: "React Typescript GCP co:here",
            para: "Scans an image file for handwritten text and parses it into digital text using AI-powered technology. It allows the user to send the handwritten text as an email, helping those with motordisabilities navigate the complex mailing system.",
            imageSrc: "/images/writehere.png",
            url: "https://github.com/aanxniee/write-here",
        },
        {
            title: "Sorting Visualizer",
            techs: "Python Pygame",
            para: "Allows users to sort a random array in ascending/descending using bubble sort, insertion sort, selection sort, merge sort, and/or quick sort.",
            imageSrc: "/images/visualizer.png",
            url: "https://github.com/aanxniee/sorting-visualizer",
        },
        {
            title: "Wordle",
            techs: "C++",
            para: "Wordle but in the terminal.",
            imageSrc: "/images/wordle.png",
            url: "https://github.com/aanxniee/wordle",
        },
        {
            title: "Flappy Bird",
            techs: "Lua LOVE",
            para: "Remake of the iconic Flappy Bird game! Players must navigating a bird through pairs of pipes that have equally sized gaps placed at random heights. Explores game state management and map rendering.",
            imageSrc: "/images/flappy.png",
            url: "https://github.com/aanxniee/flappybird",
        },
    ],
};

export default data;
