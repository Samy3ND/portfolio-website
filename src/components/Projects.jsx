import React from 'react';
import pro1 from './../assets/Project1.png';
import pro2 from './../assets/Project2.png';
import pro3 from './../assets/Project3.png';
import wor1 from './../assets/Work1.png';
import wor2 from './../assets/Work2.png';
const projects = [
    {
        id: 1,
        title: 'Cover Page Maker',
        description: 'Lab Cover Page Maker for my Batchmates',
        tools: ['Python','Streamlit'],
        demoLink: 'https://cpmaker.streamlit.app/',
        githubLink: 'https://github.com/Samy3ND/CoverPage_Maker',
        image: pro1,
    },
    
    {
        id: 2,
        title: 'Wiki Table Scraper',
        description: 'Wikipedia Table Data Scraper ',
        tools: ['Python','Streamlit','BeautifulSoup'],
        demoLink: 'https://wikitablescraper.streamlit.app/',
        githubLink: 'https://github.com/Samy3ND/Wiki_TableScraper',
        image: pro2,
    },
    {
        id: 3,
        title: 'Basic Resume Builder',
        description: 'Basic Resume Builder with AI features for skills recommendation',
        tools: ['Python','Streamlit','API'],
        demoLink: '',
        githubLink: 'https://github.com/Samy3ND/resume-builder',
        image: pro3,
    },
    {
        id: 4,
        title: 'Articles on Aviation',
        description: '30+ Articles Published ',
        tools: ['Airplanes','Airports',],
        demoLink: 'https://aviationnepal.com/author/samyog/',
        image: wor1,
    },
    {
        id: 5,
        title: 'Logo Design',
        description: 'Logo Design of Mr Cake ',
        tools: ['Photoshop','Illustrator',],
        image: wor2,
    },
   
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-6 sm:px-10 md:px-16">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">My Works</h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            {/* Project Image */}
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                            )}
                            {/* Project Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:underline">
                                {project.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            {/* Tools Used */}
                            <ul className="flex flex-wrap mb-4 space-x-2">
                                {project.tools.map((tool, index) => (
                                    <li
                                        key={index}
                                        className="bg-gray-200 text-xs text-gray-800 px-3 py-1 rounded-full shadow-sm"
                                    >
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                            {/* Buttons */}
                            <div className="flex space-x-4">
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded shadow-md transition-transform hover:bg-yellow-500 hover:scale-110"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded shadow-md transition-transform hover:bg-gray-400 hover:scale-110"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
