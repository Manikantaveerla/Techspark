/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import ProgramDetails from './components/ProgramDetails';
import PlacementSupport from './components/PlacementSupport';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-primary text-white selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Benefits />
        <ProgramDetails />
        <PlacementSupport />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
