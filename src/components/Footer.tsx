/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BISTRO_INFO } from '../constants';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-stone-900 pt-24 pb-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif text-gold italic mb-6">Lumina</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Crafting unforgettable culinary stories in the heart of the city since 2012.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold text-stone-200 mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>{BISTRO_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span>{BISTRO_INFO.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span>{BISTRO_INFO.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold text-stone-200 mb-6">Experience</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              {BISTRO_INFO.hours.map((h) => (
                <li key={h.days} className="flex justify-between border-b border-stone-900 pb-2">
                  <span className="font-medium text-stone-400">{h.days}</span>
                  <span className="font-mono text-xs text-gold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold text-stone-200 mb-6">Journal</h4>
            <p className="text-stone-500 text-xs mb-4">Subscribe for seasonal menu updates and exclusive event invites.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-stone-900 border border-stone-800 p-2 text-xs w-full focus:border-gold outline-none"
              />
              <button className="bg-gold text-bg-dark px-4 py-2 flex items-center justify-center">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-900 pt-8 gap-6">
          <p className="text-stone-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Lumina Bistro. All rights reserved.
          </p>
          <div className="flex gap-6 text-stone-500">
            <a href={BISTRO_INFO.contact.social.instagram} className="hover:text-gold transition-colors"><Instagram size={18} /></a>
            <a href={BISTRO_INFO.contact.social.facebook} className="hover:text-gold transition-colors"><Facebook size={18} /></a>
            <a href={BISTRO_INFO.contact.social.twitter} className="hover:text-gold transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
