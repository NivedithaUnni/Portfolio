import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import companyLogo from "../assets/images/company.png";
import collegeLogo from "../assets/images/college.png";
import personalLogo from "../assets/images/personal.png";

// Components
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const TimelineCard = ({ title, date, responsibilities, logoPath }) => (
  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
    {/* Logo */}
    <div className="flex flex-col items-center z-10 relative">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
        <img src={logoPath} alt={title} className="w-10 h-10 object-contain" />
      </div>
    </div>

    {/* Card */}
    <div className="bg-[#111] border border-gray-700 rounded-xl p-6 shadow-lg min-h-[180px] w-full md:w-[350px] opacity-0 card">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mb-2">{date}</p>
      <ul className="list-disc list-inside text-gray-400">
        {responsibilities.map((res, idx) => (
          <li key={idx}>{res}</li>
        ))}
      </ul>
    </div>
  </div>
);

const expCards = [
  {
    title: "Frontend Developer Intern",
    date: "October 2025 – Dec 2025",
    logoPath: companyLogo,
    responsibilities: [
      "Built responsive UI using React & Tailwind.",
      "Fixed bugs and improved performance.",
      "Converted UI/UX designs to components.",
      "Worked with Git and Figma.",
    ],
  },
  {
    title: "University Management System",
    date: "Feb 2025 – Apr 2025",
    logoPath: collegeLogo,
    responsibilities: [
      "Built dashboards for student/parent/faculty.",
      "Added certificate upload & attendance.",
      "Implemented backend using Node.js & MongoDB.",
    ],
  },
  {
    title: "Personal Projects",
    date: "May 2025 – Aug 2025",
    logoPath: personalLogo,
    responsibilities: [
      "Developed Flight Management System UI.",
      "Added booking & passenger modules.",
      "Connected app with MySQL database.",
    ],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const logosRef = useRef([]);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card");

    // Animate cards
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    // Animate vertical timeline line between first and last logo
    if (logosRef.current.length >= 2) {
      const firstLogo = logosRef.current[0];
      const lastLogo = logosRef.current[logosRef.current.length - 1];
      const startTop = firstLogo.offsetTop + firstLogo.offsetHeight / 2;
      const endTop = lastLogo.offsetTop + lastLogo.offsetHeight / 2;
      const lineHeight = endTop - startTop;

      gsap.fromTo(
        lineRef.current,
        { height: 0, top: startTop },
        {
          height: lineHeight,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }

    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 relative">
        <TitleHeader title="Experience" />

        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-lg z-0"
          style={{ height: 0 }}
        ></div>

        <div className="mt-12 flex flex-col items-center gap-16 z-10">
          {expCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (logosRef.current[index] = el)}
              className="flex flex-col md:flex-row items-start md:items-center w-full gap-6 md:gap-10"
            >
              <TimelineCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
