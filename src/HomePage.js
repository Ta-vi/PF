import React, { useState } from 'react';
import img1 from './images/Blue1.jpg';
import img2 from './images/Blue2.jpg';

const HomePage = () => {
  const images = [img1, img2]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="h-screen">
      {/* Header */}
      <div className="flex flex-col items-center justify-center h-screen bg-[#F6F7EB]">
        <nav className="absolute top-5">
          <ul className="flex gap-10 text-lg">
            <li className="cursor-pointer hover:text-gray-500 font-poppins">PROIECTE</li>
            <li className="cursor-pointer hover:text-gray-500 font-poppins">CONTRIBUȚII OPEN SOURCE</li>
            <li className="cursor-pointer hover:text-gray-500 font-poppins">CONTACT</li>
            <li className="cursor-pointer hover:text-gray-500 font-poppins">CV</li>
          </ul>
        </nav>
        <div className="text-center">
          <h1 className="text-[10rem] font-bold leading-[0.9] font-poppins">V.</h1> 
          <h1 className="text-[10rem] font-bold leading-[0.9] font-poppins">Octavian</h1>
          <h3 className="text-4xl mt-8 leading-[1.2] font-poppins">Web Developer</h3>
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
      <section className="h-[80%] bg-[#26547c] flex items-center justify-center p-10 pl-36">

        {/* Slideshow */}
        <div className="w-[50%] relative mr-12">  
          <div className="slideshow-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-full h-[59vh] object-cover transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                alt={`Slideshow Proiect 3 ${index + 1}`}
                style={{ display: currentIndex === index ? 'block' : 'none' }}  
              />
            ))}
          </div>
          
        {/* Sageti pentru navigare */}
          <button onClick={prevSlide} className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-left text-white text-xl"></i>
          </button>
          <button onClick={nextSlide} className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-right text-white text-xl"></i>
          </button>
        </div>

        {/* Descriere proiect */}
          <div className="w-1/4 text-white p-5">  
            <h2 className="text-4xl font-bold font-interTight">Proiect 1</h2>
            <p className="text-xl mt-2 font-inter">Tip site</p>
            <p className="text-lg mt-4 font-inter">Descriere</p>
            <p className="text-lg mt-4 font-inter">Descriere</p>
          <div className="flex flex-wrap mt-4">
          <span className="mr-2 mb-2 px-4 py-2 bg-[#4a7296] text-white rounded font-spaceGrotesk text-[12px] font-medium">JavaScript</span>
          <span className="mr-2 mb-2 px-4 py-2 bg-[#4a7296] text-white rounded font-spaceGrotesk text-[12px] font-medium">React</span>
          <span className="mr-2 mb-2 px-4 py-2 bg-[#4a7296] text-white rounded font-spaceGrotesk text-[12px] font-medium">TailwindCSS</span>
          </div>

        {/* Butoane */}
        <div className="mt-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="font-spaceGrotesk text-white mr-2">Vezi Website</span>
          <i className="fas fa-external-link-alt text-white"></i>  
          </a>  
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="font-spaceGrotesk text-white mr-2">Vezi Cod</span>
          <i className="fab fa-github text-white"></i>  
          </a>
        </div>
        </div>
      </section>

      {/* Proiect 2 */}
      <section className="h-[80%] bg-[#ef476f] flex items-center justify-center p-10 pl-36">

        {/* Slideshow */}
        <div className="w-[50%] relative mr-12">  
          <div className="slideshow-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-full h-[59vh] object-cover transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                alt={`Slideshow Proiect 3 ${index + 1}`}
                style={{ display: currentIndex === index ? 'block' : 'none' }}  
              />
            ))}
          </div>
          
        {/* Sageti pentru navigare */}
          <button onClick={prevSlide} className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-left text-white text-xl"></i>
            </button>
          <button onClick={nextSlide} className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-right text-white text-xl"></i>
          </button>
        </div>

        {/* Descriere proiect */}
        <div className="w-1/4 text-white p-5">  
          <h2 className="text-4xl font-bold">Proiect 2</h2>
          <p className="text-xl mt-2">Tip site</p>
          <p className="text-lg mt-4">Descriere</p>
          <p className="text-lg mt-4">Descriere</p>
          <div className="flex flex-wrap mt-4">
            <span className="mr-2 mb-2 px-4 py-2 bg-[#996470] text-white rounded font-spaceGrotesk text-[12px] font-medium">JavaScript</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#996470] text-white rounded font-spaceGrotesk text-[12px] font-medium">React</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#996470] text-white rounded font-spaceGrotesk text-[12px] font-medium">TailwindCSS</span>
        </div>

        {/* Butoane */}
        <div className="mt-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="font-spaceGrotesk text-white mr-2">Vezi Website</span>
          <i className="fas fa-external-link-alt text-white"></i>  
          </a>  
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="font-spaceGrotesk text-white mr-2">Vezi Cod</span>
          <i className="fab fa-github text-white"></i>  
          </a>
        </div>
        </div>
      </section>
  
      {/* Proiect 3 */}
      <section className="h-[80%] bg-[#ffd166] flex items-center justify-center p-10 pl-36">

        {/* Slideshow */}
        <div className="w-[50%] relative mr-12">  
          <div className="slideshow-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-full h-[59vh] object-cover transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                alt={`Slideshow Proiect 3 ${index + 1}`}
                style={{ display: currentIndex === index ? 'block' : 'none' }}  
              />
            ))}
          </div>
          
        {/* Sageti pentru navigare */}
          <button onClick={prevSlide} className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-left text-white text-xl"></i>
          </button>
          <button onClick={nextSlide} className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-right text-white text-xl"></i>
          </button>
        </div>

        {/* Descriere proiect */}
        <div className="w-1/4 text-black p-5">  
          <h2 className="text-4xl font-bold">Proiect 3</h2>
          <p className="text-xl mt-2">Tip site</p>
          <p className="text-lg mt-4">Descriere</p>
          <p className="text-lg mt-4">Descriere</p>
          <div className="flex flex-wrap mt-4">
            <span className="mr-2 mb-2 px-4 py-2 bg-[#ffdb88] text-black rounded font-spaceGrotesk text-[12px] font-medium">JavaScript</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#ffdb88] text-black rounded font-spaceGrotesk text-[12px] font-medium">React</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#ffdb88] text-black rounded font-spaceGrotesk text-[12px] font-medium">TailwindCSS</span>
          </div>

          {/* Butoane */}
        <div className="mt-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="font-spaceGrotesk text-black mr-2">Vezi Website</span>
          <i className="fas fa-external-link-alt text-black"></i>  
          </a>  
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="font-spaceGrotesk text-black mr-2">Vezi Cod</span>
          <i className="fab fa-github text-black"></i>  
          </a>
        </div>
        </div>
      </section>

       {/* Footer */}
      <div className="bg-[#F6F7EB] text-[#22336f] py-6 text-center">  
        <p>Mă puteți contacta fie pe LinkedIn, fie pe E-mail.</p>
        <div className="flex justify-center mt-2">
          <a href="" target="_blank" rel="noopener noreferrer" className="mr-4">
            <i className="fab fa-linkedin fa-2x text-[#22336f] hover:text-[#4a7296]"></i>  
          </a>
          <a href="" className="mr-4">
            <i className="fas fa-envelope fa-2x text-[#22336f] hover:text-[#4a7296]"></i>  
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
