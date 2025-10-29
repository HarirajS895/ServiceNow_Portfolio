import { useState } from "react";
import aiPdf from "../assets/AI-Powered_Service_Catalog_Auto-Selector.pdf";
import assistantPdf from "../assets/Intelligent_Enterprise_Assistant.pdf";

export default function FuturisticIdeas() {
  const ideas = [
    {
      name: "AI-Powered Service Catalog Auto-Selector",
      file: aiPdf,
    },
    {
      name: "Intelligent Enterprise Assistant",
      file: assistantPdf,
    },
  ];

  const [openIdea, setOpenIdea] = useState(null);

  return (
    <section id="ideas" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-8">
          Futuristic Solutions & Enhancements 🚀
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {ideas.map((idea, i) => (
            <div
              key={i}
              onClick={() => setOpenIdea(idea)}
              className="p-6 bg-white/5 rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-purpleish-300 mb-2">
                {idea.name}
              </h3>
              <p className="text-gray-400 text-sm">
                Click to view the complete document
              </p>
            </div>
          ))}
        </div>

        {/* Popup Viewer */}
        {openIdea && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setOpenIdea(null)}
          >
            <div
              className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={openIdea.file}
                className="w-full h-full"
                title={openIdea.name}
              ></iframe>
              <button
                onClick={() => setOpenIdea(null)}
                className="absolute top-2 right-3 text-2xl font-bold text-purple-700 hover:text-purple-900"
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
