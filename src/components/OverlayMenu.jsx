import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
const isMobile =
typeof window !== "undefined" &&
window.innerWidth < 1024;

const origin = isMobile ? "95% 8%" : "50% 8%";

const menuItems = [
{
name: "Home",
href: "#home",
},
{
name: "About",
href: "#about",
},
{
name: "Skills",
href: "#skills",
},
{
name: "Projects",
href: "#projects",
},
{
name: "Journey",
href: "#experience",
},
{
name: "Contact",
href: "#contact",
},
];

return ( <AnimatePresence>
{isOpen && (
<motion.div
className="fixed inset-0 flex items-center justify-center z-50"
initial={{
clipPath: `circle(0% at ${origin})`,
}}
animate={{
clipPath: `circle(150% at ${origin})`,
}}
exit={{
clipPath: `circle(0% at ${origin})`,
}}
transition={{
duration: 0.7,
ease: [0.4, 0, 0.2, 1],
}}
style={{
backgroundColor: "rgba(0,0,0,0.97)",
}}
>
{/* Close Button */} <button
         onClick={onClose}
         className="absolute top-6 right-6 text-white text-3xl"
         aria-label="Close Menu"
       > <FiX /> </button>


      <div className="flex flex-col items-center">
        {/* Branding */}
        <div className="mb-12 text-center">
          <h2
            className="
            text-4xl md:text-6xl
            font-bold
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-[#1CD8D2]
            via-[#00bf8f]
            to-[#302b63]
          "
          >
            Priyansh Kushwaha
          </h2>

          <p className="text-gray-400 mt-3">
            Java Backend Developer • Android Developer
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-6 text-center">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2 + index * 0.08,
              }}
            >
              <a
                href={item.href}
                onClick={onClose}
                className="
                text-3xl md:text-5xl
                font-semibold
                text-white
                hover:text-[#1CD8D2]
                transition-colors
                duration-300
              "
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Resume Button */}
        <motion.a
          href="/Resume.pdf"
          download
          onClick={onClose}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
          mt-12
          px-8
          py-3
          rounded-full
          text-white
          font-semibold
          bg-gradient-to-r
          from-[#1CD8D2]
          via-[#00bf8f]
          to-[#302b63]
          hover:scale-105
          transition
        "
        >
          Download Resume
        </motion.a>
      </div>
    </motion.div>
  )}
</AnimatePresence>


);
}
