import { motion } from "motion/react";

const experiences = [
  {
    role: "Operations Specialist",
    company: "Covalen — Award-winning Managed Services & Operations Provider",
    location: "Limerick, Ireland",
    date: "09/2024 – 05/2025",
    bullets: [
      "Reviewed and quality-checked incoming operational requests for Allied Irish Banks (AIB), ensuring requests contained correct data before processing and driving requests through completion with 95%+ accuracy across 45+ daily cases.",
      "Communicated request status to stakeholders and maintained accurate records and documentation, demonstrating strong attention to detail and process discipline in a fast-paced regulated environment.",
    ],
  },
  {
    role: "Sales Operations Manager",
    company: "Infosys — Fortune 500 Manufacturing and Technology Client (Johnson Controls)",
    location: "India",
    date: "05/2021 – 08/2024",
    bullets: [
      "Managed end-to-end account segmentation and parenting request processes for a Fortune 500 manufacturing and technology client using Salesforce CRM, processing 45+ tickets daily across commercial accounts in EMEA and Asia markets, maintaining accurate account hierarchy records and reviewing and quality-checking high volumes of account-related requests including revenue attribution and account ownership management, achieving high levels of data accuracy and request completion across all sales operations outputs.",
      "Executed end-to-end request workflow from intake to closure by validating incoming account data, rejecting incomplete requests back to submitters, routing approved requests through multiple approval levels across Sales Operations, Sales Excellence, and Finance, confirming execution in Salesforce CRM, and closing requests with full documentation and tracker updates to maintain accurate and complete records, ensuring requests were processed within agreed service level timelines.",
      "Proactively communicated request status updates to stakeholders before being asked, coordinating with Sales Operations and Sales Excellence teams within a centralised Global Sales Operations model supporting EMEA and Asia markets, partnering with Americas counterpart for global process alignment and driving requests through completion using Microsoft Copilot to accelerate operational workflows.",
      "Tracked request volumes and outcomes, maintained operational reporting using Salesforce CRM and ServiceNow, investigated discrepancies and determined next steps to resolve data integrity issues, and analysed account and revenue data including revenue attribution and account ownership changes to identify trends, issues, and opportunities for process improvements, achieving 100% compliance for senior management.",
      "Maintained operational trackers and Excel-based reporting tools using Advanced Excel, Microsoft PowerPoint, and Word, resolving ambiguity in 10+ sales operations requirements resulting in a 25% decrease in stakeholder queries.",
      "Improved operational efficiency by documenting best practices and supporting process standardisation across regions, cutting delivery failures by 22% and increasing operational throughput by 15% within 6 months through structured sales operations improvements.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 space-y-16 border-t border-[#E5E7EB] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
          Experience
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm"
          >
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-[#111111]">{exp.role}</h3>
              <p className="text-sm text-[#4B5563] mt-1 md:mt-0">{exp.date}</p>
            </div>

            {/* Sub-header */}
            <p className="text-base text-[#4B5563] mb-4">
              {exp.company}{exp.location && ` | ${exp.location}`}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2">
              {exp.bullets.map((bullet, bulletIdx) => (
                <li
                  key={bulletIdx}
                  className="text-sm text-[#4B5563] leading-relaxed flex gap-2"
                  style={{ lineHeight: "1.6" }}
                >
                  <span className="text-[#4B5563] mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
