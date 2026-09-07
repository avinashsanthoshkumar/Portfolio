import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Sparkles, Layers, Database, Code, BarChart3, GitBranch, Brain } from 'lucide-react';

const skills = [
  {
    category: 'AWS Cloud',
    icon: Sparkles,
    color: 'from-sky-700 to-cyan-500',
    items: ['Glue', 'S3', 'Lambda', 'Redshift', 'Athena', 'CloudWatch', 'EC2', 'RDS']
  },
  {
    category: 'Data Engineering',
    icon: Layers,
    color: 'from-blue-900 to-blue-600',
    items: ['ETL/ELT Pipelines', 'Dimensional Modeling', 'Data Migration', 'Data Quality']
  },
  {
    category: 'Big Data & Tools',
    icon: Database,
    color: 'from-cyan-600 to-teal-500',
    items: ['Spark', 'PySpark', 'Airflow', 'Kafka', 'Snowflake']
  },
  {
    category: 'Programming',
    icon: Code,
    color: 'from-indigo-600 to-blue-500',
    items: ['Python', 'SQL', 'SSIS', 'SAS', 'Git']
  },
  {
    category: 'AI & Prompt Engineering',
    icon: Brain,
    color: 'from-purple-600 to-indigo-500',
    items: ['NLP', 'LLMs (GPT-4, Gemma, DeepSeek)', 'RAG Pipelines', 'Prompt Design', 'Model Fine-Tuning', 'Generative AI']
  },
  {
    category: 'Analytics & BI',
    icon: BarChart3,
    color: 'from-sky-600 to-cyan-500',
    items: ['Tableau', 'Power BI', 'Data Visualization']
  },
  {
    category: 'DevOps & CI/CD',
    icon: GitBranch,
    color: 'from-blue-700 to-indigo-600',
    items: ['CodePipeline', 'CodeCommit', 'Docker', 'Jira']
  }
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 text-white">About Me</h2>
          <p className="text-center text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto text-base md:text-lg px-4">
            AWS-focused Data Engineer with 3+ years of experience designing and implementing scalable ETL pipelines, 
            cloud data platforms, and analytics-ready datasets. Currently pursuing Master's in Business Analytics at 
            University of Limerick. Demonstrated ability to deliver high-volume batch processing and large-scale cloud 
            migrations, collaborating with cross-functional teams to ensure accurate, reliable, and GDPR-compliant data solutions.
          </p>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl text-center mb-8 md:mb-12 text-white"
        >
          Core Competencies
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={skill.category}>
                <Card className="hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 border-2 border-cyan-500/30 bg-slate-900/40 backdrop-blur-xl group cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center mb-6">
                      <div className={`p-3 md:p-4 bg-gradient-to-br ${skill.color} rounded-2xl mb-4 shadow-lg`}>
                        <Icon className="text-white" size={40} />
                      </div>
                      <h4 className="text-xl md:text-2xl text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-blue-900/50 border border-cyan-500/30 text-gray-200 rounded-full text-sm hover:bg-blue-800/70 hover:border-cyan-400/50 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-2xl sm:text-3xl text-center mb-6 md:mb-8 text-white">Professional Certificates</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow-lg text-sm md:text-base">
              ✓ AWS Certified Cloud Practitioner
            </div>
            <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-lg text-sm md:text-base">
              ✓ Google Data Analytics Professional
            </div>
            <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg text-sm md:text-base">
              ✓ SQL for Data Science (IBM)
            </div>
            <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-lg text-sm md:text-base">
              ✓ Intermediate Regression in R (IBM)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}