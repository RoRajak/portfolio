import javascript from '@/assets/Icons/javascript-logo.svg'
import typescript from '@/assets/Icons/typescript-logo.svg'
import mongodb from '@/assets/Icons/mongodb-logo.svg'
import express from '@/assets/Icons/expressjs-logo.svg'
import mongoose from '@/assets/Icons/mongoose-logo.svg'
import mysql from '@/assets/Icons/mysql-logo.svg'
import nextjs from '@/assets/Icons/nextjs-logo.svg'
import nodejs from '@/assets/Icons/nodejs-logo.svg'
import git from '@/assets/Icons/git-ogo.svg'
import postman from '@/assets/Icons/Postman-logo.svg'
import reactjs from '@/assets/Icons/reactts-logo.svg'
import tailwindcss from '@/assets/Icons/tailwind-logo.svg'
import todo from '@/assets/images/Todo.webp'
import mm from '@/assets/images/mystery.webp'
import lti from '@/assets/images/ltimindt.webp'
import allyis from '@/assets/images/allyis.webp'



export const techSkills=[
    {
        img: javascript,
        name: "Javascript",
    },
    {
        img: typescript,
        name: "Typescript",
    },
    {   
        img: nodejs,
        name: "Nodejs",
    },
    {   
        img: express,
        name: "Express",
    },
    {   
        img: mongodb,
        name: "MongoDB",
    },
    {   
        img: mongoose,
        name: "Mongoose",
    },
    {   
        img: mysql,
        name: "MySQL",
    },
    {   
        img: git,
        name: "Git",
    },
    {   
        img: postman,
        name: "Postman",
    },
    {   
        img: nextjs,
        name: "Nextjs",
    },
    {   
        img: reactjs,
        name: "Reactjs",
    },
    {   
        img: tailwindcss,
        name: "Tailwind",
    },
]

export const projects = [
    {
        title:"To Do Task",
        desc:"I made to task like trello. In which you will have drage ans drop functionality and there will be fout column for the task",
        link:"https://task-management-bhci.onrender.com/",
        repo:"https://github.com/RoRajak/task-management-application",
        src:todo
    },
    {
        title:"Mystery Messages",
        desc:"I developed a 'Myster Messages' feature that allows users to send anonymous feedback to authors or any registered user in the database. To enhance user experience, I integrated Gemini, which provides real-time, automatic suggestions based on the context of the message being written",
        link:"https://anonymous-feedback-teal.vercel.app/",
        repo:"https://github.com/RoRajak/anonymous-feedback",
        src:mm
    },
]

export const experieceSkill=[
    {
        src:lti,
        title:"Cloud and Infra engineer",
        desc:"At LTIMindtree, I optimized cloud systems, reducing downtime by 20% and improved system reliability by 30%. Led successful cloud migration projects with 95% uptime, and introduced cost-cutting practices that saved 10%. I also enhanced team productivity by 15% through comprehensive documentation and training.",
        company:"LtiMindtree",
        date:"Dec 2021 to Feb 2024"
    },
    {
        src:allyis,
        title:"Associate support engineer",
        desc:"At Allyis, I utilized strong troubleshooting skills to resolve complex technical issues, ensuring minimal downtime and high user satisfaction. I developed and tested new components, while also creating detailed documentation and training materials to enhance team knowledge and productivity.",
        company:"Allyis",
        date:"March 2024 to july 2024"
    }
]
