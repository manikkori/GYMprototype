import { Link } from 'react-router-dom';
import { Dumbbell, Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { gymData } from '../data/gymData';

const Footer = () => {
  return (
    <footer className="bg-surface pt-16 pb-8 border-t border-border font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="text-primary h-6 w-6" />
              <span className="font-bebas text-2xl tracking-widest text-light mt-0.5">POWER<span className="text-primary">FIT</span></span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-5 max-w-sm">
              We eliminate modern fitness fluff to deliver high-octane iron environments for individuals demanding serious physical evolution.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-dark border border-border rounded-full flex items-center justify-center text-light hover:bg-primary hover:border-primary transition-colors"><FaInstagram size={16} /></a>
              <a href="#" className="w-9 h-9 bg-dark border border-border rounded-full flex items-center justify-center text-light hover:bg-primary hover:border-primary transition-colors"><FaTwitter size={16} /></a>
              <a href="#" className="w-9 h-9 bg-dark border border-border rounded-full flex items-center justify-center text-light hover:bg-primary hover:border-primary transition-colors"><FaYoutube size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-light tracking-wider mb-4">NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors">Story</Link>
              <Link to="/plans" className="hover:text-primary transition-colors">Pricing</Link>
              <Link to="/schedule" className="hover:text-primary transition-colors">Timetable</Link>
              <Link to="/trainers" className="hover:text-primary transition-colors">Coaches</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors">Warzone</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-light tracking-wider mb-4">CONTACT HQ</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{gymData.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>{gymData.whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>{gymData.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted gap-2">
          <p>&copy; {new Date().getFullYear()} PowerFit Gym. Raw Intensity Assured.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-light transition-colors">Privacy</a>
            <a href="#" className="hover:text-light transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;