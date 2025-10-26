import React from 'react';
import { Gem, ShieldCheck, Truck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Certified Brilliance',
    desc: 'Every diamond is graded and accompanied by trusted certification.'
  },
  {
    icon: ShieldCheck,
    title: 'Lifetime Warranty',
    desc: 'Complimentary maintenance, cleaning, and polishing for life.'
  },
  {
    icon: Truck,
    title: 'Insured Shipping',
    desc: 'Fast, discreet, and fully insured worldwide delivery.'
  },
  {
    icon: Sparkles,
    title: 'Ethically Sourced',
    desc: 'Conflict-free diamonds and responsibly sourced metals.'
  }
];

function WhyChooseUs() {
  return (
    <section id="about" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Why choose us</h2>
          <p className="mt-2 text-white/70">Luxury is in the details — our promise is quality, integrity, and artistry.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:bg-white/[0.06] transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div id="custom" className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.03] p-6">
          <div>
            <h3 className="text-xl font-medium">Design your custom ring</h3>
            <p className="mt-1 text-white/70">Work with our designers to create a one-of-a-kind piece that reflects you.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">Start a consultation</a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
