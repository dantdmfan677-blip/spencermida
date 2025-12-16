import React, { useState } from 'react';
import Navigation from './components/Navigation';
import DocumentCard from './components/DocumentCard';
import DocumentModal from './components/DocumentModal';
import { SectionType, DocumentItem } from './types';
import { USER_INFO, MISSION_STATEMENT, BIO_PARAGRAPHS, ISM_DESCRIPTION, DOCUMENTS } from './constants';
import { ArrowRight, Mail, MapPin, Award, Book, Microscope, GraduationCap } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.HOME);
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  // Helper to filter documents
  const interviews = DOCUMENTS.filter(d => d.type === 'Interview');
  const assessments = DOCUMENTS.filter(d => d.type === 'Assessment');
  const resume = DOCUMENTS.find(d => d.type === 'Resume');

  const renderContent = () => {
    switch (activeSection) {
      case SectionType.HOME:
        return (
          <div className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto pt-20 md:pt-0">
            <div className="space-y-6 animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-900/30 text-cyan-300 border border-blue-800/50 text-sm font-semibold tracking-wide">
                ISM Digital Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight serif">
                {USER_INFO.name}
              </h1>
              <h2 className="text-2xl md:text-4xl text-slate-400 font-light">
                Future of <span className="text-cyan-400 font-normal">Dermatology</span>
              </h2>
              <div className="border-l-4 border-cyan-500 pl-6 py-2 my-8 bg-gradient-to-r from-blue-900/20 to-transparent">
                <p className="text-xl md:text-2xl italic text-slate-300 font-light serif leading-relaxed">
                  {USER_INFO.quote}
                </p>
                <p className="mt-3 text-sm text-cyan-500 font-bold uppercase tracking-widest">— {USER_INFO.quoteAuthor}</p>
              </div>
              <button 
                onClick={() => setActiveSection(SectionType.ABOUT_ME)}
                className="group flex items-center space-x-2 bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 mt-8"
              >
                <span>View Portfolio</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        );

      case SectionType.ABOUT_ME:
        return (
          <div className="max-w-4xl mx-auto space-y-12 pt-10 animate-fade-in">
            <header className="border-b border-slate-800 pb-8">
              <h2 className="text-4xl font-bold text-white serif mb-2">About Me</h2>
              <p className="text-cyan-400 text-lg">Junior @ {USER_INFO.school} | Class of 2027</p>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                {/* Photo Placeholder */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 shadow-xl mb-6 relative group">
                  <img 
                    src="https://i.postimg.cc/c1bbvCzP/photo-of-me-in-professional-attire.jpg" 
                    alt="Spencer Mida" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">{USER_INFO.name}</p>
                    <p className="text-xs text-cyan-300 uppercase tracking-widest">Aspiring Dermatologist</p>
                  </div>
                </div>
                
                {/* Quick Info */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 space-y-4">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MapPin size={18} className="text-cyan-500" />
                    <span className="text-sm">Frisco, TX</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Mail size={18} className="text-cyan-500" />
                    <span className="text-sm break-all">{USER_INFO.email}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="flex items-center text-xl font-bold text-white mb-4">
                    <span className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400 mr-3"><Book size={20} /></span>
                    Biography
                  </h3>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    {BIO_PARAGRAPHS.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </section>

                <section>
                  <h3 className="flex items-center text-xl font-bold text-white mb-4">
                    <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400 mr-3"><Award size={20} /></span>
                    Mission Statement
                  </h3>
                  <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                    <p className="text-slate-200 italic font-medium">"{MISSION_STATEMENT}"</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4">Resume</h3>
                  {resume && (
                     <DocumentCard doc={resume} onClick={setSelectedDoc} />
                  )}
                </section>
              </div>
            </div>
          </div>
        );

      case SectionType.ABOUT_ISM:
        return (
          <div className="max-w-3xl mx-auto pt-10 animate-fade-in">
             <header className="border-b border-slate-800 pb-8 mb-10 text-center">
              <h2 className="text-4xl font-bold text-white serif mb-2">About ISM</h2>
              <p className="text-cyan-400">Independent Study & Mentorship</p>
            </header>

            <div className="bg-slate-800/30 p-10 rounded-2xl border border-slate-700 backdrop-blur-sm relative overflow-hidden">
               {/* Background Decorative Element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="flex justify-center mb-8">
                  {/* ISM Logo */}
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center border-4 border-slate-700 shadow-2xl overflow-hidden p-4">
                     <img 
                      src="https://i.postimg.cc/zD4Y9xq1/ism-b-w.png" 
                      alt="ISM Logo" 
                      className="w-full h-full object-contain"
                     />
                  </div>
               </div>

               <div className="prose prose-invert max-w-none">
                 <p className="text-lg text-slate-300 leading-relaxed text-center">
                   {ISM_DESCRIPTION}
                 </p>
               </div>
            </div>
          </div>
        );

      case SectionType.RESEARCH:
        return (
          <div className="max-w-5xl mx-auto pt-10 animate-fade-in">
            <header className="border-b border-slate-800 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-bold text-white serif mb-2">Research & Portfolio</h2>
                <p className="text-slate-400">Original work, analysis, and professional interviews.</p>
              </div>
            </header>

            <div className="space-y-12">
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">Research Assessments</h3>
                  <div className="h-px bg-slate-800 flex-grow"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {assessments.map(doc => (
                    <DocumentCard key={doc.id} doc={doc} onClick={setSelectedDoc} />
                  ))}
                </div>
              </section>

              <section>
                 <div className="flex items-center space-x-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">Professional Interviews</h3>
                  <div className="h-px bg-slate-800 flex-grow"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {interviews.map(doc => (
                    <DocumentCard key={doc.id} doc={doc} onClick={setSelectedDoc} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case SectionType.MENTORSHIP:
        return (
          <div className="max-w-4xl mx-auto pt-20 animate-fade-in text-center">
             <div className="bg-slate-800/40 border border-slate-700 p-12 rounded-2xl max-w-2xl mx-auto">
               <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-400">
                  <Microscope size={40} />
               </div>
               <h2 className="text-3xl font-bold text-white serif mb-4">Mentorship Status</h2>
               <p className="text-xl text-slate-300 mb-8">
                 I am currently in the process of securing a mentorship with a professional Dermatologist in the Frisco/Dallas area.
               </p>
               <div className="inline-block px-6 py-2 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-800 text-sm font-semibold">
                 Status: Seeking Opportunities
               </div>
             </div>
          </div>
        );

      case SectionType.PROJECTS:
      case SectionType.BLOG:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in">
             <h2 className="text-4xl font-bold text-white serif mb-4 opacity-50">Coming Soon</h2>
             <p className="text-slate-500 text-lg max-w-md text-center">
               This section of my portfolio is currently under construction as I progress through my ISM journey. Please check back later for updates.
             </p>
          </div>
        );
        
      case SectionType.CONTACT:
        return (
           <div className="max-w-2xl mx-auto pt-20 animate-fade-in">
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl">
               <h2 className="text-3xl font-bold text-white serif mb-8 border-b border-slate-700 pb-4">Contact</h2>
               <div className="space-y-6">
                 <p className="text-slate-300">
                   Thank you for visiting my digital portfolio. If you have any questions regarding my research or my journey in ISM, please feel free to reach out via email.
                 </p>
                 <a href={`mailto:${USER_INFO.email}`} className="block group">
                   <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                     <div className="bg-blue-900/30 p-3 rounded-full text-cyan-400 group-hover:text-cyan-300 transition-colors">
                       <Mail size={24} />
                     </div>
                     <div>
                       <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email Address</p>
                       <p className="text-white font-medium">{USER_INFO.email}</p>
                     </div>
                   </div>
                 </a>
               </div>
             </div>
           </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-blue-950 to-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1 md:ml-64 relative">
        {/* Subtle overlay texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none fixed"></div>
        
        <div className="p-6 md:p-12 min-h-screen relative z-10">
          {renderContent()}
        </div>
      </main>

      {/* Document Modal */}
      <DocumentModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
}

export default App;