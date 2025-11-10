import agentCodeurCover from "../assets/agentcodeur.png";
import solarSystemCover from "../assets/solar-system.png";
import cocolabCover from "../assets/cocolab.png";
import creepyNightCover from "../assets/creepynight.webp";



export type FrameName = "cadre" | "cadre2" | "cadre3";

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  tagline: string;
  cover: string; // image ou poster vidéo
  href?: string; // lien externe si besoin
  cadre?: FrameName; // permet de choisir le cadre visuel
};

export const projects: Project[] = [
  {
    slug: "agent-codeur",
    title: "Agent Codeur",
    year: "2025", 
    role: "Developpement IA",
    tagline: "Un assistant IA pour les développeurs",
    cover: agentCodeurCover.src,
    cadre: "cadre1"
  },
  {
    slug: "solar-system",
    title: "Solar System",
    year: "2025",
    role: "Développement web en 3 dimensions",
    tagline: "Explorez le système solaire en 3D avec Three.js",
    cover: solarSystemCover.src,
    cadre: "cadre2"
  },
  {
    slug: "cocolab",
    title: "CocoLab",
    year: "2025",
    role: "Design et développement web",
    tagline: "Site vitrine pour une entreprise de développement informatique",
    cover: cocolabCover.src,
    cadre: "cadre3"
  },
  {
    slug: "creepy-night",
    title: "Creepy Night",
    year: "2024",
    role: "Direction technique",
    tagline: "Ambiance, rythme, et micro-interactions au service du spectacle.",
    cover: creepyNightCover.src,
    cadre: "cadre2"
  },
  {
    slug: "photoswipe",
    title: "PhotoSwipe",
    year: "2024",
    role: "Développement IOS",
    tagline: "Application de triage photo",
    cover: "/media/photoswipe.jpg",
    cadre: "cadre3"
  },
];
