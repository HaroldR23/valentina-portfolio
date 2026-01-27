'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Section Number & Title */}
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#C8A553] text-sm tracking-[0.3em] mb-4"
              >
                01 — ACERCA DE MI
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Diseño de interiores | Decoración & 3D 
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-[#2A2825]/80 leading-relaxed"
            >
              <p className="text-lg">
                VA RO DESIGN es mi marca personal que como diseñadora de interiores en formación, cursando segundo y tercer 
                año de la carrera busco ofrecer soluciones de diseño innovadoras y personalizadas para espacios residenciales y comerciales.
              </p>
              <p>
                Me enfoco en diseño conceptual, decoración y visualización 3D, desarrollando
                 propuestas funcionales y estéticas para proyectos residenciales y comerciales.
              </p>
              <p>
                Trabajo de manera remota o presencial a través de asesorías, e-design y visualizaciones, 
                acompañando cada proyecto con una mirada sensible y consciente del uso del espacio. 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6 border-t border-[#2A2825]/10"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#C8A553] mb-2">Filosofía</h3>
                  <p className="text-sm text-[#2A2825]/70">
                    Elegancia atemporal
                  </p>
                </div>
                <div>
                  <h3 className="text-[#C8A553] mb-2">Estilo</h3>
                  <p className="text-sm text-[#2A2825]/70">
                    Lujo contemporáneo
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
         <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="/about_photo_1.png"
                fill
                alt="Interior design workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
