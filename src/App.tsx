/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-gold selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="h-px w-full bg-stone-900 border-stone-800 border-t border-dashed my-8 opacity-20"></div>
        <Menu />
        <Gallery />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}
