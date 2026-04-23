/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../constants';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">The Collection</h2>
        <div className="w-12 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-stone-400 max-w-lg mx-auto">
          Experience a curation of seasonal ingredients and masterfully executed flavors.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-stone-800 pb-4">
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`uppercase tracking-widest text-xs font-semibold py-2 transition-all duration-300 relative ${
              activeCategory === cat ? 'text-gold' : 'text-stone-500 hover:text-stone-300'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {filteredItems.map((item, idx) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-6 group"
          >
            <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-2 border-b border-stone-800 border-dotted pb-2">
                <h3 className="text-xl font-serif text-stone-200">{item.name}</h3>
                <span className="text-gold font-mono text-sm">${item.price}</span>
              </div>
              <p className="text-stone-500 text-sm italic leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
