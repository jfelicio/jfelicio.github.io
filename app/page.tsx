import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProfessionalTimeline from "./components/ProfessionalTimeline";
import Link from "next/link";
import { Briefcase, FolderKanban, GraduationCap, Code, Languages, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* CV-Driven Content Structure */}
      <div className="transition-colors" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Professional Journey Timeline */}
          <section id="experience" className="mb-16">
            <div 
              className="rounded-lg shadow-lg p-8 md:p-12 border transition-colors"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 font-heading border-b-2 md:border-b-0 pb-4 md:pb-0 transition-colors flex items-center gap-3"
                  style={{ 
                    color: 'var(--primary-teal)',
                    borderColor: 'var(--primary-teal)'
                  }}
                >
                  <Briefcase className="w-8 h-8" />
                  Professional Journey
                </h2>
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 font-semibold transition-colors hover:opacity-80"
                  style={{ color: 'var(--primary-teal)' }}
                >
                  View detailed experience
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <ProfessionalTimeline />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <div 
              className="rounded-lg shadow-lg p-8 md:p-12 border transition-colors"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-8 font-heading border-b-2 pb-4 transition-colors flex items-center gap-3"
                style={{ 
                  color: 'var(--primary-teal)',
                  borderColor: 'var(--primary-teal)'
                }}
              >
                <FolderKanban className="w-8 h-8" />
                Projects & Portfolio
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* SARS-CoV-2 Pool Testing Card */}
                <div 
                  className="rounded-lg p-6 border shadow-md hover:shadow-lg transition-all"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-3 font-heading transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    Optimal Pool Testing Strategy for SARS-CoV-2
                  </h3>
                  <p 
                    className="text-sm mb-3 font-semibold transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    Elsevier - Decision Support Systems
                  </p>
                  <p 
                    className="text-sm mb-4 font-body leading-relaxed transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Developed a mathematical optimisation model and DSS to minimise testing costs and time during pandemic peaks. Validated with real case studies in Portugal and France.
                  </p>
                  <a
                    href="https://doi.org/10.1016/j.dss.2023.114046"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#64FFDA] hover:bg-[#52E3C2] text-[#0A192F] px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    View Publication
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* SLYC Chair Card */}
                <div 
                  className="rounded-lg p-6 border shadow-md hover:shadow-lg transition-all"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-3 font-heading transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    Chair & Trustee
                  </h3>
                  <p 
                    className="text-sm mb-3 font-semibold transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    Samuel Lithgow Youth Centre
                  </p>
                  <p 
                    className="text-sm mb-4 font-body leading-relaxed transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Leading governance and strategic direction for a London-based youth centre, supporting community engagement and youth development initiatives.
                  </p>
                  <a
                    href="https://samuel-lithgow.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#64FFDA] hover:bg-[#52E3C2] text-[#0A192F] px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-16">
            <div 
              className="rounded-lg shadow-lg p-8 md:p-12 border transition-colors"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-8 font-heading border-b-2 pb-4 transition-colors flex items-center gap-3"
                style={{ 
                  color: 'var(--primary-teal)',
                  borderColor: 'var(--primary-teal)'
                }}
              >
                <GraduationCap className="w-8 h-8" />
                Education
              </h2>
              
              <div className="space-y-8">
                {/* MSc */}
                <div 
                  className="border-l-4 pl-6 transition-colors"
                  style={{ borderColor: 'var(--primary-teal)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 
                      className="text-2xl font-bold font-heading transition-colors"
                      style={{ color: 'var(--foreground)' }}
                    >
                      MSc Industrial Engineering & Management
                    </h3>
                    <span 
                      className="font-semibold transition-colors"
                      style={{ color: 'var(--primary-teal)' }}
                    >
                      2016 – 2018
                    </span>
                  </div>
                  <p 
                    className="text-xl mb-4 font-body transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    University of Lisboa – Técnico Lisboa
                  </p>
                  <div 
                    className="space-y-2 font-body transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    <p><span className="font-semibold">Grade:</span> 18/20 (UK First-Class Honours equivalent)</p>
                    <p><span className="font-semibold">Modules:</span> Operations Research, S&OP, SCM, Operations Planning & Control, Logistics and Distribution</p>
                    <p className="mt-3">
                      <span className="font-semibold">Thesis:</span> Sustainable Supply Chain Optimisation (MILP) Model in the Aerospace & Defence sector — 
                      in collaboration with MIT Portugal and Embraer (Awarded grade: 20/20)
                    </p>
                  </div>
                </div>

                {/* BSc */}
                <div 
                  className="border-l-4 pl-6 transition-colors"
                  style={{ borderColor: 'var(--primary-teal)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 
                      className="text-2xl font-bold font-heading transition-colors"
                      style={{ color: 'var(--foreground)' }}
                    >
                      BSc Industrial Engineering & Management
                    </h3>
                    <span 
                      className="font-semibold transition-colors"
                      style={{ color: 'var(--primary-teal)' }}
                    >
                      2011 – 2016
                    </span>
                  </div>
                  <p 
                    className="text-xl mb-4 font-body transition-colors"
                    style={{ color: 'var(--primary-teal)' }}
                  >
                    University of Aveiro
                  </p>
                  <div 
                    className="space-y-2 font-body transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    <p><span className="font-semibold">Student Leadership:</span> Deputy President (2015) and Education Officer (2014) at Students' Union</p>
                    <p><span className="font-semibold">Student Governance:</span> Chair & Member, University Academic Board (2014-2016)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <div 
              className="rounded-lg shadow-lg p-8 md:p-12 border transition-colors"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-8 font-heading border-b-2 pb-4 transition-colors flex items-center gap-3"
                style={{ 
                  color: 'var(--primary-teal)',
                  borderColor: 'var(--primary-teal)'
                }}
              >
                <Code className="w-8 h-8" />
                Skills & Interests
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data & Analytics */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-4 font-heading transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Data & Analytics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'Python', 'R', 'Alteryx', 'Power BI', 'Tableau', 'MATLAB'].map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 rounded-lg font-semibold text-sm border transition-colors"
                        style={{ 
                          backgroundColor: 'transparent',
                          borderColor: 'var(--primary-teal)',
                          color: 'var(--primary-teal)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Supply Chain Tools */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-4 font-heading transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Supply Chain Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Manhattan On-prem WMS - WMOS', 'Manhattan SaaS WMS - MAWM', 'IBM Cognos SCI'].map((tool) => (
                      <span 
                        key={tool} 
                        className="px-4 py-2 rounded-lg font-semibold text-sm border transition-colors"
                        style={{ 
                          backgroundColor: 'transparent',
                          borderColor: 'var(--primary-teal)',
                          color: 'var(--primary-teal)'
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process & Strategy */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-4 font-heading transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Process & Strategy
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['BPMN', 'SIPOC', 'Value Stream Mapping'].map((process) => (
                      <span 
                        key={process} 
                        className="px-4 py-2 rounded-lg font-semibold text-sm border transition-colors"
                        style={{ 
                          backgroundColor: 'transparent',
                          borderColor: 'var(--primary-teal)',
                          color: 'var(--primary-teal)'
                        }}
                      >
                        {process}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-4 font-heading transition-colors flex items-center gap-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    <Languages className="w-5 h-5" />
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { lang: 'English', level: 'fluent', flag: '🇬🇧' },
                      { lang: 'Portuguese', level: 'native', flag: '🇵🇹' },
                      { lang: 'Spanish', level: 'conversational', flag: '🇪🇸' }
                    ].map((item) => (
                      <span 
                        key={item.lang} 
                        className="px-4 py-2 rounded-lg font-semibold text-sm border transition-colors flex items-center gap-2"
                        style={{ 
                          backgroundColor: 'transparent',
                          borderColor: 'var(--primary-teal)',
                          color: 'var(--primary-teal)'
                        }}
                      >
                        <span>{item.flag}</span>
                        <span>{item.lang} ({item.level})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interests Section */}
              <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <h3 
                  className="text-xl font-bold mb-4 font-heading transition-colors flex items-center gap-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  <Heart className="w-5 h-5" style={{ color: 'var(--primary-teal)' }} />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Sailing', icon: '⛵' },
                    { name: 'Scuba Diving', icon: '🤿' },
                    { name: 'Running', icon: '🏃' },
                    { name: 'Triathlon', icon: '🏊' }
                  ].map((interest) => (
                    <div 
                      key={interest.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors"
                      style={{ 
                        borderColor: 'var(--border-color)',
                        backgroundColor: 'var(--card-background)'
                      }}
                    >
                      <span className="text-lg">{interest.icon}</span>
                      <span 
                        className="font-medium text-sm transition-colors"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {interest.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CV Download Section */}
          <section className="mb-16">
            <div 
              className="rounded-lg shadow-lg p-8 md:p-12 text-center border transition-colors"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4 font-heading transition-colors"
                style={{ color: 'var(--primary-teal)' }}
              >
                Download My CV
              </h2>
              <p 
                className="mb-6 font-body text-lg transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Get the complete version of my professional background
              </p>
              <a
                href="/cv"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                style={{ 
                  backgroundColor: 'var(--primary-teal)',
                  color: 'var(--primary-navy)'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV (PDF)
              </a>
            </div>
          </section>

        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
