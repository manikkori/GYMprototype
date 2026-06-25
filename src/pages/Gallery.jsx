import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gymData } from '../data/gymData';

const categories = ['All', 'Equipment', 'Events', 'Transformations'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const filteredImages = filter === 'All' ? gymData.gallery : gymData.gallery.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="font-bebas text-6xl md:text-7xl text-light mb-4 tracking-wide">
            THE <span className="text-primary">WARZONE</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-bebas text-xl tracking-wide transition-colors ${
                filter === cat ? 'bg-primary text-light' : 'bg-transparent text-muted hover:text-light border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid relative group overflow-hidden border border-border"
              >
                <img src={img.url} alt={img.category} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-bebas text-2xl tracking-wide text-light border border-light px-4 py-2">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Gallery;