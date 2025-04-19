import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin, } from 'react-icons/bs'

function Footer() {
  return (
    <>
    <hr />
    <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center size={24} ">
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/subratkumarparida.dinesh" target='_blank'><BsFacebook size={24} /></a>
                    <a href="https://twitter.com/SubratK08?t=fYYZVt-pQLcFpMluPX-0uw&s=09" target='_blank'><BsTwitter size={24} /></a>
                    <a href="https://www.instagram.com/subratkumar_05/"><BsInstagram size={24} /></a>
                    <a href="https://www.linkedin.com/in/subrat-kumar-parida-871553237"><BsLinkedin size={24} /></a>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                    <p>
                       Copyright &copy;2024 SubraT All rights reserved
                    </p>
                </div>
            </div>

        </div>
    </footer>
    </>
  );
}

export default Footer;
