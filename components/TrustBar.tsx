import React from 'react';

// Import all images with correct case sensitivity
import hdfcLogo from '../Assets/hdfc.png';
import iciciLogo from '../Assets/icici.png';
import sbiLogo from '../Assets/sbi.png';
import axisLogo from '../Assets/axis.png';
import kotakLogo from '../Assets/kotak.png';
import yesLogo from '../Assets/yes.png';
import indusindLogo from '../Assets/IndusInd.png';
import bajajLogo from '../Assets/bajaj.png';
import pnbLogo from '../Assets/pnb.png';
import idfcLogo from '../Assets/idfc.png';

const banks = [
  { name: "HDFC Bank", logo: hdfcLogo },
  { name: "ICICI Bank", logo: iciciLogo },
  { name: "SBI", logo: sbiLogo },
  { name: "Axis Bank", logo: axisLogo },
  { name: "Kotak", logo: kotakLogo },
  { name: "Yes Bank", logo: yesLogo },
  { name: "IndusInd", logo: indusindLogo },
  { name: "Bajaj Finance", logo: bajajLogo },
  { name: "PNB", logo: pnbLogo },
  { name: "IDFC", logo: idfcLogo }
];

const TrustBar: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-light via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-700 font-semibold text-lg mb-12 tracking-wide">Trusted by Leading Financial Institutions</p>
        <div className="relative">
          <div className="flex animate-slide">
            {[...banks, ...banks, ...banks].map((bank, i) => (
              <div key={i} className="flex-shrink-0 sm:mx-4 px-4 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 min-w-[120px] flex items-center justify-center group">
                <img 
                  src={bank.logo} 
                  alt={bank.name} 
                  className="h-28 w-auto object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;