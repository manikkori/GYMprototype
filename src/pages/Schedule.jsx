import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { gymData } from '../data/gymData';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Mon');
  const filteredClasses = gymData.schedule.filter(c => c.day === activeDay);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="font-bebas text-6xl md:text-7xl text-light mb-4 tracking-wide">
            CLASS <span className="text-primary">TIMETABLE</span>
          </h1>
          <p className="text-muted font-inter max-w-2xl mx-auto text-sm">Plan your week. Show up. Put in the work.</p>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-12 gap-2 sm:justify-center no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-3 font-bebas text-xl tracking-wider transition-colors flex-shrink-0 border ${
                activeDay === day 
                  ? 'bg-primary text-light border-primary' 
                  : 'bg-surface2 text-muted border-border hover:text-light hover:bg-surface'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((cls, index) => (
                <motion.div
                  key={cls.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-surface p-6 border border-border hover:border-primary/50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-inter uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-sm font-semibold">
                        {cls.type}
                      </span>
                    </div>
                    <h3 className="font-bebas text-3xl text-light tracking-wide">{cls.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-muted font-inter text-sm">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-primary" />
                      <span>{cls.trainer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{cls.time} ({cls.duration} min)</span>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/${gymData.whatsappNumber}?text=Hi,%20I%20want%20to%20join%20the%20${cls.name}%20class%20on%20${cls.day}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto mt-4 md:mt-0 bg-surface2 px-6 py-3 font-bebas text-xl text-light hover:bg-primary transition-colors border border-border group-hover:border-primary text-center"
                  >
                    JOIN
                  </a>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="text-center py-20 text-muted font-bebas text-3xl tracking-wide"
              >
                Rest Day. Recover and rebuild.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Schedule;