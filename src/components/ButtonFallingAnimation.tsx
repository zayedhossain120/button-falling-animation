"use client";
import { motion } from "framer-motion"; // if you want to make client side randaring

// import * as motion from "framer-motion/client"; // if you want to render serverside

const getRandomX = () => Math.floor(Math.random() * 200 - 100);
const getRandomY = () => Math.floor(Math.random() * (800 - 1200 + 2) - 400);
const getRandomDuration = () => Math.random() * (12 - 6 + 1) + 2;

const ButtonFallingAnimation = () => {
  const services = [
    "Web Development",
    "Search Engine Optimization",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Solutions",
    "Web Development",
    "Digital Marketing",
    "Cloud Solutions",
    "Web Development",
    "Search Engine Optimization",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Solutions",
    "E-commerce Solutions",
    "Software Development",
    "IT Consulting",
    "Cybersecurity",
    "Blockchain Development",
    "DevOps Services",
    "Data Analytics",
    "Machine Learning & AI",
    "Content Management Systems",
    "Custom CRM Development",
    "API Integration",
    "Technical Support",
    "AR/VR Development",
    "Hosting Services",
    "Data Analytics",
    "Machine Learning & AI",
    "Content Management Systems",
    "Custom CRM Development",
    "API Integration",
  ];

  return (
    <section className="flex h-screen items-end justify-center w-full overflow-hidden py-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-2 ">
        {services?.map((item, i) => (
          <motion.button
            key={i}
            initial={{ y: getRandomY(), x: getRandomX(), opacity: 0 }}
            animate={{
              y: 0,
              x: getRandomX(),
              opacity: 1,
              rotate: getRandomX(),
            }}
            transition={{
              duration: getRandomDuration(),
              delay: 0.2,
              type: "spring",
            }}
            drag={true}
            className="border border-white text-white rounded-full py-2 px-7 shadow-lg whitespace-nowrap w-fit"
          >
            {item}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default ButtonFallingAnimation;
