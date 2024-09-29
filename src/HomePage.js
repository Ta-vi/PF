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
    <div>
      {/* Header */}
      <div className="flex flex-col items-center justify-center h-screen bg-[#F6F7EB]">
        <nav className="absolute top-5">
          <ul className="flex gap-10 text-lg">
            <li className="cursor-pointer hover:text-gray-500">ACASĂ</li>
            <li className="cursor-pointer hover:text-gray-500">DESPRE</li>
            <li className="cursor-pointer hover:text-gray-500">CONTACT</li>
          </ul>
        </nav>
        <div className="text-center">
  <h1 className="text-[10rem] font-bold leading-[0.9]">V.</h1> 
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
      <section className="h-screen bg-[#26547c] flex items-center justify-center p-10">

        {/* Slideshow */}
        <div className="w-3/5 relative mr-12">  
          <div className="slideshow-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-full h-[60vh] object-cover transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                alt={`Slideshow Proiect 1 ${index + 1}`}
                style={{ display: currentIndex === index ? 'block' : 'none' }}  
              />
            ))}
          </div>

        {/* Sageti pentru navigare */}
          <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-left text-black text-4xl"></i>
          </button>
          <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-right text-black text-4xl"></i>
          </button>
      </div>

        {/* Descriere proiect */}
          <div className="w-1/4 text-white p-5">  
            <h2 className="text-4xl font-bold">Proiect 1</h2>
            <p className="text-xl mt-2">Tip site</p>
            <p className="text-lg mt-4">Descriere</p>
            <p className="text-lg mt-4">Descriere</p>
          <div className="flex flex-wrap mt-4">
            <span className="mr-2 mb-2 px-4 py-2 bg-[#4a7296]  text-white rounded">Tehnologie 1</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#4a7296]  text-white rounded">Tehnologie 2</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#4a7296]  text-white rounded">Tehnologie 3</span>
          </div>

          {/* Butoane */}
          <div className="mt-6">
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 mr-4 bg-[#1c4163]  hover:bg-[#041d33] text-white rounded">
                Vezi Website
              </button>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 bg-[#1c4163] hover:bg-[#041d33] text-white rounded">
                Vezi Cod
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Proiect 2 */}
      <section className="h-screen bg-[#ef476f] flex items-center justify-center">

        {/* Slideshow */}
        <div className="w-3/5 relative mr-12">  
          <div className="slideshow-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-full h-[60vh] object-cover transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                alt={`Slideshow Proiect 2 ${index + 1}`}
                style={{ display: currentIndex === index ? 'block' : 'none' }}  
              />
            ))}
          </div>

        {/* Sageti pentru navigare */}
          <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-left text-black text-4xl"></i>
          </button>
          <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-right text-black text-4xl"></i>
          </button>
        </div>

        {/* Descriere proiect */}
        <div className="w-1/4 text-white p-5">  
          <h2 className="text-4xl font-bold">Proiect 2</h2>
          <p className="text-xl mt-2">Tip site</p>
          <p className="text-lg mt-4">Descriere</p>
          <p className="text-lg mt-4">Descriere</p>
          <div className="flex flex-wrap mt-4">
            <span className="mr-2 mb-2 px-4 py-2 bg-[#996470] text-white rounded">Tehnologie 1</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#996470] text-white rounded">Tehnologie 2</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#996470] text-white rounded">Tehnologie 3</span>
          </div>

        {/* Butoane */}
          <div className="mt-6">
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 mr-4 bg-[#7b4854] hover:bg-[#6b2d3b] text-white rounded">
                Vezi Website
              </button>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 bg-[#7b4854] hover:bg-[#6b2d3b] text-white rounded">
                Vezi Cod
              </button>
            </a>
          </div>
        </div>
      </section>
  
      {/* Proiect 3 */}
      <section className="h-screen bg-[#ffd166] flex items-center justify-center">

        {/* Slideshow */}
        <div className="w-3/5 relative mr-12">  
          <div className="slideshow-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-full h-[60vh] object-cover transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                alt={`Slideshow Proiect 3 ${index + 1}`}
                style={{ display: currentIndex === index ? 'block' : 'none' }}  
              />
            ))}
          </div>
          
        {/* Sageti pentru navigare */}
          <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-left text-black text-4xl"></i>
          </button>
          <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
            <i className="fas fa-circle-chevron-right text-black text-4xl"></i>
          </button>
        </div>

        {/* Descriere proiect */}
        <div className="w-1/4 text-black p-5">  
          <h2 className="text-4xl font-bold">Proiect 3</h2>
          <p className="text-xl mt-2">Tip site</p>
          <p className="text-lg mt-4">Descriere</p>
          <p className="text-lg mt-4">Descriere</p>
          <div className="flex flex-wrap mt-4">
            <span className="mr-2 mb-2 px-4 py-2 bg-[#ffdb88] text-black rounded">Tehnologie 1</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#ffdb88] text-black rounded">Tehnologie 2</span>
            <span className="mr-2 mb-2 px-4 py-2 bg-[#ffdb88] text-black rounded">Tehnologie 3</span>
          </div>

          {/* Butoane */}
          <div className="mt-6">
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 mr-4 bg-[#f3cd77] hover:bg-[#ffc234] text-black rounded">
                Vezi Website
              </button>
            </a>  
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 bg-[#f3cd77] hover:bg-[#ffc234] text-black rounded">
                Vezi Cod
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
