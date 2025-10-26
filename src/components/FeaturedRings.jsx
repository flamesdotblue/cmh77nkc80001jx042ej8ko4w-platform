import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Solitaire Halo Ring',
    price: '$3,450',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Oval Cut Pavé Band',
    price: '$4,190',
    image:
      'https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emerald Bezel Ring',
    price: '$2,990',
    image:
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Three-Stone Classic',
    price: '$5,120',
    image:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
  },
];

function Rating({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? 'text-yellow-300 fill-yellow-300' : 'text-white/30'}`}
        />
      ))}
    </div>
  );
}

function FeaturedRings() {
  return (
    <section id="shop" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Rings</h2>
            <p className="mt-2 text-white/70">Hand-picked pieces that define brilliance and modern luxury.</p>
          </div>
          <a
            href="#collections"
            className="hidden sm:inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            View all collections
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-3 backdrop-blur hover:from-white/[0.08] hover:to-white/[0.04] transition"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="px-1 pt-4 pb-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium">{p.name}</h3>
                  <span className="text-white/90">{p.price}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <Rating value={p.rating} />
                  <button className="rounded-full bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-white/90 transition">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRings;
