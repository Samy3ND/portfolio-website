import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto text-center mb-20">
                {/* Footer Text */}
                
                
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt--10">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-400 transition"
                        aria-label="Facebook"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-yellow-400 transition"
                                            aria-label="Twitter"
                                        >
                                            <FaTwitter size={24} />
                                        </a>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-yellow-400 transition"
                                            aria-label="LinkedIn"
                                        >
                                            <FaLinkedin size={24} />
                                        </a>
                                        <a
                                            href="https://github.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-yellow-400 transition"
                                            aria-label="GitHub"
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                    </div>
                                    <p className="text-gray-400 mb-4 mt-2">
                                  © 2025 Samyog KC. All rights reserved.
                                      </p>
                                     <p className="text-gray-400 mb-4 mt--7"> Version 1.0</p>
                                </div>
                            </footer>
                        );
                    };
                    
                    export default Footer;
                    
