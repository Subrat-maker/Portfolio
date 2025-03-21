import React, { useState } from 'react';
import pic from "../../public/Profile.jpg"
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Projects"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact Me"
        },
    ]
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-slate-200 shadow-md fixed top-0 left-0 right-0">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2">
                        <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                        <h1 className="font-semibold text-xl cursor-pointer">
                            Subr<span className="text-red-500 text-2xl">aT</span>
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>
                    {/* desktop Navbar */}
                    <div>
                        <ul className="hidden md:flex space-x-8">
                            {
                                navItems.map(({id,text}) =>(
                                    <li className="hover:scale-105 duration-200 cursor-pointer"key={id}>
                                        <Link to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                        >{text}</Link>
                                        </li>
                                ))
                            }
                        </ul>
                        <div onClick={()=>setMenu(!menu)} className="md:hidden">
                            {menu?<IoCloseSharp  />:<TiThMenuOutline  />}</div>
                    </div>
                </div>
                {/* //mobile Navbar */}
                {menu && (
                    <div>
                    <ul className="md:hidden flex flex-col  items-center justify-center space-y-3 text-xl">
                    {
                                navItems.map(({id,text}) =>(
                                    <li className="hover:scale-105 duration-200 font-semibold cursor-pointer"key={id}>
                                        <Link 
                                        onClick={()=>setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                        >{text}</Link>
                                        </li>
                                ))
                            }
                    </ul>
                </div>
                        
                    )
                }
                
            </div>
        </>
    )
}

export default Navbar
