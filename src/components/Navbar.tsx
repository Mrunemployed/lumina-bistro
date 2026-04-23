/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg-dark/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <UtensilsCrossed className="text-gold w-6 h-6" />
          <span className="text-2xl font-serif tracking-tighter text-stone-100 italic">Lumina</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <a href="#reserve" className="btn-primary py-2 px-6 text-sm">
            Reserve
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-bg-dark border-t border-stone-800 p-6 flex flex-col space-y-6"
        >
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="nav-link text-lg text-center" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#reserve" 
            className="btn-primary text-center" 
            onClick={() => setIsOpen(false)}
          >
            Reserve Now
          </a>
        </motion.div>
      )}
    </nav>
  );
}
