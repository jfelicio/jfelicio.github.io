import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProfessionalTimeline from "./components/ProfessionalTimeline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* CV-Driven Content Structure */}
      <div className="transition-colors" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Summary Section */}
          <section id="summary" className="mb-16">
            <div className="bg-[#112240] dark:bg-[#112240] bg-white dark:bg-[#112240] rounded-lg shadow-lg p-8 md:p-12 border border-[#64FFDA]/20 dark:border-[#64FFDA]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] dark:text-[#64FFDA] text-[#0A192F] dark:text-[#64FFDA] mb-6 font-heading border-b-2 border-[#64FFDA] dark:border-[#64FFDA] pb-4">
                Professional Summary
              </h2>
              <p className="text-lg text-[#CCD6F6] dark:text-[#CCD6F6] text-gray-700 dark:text-[#CCD6F6] leading-relaxed font-body mb-4">
                Strategic and hands-on Supply Chain Consultant with 7+ years of experience delivering 
                Logistics transformation projects across Europe, the US, and APAC. Proven track record 
                in Logistics Operating model, warehouse management systems (WMS), logistics operations, 
                and business process re-engineering.
              </p>
              <p className="text-lg text-[#CCD6F6] dark:text-[#CCD6F6] text-gray-700 dark:text-[#CCD6F6] leading-relaxed font-body">
                Passionate about Network optimisation, data-driven decision-making, and leveraging 
                technology to drive measurable impact. Consulting Manager with experience leading 
                multifunctional teams of 2-4, and engaging senior stakeholders across retail, 
                utilities/energy and A&D sectors.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-[#64FFDA]">
                <span className="font-semibold">Contact:</span>
                <span>JoaoPFelicio@gmail.com</span>
                <span>|</span>
                <span>+44 (0) 7340 885 565</span>
                <span>|</span>
                <span>London, UK</span>
              </div>
            </div>
          </section>

          {/* Professional Journey Timeline */}
          <section id="experience" className="mb-16">
            <div className="bg-[#112240] dark:bg-[#112240] bg-white dark:bg-[#112240] rounded-lg shadow-lg p-8 md:p-12 border border-[#64FFDA]/20 dark:border-[#64FFDA]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] dark:text-[#64FFDA] text-[#0A192F] dark:text-[#64FFDA] mb-12 font-heading border-b-2 border-[#64FFDA] dark:border-[#64FFDA] pb-4">
                Professional Journey
              </h2>
              <ProfessionalTimeline />
            </div>
          </section>

          {/* Featured Research & Projects Section */}
          <section id="projects" className="mb-16">
            <div 
              className="rounded-lg shadow-lg p-8 md:p-12 border transition-colors"
              style={{ 
                backgroundColor: 'var(--card-background)',
                borderColor: 'var(--border-color)'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-8 font-heading border-b-2 pb-4 transition-colors"
                style={{ 
                  color: 'var(--primary-teal)',
                  borderColor: 'var(--primary-teal)'
                }}
              >
                Featured Research & Projects
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
            <div className="bg-[#112240] dark:bg-[#112240] bg-white dark:bg-[#112240] rounded-lg shadow-lg p-8 md:p-12 border border-[#64FFDA]/20 dark:border-[#64FFDA]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] dark:text-[#64FFDA] text-[#0A192F] dark:text-[#64FFDA] mb-8 font-heading border-b-2 border-[#64FFDA] dark:border-[#64FFDA] pb-4">
                Education
              </h2>
              
              <div className="space-y-8">
                {/* MSc */}
                <div className="border-l-4 border-[#64FFDA] dark:border-[#64FFDA] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white dark:text-white text-[#0A192F] dark:text-white font-heading">
                      MSc Industrial Engineering & Management
                    </h3>
                    <span className="text-[#64FFDA] dark:text-[#64FFDA] font-semibold">2016 – 2018</span>
                  </div>
                  <p className="text-xl text-[#64FFDA] dark:text-[#64FFDA] mb-4 font-body">University of Lisboa – Técnico Lisboa</p>
                  <div className="space-y-2 text-[#CCD6F6] dark:text-[#CCD6F6] text-gray-700 dark:text-[#CCD6F6] font-body">
                    <p><span className="font-semibold">Grade:</span> 18/20 (UK First-Class Honours equivalent)</p>
                    <p><span className="font-semibold">Modules:</span> Operations Research, S&OP, SCM, Operations Planning & Control, Logistics and Distribution</p>
                    <p className="mt-3">
                      <span className="font-semibold">Thesis:</span> Sustainable Supply Chain Optimisation (MILP) Model in the Aerospace & Defence sector — 
                      in collaboration with MIT Portugal and Embraer (Awarded grade: 20/20)
                    </p>
                  </div>
                </div>

                {/* BSc */}
                <div className="border-l-4 border-[#64FFDA] dark:border-[#64FFDA] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white dark:text-white text-[#0A192F] dark:text-white font-heading">
                      BSc Industrial Engineering & Management
                    </h3>
                    <span className="text-[#64FFDA] dark:text-[#64FFDA] font-semibold">2011 – 2016</span>
                  </div>
                  <p className="text-xl text-[#64FFDA] dark:text-[#64FFDA] mb-4 font-body">University of Aveiro</p>
                  <div className="space-y-2 text-[#CCD6F6] dark:text-[#CCD6F6] text-gray-700 dark:text-[#CCD6F6] font-body">
                    <p><span className="font-semibold">Student Leadership:</span> Deputy President (2015) and Education Officer (2014) at Students' Union</p>
                    <p><span className="font-semibold">Student Governance:</span> Chair & Member, University Academic Board (2014-2016)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <div className="bg-[#112240] dark:bg-[#112240] bg-white dark:bg-[#112240] rounded-lg shadow-lg p-8 md:p-12 border border-[#64FFDA]/20 dark:border-[#64FFDA]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] dark:text-[#64FFDA] text-[#0A192F] dark:text-[#64FFDA] mb-8 font-heading border-b-2 border-[#64FFDA] dark:border-[#64FFDA] pb-4">
                Skills & Interests
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data & Analytics */}
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-[#0A192F] dark:text-white mb-4 font-heading">Data & Analytics</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'Python', 'R', 'Alteryx', 'Power BI', 'Tableau', 'MATLAB'].map((skill) => (
                      <span key={skill} className="bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 px-4 py-2 rounded-lg font-semibold text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Supply Chain Tools */}
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-[#0A192F] dark:text-white mb-4 font-heading">Supply Chain Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Manhattan On-prem WMS - WMOS', 'Manhattan SaaS WMS - MAWM', 'IBM Cognos SCI'].map((tool) => (
                      <span key={tool} className="bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 px-4 py-2 rounded-lg font-semibold text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process & Strategy */}
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-[#0A192F] dark:text-white mb-4 font-heading">Process & Strategy</h3>
                  <div className="flex flex-wrap gap-2">
                    {['BPMN', 'SIPOC', 'Value Stream Mapping'].map((process) => (
                      <span key={process} className="bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 px-4 py-2 rounded-lg font-semibold text-sm">
                        {process}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-[#0A192F] dark:text-white mb-4 font-heading">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['English (fluent)', 'Portuguese (native)', 'Spanish (conversational)'].map((lang) => (
                      <span key={lang} className="bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 px-4 py-2 rounded-lg font-semibold text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-[#64FFDA]/20 dark:border-[#64FFDA]/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#CCD6F6] dark:text-[#CCD6F6] text-gray-700 dark:text-[#CCD6F6] font-body">
                </div>
              </div>
            </div>
          </section>

          {/* CV Download Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#0A192F] to-[#112240] dark:from-[#0A192F] dark:to-[#112240] from-white to-gray-100 dark:from-[#0A192F] dark:to-[#112240] border border-[#64FFDA]/30 dark:border-[#64FFDA]/30 rounded-lg shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] dark:text-[#64FFDA] text-[#0A192F] dark:text-[#64FFDA] mb-4 font-heading">
                Download My CV
              </h2>
              <p className="text-[#CCD6F6] dark:text-[#CCD6F6] text-gray-700 dark:text-[#CCD6F6] mb-6 font-body text-lg">
                Get the complete version of my professional background
              </p>
              <a
                href="/reference/Joao_Felicio_SupplyChain_CV_2026.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#64FFDA] hover:bg-[#52E3C2] text-[#0A192F] px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
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
