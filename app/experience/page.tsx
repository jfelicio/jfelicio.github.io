import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | João Felício - Supply Chain & Logistics Consultant",
  description: "Detailed experience across supply chain, logistics, and operating model transformation at Accenture and Manhattan Associates",
};

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "accenture",
    title: "Management Consultant, Supply Chain & Operations",
    company: "Accenture",
    period: "Jan 2022 – Present",
    location: "London, UK",
    summary: "Workstream lead and delivery manager for logistics transformation programmes across A&D, retail, utilities, and energy sectors. Accountable for WMS deployments, cost optimisation strategies, and operating model design.",
    achievements: [
      "Led Logistics Transformation workstream for A&D client with c. £500M logistics spend and global footprint, delivering operating model redesign and implementation roadmap.",
      "Delivered WMS deployments for two distribution centres (AU and UK) for major fashion retailer, increasing fulfilment capacity by 10–25% and supporting 130+ stores. Managed team of 4 across EMEA and APAC.",
      "Designed and delivered logistics cost optimisation strategy for UK consumer goods company, achieving 10–12% cost-to-serve reduction through network and process improvements.",
      "Led warehouse process optimisation for UK nuclear energy company, identifying £400K in annual savings and 10–15% productivity uplift. Managed team of 3 consulting analysts.",
      "Designed process taxonomies and re-engineered operating models for UK utilities company, informing long-term digital and operational transformation. Led team of 4 in business process re-engineering.",
      "Supported warehouse automation assurance for UK retailer's £20M investment, ensuring alignment of technology, operations, and process requirements.",
    ],
  },
  {
    id: "manhattan-functional",
    title: "Functional Consultant",
    company: "Manhattan Associates",
    period: "Jan 2020 – Dec 2021",
    location: "Reading, UK",
    summary: "End-to-end delivery of WMS implementation projects for tier-1 retailers across UK and Russia. Specialised in WMOS 2018/19 deployments, omni-channel operations, and SaaS WMS UAT.",
    achievements: [
      "Delivered WMS implementation projects (WMOS 2018/19) for UK and Russian retailers, including end-to-end design, testing, and go-live. Increased operational efficiency by 10–30% and supported 150+ stores.",
      "Delivered training and enhancement programmes for omni-channel operations, enabling seamless integration between online and store fulfilment.",
      "Participated in internal initiatives and user acceptance testing (UAT) of Manhattan's latest SaaS WMS offering, contributing to product development and client readiness.",
    ],
  },
  {
    id: "manhattan-associate",
    title: "Associate Consultant",
    company: "Manhattan Associates",
    period: "Nov 2018 – Jan 2020",
    location: "Reading, UK",
    summary: "Supported WMS design and deployment for tier-1 fashion and retail brands across Europe and Russia. Focused on configuration, data validation, and testing to improve productivity and inventory accuracy.",
    achievements: [
      "Supported WMS design and deployment for tier-1 fashion and retail brands across Europe and Russia, contributing to successful go-live events.",
      "Focused on configuration, data validation, and testing to improve productivity and inventory accuracy, reducing discrepancies and operational errors.",
      "Contributed to internal tooling and process improvement initiatives, enhancing delivery efficiency and knowledge sharing across the practice.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="transition-colors" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 mb-6 transition-colors"
              style={{ color: 'var(--primary-teal)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to home</span>
            </Link>
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 font-heading transition-colors"
              style={{ color: 'var(--foreground)' }}
            >
              Experience
            </h1>
            <p 
              className="text-lg font-body transition-colors max-w-3xl"
              style={{ color: 'var(--text-muted)' }}
            >
              Selected experience across supply chain, logistics, and operating model transformation.
            </p>
          </div>

          {/* Experience Sections */}
          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <section 
                key={item.id}
                id={item.id}
                className="scroll-mt-24"
              >
                <div 
                  className="rounded-lg p-8 md:p-12 border shadow-lg transition-colors"
                  style={{ 
                    backgroundColor: 'var(--card-background)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="mb-6">
                    <h2 
                      className="text-2xl md:text-3xl font-bold mb-3 font-heading transition-colors"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <p 
                        className="font-semibold font-body transition-colors"
                        style={{ color: 'var(--primary-teal)' }}
                      >
                        {item.company}
                      </p>
                      <span 
                        className="text-sm font-body transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {item.period}
                      </span>
                      <span 
                        className="text-sm font-body transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {item.location}
                      </span>
                    </div>
                    <p 
                      className="text-lg font-body leading-relaxed transition-colors"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 
                      className="text-lg font-semibold mb-4 font-heading transition-colors"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-3 font-body transition-colors"
                          style={{ color: 'var(--foreground)' }}
                        >
                          <span 
                            className="mt-2 flex-shrink-0 transition-colors"
                            style={{ color: 'var(--primary-teal)' }}
                          >
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

