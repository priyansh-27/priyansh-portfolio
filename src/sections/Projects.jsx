import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
const projects = [
{
title: "CampusNest Roommate Finder",
tech: "React.js • Spring Boot • PostgreSQL",
description:
"A full-stack student housing platform that connects students with verified landlords and compatible roommates. Features secure authentication, roommate matching, property verification, and RESTful APIs.",
github: "https://github.com/priyansh-27",
demo: "#",
color: "from-cyan-500 to-blue-600",
},


{
  title: "Digital Steganography",
  tech: "Java • JavaFX • AES Encryption",
  description:
    "Desktop application for securely hiding and extracting secret messages inside digital images using AES encryption and image steganography techniques.",
  github: "https://github.com/priyansh-27",
  demo: "#",
  color: "from-green-500 to-emerald-600",
},

{
  title: "Digital Library",
  tech: "React.js • Vite • JavaScript",
  description:
    "Responsive web-based digital library platform for organizing and accessing educational resources with reusable React components and modern frontend architecture.",
  github: "https://github.com/priyansh-27",
  demo: "#",
  color: "from-purple-500 to-pink-600",
},


];

return ( <section
   id="projects"
   className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden"
 > <div className="absolute inset-0 pointer-events-none"> <div
       className="absolute top-20 left-10 w-[350px] h-[350px]
       rounded-full bg-gradient-to-r from-[#302b63]
       via-[#00bf8f] to-[#1CD8D2]
       opacity-20 blur-[120px]"
     />


    <div
      className="absolute bottom-20 right-10 w-[350px] h-[350px]
      rounded-full bg-gradient-to-r from-[#1CD8D2]
      via-[#00bf8f] to-[#302b63]
      opacity-20 blur-[120px]"
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <motion.h2
      className="text-center text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Featured Projects
    </motion.h2>

    <motion.p
      className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      A collection of projects demonstrating my skills in
      backend development, full-stack applications,
      software engineering, and problem solving.
    </motion.p>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-cyan-400/40 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
        >
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-6`}
          />

          <h3 className="text-2xl font-bold mb-3">
            {project.title}
          </h3>

          <p className="text-cyan-400 text-sm mb-4">
            {project.tech}
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:scale-105 transition"
            >
              <FaExternalLinkAlt />
              Details
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


);
}
