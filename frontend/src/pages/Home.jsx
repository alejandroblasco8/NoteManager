import React from "react";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="h-screen flex flex-col">
            <Header/>
            <nav className="bg-blue-600 text-white px-6 py-4 flex justify-end items-center shadow-md space-x-4">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-xl shadow hover:bg-gray-100">
                  <Link to="/Sign_in">Sign in</Link>
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-xl shadow hover:bg-gray-100">
                  <Link to="/Sign_up">Sign up</Link>
              </button>
            </nav>
            
            <main className="flex-grow flex items-top justify-center">
                <h2 className="text-4xl md:text-6xl font-bold text-center">
                  Welcome to Lapislázuli <br /> the best note manager app
                </h2>
            </main>
        </div>
    );
}
