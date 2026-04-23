/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-stone-950/50 py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 italic">Moments</h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            A visual peek into our culinary studio and dining atmosphere.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Maximize2 className="text-gold w-8 h-8 mb-2 mx-auto" />
                  <span className="text-xs uppercase tracking-widest text-stone-100">{img.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-stone-400 hover:text-stone-100 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              layoutId={selectedImage}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              alt="Gallery Preview"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
