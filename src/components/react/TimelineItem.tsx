import React, { useState, useRef, useEffect } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  company: string;
  startDate: string;
  endDate: string;
  isOpen?: boolean;
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  company,
  startDate,
  endDate,
  isOpen = false,
  color = 'primary',
  children,
}) => {
  const [open, setOpen] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const colorClass = color === 'primary' ? 'group-hover:text-primary' : 'group-hover:text-secondary';
  const borderClass = color === 'primary' ? 'hover:border-primary' : 'hover:border-secondary';
  const dotClass = color === 'primary' ? 'group-hover:bg-primary' : 'group-hover:bg-secondary';
  const textClass = color === 'primary' ? 'text-primary' : 'text-secondary';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (open) {
      setIsClosing(true);
      // Wait for animation to finish
      setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
      }, 300); // Match transition duration
    } else {
      setOpen(true);
    }
  };

  return (
    <div className={`relative pl-8 border-l border-base-content/10 ${borderClass} transition-colors duration-300 group`}>
      <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-base-content/20 ${dotClass} transition-colors`}></div>
      
      <div className={`group/acc ${open ? 'is-open' : ''}`}>
        <button 
          onClick={handleClick}
          className="w-full text-left list-none cursor-pointer outline-none [&::-webkit-details-marker]:hidden"
          aria-expanded={open}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 pr-4">
            <h3 className={`text-2xl font-bold ${colorClass} transition-colors`}>{title}</h3>
            <span className="font-mono text-sm text-base-content/60">{startDate} — {endDate}</span>
          </div>
          <div className={`text-lg font-medium ${textClass} mb-4 flex items-center gap-2`}>
            {company}
            {subtitle && <span className="hidden"> - {subtitle}</span>}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-4 h-4 opacity-50 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
        
        <div 
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden">
            <div className="pb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
