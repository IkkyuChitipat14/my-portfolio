import React from "react";
import { X, Github, ExternalLink, Figma } from "lucide-react"; 
import { useTranslation } from "react-i18next";

export interface ProjectData {
  id: number;
  title: string;
  tags: string[];
  image: string;
  shortDesc: string;
  longDesc: string;
  role: string;
  github?: string;
  figma?: string; 
  demo?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useTranslation();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="bg-[#F3F2EE] w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-300">
        
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
          <X size={20} />
        </button>

        <div className="overflow-y-auto w-full h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-white border-b md:border-b-0 md:border-r border-black/10">
            <img src={project.image} alt={project.title} className="w-full h-[300px] md:h-full object-cover" />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="space-y-6">
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 border border-black/10 rounded-full uppercase tracking-widest text-orange-500">{tag}</span>
                ))}
              </div>

              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-2">{project.title}</h2>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{t('modal.role')} <span className="text-slate-600">{project.role}</span></p>
              </div>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>{project.longDesc}</p>
              </div>

              <div className="pt-6 border-t border-black/10 flex flex-wrap gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-colors">
                    <Github size={16} /> {t('modal.source')}
                  </a>
                )}
                {project.figma && (
                  <a href={project.figma} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-colors">
                    <Figma size={16} /> {t('modal.design')}
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors">
                    <ExternalLink size={16} /> {t('modal.demo')}
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;