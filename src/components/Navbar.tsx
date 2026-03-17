import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'en';
    const newLang = currentLang.startsWith('en') ? 'th' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 px-6 md:px-12 py-4 md:py-6 flex justify-between items-center max-w-[1600px] left-1/2 -translate-x-1/2 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm" : "bg-transparent border-transparent"}`}>
        <a href="/" className="text-2xl font-black tracking-tighter cursor-pointer">
          CS<span className="text-orange-500">.</span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] items-center">
            <a href="#experience" className="hover:underline underline-offset-8 decoration-orange-500 transition-all cursor-pointer text-[#1A1A1A]/60 hover:text-[#1A1A1A]">{t('nav.experience')}</a>
            <a href="#skills" className="hover:underline underline-offset-8 decoration-orange-500 transition-all cursor-pointer text-[#1A1A1A]/60 hover:text-[#1A1A1A]">{t('nav.skills')}</a>
            <a href="#projects" className="hover:underline underline-offset-8 decoration-orange-500 transition-all cursor-pointer text-[#1A1A1A]/60 hover:text-[#1A1A1A]">{t('nav.projects')}</a>
            <a href="#contact" className="hover:underline underline-offset-8 decoration-orange-500 transition-all text-[#1A1A1A]/60 hover:text-[#1A1A1A]">{t('nav.contact')}</a>
          </div>

          <button onClick={toggleLanguage} className="text-[10px] font-black border-2 border-[#1A1A1A] px-2 py-1 rounded-md hover:bg-[#1A1A1A] hover:text-white transition-all uppercase tracking-widest">
            {i18n.language?.startsWith('en') ? 'TH' : 'EN'}
          </button>

          <button className="md:hidden p-2 -mr-2 text-[#1A1A1A]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-30 bg-[#F3F2EE] pt-24 px-6 md:hidden flex flex-col gap-8 text-2xl font-black uppercase tracking-tighter">
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">{t('nav.experience')}</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">{t('nav.skills')}</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">{t('nav.projects')}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">{t('nav.contact')}</a>
        </div>
      )}
    </>
  );
};

export default Navbar;