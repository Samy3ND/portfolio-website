import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
      
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mb-8">
        I am a technology and aviation enthusiast passionate about building interactive web applications as a React developer. With experience in Python, content marketing, video editing, and graphic design, I enjoy solving problems with clean, efficient code and exploring new technologies.        </p>

        {/* Download CV Button */}
        <a
          href="/src/Assets/cv.pdf"
          download="Samyog_CV.pdf"
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
