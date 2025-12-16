import React, { useState } from 'react';
import { SectionType } from '../types';
import { Menu, X, Home, User, BookOpen, FileText, Users, Briefcase, PenTool, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: SectionType.HOME, label: 'Home', icon: Home },
    { id: SectionType.ABOUT_ME, label: 'About Me', icon: User },
    { id: SectionType.ABOUT_ISM, label: 'About ISM', icon: BookOpen },
    { id: SectionType.RESEARCH, label: 'Research & Portfolio', icon: FileText },
    { id: SectionType.MENTORSHIP, label: 'Mentorship', icon: Users },
    { id: SectionType.PROJECTS, label: 'Final Product', icon: Briefcase },
    { id: SectionType.BLOG, label: 'Blog', icon: PenTool },
    { id: SectionType.CONTACT, label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: SectionType) => {
    setActiveSection(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-900/80 text-white md:hidden backdrop-blur-sm border border-blue-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-slate-900/95 border-r border-slate-800 z-40 flex flex-col backdrop-blur-md`}>
        <div className="p-8 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 serif">
            SM
          </h1>
          <p className="text-slate-400 text-sm mt-1">Spencer Mida</p>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-900/50 text-cyan-300 border border-blue-800/50 shadow-[0_0_15px_rgba(56,189,248,0.1)]' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </div>
        
        <div className="p-6 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">© 2025 Spencer Mida</p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;