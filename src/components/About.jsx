import React from 'react'

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
     <div>

     <h1 className="text-3xl font-bold mb-5">About</h1>

     <div>
      <a href="public/Subrat_Resume.pdf" target='_blank'>
      <button className="bg-purple-700 hover:bg-cyan-500 text-white font-bold px-4 py-2 rounded">Resume</button>
      </a>
      </div>
      <br />
      <p>
      I am a passionate frontend developer with a robust command of the MERN stack.With a background in IT , 
      I strive to create impactful and visually stunning software solutions that leave a leasting impression.
      </p>
      <br />
      <h1 className="text-purple-600 font-semibold text-xl">Education & Training
      </h1>
      <span>
        [Degree/Certification], [Institution], [Year] [Degree/Certification], 
        [Institution], [Year] [Relevant Course], [Platform/Institution], [Year]
        </span>
        <br />
        <br />
        <h1 className="text-purple-600 font-semibold text-xl">Skills & Expertise
        </h1>
        <span>
        Proficient in [Programming Languages] Experienced with [Software Tools/Technologies] Strong grasp of [Design Principles/Concepts] Excellent problem-solving skills Effective communicator and collaborator
        </span>
        <br />
        <br />
        <h1 className="text-purple-600 font-semibold text-xl">Achievements & Awards
        </h1>
        <span>
        [Award/Recognition], [Organization/Institution], [Year] [Achievement], [Organization/Platform], [Year]
        </span>
        <br />
        <br />
        <h1 className="text-purple-600 font-semibold text-xl">Mission Statement
        </h1>
        <span>
        My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </span>
     </div>

    </div>
  )
}

export default About
