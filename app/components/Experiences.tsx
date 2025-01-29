import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Experiences: React.FC = () => {
  const frontendSkills = [
    { name: "JavaScript", level: "Intermediate", icon: assets.js },
    { name: "TypeScript", level: "Intermediate", icon: assets.typeScript },
    { name: "React", level: "Intermediate", icon: assets.react },
    { name: "Next Js", level: "Intermediate", icon: assets.next },
    { name: "Redux", level: "Intermediate", icon: assets.redux },
    { name: "ZuStand", level: "Intermediate", icon: assets.zuStand },
    { name: "TailWind CSS", level: "Intermediate", icon: assets.tailwind },
    { name: "Figma", level: "Intermediate", icon: assets.figma },
    { name: "SASS", level: "Intermediate", icon: assets.sass },
    { name: "Material UI", level: "Intermediate", icon: assets.materialUi },
  ];

  const backendSkills = [
    { name: "Node JS", level: "Intermediate", icon: assets.node },
    { name: "Express JS", level: "Intermediate", icon: assets.express },
    { name: "My SQL", level: "Intermediate", icon: assets.sql },
    { name: "Mongo DB", level: "Intermediate", icon: assets.mongodb },
    { name: "Firebase", level: "Intermediate", icon: assets.firebase },
    { name: "PostgreSQL", level: "Basic", icon: assets.postgreSql },
    { name: "Git", level: "Intermediate", icon: assets.git },
  ];

  return (
    <motion.div id="experiences" className="py-12 px-6 mt-4">
      <div className="text-center mb-8">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg font-medium font-Ovo text-gray-800 dark:text-white"
        >
          Explore My
        </motion.p>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl font-bold font-Ovo text-gray-800 mt-2 dark:text-white"
        >
          Experience
        </motion.h1>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 dark:bg-darkTheme">
        {/* Frontend Development */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Frontend Development
          </h2>
          <div className="space-y-4">
            {frontendSkills.map((skill) => (
              <motion.article
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="flex items-center space-x-4 border-b border-gray-200 pb-2"
              >
                <Image src={skill.icon} alt="Experience icon" className="w-8" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500">{skill.level}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
        {/* Backend Development */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Backend Development
          </h2>
          <div className="space-y-4">
            {backendSkills.map((skill) => (
              <motion.article
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="flex items-center space-x-4 border-b border-gray-200 pb-2"
              >
                <Image src={skill.icon} alt="Experience icon" className="w-8" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500">{skill.level}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 text-center"
      >
        <Image
          src={assets.arrow}
          alt="Arrow icon"
          className="w-8 h-8 mx-auto cursor-pointer"
          onClick={() => (window.location.href = "./#projects")}
        />
      </motion.div>
    </motion.div>
  );
};

export default Experiences;
