import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProfessionalJourney from "./components/ProfessionalJourney";
import CoreCompetencies from "./components/CoreCompetencies";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Main Content Grid */}
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - About & Competencies Card */}
            <div className="lg:col-span-1 space-y-8">
              <About />
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#2c3e50] mb-4 font-heading">
                  Software Consultant
                </h3>
                <p className="text-gray-600 mb-4 font-body">
                  2020 - Present
                </p>
                <p className="text-sm text-gray-600 mb-4 font-body">
                  Architecting scalable solutions and optimizing complex systems...
                </p>
                <a
                  href="/joao_felicio_cv.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
            
            {/* Middle Column - Professional Journey */}
            <div className="lg:col-span-1">
              <ProfessionalJourney />
            </div>
            
            {/* Right Column - Competencies & Portfolio */}
            <div className="lg:col-span-1 space-y-8">
              <CoreCompetencies />
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
