import React from 'react';
import { DocumentItem } from '../types';
import { FileText, Eye, Calendar, Mic, User } from 'lucide-react';

interface DocumentCardProps {
  doc: DocumentItem;
  onClick: (doc: DocumentItem) => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ doc, onClick }) => {
  const isInterview = doc.type === 'Interview';
  const isResume = doc.type === 'Resume';

  return (
    <div 
      onClick={() => onClick(doc)}
      className="group relative bg-slate-800/40 border border-slate-700 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 cursor-pointer flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${isInterview ? 'bg-purple-900/30 text-purple-300' : isResume ? 'bg-cyan-900/30 text-cyan-300' : 'bg-blue-900/30 text-blue-300'}`}>
          {isInterview ? <Mic size={24} /> : isResume ? <User size={24} /> : <FileText size={24} />}
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-2 bg-slate-900/50 px-3 py-1.5 rounded-full text-xs font-medium text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
            <Eye size={14} />
            <span>View Document</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{doc.type}</span>
        <h3 className="text-lg font-bold text-slate-100 mt-1 group-hover:text-cyan-200 transition-colors">{doc.title}</h3>
      </div>

      <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
        {doc.summary}
      </p>

      {doc.date && (
        <div className="flex items-center text-slate-500 text-xs mt-auto pt-4 border-t border-slate-700/50">
          <Calendar size={12} className="mr-2" />
          {doc.date}
        </div>
      )}
    </div>
  );
};

export default DocumentCard;