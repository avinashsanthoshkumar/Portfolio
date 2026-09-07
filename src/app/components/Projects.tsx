import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Retrieval-Augmented Generation (RAG) System",
    description: "Implemented a RAG pipeline with Elasticsearch and LLMs for queried responses from documents, enhancing analytical accuracy and knowledge retrieval.",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXRhYmFzZSUyMHNlYXJjaCUyMGRvY3VtZW50cyUyMGRhdGElMjByZXRyaWV2YWx8ZW58MXx8fHwxNzc4MzQyMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["RAG", "LLMs", "Elasticsearch", "Generative AI", "Python"],
    liveUrl: "https://github.com/avinashrockzz2000-prog/Retrieval-Augmented-Generation-RAG-system",
    githubUrl: "https://github.com/avinashrockzz2000-prog/Retrieval-Augmented-Generation-RAG-system",
  },
  {
    title: "Digital Futures Lab – One-Stop Agroecology Portal",
    description: "Won Best Project at Digital Futures Lab 2025 for leading the design of a farmer-centric digital platform integrating real-time soil data, grant access, and co-op collaboration. Designed platform concept to transform sustainable agriculture in Ireland by combining multiple agricultural data sources into a single portal.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBkYXRhfGVufDB8fHx8MTcxNjMwNDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Miro", "Kanban", "Stakeholder Management", "Teamwork", "Agile"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Market Navigator – Data Validation Dashboard",
    description: "Built an AI-powered data validation and analysis dashboard, building a solid evidence base using technical indicators (RSI, MACD) combined with LLM sentiment analysis. Improved simulated forecasting by 15% by optimising predictive signals and integrating evidence-driven market insights.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXRhfGVufDB8fHx8MTcxNjMwNDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Python", "Streamlit", "LLMs", "Sentiment Analysis"],
    liveUrl: "https://github.com/avinashrockzz2000-prog/Market-Navigator",
    githubUrl: "https://github.com/avinashrockzz2000-prog/Market-Navigator",
  },
  {
    title: "LLM-Powered Intelligence Agents",
    description: "Developed a multi-agent AI system utilizing risk assessment methodologies to analyze complex queries and generate actionable, evidence-based insights. Optimised prompt pipelines to enhance reasoning accuracy and improve the quality of financial compliance insights.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFnZW50JTIwbmV0d29ya3xlbnwwfHx8fDE3MTYzMDQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Python", "LLMs", "Prompt Engineering", "Multi-Agent Systems"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Irish Property Price Prediction",
    description: "Built a predictive model for Irish property prices achieving 27K RMSE and 0.87 R2 to accurately assess market trends. Identified key drivers using feature engineering and statistical modelling techniques to support data-led analysis.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGhvdXNlfGVufDB8fHx8MTcxNjMwNDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Python", "scikit-learn", "XGBoost", "CRISP-DM"],
    liveUrl: "https://github.com/avinashrockzz2000-prog/Irish-Property-Price-Prediction",
    githubUrl: "https://github.com/avinashrockzz2000-prog/Irish-Property-Price-Prediction",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 space-y-16 border-t border-[#E5E7EB] relative">
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative flex flex-col bg-white rounded-[2.5rem] border border-[#E5E7EB] overflow-hidden hover:border-gray-300 transition-all duration-300 shadow-sm"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed text-base md:text-[18px] font-normal">
                  {project.description}
                </p>
                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#F3F4F6] text-[#4B5563] text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {/* Links */}
                <div className="flex items-center gap-4 border-t border-[#E5E7EB] pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-[#111111] hover:bg-black text-white font-medium rounded-[12px] flex items-center justify-center gap-2 transition-colors group/btn"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 hover:bg-gray-100 text-[#111111] rounded-[12px] transition-colors border border-[#E5E7EB]"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
