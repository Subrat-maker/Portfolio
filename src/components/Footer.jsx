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
                    <BsFacebook size={24} />
                    <BsTwitter size={24} />
                    <BsInstagram size={24} />
                    <BsLinkedin size={24} />
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
