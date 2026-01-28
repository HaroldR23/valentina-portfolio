'use client';

import { motion } from 'motion/react';
import { services } from '@/app/data';

const Services = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FAFAF8]" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#C8A553] text-sm tracking-[0.3em] mb-4">
            03 — SERVICIOS
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            QUÉ OFRECEMOS
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="pb-8 border-b border-[#2A2825]/10 hover:border-[#C8A553] transition-colors">
                  <div className="flex items-start space-x-6">
                    <div className="shrink-0 w-16 h-16 flex items-center justify-center border border-[#C8A553]/30 group-hover:bg-[#C8A553] transition-colors">
                      <Icon className="w-6 h-6 text-[#C8A553] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3
                        className="text-xl md:text-2xl mb-3 group-hover:text-[#C8A553] transition-colors"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#2A2825]/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
