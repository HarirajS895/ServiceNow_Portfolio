import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-purpleish-400">Hariraj</span> 👋
          </h1>

          <div className="text-xl text-purpleish-300 mt-4 font-medium">
            <Typewriter
              options={{
                strings: [
                  'ServiceNow Administrator',
                  'ServiceNow Developer',
                  'Platform Automation & Integrations',
                ],
                autoStart: true,
                loop: true,
                delay: 40,
              }}
            />
          </div>

          {/* ⭐ SHORT & STRONG INTRO */}
          <p className="mt-6 text-gray-300 max-w-xl">
            I specialize in administering and developing enterprise-scale ServiceNow platforms,
            focusing on ITSM, custom applications, automation, and secure platform design.
            I also build end-to-end integrations using REST/SOAP APIs, scripted web services,
            OAuth configurations, and data exchange workflows.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">

            {/* Resume Button */}
            <a
              href="/assets/resume.pdf"
              download
              className="px-5 py-3 bg-purpleish-500 rounded shadow-lg transition-all
                         hover:shadow-purple-500/50 hover:scale-105 hover:bg-purpleish-600
                         hover:ring-2 hover:ring-purple-400"
            >
              Download Resume
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="px-5 py-3 border border-white/10 rounded text-sm transition-all
                         hover:border-purple-400 hover:text-purpleish-300 hover:shadow-purple-400/40
                         hover:scale-105 hover:ring-2 hover:ring-purple-400/60"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT SECTION — GLOW PROFILE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">

            {/* Glow aura */}
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-40 animate-pulse"></div>

            <div className="w-64 h-64 rounded-full ring-4 ring-purpleish-500 overflow-hidden shadow-2xl relative">
              <img
                src="/assets/profile.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
