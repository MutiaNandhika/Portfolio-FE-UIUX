import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Mutia",
  lastName: "Nandhika",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front-End Developer & UI Designer",
  avatar: "/images/avatar.jpg",
  email: "mutianandhika@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Indonesia"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about front-end development, UI/UX design, and my experience in building impactful
      web and mobile projects.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mutia-nandhika/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Github",
    icon: "github",
    link: "https://github.com/MutiaNandhika",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting user-friendly experiences with code and creativity</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">SosmedCare</strong></>,
    href: "https://github.com/MutiaNandhika/Sispak-KecanduanMedsos-BC",
  },
  subline: (
    <>
      I'm Mutia, an informatics student passionate about building intuitive digital experiences.
      <br /> Currently focusing on front-end development and UI/UX design using Figma, HTML, CSS,
      and JavaScript.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mutia is a Purwokerto-based front-end developer and UI designer. Her experience includes
        building responsive web and mobile applications, leading organizational teams, and
        contributing to research-based design projects. With strong visual communication and
        analytical skills, she aims to deliver meaningful digital solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT Kilang Pertamina Internasional",
        timeframe: "Jul – Aug 2024",
        role: "UI/UX Intern",
        achievements: [
          <>Designed the UI/UX for a web-based inventory management system using Figma.</>,
        ],
        images: [],
      },
      {
        company: "Dinkominfo Kabupaten Banyumas",
        timeframe: "Dec 2020 – Mar 2021",
        role: "Intern",
        achievements: [
          <>Developed UI/UX for Flutix mobile app and a SIAKAD website using CodeIgniter 3.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universitas Jenderal Soedirman",
        description: <>Studying Informatics with GPA 3.93/4.0</>,
      },
      {
        name: "SMK Telkom Purwokerto",
        description: <>Studied Software Engineering with final score 90.79/100</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Experienced in designing web and mobile UI/UX prototypes.</>,
        images: [],
      },
      {
        title: "Laravel",
        description: <>Built dynamic websites and systems using Laravel + MySQL + Blade.</>,
        images: [],
      },
      {
        title: "Flutter",
        description: <>Developed mobile apps for event registration and selection.</>,
        images: [],
      },
      {
        title: "JavaScript & HTML/CSS",
        description: <>Core stack for interactive, responsive web development.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/uiux",
  label: "UIUX",
  title: `Projects – ${person.name}`,
  description: `Development and UI/UX projects by ${person.name}`,
};

const work = {
  path: "/frontend",
  label: "FrontEnd",
  title: `Projects – ${person.name}`,
  description: `Development and UI/UX projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Snapshots of inspiration and personal moments.`,
  images: [
    {
      src: "/images/gallery/1.jpg",
      alt: "Nama Sertifikat: Complete UI Designer: Visual Design, Prototype, Usability Test – BuildWithAngga (14 September 2024)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2.jpg",
      alt: "Nama Sertifikat: Intro to Software Engineering – RevoU (19 Januari 2024)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "Nama Sertifikat: Sertifikat Kompetensi Rekayasa Perangkat Lunak (Software Engineering), KKNI Level II – BNSP – LSP SMK Telkom Sandhy Putra Purwokerto (30 Mei 2022)",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "Nama Sertifikat: Menteri Riset dan Data – BEM Unsoed 2024",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "Nama Sertifikat: Desain Terbaik – Praktikum Pemrograman Web – Laboratorium Informatika Universitas Jenderal Soedirman",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/6.jpg",
      alt: "Nama Sertifikat: Bendahara Kementerian Riset dan Data – Nilai Rata-rata 80 – BEM Unsoed",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/7.jpg",
      alt: "Surat Keterangan Magang – PT Kilang Pertamina Internasional, Refinery Unit IV Cilacap. Judul: Rancang Bangun UI/UX Aplikasi Manajemen Inventaris Berbasis Website dengan Penerapan Design Thinking",
      orientation: "vertical",
    },
  ],
};


export { person, social, newsletter, home, about, blog, work, gallery };
