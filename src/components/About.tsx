/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BISTRO_INFO } from '../constants';

export default function About() {
  return (
    <section id="about" className="section-container grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="aspect-[4/5] relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" 
            className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Bistro Interior"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Abstract shape */}
        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-stone-900 -z-0"></div>
      </div>

      <div className="space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-gold text-xs font-semibold mb-4">Our Heritage</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 italic">A Legacy of<br /> Culinary Arts</h2>
          <p className="text-stone-400 leading-loose">
            {BISTRO_INFO.about}
          </p>
          <div className="pt-8 flex items-center gap-6">
             <div className="h-[1px] w-12 bg-stone-800"></div>
             <p className="font-serif italic text-xl text-stone-200">Chef Julian Thorne</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
