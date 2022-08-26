import React, {useEffect} from "react";
import Skill from "./Skill.js";
import './About.css'
function About() {
  return (
    <section id="about" className="z-0 py-10 relative h-fit flex justify-center items-center flex-col">
      <div className=" max-w-4xl w-2/3 text-container text-white text-base font-mono text-center">
          <h2 className="text-3xl font-bold">About me</h2>
          <p>
            Hello, I am Tuan, a third-year college student, currently study at the
            University of Information Technology. My aim is being a
            professional developer. I can learn new technologies promtly.
            <br/>Here is a list of technologies and software that I used.
          </p>
        
        <div>
          {/* <h3>
            Short-term:
          </h3>
          <p>Being a skillful Front-end Developer</p>
          <h3>
            Long-term:
          </h3>
          <p>Being a Fullstack Developer</p> */}
        </div>
      </div>
      <Skill />
      
    </section>
  );
}

export default About;
