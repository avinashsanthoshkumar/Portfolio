import { motion } from "motion/react";
import { Target, Database, FileSpreadsheet, Settings2, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Sales Operations",
    icon: Target,
    color: "from-blue-400 to-blue-600",
    skills: ["Account Segmentation", "Account Parenting", "Account Hierarchy Management", "Revenue Attribution", "Account Ownership", "Request Management", "Approval Workflows"],
  },
  {
    title: "CRM & Ticketing",
    icon: Database,
    color: "from-cyan-400 to-cyan-600",
    skills: ["Salesforce CRM", "Microsoft Dynamics 365", "ServiceNow", "Commercial Account Management", "Discrepancy Investigation"],
  },
  {
    title: "Tools & Reporting",
    icon: FileSpreadsheet,
    color: "from-purple-400 to-purple-600",
    skills: ["Advanced Excel Trackers and Operational Reports", "Microsoft Copilot", "PowerPoint", "Word"],
  },
  {
    title: "Operations",
    icon: Settings2,
    color: "from-indigo-400 to-indigo-600",
    skills: ["End-to-End Workflow Management", "SLA Compliance", "EMEA and Asia Operations", "Global Process Alignment", "Centralised Sales Operations Model"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "from-green-400 to-green-600",
    skills: ["Proactive Communication", "Attention to Detail", "Strong Follow-Through", "Stakeholder Management", "Process Standardisation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 space-y-16 border-t border-[#E5E7EB] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white border border-[#E5E7EB] rounded-3xl p-8 hover:bg-gray-50 transition-colors overflow-hidden shadow-sm"
          >
            {/* Subtle Gradient Glow */}
            <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${category.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity`} />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-gray-50 rounded-2xl border border-[#E5E7EB] text-[#111111] shadow-sm">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111] tracking-wide">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-gray-50 text-[#4B5563] rounded-full border border-[#E5E7EB] hover:bg-gray-100 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
