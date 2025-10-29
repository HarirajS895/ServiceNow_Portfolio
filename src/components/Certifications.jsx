import { useState } from "react";
import csaPDF from "../assets/csa-cert.pdf";
import cadPDF from "../assets/cad-cert.pdf";
import cisitsmPDF from "../assets/cis-itsm-cert.pdf";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [fade, setFade] = useState(false);

  const certs = [
    {
      name: "CSA (Certified System Administrator)",
      file: csaPDF,
    },
    {
      name: "CAD (Certified Application Developer)",
      file: cadPDF,
    },
    {
      name: "CIS-ITSM (Certified Implementation Specialist – IT Service Management)",
      file: cisitsmPDF,
    },
  ];

  const openCert = (cert) => {
    setFade(true);
    setSelectedCert(cert);
  };

  const closeCert = () => {
    setFade(false);
    setTimeout(() => setSelectedCert(null), 300);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6" data-aos="zoom-in">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-6">
          Certifications
        </h2>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 gap-6 text-gray-200">
          {certs.map((cert) => (
            <div
              key={cert.name}
              onClick={() => openCert(cert)}
              className="p-6 bg-white/5 rounded-lg shadow-md cursor-pointer 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                         hover:bg-purple-600/20 border border-transparent hover:border-purple-500 
                         backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-400 italic">Click to view certificate →</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Viewer */}
      {selectedCert && (
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeCert}
        >
          <div
            className="relative w-[90vw] h-[90vh] bg-black/60 border border-purple-500/30 
                       backdrop-blur-lg rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCert}
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-purple-400 transition-colors"
            >
              ✖
            </button>

            {/* PDF Viewer */}
            <iframe
              src={selectedCert.file}
              title={selectedCert.name}
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
