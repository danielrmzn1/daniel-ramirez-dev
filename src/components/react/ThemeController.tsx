import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeController() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme || document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme as 'light' | 'dark');
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.style.colorScheme = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-base-200 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center justify-center w-9 h-9 rounded-full bg-base-200 hover:bg-base-300 text-base-content border border-base-content/10 transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-base-content/5 hover:ring-base-content/20 cursor-pointer"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <div className={`absolute inset-0 transform transition-transform duration-500 rotate-0 ${theme === 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 rotate-90'}`}>
           <Sun size={20} className="text-warning" strokeWidth={2} />
        </div>
        <div className={`absolute inset-0 transform transition-transform duration-500 rotate-0 ${theme === 'light' ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 -rotate-90'}`}>
           <Moon size={20} className="text-base-content/80" strokeWidth={2} />
        </div>
      </div>
    </button>
  );
}
