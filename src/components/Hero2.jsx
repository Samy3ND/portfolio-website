import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Pic from './../assets/Pic1.png';

const Hero = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log(container);
    }, []);

    return (
        <header id="home" className="relative h-screen bg-black text-white overflow-hidden">
            {/* Particles Confined to Hero Section */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="absolute inset-0 z-0"
                options={{
                    fullScreen: false, // Ensures it stays within the parent container
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: 'push' },
                            onHover: { enable: true, mode: 'repulse' },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: '#ffffff' },
                        links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: { default: 'bounce' },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 70,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
            />

            {/* Three.js Canvas for Stars */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={200} depth={50} count={1000} factor={10} saturation={100} fade />
                </Canvas>
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-8 sm:px-10 md:px-20 space-y-4 lg:space-y-0">
                {/* Text Section */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 flex-grow mt-10 sm:mt-14 md:mt-16 lg:mt-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light lg:ml-20">Hey, I am</h1>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold lg:ml-20">Samyog KC</h2>
                    <h3 className="text-yellow-400 text-xl sm:text-4xl md:text-5xl lg:text-6xl font-light lg:ml-20">
                        Web Designer | Web Developer
                    </h3>
                </div>

                {/* Image Section */}
                <div className="relative max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[40%] xl:max-w-[30%] flex-shrink-0 lg:mr-20 ">
                    <img
                        src={Pic}
                        alt="Samyog KC"
                        className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 w-full"
                    />
                </div>
            </div>
        </header>
    );
};

export default Hero;
