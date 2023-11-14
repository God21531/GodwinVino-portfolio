import React from 'react'
import Title from '../layouts/Title'
import { Chaatmato, hackwitlogo, portfolio } from "../../assets/index";
import {ProjectsCard, ProjectsCard1} from './ProjectsCard';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href='https://drive.google.com/file/d/1Huumz-kRoVMGkyP3gwCnhVJQvGqK85Cj/view?usp=sharing' target='blank'>
        <ProjectsCard
          title="FOOD ORDER WEBSITE"
          des="I have developed an upgraded food order website that includes both server-side and client-side components. I created it using PHP and MySQL, with guidance from instructional videos on YouTube.
          I provided you with my source code and frontend website link and click anywhere in this project for recorded video."
          git1= {<BsGithub/>}
          bro1={<FaGlobe />}
          src={Chaatmato}
          
        />
        </a>

        <a href='https://drive.google.com/file/d/12bbSUw0eFLwYTxNNLSLGqoN4jdv8Flhb/view?usp=sharing' target='blank'>
        <ProjectsCard1
          title2="LEAVE AUTHORIZATION WEBSITE"
          des2= " I completed a 40-hour's React FullStack Development certification course at 'Hackwit Technologies Pvt Ltd'. Throughout this internship, I designed and built the 'SIST Leave Authorization Website', a web application that simplifies the leave authorization process within our organization and I attached my project report, kindly check through it. " 
          git2= {<BsGithub/>}
          bro2={<FaGlobe />}
          
          src2={hackwitlogo}
        />

        </a>

        <a href='https://drive.google.com/file/d/1QMkdVVcmynynu7rE20pmFpI1ULJLrx3F/view?usp=sharing' target='blank'>
        <ProjectsCard1
          title2="MY PORTFOLIO"
          des2="I've crafted my portfolio website using the MERN stack, skillfully weaving together ReactJS, ExpressJS, NodeJS, and MongoDB. This project reflects the culmination of my learning journey, which began during my immersive ReactJS full-stack internship and was further honed through diligent exploration of valuable YouTube reference videos. To gain a more comprehensive understanding of my work, you can delve into the source code on my GitHub repository, or take a closer look through the recorded video presentation. " 
          git2= {<BsGithub/>}
          bro2={<FaGlobe />}
          
          src2={portfolio}
        />

        </a>
        {/*
        
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
  */}
      </div>
    </section>
  );
}

export default Projects