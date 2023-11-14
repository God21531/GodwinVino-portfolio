import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaMailBulk } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/godwinvino21531/' target='_blank'>
            <FaLinkedinIn />
              </a>  
            </span>
            <span className="bannerIcon">
              <a href='https://www.instagram.com/god_of_thunder21531/' target='_blank'>
              <FaInstagram />
              </a>
              
            </span>
            <span className="bannerIcon">
              <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsfljdQSHLbWrPtLMsGJrJlcmFMgMRxrxGTbCcCxCkQWfHbDzsqcQXRWcffwQSNJjjqHg' target='_blank'>
              <FaMailBulk/>
              </a>
              
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media