/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Calendar, Users, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-bg-dark py-24 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto px-6"
        >
          <CheckCircle2 className="text-gold w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-serif mb-4 italic">Reservation Requested</h2>
          <p className="text-stone-500 mb-8">
            Thank you, {formData.name}. We've received your request for {formData.guests} guests on {formData.date}. Our concierge will contact you shortly to confirm.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-outline"
          >
            New Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section id="reserve" className="py-24 bg-stone-900/20">
      <div className="section-container flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl mb-6">Reserve Your Table</h2>
          <p className="text-stone-400 mb-10 leading-relaxed max-w-md">
            Secure your evening at Lumina Bistro. For parties larger than 8, please contact our events team directly via phone.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-stone-300">
              <div className="p-3 bg-stone-800 rounded-full text-gold">
                <Users size={20} />
              </div>
              <span className="text-sm font-medium">Bespoke seating arrangements available</span>
            </div>
            <div className="flex items-center gap-4 text-stone-300">
              <div className="p-3 bg-stone-800 rounded-full text-gold">
                <Clock size={20} />
              </div>
              <span className="text-sm font-medium">Please allow 2 hours for our tasting menu</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-bg-dark p-8 md:p-12 border border-stone-800 rounded-sm shadow-2xl relative"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="James Smith"
                  className="w-full bg-stone-900 border border-stone-800 p-3 text-stone-200 outline-none focus:border-gold transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="james@example.com"
                  className="w-full bg-stone-900 border border-stone-800 p-3 text-stone-200 outline-none focus:border-gold transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Guests</label>
                <select 
                  className="w-full bg-stone-900 border border-stone-800 p-3 text-stone-200 outline-none focus:border-gold transition-colors"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Date</label>
                <div className="relative">
                  <input 
                    required
                    type="date" 
                    className="w-full bg-stone-900 border border-stone-800 p-3 text-stone-200 outline-none focus:border-gold transition-colors"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Time</label>
                <input 
                  required
                  type="time" 
                  className="w-full bg-stone-900 border border-stone-800 p-3 text-stone-200 outline-none focus:border-gold transition-colors"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
              <Send size={18} />
              Book Table
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
