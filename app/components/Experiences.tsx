import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Experiences: React.FC = () => {
  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "SASS", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" },
    { name: "TypeScript", level: "Basic" },
    { name: "Material UI", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "PostgreSQL", level: "Basic" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ];

  return (
    <div id="experiences" className="py-12 px-6 mt-4">
      <div className="text-center mb-8">
        <p className="text-lg font-medium font-Ovo text-gray-600">Explore My</p>
        <h1 className="text-3xl font-bold font-Ovo text-gray-800">Experience</h1>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Development */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Frontend Development
          </h2>
          <div className="space-y-4">
            {frontendSkills.map((skill) => (
              <article
                key={skill.name}
                className="flex items-center space-x-4 border-b border-gray-200 pb-2"
              >
                <Image
                  src={assets.checkmark}
                  alt="Experience icon"
                  className="w-6 h-6"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500">{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* Backend Development */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Backend Development
          </h2>
          <div className="space-y-4">
            {backendSkills.map((skill) => (
              <article
                key={skill.name}
                className="flex items-center space-x-4 border-b border-gray-200 pb-2"
              >
                <Image
                  src={assets.checkmark}
                  alt="Experience icon"
                  className="w-6 h-6"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500">{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Image
          src={assets.arrow}
          alt="Arrow icon"
          className="w-8 h-8 mx-auto cursor-pointer"
          onClick={() => (window.location.href = "./#projects")}
        />
      </div>
    </div>
  );
};

export default Experiences;
