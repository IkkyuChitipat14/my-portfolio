import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Github,
  Mail,
  ArrowUpRight,
  Code2,
  Layout,
  Database,
  Smartphone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Navbar from "./components/Navbar";
import ProjectModal, { type ProjectData } from "./components/ProjectModal";
import attendlyImg from "./assets/Attendly.png";
import studentLoanImg from "./assets/StudentLoan.png";
import hertzImg from "./assets/Hertz_Rental.png";
import mfuWifiImg from "./assets/MFU-wifi.png";

const PortfolioHome = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [copied, setCopied] = useState(false);

  const getProjectsData = (): ProjectData[] => [
    {
      id: 1,
      title: "Attendly",
      tags: ["React", "TypeScript", "Tailwind", "Figma"],
      image: attendlyImg,
      shortDesc: t("projects.p1_short"),
      longDesc: t("projects.p1_long"),
      role: t("projects.p1_role"),
      figma:
        "https://www.figma.com/design/SSsV4M3MiIZxtV1WppiwKO/Attendly?node-id=6-55&t=fOiT3rDZWtKcYHvT-1",
      demo: "",
    },
    {
      id: 2,
      title: "Student Loan",
      tags: ["Vue.js", "Bootstrap", "MySQL"],
      image: studentLoanImg,
      shortDesc: t("projects.p2_short"),
      longDesc: t("projects.p2_long"),
      role: t("projects.p2_role"),
      github: "https://github.com/IkkyuChitipat14/student-loan-project.git",
      demo: "",
    },
    {
      id: 3,
      title: "Vehicle Reservation",
      tags: ["Flutter", "Dart", "Mobile"],
      image: hertzImg,
      shortDesc: t("projects.p3_short"),
      longDesc: t("projects.p3_long"),
      role: t("projects.p3_role"),
      github: "https://github.com/IkkyuChitipat14/MobileAppProject.git",
      demo: "",
    },
    {
      id: 4,
      title: "Facial Recognition",
      tags: ["ThaiID API", "Security", "Wi-Fi"],
      image: mfuWifiImg,
      shortDesc: t("projects.p4_short"),
      longDesc: t("projects.p4_long"),
      role: t("projects.p4_role"),
      github: "https://github.com/IkkyuChitipat14/senior_project-main.git",
      demo: "",
    },
  ];

  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("chitipat140547@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#F3F2EE] scroll-smooth">
      <div className="fixed inset-0 border-[12px] border-white pointer-events-none z-50 hidden md:block"></div>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-24 max-w-[1500px] mx-auto">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-4 flex-1">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">
                {t("hero.role")}
              </h2>
              <h1 className="text-5xl md:text-[clamp(3.5rem,8vw,8.5rem)] font-black leading-[0.85] tracking-tighter uppercase">
                {t("hero.firstName")} <br />
                <span className="inline-block text-transparent [-webkit-text-stroke:1px_#1A1A1A] hover:text-[#1A1A1A] transition-all duration-700">
                  {t("hero.lastName")}
                </span>
              </h1>
            </div>

            <div className="max-w-xs space-y-6 md:mb-4">
              <p className="text-sm font-medium leading-relaxed border-l-2 border-black pl-4 text-slate-600">
                {t("hero.desc1")}
                <span className="font-bold text-black">React & TypeScript</span>
                {t("hero.desc2")}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/IkkyuChitipat14"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:chitipat140547@gmail.com"
                  className="p-3 bg-white rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section id="experience" className="scroll-mt-32 py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-2">
              {t("exp.journey")}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              {t("exp.title")}
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/10 before:to-transparent">
            {/* Ocare */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-orange-500 group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                <Code2 size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight">
                      {t("exp.job1_role")}
                    </h4>
                    <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mt-1">
                      Ocare Health Hub
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-400 mt-2 sm:mt-0 px-3 py-1 bg-slate-50 rounded-full w-fit">
                    {t("exp.present")}
                  </span>
                </div>
                <ul className="text-sm font-medium text-slate-600 space-y-2 list-disc list-outside ml-4">
                  <li>{t("exp.job1_b1")}</li>
                  <li>{t("exp.job1_b2")}</li>
                  <li>{t("exp.job1_b3")}</li>
                </ul>
              </div>
            </div>

            {/* MFU */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-orange-500 group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                <Layout size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight">
                      {t("exp.job2_role")}
                    </h4>
                    <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mt-1">
                      Mae Fah Luang University
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-400 mt-2 sm:mt-0 px-3 py-1 bg-slate-50 rounded-full w-fit">
                    2024 - 2025
                  </span>
                </div>
                <ul className="text-sm font-medium text-slate-600 space-y-2 list-disc list-outside ml-4">
                  <li>{t("exp.job2_b1")}</li>
                  <li>{t("exp.job2_b2")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-32 py-24 px-6 md:px-24 bg-white/40 backdrop-blur-md border-y border-black/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-2">
              {t("skills.subtitle")}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              {t("skills.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-700 min-h-[280px]">
              <Layout
                size={40}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div>
                <h4 className="text-2xl font-black mb-2 italic tracking-tight text-orange-500 group-hover:text-white">
                  FRONTEND
                </h4>
                <p className="text-base opacity-60 font-medium">
                  React, TypeScript, Tailwind CSS, Vite, Vue.js
                </p>
              </div>
            </div>
            <div className="md:col-span-1 bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-700">
              <Database
                size={40}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div>
                <h4 className="text-2xl font-black mb-2 italic tracking-tight">
                  BACKEND
                </h4>
                <p className="text-base opacity-60 font-medium">
                  Node.js, Express, MongoDB, MySQL
                </p>
              </div>
            </div>
            <div className="md:col-span-1 bg-[#1A1A1A] text-white p-10 rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative group">
              <Smartphone
                size={40}
                className="relative z-10 group-hover:rotate-12 transition-transform"
              />
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-2 italic tracking-tight">
                  MOBILE
                </h4>
                <p className="text-base opacity-60 font-medium">
                  Flutter (Dart)
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 text-[120px] font-black opacity-5 select-none group-hover:opacity-10 transition-opacity">
                App
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-32 py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">
                {t("projects.subtitle")}
              </h3>
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                {t("projects.title")}
              </h2>
            </div>
            <p className="max-w-xs text-sm font-medium text-slate-500 md:pb-2 border-l border-black/10 pl-6 italic">
              {t("projects.desc")}
            </p>
          </div>

          <div className="space-y-40">
            {getProjectsData().map((project, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <div
                  key={project.id}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
                >
                  {isImageLeft ? (
                    <>
                      <div className="md:col-span-7 overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 aspect-video relative hover:shadow-2xl transition-all duration-700">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                      <div className="md:col-span-5 space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-bold px-3 py-1 border border-black/10 rounded-full uppercase tracking-widest"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                          {project.title}
                        </h3>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                          {project.shortDesc}
                        </p>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="group/btn flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-2 hover:gap-6 transition-all duration-300 hover:text-orange-500 hover:border-orange-500 cursor-pointer"
                        >
                          {t("projects.view_btn")}{" "}
                          <ArrowUpRight
                            size={18}
                            className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:col-span-5 order-2 md:order-1 space-y-6 md:text-right flex flex-col md:items-end">
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-bold px-3 py-1 border border-black/10 rounded-full uppercase tracking-widest"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                          {project.shortDesc}
                        </p>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="group/btn flex flex-row-reverse items-center gap-4 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-2 hover:gap-6 transition-all duration-300 hover:text-orange-500 hover:border-orange-500 cursor-pointer"
                        >
                          {t("projects.view_btn")}{" "}
                          <ArrowUpRight
                            size={18}
                            className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                      <div className="md:col-span-7 order-1 md:order-2 overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 aspect-video relative hover:shadow-2xl transition-all duration-700">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section
        id="contact"
        className="scroll-mt-32 py-32 px-6 text-center max-w-7xl mx-auto mb-10"
      >
        <div className="bg-[#1A1A1A] text-[#F3F2EE] py-24 px-6 rounded-[3.5rem] shadow-2xl flex flex-col items-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-8">
            {t("cta.subtitle")}
          </h3>
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-12 leading-[1] tracking-tighter max-w-4xl mx-auto px-4">
            {t("cta.title1")} <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#F3F2EE]">
              {t("cta.extra")}
            </span>
            {t("cta.title2")}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:chitipat140547@gmail.com?subject=Hello%20from%20your%20Portfolio"
              className="bg-[#F3F2EE] text-[#1A1A1A] px-10 py-5 rounded-full font-black text-lg inline-flex items-center gap-4 hover:scale-105 active:scale-95 transition-all group"
            >
              {t("cta.talk")}{" "}
              <ArrowUpRight
                size={24}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={handleCopyEmail}
              className="border-2 border-[#F3F2EE] text-[#F3F2EE] px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-4 hover:bg-[#F3F2EE] hover:text-[#1A1A1A] transition-all group"
            >
              {copied ? t("cta.copied") : t("cta.copy")}
              {!copied && (
                <Code2
                  size={24}
                  className="group-hover:rotate-12 transition-transform"
                />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 px-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            © 2026 Chitipat S.
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-10 mt-1">
            {t("footer.design")}
          </span>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          <span className="flex items-center gap-2">
            <MapPin size={12} /> {t("footer.location")}
          </span>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default PortfolioHome;
