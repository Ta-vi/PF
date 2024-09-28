import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center justify-center h-screen bg-[#F6F7EB]">
        <nav className="absolute top-5">
          <ul className="flex gap-10 text-lg">
            <li className="cursor-pointer hover:text-gray-500">HOME</li>
            <li className="cursor-pointer hover:text-gray-500">ABOUT</li>
            <li className="cursor-pointer hover:text-gray-500">CONTACT ME</li>
          </ul>
        </nav>
        <div className="text-center">
  <h1 className="text-[10rem] font-bold leading-[0.9]">Vitan</h1> 
  <h1 className="text-[10rem] font-bold leading-[0.9]">Octavian</h1>
  <h3 className="text-4xl mt-8 leading-[1.2]">Web Developer</h3>
</div>

        {/* Sageata Scroll Down */}
        <div className="absolute bottom-10 flex justify-center w-full">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Proiect 1 */}
      <section className="h-screen bg-[#26547c] flex items-center justify-center">
        <h2 className="text-white text-4xl">Proiect 1</h2>
      </section>

      {/* Proiect 2 */}
      <section className="h-screen bg-[#ef476f] flex items-center justify-center">
        <h2 className="text-white text-4xl">Proiect 2</h2>
      </section>

      {/* Proiect 3 */}
      <section className="h-screen bg-[#ffd166] flex items-center justify-center">
        <h2 className="text-black text-4xl">Proiect 3</h2>
      </section>
    </div>
  );
}

export default HomePage;
