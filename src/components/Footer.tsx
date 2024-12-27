import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://i.imgur.com/diSP3eH.png" 
              alt="Us4U Security Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-500">
              Uw vertrouwde partner in professionele beveiliging sinds 2015
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <p>Us4U Security</p>
              <p>info@us4usec.com</p>
              <p>KvK: 12345678</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-500 hover:text-brand">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-brand">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-500 hover:text-brand">
                  Werken bij
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-500 hover:text-brand">
                  Offerte
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Juridisch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://drive.google.com/file/d/1SUPbada8gbIhp_1z_VmqJLxgeBsdCaVJ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand"
                >
                  Algemene voorwaarden
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1LNFugl3gqfbBGV-kRKLvT3oALSBtmUwF/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand"
                >
                  Privacy verklaring
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1_RXes_pjIRuXZfBu2etXZvv6IE0E03Kd/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand"
                >
                  Klachtenregeling
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Us4U Security. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}