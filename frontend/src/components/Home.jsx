import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Banner superior */}
      <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Note Manager</h1>
        <nav className="space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-xl shadow hover:bg-gray-100">
            Register
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-xl shadow hover:bg-gray-100">
            Login
          </button>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
          Welcome to your favourite <br /> note manager app
        </h2>
      </main>
    </div>
  );
}
