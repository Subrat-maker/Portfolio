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
      I am a passionate <strong>Fullstack developer</strong> with a robust command of the DOT NET and MERN stack.With a background in IT , 
      I strive to create impactful and visually stunning software solutions that leave a leasting impression.
      </p>
      <br />
      <h1 className="text-purple-600 font-semibold text-xl">Education & Training
      </h1>
      <span>
      <strong>B.TECH COMPUTER SCIENCE</strong>,  Vignan Institute of Technology and Management, Berhampur, 2020-2024 <br />
      <strong>INTERMEDIATE</strong>, Manitara Science Higher Secondary School, Manitara, 2018-2020 <br />
      <strong>MATRICULATION</strong>, Saraswati Sisu Vidya Mandir, Asika, 2018
        </span>
        <br />
        <br />
        <h1 className="text-purple-600 font-semibold text-xl">Skills & Expertise
        </h1>
        <span>
        <strong>Programming Language:</strong> C, C#, JavaScript  <br />                                                         
<strong>Backend:</strong> ADO.NET, Node.js, ASP.NET, MVC, WEB APIs     <br />                                
<strong>Frontend:</strong> React Js, ANGULAR, Bootstrap, Tailwind CSS  <br />                                    
<strong>Database:</strong> MS SQL SERVER, MySQL <br />
<strong>Concepts:</strong> OOPs, Basics of DSA <br />
<strong>Tools:</strong> Git, GitHub, VS Code      
   </span>
        <br />
        <br />
        <h1 className="text-purple-600 font-semibold text-xl">Achievements & Awards
        </h1>
        <span>
        Complete React Js with Hands-On Projects, by Udemy , April 2024 
        </span>
        <br />
        <span>
        Java Android App Development,  by Technophilia and Business Club IIT KHARAGPUR, Nov 2022
        </span>
        <br />
        <br />
        <h1 className="text-purple-600 font-semibold text-xl">Mission Statement
        </h1>
        <span>
        My mission is to leverage my skills and creativity to deliver innovative TECH solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </span>
     </div>

    </div>
  )
}

export default About
