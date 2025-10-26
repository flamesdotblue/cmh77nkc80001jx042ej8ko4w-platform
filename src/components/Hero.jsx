import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <span className="text-xl font-semibold">DR</span>
            </div>
            <span className="text-lg font-semibold tracking-wide">DIAMOND RINGS</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#shop" className="hover:text-white transition">Shop</a>
            <a href="#collections" className="hover:text-white transition">Collections</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">Sign in</button>
            <button className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">Cart (0)</button>
          </div>
        </div>
      </header>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6 flex flex-col justify-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur">
              Luxury • Craft • Brilliance
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
              Exquisite Diamond Rings for Modern Elegance
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              Discover hand-selected diamonds, masterfully set in contemporary designs. Ethically sourced, certified, and tailored to your story.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
                Shop now
              </a>
              <a href="#custom" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition">
                Custom design
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
