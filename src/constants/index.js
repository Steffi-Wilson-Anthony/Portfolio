import {ibm, starbucks, google, cadbury} from "../assets/images";

import {
    contact,
    css,
    docker,
    express,
    git,
    github,
    html,
    java,
    javascript,
    kubernetes,
    linkedin,
    linux,
    mongodb,
    mysql,
    nodejs,
    numpy,
    opencv,
    python,
    react,
    tailwindcss,
    threejs,
    bootstrap,
    ml,
    gemini,
    neural,
    facepoints,
    stock,
    gallery,
    deployments
} from '../assets/icons';

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three JS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Containerization",
    },
    {
        imageUrl: ml,
        name: "Machine Learning",
        type: "models",
    },
    {
        imageUrl: numpy,
        name: "Numpy",
        type: "models",
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "models",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "programming",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "programming",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },

];

export const experiences = [
    
    {
        title: "Technical Support",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#6591cf",
        date: "July 2024 - January 2025",
        points: [
            "Providing technical support to IBM clients.",
            "Learning about IBM products deployed on cloud specifically focused on automation.",
            "Collaborating with all levels of Technical Support Engineers to quickly resolve issues.",
            "Participating in reviews and providing reports on clients' feedbacks.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Steffi-Wilson-Anthony',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/steffi-wilson-anthony-574a58227/',
    }
];

export const projects = [
    {
        iconUrl: gemini,
        theme: 'btn-back-green',
        name: 'Gemini-Clone',
        description: 'A chat application made by integrating ReactJS with Gemini api.',
        link: 'https://github.com/Steffi-Wilson-Anthony/Gemini-Clone',
    },

    {
        iconUrl: stock,
        theme: 'btn-back-yellow',
        name: 'Amazon Stock Price Prediction',
        description: 'By using Prophet forecast the price of Amazon stocks 30 days into the future.',
        link: 'https://github.com/Steffi-Wilson-Anthony/StockPricePrediction',
    },

    {
        iconUrl: facepoints,
        theme: 'btn-back-black',
        name: 'Facial Key Points Detection',
        description: 'By using Residual Neural Network detect the facial features such as eyes, nose, mouth, etc.',
        link: 'https://github.com/Steffi-Wilson-Anthony/FacialKeyPointsDetection',
    },

    {
        iconUrl: neural,
        theme: 'btn-back-white',
        name: 'Neural Network Visualizer',
        description: 'Using streamlit built a web app to visualize a two layer neural network trained on mnist dataset.',
        link: 'https://github.com/Steffi-Wilson-Anthony/NeuralNetVisual',
    },

    {
        iconUrl: gallery,
        theme: 'btn-back-orange',
        name: 'Image Gallery with Docker',
        description: 'Dockerized the web application built using ReactJS and Unsplash api.',
        link: 'https://github.com/Steffi-Wilson-Anthony/dockerIG',
    },

    {
        iconUrl: deployments,
        theme: 'btn-back-pink',
        name: 'Connecting Deployments',
        description: 'In minikube connecting nginx deployments using configuration file.',
        link: 'https://github.com/Steffi-Wilson-Anthony/K8S-Connect-Deployments',
    },
];