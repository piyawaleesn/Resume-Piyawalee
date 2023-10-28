import neatly from "../assets/image/neatly.png";
import merrymatch from "../assets/image/merrymatch.png";

const projectDetails = [
  {
    id: 1,
    name: "Neatly",
    picture: neatly,
    content:
      " A web application for hotels where customers can book room reservations online. They can browse available rooms, make a reservation, and also have the flexibility to modify their check-in dates or cancel their room reservations.",
    stack: ["React", "Node.js", "Tailwind"],
    vdo: "https://res.cloudinary.com/demzsttwc/video/upload/v1698143222/Neatly_hmdjlq.mp4",
    status: "Completed",
    github: "https://github.com/piyawaleesn/Hotel-Management-System",
    stackDetails:
      "CSS, TypeScript, React.js, Vite.js, TailwindCSS, daisyUI, MaterialUI, Axios, Node.js, Express  and Supabase",
    features: [
      "-CRUD (Create, Read, Update, Delete) ",
      "-Upload pictures",
      "-Authentication",
      "-Make a reservation,Change check-in dates or Cancel room reservations. ",
    ],
  },
  {
    id: 2,
    name: "Merry Match",
    picture: merrymatch,
    content:
      " A web application that enables everyone to create their own dating profiles and connect with friends or new people, with the ability for users to select their matches based on criteria such as gender and age range.",
    stack: ["Next.js", "Prisma", "Tailwind"],
    vdo: "https://res.cloudinary.com/demzsttwc/video/upload/v1698151022/wvhpnrctzf1yqplhxdx0.mp4",
    status: "In Progress",
    github: "https://github.com/piyawaleesn/merrymatch",
    stackDetails:
      "CSS, JavaScript, Next.js, Prisma, Node.js, TailwindCSS, daisyUI, MaterialUI, Axios and Supabase",
    features: [
      "-CRUD (Create, Read, Update, Delete) ",
      "-Upload pictures",
      "-Authentication",
      "-Create dating profiles",
      "-Select matches based on criteria such as age range.",
    ],
  },
];
export { projectDetails };
