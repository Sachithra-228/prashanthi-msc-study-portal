window.DATA = window.DATA || {};
/* DATA.mod(code) returns the content bucket for one module (lectures, mcq, written, papers, cheatsheet, guide). */
DATA.mod = function (code) { DATA.content = DATA.content || {}; return (DATA.content[code] = DATA.content[code] || {}); };
/* Exam dates are from the SLIIT MSc July 2026 intake final exam timetable (Nov–Dec 2026). */
DATA.modules = [
  { code: "IT5090", name: "Research Methodology", place: "The Great Library", hue: 335, ready: true,
    date: "2026-11-21", dateLabel: "Sat, 21 Nov", time: "09:00 – 11:00", duration: "2 hrs", type: "Closed book · LMS quiz (onsite, computer-based)", lic: "Dr. Kasun Karunanayaka",
    desc: "Research process, philosophy, ethics, sampling, data analysis, qualitative methods and thesis writing." },
  { code: "IT5080", name: "DevOps", place: "The Room of Requirement", hue: 205, ready: true,
    date: "2026-11-22", dateLabel: "Sun, 22 Nov", time: "09:00 – 12:00", duration: "3 hrs", type: "Closed book", lic: "Dr. Nimal Ratnayake",
    desc: "CI/CD, automation, containers and the culture of continuous delivery." },
  { code: "IT5070", name: "Internet of Things", place: "The Hogwarts Express", hue: 160, ready: true,
    date: "2026-11-28", dateLabel: "Sat, 28 Nov", time: "09:00 – 11:00", duration: "2 hrs", type: "Open book", lic: "Prof. Pradeep Abeygunawardhana",
    desc: "Connected devices, sensors, protocols and IoT architectures." },
  { code: "IE6053", name: "Enterprise Governance of IT", place: "The Ministry of Magic", hue: 265, ready: true,
    date: "2026-11-29", dateLabel: "Sun, 29 Nov", time: "09:00 – 12:00", duration: "3 hrs", type: "Open book", lic: "Mr. Kavinga Yapa Abeywardena",
    desc: "IT governance frameworks, risk, value delivery and alignment with business strategy." },
  { code: "IT5120", name: "Data Analytics", place: "The Divination Tower", hue: 30, ready: false,
    date: "2026-12-05", dateLabel: "Sat, 5 Dec", time: "09:00 – 12:00", duration: "3 hrs", type: "Open book", lic: "Mr. Dinesh Asanka",
    desc: "Preparing, exploring, modelling and communicating insights from data." },
  { code: "IT5130", name: "Cloud Computing", place: "The Astronomy Tower", hue: 190, ready: false,
    date: "2026-12-06", dateLabel: "Sun, 6 Dec", time: "09:00 – 11:00", duration: "2 hrs", type: "Closed book · onsite, computer-based", lic: "Ms. Shashika Lokuliyana",
    desc: "Cloud service and deployment models, virtualisation, scalability and security." }
];
