import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="bg-indigo-900 p-1.5 rounded-lg transition-transform group-hover:scale-110">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-indigo-950">KODE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-indigo-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-800 transition-all shadow-lg hover:shadow-indigo-900/20 active:scale-95"
          >
            Falar conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-indigo-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-indigo-900 text-white text-center py-3 rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            Falar conosco
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
