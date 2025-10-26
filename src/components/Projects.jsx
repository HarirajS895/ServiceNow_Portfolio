import { useState } from "react";
import img1 from "../assets/project1-1.PNG";
import img2 from "../assets/project1-2.PNG";
import img3 from "../assets/project1-3.PNG";
import img4 from "../assets/project1-4.PNG";
import img5 from "../assets/project1-5.PNG";
import img6 from "../assets/project1-6.PNG";
import img7 from "../assets/project1-7.PNG";

export default function Projects() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);

  const openPreview = (index) => {
    setCurrentIndex(index);
    setFade(true);
    setIsPreviewOpen(true);
  };
  const closePreview = () => {
    setFade(false);
    setTimeout(() => setIsPreviewOpen(false), 300);
  };

  const openDetails = () => {
    setFade(true);
    setIsDetailsOpen(true);
  };
  const closeDetails = () => {
    setFade(false);
    setTimeout(() => setIsDetailsOpen(false), 300);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-6">
          Featured Project — NextVision
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Box: Project Overview */}
          <div
            onClick={openDetails}
            className="p-6 bg-white/5 rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="font-semibold text-xl text-purpleish-600 mb-2">NextVision</h3>
            <p className="text-gray-700 mb-2">
              Custom ServiceNow application to manage AI devices lifecycle for construction companies.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Custom tables & workflows</li>
              <li>Form designs & configurations</li>
              <li>Data sources & foundation uploads</li>
              <li>ACLs, Catalogs & Flows</li>
              <li>Integration & automated approvals</li>
            </ul>
          </div>

          {/* Right Box: Preview */}
          <div className="p-6 bg-white/5 rounded flex flex-col items-center justify-center">
            <div
              className="w-64 h-40 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openPreview(currentIndex)}
            >
              <img
                src={images[currentIndex]}
                alt={`Project Preview ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={prevImage}
                className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
              >
                ▶
              </button>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </div>

      {/* Preview Slideshow Popup */}
      {isPreviewOpen && (
        <div
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={images[currentIndex]}
              alt={`Project Preview ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-purple-600 text-3xl font-bold"
            >
              ◀
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 text-3xl font-bold"
            >
              ▶
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); closePreview(); }}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Full Project Details Popup (Professional Theme ONLY) */}
      {isDetailsOpen && (
        <div
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDetails}
        >
          <div
            className="relative bg-white shadow-xl rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-4">NextVision — Full Project Details</h3>

            <h4 className="text-lg font-semibold text-gray-800 mb-2">About the Application</h4>
            <p className="text-gray-700 mb-2">
              NextVision provides AI devices to construction companies like CASAgrand, L&T, SPCL. Previously, the process was manual via spreadsheets. As business expanded, they needed a ServiceNow solution to manage multiple stakeholders efficiently.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Implementation</h4>
            <p className="text-gray-700 mb-2">
              Implemented a custom ServiceNow application to automate:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-2">
              <li>Catalog Item: "Order a new AI device" for customer requests</li>
              <li>AI Devices & Device Request tables</li>
              <li>Data sources for manual customers (sheet uploads)</li>
              <li>Automated flows for approval and delivery</li>
              <li>Real-time tracking & reporting</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Workflow</h4>
            <ol className="list-decimal pl-5 text-gray-700 mb-2">
              <li>Request sent to Release Management group for approval</li>
              <li>Dispatch Management handles delivery</li>
              <li>Device Request table tracks delivery in real-time</li>
              <li>Reporting automated for stakeholders</li>
            </ol>

            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Benefits</h4>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Automated order & delivery process</li>
              <li>Reduces errors from spreadsheets</li>
              <li>Real-time visibility for management & customers</li>
              <li>Improved efficiency & customer satisfaction</li>
            </ul>

            {/* Slideshow inside Details */}
            <div className="mt-6 flex flex-col items-center">
              <div className="w-full h-64 relative rounded-lg overflow-hidden mb-2">
                <img
                  src={images[currentIndex]}
                  alt={`Project Image ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => prevImage()}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-purple-600 text-3xl font-bold"
                >
                  ◀
                </button>
                <button
                  onClick={() => nextImage()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 text-3xl font-bold"
                >
                  ▶
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                Image {currentIndex + 1} of {images.length}
              </p>
            </div>

            <button
              onClick={closeDetails}
              className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
