import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { LuBrain } from 'react-icons/lu';
import { GoProject } from 'react-icons/go';
import { LuContact } from 'react-icons/lu';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="bg-white fixed bottom-0 left-0 w-full sm:w-auto sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex justify-between sm:gap-6 py-4 px-8 sm:py-4 sm:px-10 rounded-t-xl sm:rounded-full shadow-lg z-20">
      {/* Home */}
      <a
        href="#home"
        onClick={() => setActiveNav('#')}
        className={`${
          activeNav === '#'
            ? 'bg-gray-300 text-black'
            : 'bg-transparent text-gray-500'
        } flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full text-2xl sm:text-3xl transition-all hover:bg-gray-200 hover:text-black`}
        aria-current={activeNav === '#' ? 'page' : undefined}
      >
        <AiOutlineHome />
      </a>

      {/* About */}
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={`${
          activeNav === '#about'
            ? 'bg-gray-300 text-black'
            : 'bg-transparent text-gray-500'
        } flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full text-2xl sm:text-3xl transition-all hover:bg-gray-200 hover:text-black`}
        aria-current={activeNav === '#about' ? 'page' : undefined}
      >
        <BiUser />
      </a>

      {/* Experience */}
      <a
        href="#skills"
        onClick={() => setActiveNav('#experience')}
        className={`${
          activeNav === '#experience'
            ? 'bg-gray-300 text-black'
            : 'bg-transparent text-gray-500'
        } flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full text-2xl sm:text-3xl transition-all hover:bg-gray-200 hover:text-black`}
        aria-current={activeNav === '#experience' ? 'page' : undefined}
      >
        <LuBrain />
      </a>

      {/* Projects */}
      <a
        href="#projects"
        onClick={() => setActiveNav('#myprojects')}
        className={`${
          activeNav === '#myprojects'
            ? 'bg-gray-300 text-black'
            : 'bg-transparent text-gray-500'
        } flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full text-2xl sm:text-3xl transition-all hover:bg-gray-200 hover:text-black`}
        aria-current={activeNav === '#myprojects' ? 'page' : undefined}
      >
        <GoProject />
      </a>

      {/* Contacts */}
      <a
        href="#contacts"
        onClick={() => setActiveNav('#contacts')}
        className={`${
          activeNav === '#contact'
            ? 'bg-gray-300 text-black'
            : 'bg-transparent text-gray-500'
        } flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full text-2xl sm:text-3xl transition-all hover:bg-gray-200 hover:text-black`}
        aria-current={activeNav === '#contacts' ? 'page' : undefined}
      >
        <LuContact />
      </a>
    </nav>
  );
};

export default Nav;
