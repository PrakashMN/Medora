import { 
  BrainCircuit, 
  FolderOpenDot, 
  Stethoscope, 
  Smartphone,
  Bot,
  ClipboardList,
  Pill,
  Activity,
  Video,
  Hospital,
  Link,
  Search,
  Calendar,
  BarChart,
  Dna,
  Lock,
  Zap,
  Cloud
} from 'lucide-react';
import React from 'react';

export const solutionsData = [
  {
    id: 1,
    icon: <BrainCircuit />,
    title: "AI-powered Healthcare Platform",
    desc: "Intelligent symptom checking and preventative insights utilizing cutting-edge machine learning."
  },
  {
    id: 2,
    icon: <FolderOpenDot />,
    title: "Unified Health Records",
    desc: "Secure, decentralized medical history that you control, accessible anywhere in the world."
  },
  {
    id: 3,
    icon: <Stethoscope />,
    title: "Doctor Discovery System",
    desc: "Seamless matching with top-tier specialists based on your specific health requirements."
  },
  {
    id: 4,
    icon: <Smartphone />,
    title: "Remote Care Support",
    desc: "Real-time vital tracking and instant video consultations from the comfort of your home."
  }
];

export const featuresList = [
  {
    id: 1,
    title: "AI Health Assistant",
    desc: "24/7 intelligent symptom checking and personalized health insights at your fingertips.",
    icon: <Bot />
  },
  {
    id: 2,
    title: "Unified Health Records",
    desc: "Secure, decentralized medical history that only you control, accessible anywhere.",
    icon: <ClipboardList />
  },
  {
    id: 3,
    title: "Smart Prescription System",
    desc: "Automated refills, drug interaction alerts, and seamless pharmacy routing.",
    icon: <Pill />
  },
  {
    id: 4,
    title: "Remote Patient Monitoring",
    desc: "Real-time vital tracking that alerts your care team the moment something feels off.",
    icon: <Activity />
  },
  {
    id: 5,
    title: "Telemedicine Access",
    desc: "Instant high-definition video consultations with top-tier specialists from home.",
    icon: <Video />
  },
  {
    id: 6,
    title: "Hospital Discovery",
    desc: "Find the nearest and best-equipped facilities for your specific medical needs.",
    icon: <Hospital />
  }
];

export const stepsData = [
  {
    id: 1,
    title: "Connect",
    desc: "Create your secure health profile in minutes.",
    icon: <Link />
  },
  {
    id: 2,
    title: "Discover",
    desc: "Find verified doctors and hospitals near you.",
    icon: <Search />
  },
  {
    id: 3,
    title: "Consult",
    desc: "Book appointments instantly and securely.",
    icon: <Calendar />
  },
  {
    id: 4,
    title: "Manage",
    desc: "Track reports, medications, and vitals easily.",
    icon: <BarChart />
  }
];

export const techStackData = [
  {
    id: 1,
    title: "AI-powered Diagnosis",
    desc: "Advanced neural networks for preliminary screening.",
    icon: <Dna />
  },
  {
    id: 2,
    title: "Secure Healthcare Records",
    desc: "Blockchain-backed immutability and encryption.",
    icon: <Lock />
  },
  {
    id: 3,
    title: "Real-time Monitoring",
    desc: "IoT integration for continuous patient vitals tracking.",
    icon: <Zap />
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    desc: "Highly available and scalable medical data hosting.",
    icon: <Cloud />
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Medora's AI assistant caught a potential drug interaction that my previous system missed. It's a game-changer for patient safety and clinical efficiency.",
    author: "Dr. Sarah Chen",
    role: "Chief of Cardiology, Metro Hospital",
    avatarClass: "doctor-avatar"
  },
  {
    id: 2,
    quote: "For the first time, I have all my medical records in one place. Being able to share them instantly with a new specialist saved me weeks of waiting.",
    author: "Michael Rodriguez",
    role: "Medora Patient",
    avatarClass: "patient-avatar"
  }
];

export const partnersData = [
  "HealthCorp",
  "MediSystems",
  "CareNet",
  "GlobalHealth",
  "BioTech Solutions"
];
