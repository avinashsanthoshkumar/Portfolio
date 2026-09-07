import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0D1] via-[#F9FAFB] to-[#E3D5F5] text-[#111111] font-['Inter',sans-serif] overflow-x-hidden relative selection:bg-slate-200/50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 pb-24 space-y-32">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#E5E7EB] py-12 text-center text-[#4B5563] text-sm">
        <p>© {new Date().getFullYear()} Avinash Santhosh Kumar. All rights reserved.</p>
        <p className="mt-2">Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
