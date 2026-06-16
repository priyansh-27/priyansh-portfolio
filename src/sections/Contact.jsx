import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
} from "react-icons/fa";

import ParticlesBackground from "../components/ParticlesBackground";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
message: "",
});

const [status, setStatus] = useState("");

const handleChange = (e) => {
const { name, value } = e.target;


setFormData((prev) => ({
  ...prev,
  [name]: value,
}));

};

const handleSubmit = async (e) => {
e.preventDefault();


if (
  !formData.name.trim() ||
  !formData.email.trim() ||
  !formData.message.trim()
) {
  return;
}

setStatus("sending");

try {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    },
    PUBLIC_KEY
  );

  setStatus("success");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
} catch (error) {
  console.error(error);
  setStatus("error");
}


};

return ( <section
   id="contact"
   className="relative min-h-screen bg-black text-white overflow-hidden py-20 px-6"
 > <ParticlesBackground />

```
  <div className="relative z-10 max-w-7xl mx-auto">
    <motion.h2
      className="text-center text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      Contact Me
    </motion.h2>

    <motion.p
      className="text-center text-gray-400 mb-14 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Interested in collaborating, discussing projects,
      internships, or software development opportunities?
      Feel free to reach out.
    </motion.p>

    <div className="grid lg:grid-cols-2 gap-10">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
      >
        <h3 className="text-2xl font-bold mb-8">
          Get In Touch
        </h3>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-xl" />
            <span>
              kushwahapriyansh980@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-cyan-400 text-xl" />
            <span>+91 99936 91342</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            <span>Indore, Madhya Pradesh, India</span>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <a
            href="https://github.com/priyansh-27"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/priyansh-kushwaha-0985252a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
      >
        <h3 className="text-2xl font-bold mb-8">
          Send Message
        </h3>

        <div className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
          />

          <textarea
            rows={6}
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
          />

          {status && (
            <p
              className={
                status === "success"
                  ? "text-green-400"
                  : status === "error"
                  ? "text-red-400"
                  : "text-yellow-400"
              }
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message sent successfully!"
                : "Failed to send message."}
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 rounded-lg font-semibold bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message"}
          </motion.button>
        </div>
      </motion.form>
    </div>
  </div>
</section>


);
}
