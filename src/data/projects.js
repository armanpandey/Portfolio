const projects = [
  {
    id: 1,
    title: "Aurum Stay",
    subtitle: "Hotel Booking Website",
    description:
      "A hotel room booking web application where users can browse and filter rooms based on preferences and budget, designed for long-duration stays.",
    fullDescription:
      "Aurum Stay is a frontend hotel booking website developed as part of my App Development Lab project. Built using HTML5, CSS3, and Vanilla JavaScript without any frontend framework. Features multiple pages including Home, Rooms, Booking, About, and Contact. The booking page includes a dynamic cost calculator based on check-in/check-out dates and room type.",
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    github: "https://github.com/armanpandey/Aurum_Stay_Hotel_Booking_Website",
    live: "",
    images: [
      "/stay/stay-home.png",
      "/stay/stay-rooms.png",
      "/stay/stay-booking.png",
      "/stay/stay-about.png",
    ],
    features: [
      "Dynamic cost calculator based on dates and room type",
      "Room filtering and browsing",
      "Responsive navigation with hamburger menu",
      "Client-side form validation",
      "Multiple pages — Home, Rooms, Booking, About, Contact",
    ],
  },
  {
    id: 2,
    title: "ECG Based Stress and Emotion Detection System",
    description:
      "A machine learning based system that analyzes ECG signals to detect stress levels and emotional states in real-time.",
    technologies: ["Python", "Machine Learning", "ECG Signal Processing"],
    live: "",
  },
  {
    id: 3,
    title: "Ultra-Capacitor Based Solar PV Power Management System",
    description:
      "A research project focused on efficient solar energy storage and management using ultra-capacitors for electric and hybrid electric vehicles.",
    technologies: ["Solar Energy", "Power Electronics", "Research"],
    live: "",
  },
];

export default projects;
