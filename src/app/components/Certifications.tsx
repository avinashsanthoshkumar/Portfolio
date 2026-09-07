import { motion } from "motion/react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Salesforce Certified Platform Administrator",
    issuer: "Salesforce",
  },
  {
    title: "Microsoft Certified: Dynamics 365 Sales AI Consultant Associate",
    issuer: "Microsoft",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 space-y-16 border-t border-[#E5E7EB] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-xl border border-[#E5E7EB] text-[#111111] shadow-sm flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111111] text-base mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#4B5563]">{cert.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
