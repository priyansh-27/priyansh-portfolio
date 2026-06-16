import { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);
const [visible, setVisible] = useState(true);
const [forceVisible, setForceVisible] = useState(false);

const lastScrollY = useRef(0);
const timerId = useRef(null);

useEffect(() => {
const homeSection = document.querySelector("#home");


const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setForceVisible(true);
      setVisible(true);
    } else {
      setForceVisible(false);
    }
  },
  {
    threshold: 0.1,
  }
);

if (homeSection) {
  observer.observe(homeSection);
}

return () => {
  if (homeSection) {
    observer.unobserve(homeSection);
  }
};


}, []);

useEffect(() => {
const handleScroll = () => {
if (forceVisible) {
setVisible(true);
return;
}


  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY.current) {
    setVisible(false);
  } else {
    setVisible(true);

    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      setVisible(false);
    }, 3000);
  }

  lastScrollY.current = currentScrollY;
};

window.addEventListener("scroll", handleScroll, {
  passive: true,
});

return () => {
  window.removeEventListener("scroll", handleScroll);

  if (timerId.current) {
    clearTimeout(timerId.current);
  }
};


}, [forceVisible]);

return (
<>
<nav
className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
>
{/* Branding */} <div className="flex items-center gap-3"> <div
         className="
           w-10 h-10
           rounded-full
           flex items-center justify-center
           font-bold text-white
           bg-gradient-to-r
           from-[#1CD8D2]
           via-[#00bf8f]
           to-[#302b63]
         "
       >
PK </div>


      <div className="hidden sm:block">
        <h1 className="text-lg md:text-xl font-bold text-white">
          Priyansh Kushwaha
        </h1>

        <p className="text-xs text-gray-400">
          Java Backend Developer
        </p>
      </div>
    </div>

    {/* Menu Button */}
    <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
      <button
        onClick={() => setMenuOpen(true)}
        className="text-white text-3xl focus:outline-none"
        aria-label="Open Menu"
      >
        <FiMenu />
      </button>
    </div>

    {/* Resume Button */}
    <div className="hidden lg:block">
      <a
        href="/Resume.pdf"
        download
        className="
          px-5 py-2
          rounded-full
          font-medium
          text-white
          bg-gradient-to-r
          from-[#1CD8D2]
          via-[#00bf8f]
          to-[#302b63]
          shadow-lg
          hover:opacity-90
          transition
        "
      >
        Download Resume
      </a>
    </div>
  </nav>

  <OverlayMenu
    isOpen={menuOpen}
    onClose={() => setMenuOpen(false)}
  />
</>


);
}
