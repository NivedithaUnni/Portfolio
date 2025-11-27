import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

const LaptopModel = () => {
  const { scene } = useGLTF("/models/laptop.glb");

  // Force-correct model scale
  React.useEffect(() => {
    scene.scale.set(0.02, 0.02, 0.02); 
    scene.position.set(0, -1.0, 0);
    scene.rotation.set(0, Math.PI, 0);
  }, [scene]);

  return <primitive object={scene} />;
};

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 bg-black text-white">

      {/* LEFT SIDE TEXT */}
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am Niveditha Unni
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-6">
          A Full Stack Developer who builds modern web applications using React, Three.js, and Java.
        </p>

        <a
          href="#work"
          className="bg-white text-[#3661DA] px-6 py-3 font-medium w-max rounded-none flex items-center gap-2 hover:bg-gray-200 transition-all duration-300"
        >
          <span>SEE MY WORK</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* RIGHT SIDE 3D MODEL */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
        <div
          className="
            w-[260px] sm:w-[340px] md:w-[420px]
            h-[180px] sm:h-[240px] md:h-[300px]
            rounded-3xl border border-white/30
            flex justify-center items-center
            p-2 relative overflow-hidden
          "
        >
          <Canvas camera={{ fov: 40, position: [0, 1.2, 6.5] }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[3, 4, 5]} intensity={1.3} />

            <LaptopModel />

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 2.5}
            />
          </Canvas>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
