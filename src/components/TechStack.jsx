import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

// Import images
import reactImg from "../assets/images/react.png";
import javaImg from "../assets/images/java.jpg";
import nodeImg from "../assets/images/node.png";
import gitImg from "../assets/images/git.svg";

gsap.registerPlugin(ScrollTrigger);

const techStackImgs = [
  { name: "React Developer", imgPath: reactImg },
  { name: "Java Developer", imgPath: javaImg },
  { name: "Backend Developer", imgPath: nodeImg },
  { name: "Version Control", imgPath: gitImg },
];

const TechStack = () => {
  const imgRefs = [];

  useGSAP(() => {
    // Animate cards fade-in
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );

    // 3D rotation animation
    imgRefs.forEach((img) => {
      gsap.to(img, {
        rotationY: 20,         // Rotate 20° along Y axis
        rotationX: 10,         // Slight tilt on X axis
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        transformOrigin: "center center",
      });
    });
  });

  return (
    <section id="skills" className="flex flex-col items-center section-padding bg-black min-h-screen">
      <div className="w-full max-w-6xl px-5 py-5 md:px-10 ">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {techStackImgs.map((item, index) => (
            <div
              key={index}
              className="tech-card bg-white/10 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full"
            >
              <div
                className="tech-icon-wrapper w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2 sm:mb-3"
                ref={(el) => (imgRefs[index] = el)}
              >
                <img
                  src={item.imgPath}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-white text-center font-medium text-sm sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
