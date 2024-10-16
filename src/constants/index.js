import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Graphics Designer",
      company_name: "Alogic Data",
      icon: starbucks,
      iconBg: "black",
      date: "June 2024 - Present",
      points: [
        "Designing graphics for digital platforms (HighSpot, Rise360, AWS, Iron Mountain) and print media (IIFL Books ).",
        "Conducting research on new tools, technologies, and methodologies, and documenting findings and processes as required.",
        "Arranging text, images, and other elements to create visually appealing layouts for various media.",
        "Enhancing and altering graphics using tools like Adobe Illustrator.",
        "Creating preliminary designs and prototypes to visualize the final Module before complete development.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Alogic Data",
      icon: tesla,
      iconBg: "black",
      date: "June 2024 - Present",
      points: [
        "Building and maintaining websites using programming languages and frameworks like JavaScript, React, NextJS and  ThreeJS.",
        "Creating responsive and user-friendly interfaces that work seamlessly across different devices and browsers.",
        "Keeping up with the latest web development trends, frameworks, and technologies to stay competitive in the field.",
        "Improving website speed and performance by optimizing code, images, and server configurations.",
      ],
    },
    {
      title: "Designer",
      company_name: "Truba Group of Institutes",
      icon: shopify,
      iconBg: "White",
      date: "Nov 2022 - Apr 2023",
      points: [
        "Designing Components like Logo's Brochures for Startup and Incubation cell in College ( Truba Cubicles )",
        "Creating Visually appealing designs reflecting professionalism of Incubation cell.",
        "PWriting Technical content for the Incubation cell online platforms.",
      ],
    },
    {
      title: "Developer Intern",
      company_name: "TXON IT Services",
      icon: meta,
      iconBg: "White",
      date: "Jan 2022 - Jul 2022",
      points: [
        "Supporting the development of websites by writing basic HTML, CSS, and JavaScript code under the guidance of senior developers.",
        "Gaining hands-on experience with front-end development tasks, including creating responsive layouts and implementing UI/UX designs.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Assisting with the integration and customization of content management systems (CMS) like WordPress, learning how to manage website content.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Help_Hub",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };