import { useState } from "react";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";

export default function Hero() {

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleDownloadClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Block temp emails
      const blockedDomains = [
        "tempmail.com",
        "10minutemail.com",
        "mailinator.com",
        "yopmail.com"
      ];

      const emailDomain = formData.email.split("@")[1];

      if (!emailDomain || blockedDomains.includes(emailDomain.toLowerCase())) {
        alert("Please enter a valid email (no temporary emails)");
        return;
      }

      await emailjs.send(
        "harirajgomathi@gmail.com",
        "template_igdcjut",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        "1h9XrcgZ7KUIlVxPI"
      );

      alert("Thanks! You can preview & download now.");

      window.location.href = "/assets/resume.pdf";

      setShowForm(false);
      setFormData({ name: "", email: "", phone: "" });

    } catch (error) {
      console.error("FULL ERROR:", error);
      alert(error.text || "Something went wrong");
    }
  };

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-purpleish-400">Hariraj</span> 👋
          </h1>

          <div className="text-xl text-purpleish-300 mt-4">
            <Typewriter
              options={{
                strings: [
                  'ServiceNow Consultant',
                  'ServiceNow Developer',
                  'Platform Automation & Integrations',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="mt-6 text-gray-300 max-w-xl">
            I am a results-driven ServiceNow Developer with 3.5+ years of experience building scalable, secure, and high-performance enterprise solutions. 
            My expertise spans server-side and client-side scripting, Flow Designer automation, system integrations, and platform optimization across ITSM and custom applications. 
            I focus on designing maintainable architectures that align technology with real business outcomes.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">

            <button
              onClick={handleDownloadClick}
              className="px-5 py-3 bg-purpleish-500 rounded shadow-lg hover:scale-105"
            >
              Download Resume
            </button>

            <a
              href="#projects"
              className="px-5 py-3 border border-white/10 rounded hover:border-purple-400 hover:text-purpleish-300"
            >
              View Projects
            </a>

          </div>
        </motion.div>

        {/* RIGHT - FIXED GLOW */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="relative">

            {/* 🔥 Glow BEHIND image */}
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-20 -z-10"></div>

            {/* Image */}
            <div className="w-64 h-64 rounded-full ring-4 ring-purpleish-500 overflow-hidden shadow-2xl">
              <img
                src="/assets/profile.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-gray-900 p-6 rounded-lg w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl mb-4 text-white">Enter your details</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded bg-gray-800 text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded bg-gray-800 text-white"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="p-2 rounded bg-gray-800 text-white"
              />

              <button
                type="submit"
                className="bg-purpleish-500 py-2 rounded hover:scale-105"
              >
                Submit & Download
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-sm text-gray-400 mt-2"
              >
                Cancel
              </button>

            </form>
          </div>
        </div>
      )}
    </section>
  );
}