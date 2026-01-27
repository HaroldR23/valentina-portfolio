'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_img.jpeg"
          alt="Interior design showcase"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm tracking-[0.3em] mb-6 text-white/90"
          >
            ESTUDIO DE DISEÑO DE INTERIORES
          </motion.p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Creando espacios
            <br />
            atemporales
          </h1>

          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Donde la visión arquitectónica se une a la elegancia refinada          
          </p>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 border border-white/40 backdrop-blur-sm hover:bg-white/10 transition-all tracking-wider text-sm"
          >
            VER PROYECTOS
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
          }}
          className="absolute bottom-12"
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
