import { useState } from "react";

export default function Contact() {
  const email = "harirajs895@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
  };

  return (
    <section id="contact" className="py-20 bg-white/2">
      <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-4">Contact</h2>

        {/* Email + Copy Button */}
        <p className="text-gray-300 mb-6 flex items-center justify-center gap-2">
          Email:{" "}
          <a
            href={`mailto:${email}`}
            className="text-purpleish-200 underline"
          >
            {email}
          </a>
          <button
            onClick={copyEmail}
            className="px-2 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </p>

        {/* Phone */}
        <p className="text-gray-300 mb-6">Phone: +918940369214</p>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/hariraj-s-065166216/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
