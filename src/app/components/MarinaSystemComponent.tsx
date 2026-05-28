"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Anchor, Shield, Navigation, ArrowUpRight, Droplets, Activity } from 'lucide-react';

const marinaSpecs = [
  {
    title: "Structural Buoyancy",
    detail: "High-strength, fiber-reinforced precast shell with an expanded polystyrene (EPS) core for unsinkable stability.",
    icon: <Droplets className="w-5 h-5" />
  },
  {
    title: "Seismic Attenuation",
    detail: "Flexible connection systems designed to absorb wave energy and high-magnitude tidal shifts.",
    icon: <Activity className="w-5 h-5" />
  },
  {
    title: "Utility Integration",
    detail: "Internalized raceways for power, water, and fiber optics, protected from saltwater corrosion.",
    icon: <Shield className="w-5 h-5" />
  }
];

export default function MarinaSystemComponent() {
  return (
    <section className="w-full min-h-screen bg-white py-24 px-10 md:px-20 relative overflow-hidden">
      
      {/* BACKGROUND DECORATION: Nautical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#1B79EE 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: The "Master Specs" (Occupies 5/12 columns) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              className="h-1 bg-[#1B79EE]"
            />
            <h2 className="text-6xl md:text-8xl font-black text-[#004aad] tracking-tighter leading-none">
              FLOATING <br />
              <span className="text-[#1B79EE]">MARINAS.</span>
            </h2>
            <p className="text-[#004aad]/70 font-medium text-lg leading-relaxed max-w-md">
              Engineered for the harshest marine environments. Our precast floating docks redefine durability through hydro-dynamic design and carbon-fiber reinforcement.
            </p>
          </div>

          <div className="space-y-8 bg-[#004aad]/5 p-10 border-l-8 border-[#004aad]">
            {marinaSpecs.map((spec, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="text-[#1B79EE] shrink-0">{spec.icon}</div>
                <div>
                  <h4 className="text-[#004aad] font-black text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-3">
                    {spec.title}
                  </h4>
                  <p className="text-[#004aad]/70 text-sm leading-relaxed">{spec.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>

    </section>
  );
}