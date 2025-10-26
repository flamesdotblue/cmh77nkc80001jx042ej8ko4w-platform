import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                <span className="text-xl font-semibold">DR</span>
              </div>
              <span className="text-lg font-semibold tracking-wide">DIAMOND RINGS</span>
            </div>
            <p className="mt-4 text-white/70 max-w-md">
              Elevating love stories with precision craftsmanship and ethically sourced brilliance.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Shop</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a href="#shop" className="hover:text-white transition">Engagement</a></li>
              <li><a href="#collections" className="hover:text-white transition">Collections</a></li>
              <li><a href="#custom" className="hover:text-white transition">Custom</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Diamond Rings. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:bg-white/10 transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-white/20 p-2 hover:bg-white/10 transition">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
