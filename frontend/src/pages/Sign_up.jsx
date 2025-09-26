import React from "react";
import linkedin from "../assets/linkedin-logo.svg"
import github from "../assets/github-logo.svg"


export default function Sign_up() {
  return (
    <div className="h-screen flex flex-col">
        <header className="bg-gray-300 text-black px-6 py-2 flex justify-end shadow-md space-x-4">
          <a href="https://www.linkedin.com/in/alejandro-blasco-0119411b7/">
            <img src={linkedin} alt="Linkedin profile" className="w-10"/>
          </a>
        <a href="https://github.com/alejandroblasco8">
            <img src={github} alt="Github profile" className="w-10"/>
        </a>
        </header>
        <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">Note Manager</h1>
          <nav className="space-x-4">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-xl shadow hover:bg-gray-100">
                  Sign up
              </button>
          </nav>
        </div>

        <main className="flex-grow flex items-top justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              Welcome to your favourite <br /> note manager app
            </h2>
        </main>
    </div>
  );
}
