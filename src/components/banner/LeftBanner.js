import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [" HTML, CSS, JS.", "PHP, MYSQL.", "MERN STACK."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="fle
      x flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Godwin Vino</span>
        </h1>
      
        <h2 className="text-4xl font-bold text-white">
        <p className='text-base font-bodyFont leading-6 tracking-wide text-white'> "I'm a web developer with a versatile skill set that includes</p><span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-base font-bodyFont leading-6 tracking-wide">
          <br/>
          Greetings! I'm a passionate Information Technology student currently advancing through my studies at Sathyabama University in Chennai. I take pride in my journey, having successfully completed coursework up to the 3rd year without a single backlog.
          As I embark on the journey of upgrading my resume and preparing for the next chapter in my career, I'm excited to explore opportunities in the IT industry. My passion lies in becoming a Full Stack Developer and contributing meaningfully to the field.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner