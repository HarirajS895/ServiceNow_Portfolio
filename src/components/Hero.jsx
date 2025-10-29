import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
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
                  'Aspiring ServiceNow Developer',
                  'Platform Automation & Integrations',
                ],
                autoStart: true,
                loop: true,
                delay: 40,
              }}
            />
          </div>

          <p className="mt-6 text-gray-300 max-w-xl">
            I manage and enhance large-scale ServiceNow platforms for healthcare clients —
            focusing on ITSM, GRC, cloning strategies, SnowMirror backups, and automation.
            Transitioning deeper into ServiceNow development with hands-on Glide scripting
            and integrations.
          </p>

          <div className="mt-6 flex gap-4">
            {/* ✅ Updated to PDF */}
            <a
              href="/assets/resume.pdf"
              download
              className="px-5 py-3 bg-purpleish-500 hover:bg-purpleish-600 rounded shadow-lg"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-5 py-3 border border-white/10 rounded text-sm"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 rounded-full ring-4 ring-purpleish-500 overflow-hidden shadow-2xl">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
