import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import companyLogo from "../assets/images/company.png";
import company1Logo from "../assets/images/igoraza.jpg";
import collegeLogo from "../assets/images/college.png";
import personalLogo from "../assets/images/personal.png";

// Components
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const TimelineCard = ({ title, date, responsibilities, logoPath, align }) => (
  <div
    className={`relative flex items-start gap-6 md:gap-10 w-full
      ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
  >
    {/* LOGO — timeline anchor */}
    <div className="flex flex-col items-center z-20 relative logo-point">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
        <img src={logoPath} alt={title} className="w-10 h-10 object-contain" />
      </div>
    </div>

    {/* CARD */}
    <div
      className={`bg-[#111] border border-gray-700 rounded-xl p-6 shadow-lg min-h-[180px] w-full md:w-[350px] opacity-0 card
        ${align === "left" ? "md:text-left" : "md:text-right"}`}
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mb-2">{date}</p>
      <ul
        className={`list-disc text-gray-400
          ${align === "left" ? "list-inside" : "list-outside md:pr-4"}`}
      >
        {responsibilities.map((res, idx) => (
          <li key={idx}>{res}</li>
        ))}
      </ul>
    </div>
  </div>
);

// DATA
const expCards = [
  {
    title: "Frontend Developer Intern at Axinor Technologies",
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
    title: "Frontend Developer Intern at Igoraza",
    date: "August 2025 – October 2025",
    logoPath: company1Logo,
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
  const pointsRef = useRef([]);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card");

    // Fade-in animation for cards
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    // Function to position vertical line
    const updateLine = () => {
      const points = pointsRef.current;
      if (!lineRef.current || points.length === 0) return;

      const first = points[0];
      const last = points[points.length - 1];

      const firstY = first.offsetTop + first.offsetHeight / 2;
      const lastY = last.offsetTop + last.offsetHeight / 2;

      const height = lastY - firstY;

      lineRef.current.style.top = `${firstY}px`;
      lineRef.current.style.height = `${height}px`;
    };

    updateLine();

    // Animate line scale on scroll
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    window.addEventListener("resize", updateLine);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", updateLine);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 relative">
        <TitleHeader title="Experience" />

        {/* Vertical Timeline Line */}
        <div
          ref={lineRef}
          className="absolute left-12 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full z-10 shadow-lg"
          style={{ height: 0 }}
        ></div>

        {/* Timeline Cards */}
        <div className="mt-16 flex flex-col items-center gap-20 relative">
          {expCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (pointsRef.current[index] = el)}
              className="w-full"
            >
              <TimelineCard
                {...card}
                align={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
