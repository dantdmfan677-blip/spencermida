import React from 'react';
import { DocumentItem } from '../types';
import { X, Calendar, FileText } from 'lucide-react';

interface DocumentModalProps {
  doc: DocumentItem | null;
  onClose: () => void;
}

const DocumentModal: React.FC<DocumentModalProps> = ({ doc, onClose }) => {
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex-1 pr-4">
             <div className="flex items-center space-x-3 mb-2">
                <span className="px-2 py-1 rounded-md bg-cyan-900/30 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800/50">
                  {doc.type}
                </span>
                {doc.date && (
                  <span className="flex items-center text-slate-500 text-xs">
                    <Calendar size={12} className="mr-1" />
                    {doc.date}
                  </span>
                )}
             </div>
             <h2 className="text-2xl font-bold text-white leading-tight">{doc.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="prose prose-invert prose-slate max-w-none">
            {typeof doc.fullContent === 'string' ? (
              doc.fullContent.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed whitespace-pre-line text-slate-300">
                  {paragraph}
                </p>
              ))
            ) : (
              doc.fullContent
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50 rounded-b-2xl flex justify-between items-center text-xs text-slate-500">
           <span>{doc.fileName || 'Document Viewer'}</span>
           <span>ISM Portfolio 2025</span>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;