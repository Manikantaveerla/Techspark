import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center font-bold text-brand-primary text-xl">
                T
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                TechSpark <span className="text-brand-accent">AI Labs</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Empowering students with industry-oriented software training. Led by professionals with 10+ years of international experience.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-brand-accent hover:bg-white/10 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Course Modules', 'Student Benefits', 'Placement Support', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-white/40 hover:text-brand-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Our Courses</h4>
            <ul className="space-y-4">
              {['Python Mastery', 'Java Professional', 'Data Engineering', 'AI / ML Career'].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-white/40 hover:text-brand-accent transition-colors text-sm">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/40">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <a href="tel:9848760585" className="hover:text-brand-accent transition-colors">+91 9848760585</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <Mail size={18} className="text-brand-accent shrink-0" />
                <span>info@techsparkailabs.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={18} className="text-brand-accent shrink-0" />
                <span>Online Live Classes (Zoom / Google Meet)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} TechSpark AI Labs. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
