import companyLogo from "../assets/images/company.png";
import collegeLogo from "../assets/images/college.png";
import personalLogo from "../assets/images/personal.png";

export const expCards = [
  {
    title: "Frontend Developer Intern",
    date: "October 2025 – Dec 2025",
    imgPath: "",
    logoPath: companyLogo,
    responsibilities: [
      "Assisted in building responsive UI using React & Tailwind CSS.",
      "Collaborated with senior developers to fix bugs and improve performance.",
      "Converted UI/UX designs into clean and functional components.",
      "Learned workflow tools like Git and Figma.",
    ],
  },
  {
    title: "Major Project – University Management System",
    date: "Feb 2025 – Apr 2025",
    imgPath: "",
    logoPath: collegeLogo,
    responsibilities: [
      "Developed a full-stack portal for students, parents, faculty & HOD.",
      "Implemented certificate upload, attendance, internal marks & chatbot.",
      "Created dashboards using HTML, CSS, JS, Node.js & MongoDB.",
    ],
  },
  {
    title: "Personal Projects",
    date: "May 2025 – Aug 2025",
    imgPath: "",
    logoPath: personalLogo,
    responsibilities: [
      "Built Flight Management System using HTML, CSS, JS, Java, MySQL.",
      "Created booking, scheduling & passenger UI.",
      "Implemented CRUD and DB connectivity.",
    ],
  },
];
console.log("FILE LOCATION:", import.meta.url);
