import React from "react";
import linkedin from "../assets/linkedin-logo.svg"
import github from "../assets/github-logo.svg"
import logo from "../assets/app-logo.png"
import { useNavigate } from "react-router";

export default function Header(){

    const navigate = useNavigate()

    const homeClick = () => {
      navigate('/')
    }
    return (
        <header className="bg-gray-300 text-black px-6 py-2 flex justify-between shadow-md">
            <button onClick={homeClick}>
                <img src={logo} alt="Homepage" className="w-14"/>
            </button>
            <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/alejandro-blasco-0119411b7/">
                <img src={linkedin} alt="Linkedin profile" className="w-10"/>
            </a>
            <a href="https://github.com/alejandroblasco8">
                <img src={github} alt="Github profile" className="w-10"/>
            </a>
            </div>
        </header>
    );
}