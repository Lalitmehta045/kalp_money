
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1b17] pt-24 pb-12 text-slate-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <img 
                src="kalp-logo.png" 
                alt="Kalp Money Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const container = target.parentElement;
                  if (container && !container.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback flex items-center gap-3';
                    fallback.innerHTML = `
                      <div class="w-10 h-10 rounded-full bg-[#204782] flex items-center justify-center relative overflow-hidden">
                        <div class="absolute top-0 left-2 w-5 h-5 bg-[#F25927] transform -rotate-12 translate-y-[-2px]"></div>
                        <span class="text-white font-bold text-2xl relative z-10">K</span>
                      </div>
                      <span class="text-2xl font-bold text-white tracking-tight">Kalp <span class="text-[#F25927]">Money</span></span>
                    `;
                    container.appendChild(fallback);
                  }
                }}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner for all financial needs. From loans to insurance, we provide comprehensive solutions with transparency and trust.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#F25927]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#F25927]" />
                <span>support@kalpmoney.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#F25927]" />
                <span className="max-w-[200px]">123 Finance Street, Mumbai, Maharashtra 400001, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Loans</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Personal Loan</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Home Loan</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Business Loan</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Car Loan</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Loan Against Property</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Product Loan</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Insurance</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Life Insurance</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Health Insurance</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Motor Insurance</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Term Insurance</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#F25927] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-[#F25927] transition-colors">Grievance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm">© 2025 Kalp Money. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#F25927] hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#F25927] hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#F25927] hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#F25927] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#F25927] hover:text-white transition-all"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;