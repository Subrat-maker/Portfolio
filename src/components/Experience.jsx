import React from 'react'
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import css from "../../public/css.jpg"
import nodejs from "../../public/node.png"
import sql from "../../public/sql.png"
import git from "../../public/git.png"
import vediting from "../../public/vediting.png"
function Experience() {
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"HTML"
    },
    {
      id:2,
      logo:css,
      name:"CSS"
    },
    {
      id:3,
      logo:javascript,
      name:"Javascript"
    },
    {
      id:4,
      logo:reactjs,
      name:"ReactJs"
    },
    {
      id:5,
      logo:nodejs,
      name:"NodeJs"
    },
   
    {
      id:6,
      logo:sql,
      name:"SQL"
    },
    {
      id:7,
      logo:git,
      name:"Git/GitHub"
    },
    {
      id:8,
      logo:vediting,
      name:"Video Editing"
    }
  ]
  return (

    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"> 
      <div>
        <h1 className="text-3xl font-bold mb-5">
          Experience</h1>
          <span className="font-semibold">I've more than 1 year of experience in below technologies</span>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {
              cardItem.map(({id,logo,name}) =>(
                <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                  <img src={logo} className="w-[150px] p-1 rounded-full" alt="" />
                  <div>
                    <div>{name}</div>

                  </div>
                 
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Experience
