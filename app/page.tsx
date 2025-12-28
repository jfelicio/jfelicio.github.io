import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* CV-Driven Content Structure */}
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Summary Section */}
          <section id="summary" className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6 font-heading border-b-2 border-[#1abc9c] pb-4">
                Professional Summary
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-body mb-4">
                Strategic and hands-on Supply Chain Consultant with 7+ years of experience delivering 
                Logistics transformation projects across Europe, the US, and APAC. Proven track record 
                in Logistics Operating model, warehouse management systems (WMS), logistics operations, 
                and business process reengineering.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-body">
                Passionate about Network optimisation, data-driven decision-making, and leveraging 
                technology to drive measurable impact. Consulting Manager with experience leading 
                multifunctional teams of 2-4, and engaging senior stakeholders across retail, 
                utilities/energy and A&D sectors.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#1abc9c]">
                <span className="font-semibold">Contact:</span>
                <span>JoaoPFelicio@gmail.com</span>
                <span>|</span>
                <span>+44 (0) 7340 885 565</span>
                <span>|</span>
                <span>London, UK</span>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-8 font-heading border-b-2 border-[#1abc9c] pb-4">
                Experience
              </h2>
              
              <div className="space-y-8">
                {/* Accenture */}
                <div className="border-l-4 border-[#1abc9c] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#2c3e50] font-heading">
                      Management Consultant, Supply Chain & Operations
                    </h3>
                    <span className="text-[#1abc9c] font-semibold">Jan 2022 - Present</span>
                  </div>
                  <p className="text-xl text-gray-600 mb-4 font-body">Accenture – London, UK</p>
                  <ul className="space-y-3 text-gray-700 font-body">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Workstream lead in Logistics Transformation for an A&D client with c. £500M of logistics spend and global footprint.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Led WMS deployments for two DCs in AU and UK for a major fashion retailer, boosting fulfilment capacity by 10-25% and supporting 130+ stores. Led a team of 4 across EMEA and APAC.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Logistics cost optimisation strategy for a UK consumer goods company, delivering a 10-12% cost-to-serve reduction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Led warehouse process optimisation for a UK nuclear energy company, identifying £400K in savings and a 10-15% productivity uplift. Managed a team of 3 consulting analysts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Designed process taxonomies and reengineered operating models for a UK utilities company, informing long-term digital and operational transformation. Led a team of 4 in business process reengineering efforts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Supported warehouse automation assurance for a UK retailer's £20M investment, ensuring alignment of tech, ops, and process requirements.</span>
                    </li>
                  </ul>
                </div>

                {/* Manhattan Associates - Functional Consultant */}
                <div className="border-l-4 border-[#1abc9c] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#2c3e50] font-heading">
                      Functional Consultant
                    </h3>
                    <span className="text-[#1abc9c] font-semibold">Jan 2020 - Dec 2021</span>
                  </div>
                  <p className="text-xl text-gray-600 mb-4 font-body">Manhattan Associates – Reading, UK</p>
                  <ul className="space-y-3 text-gray-700 font-body">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Delivered WMS implementation projects (WMOS 2018/19) for UK and Russian retailers, including end-to-end design, testing, and Go-live – boosting operational efficiency by 10-30% and supporting 150+ stores.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Delivered training and enhancements for omni-channel operations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Participated in internal initiatives and user acceptance testing (UAT) of Manhattan's latest SaaS WMS offering.</span>
                    </li>
                  </ul>
                </div>

                {/* Manhattan Associates - Associate Consultant */}
                <div className="border-l-4 border-[#1abc9c] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#2c3e50] font-heading">
                      Associate Consultant
                    </h3>
                    <span className="text-[#1abc9c] font-semibold">Nov 2018 - Jan 2020</span>
                  </div>
                  <p className="text-xl text-gray-600 mb-4 font-body">Manhattan Associates – Reading, UK</p>
                  <ul className="space-y-3 text-gray-700 font-body">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Supported WMS design and deployment for tier-1 fashion and retail brands across Europe and Russia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Focused on configuration, data validation, and testing to improve productivity and inventory accuracy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1abc9c] mt-1">•</span>
                      <span>Contributed to internal tooling and process improvement initiatives.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-8 font-heading border-b-2 border-[#1abc9c] pb-4">
                Education
              </h2>
              
              <div className="space-y-8">
                {/* MSc */}
                <div className="border-l-4 border-[#1abc9c] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#2c3e50] font-heading">
                      MSc Industrial Engineering & Management
                    </h3>
                    <span className="text-[#1abc9c] font-semibold">2016 – 2018</span>
                  </div>
                  <p className="text-xl text-gray-600 mb-4 font-body">University of Lisboa – Técnico Lisboa</p>
                  <div className="space-y-2 text-gray-700 font-body">
                    <p><span className="font-semibold">Grade:</span> 18/20 (UK First-Class Honours equivalent)</p>
                    <p><span className="font-semibold">Modules:</span> Operations Research, S&OP, SCM, Operations Planning & Control, Logistics and Distribution</p>
                    <p className="mt-3">
                      <span className="font-semibold">Thesis:</span> Sustainable Supply Chain Optimisation (MILP) Model in the Aerospace & Defence sector — 
                      in collaboration with MIT Portugal and Embraer (Awarded grade: 20/20)
                    </p>
                  </div>
                </div>

                {/* BSc */}
                <div className="border-l-4 border-[#1abc9c] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#2c3e50] font-heading">
                      BSc Industrial Engineering & Management
                    </h3>
                    <span className="text-[#1abc9c] font-semibold">2011 – 2016</span>
                  </div>
                  <p className="text-xl text-gray-600 mb-4 font-body">University of Aveiro</p>
                  <div className="space-y-2 text-gray-700 font-body">
                    <p><span className="font-semibold">Student Leadership:</span> Deputy President (2015) and Education Officer (2014) at Students' Union</p>
                    <p><span className="font-semibold">Student Governance:</span> Chair & Member, University Academic Board (2014-2016)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-8 font-heading border-b-2 border-[#1abc9c] pb-4">
                Skills & Interests
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data & Analytics */}
                <div>
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-4 font-heading">Data & Analytics</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'Python', 'R', 'Alteryx', 'Power BI', 'Tableau', 'MATLAB'].map((skill) => (
                      <span key={skill} className="bg-[#1abc9c]/10 text-[#1abc9c] px-4 py-2 rounded-lg font-semibold text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Supply Chain Tools */}
                <div>
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-4 font-heading">Supply Chain Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Manhattan On-prem WMS - WMOS', 'Manhattan SaaS WMS - MAWM', 'IBM Cognos SCI'].map((tool) => (
                      <span key={tool} className="bg-[#1abc9c]/10 text-[#1abc9c] px-4 py-2 rounded-lg font-semibold text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process & Strategy */}
                <div>
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-4 font-heading">Process & Strategy</h3>
                  <div className="flex flex-wrap gap-2">
                    {['BPMN', 'SIPOC', 'Value Stream Mapping'].map((process) => (
                      <span key={process} className="bg-[#1abc9c]/10 text-[#1abc9c] px-4 py-2 rounded-lg font-semibold text-sm">
                        {process}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-4 font-heading">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['English (fluent)', 'Portuguese (native)', 'Spanish (conversational)'].map((lang) => (
                      <span key={lang} className="bg-[#1abc9c]/10 text-[#1abc9c] px-4 py-2 rounded-lg font-semibold text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 font-body">
                  <div>
                    <h4 className="font-semibold text-[#2c3e50] mb-2">Volunteering</h4>
                    <p>Samuel Lithgow Youth Centre, London (Chair and Trustee)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2c3e50] mb-2">Projects</h4>
                    <p>Batch testing size calculation tool – using python/R (co-author published in Elsevier's Decision Support Systems)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CV Download Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#2c3e50] to-[#1abc9c] rounded-lg shadow-md p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Download My CV
              </h2>
              <p className="text-white/90 mb-6 font-body text-lg">
                Get the complete version of my professional background
              </p>
              <a
                href="/reference/Joao_Felicio_SupplyChain_CV_2026.pdf"
                download
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#2c3e50] px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
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
