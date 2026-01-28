'use client';

import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-[#2A2825] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C8A553] text-sm tracking-[0.3em] mb-4">
            04 — CONTACTAME
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Creemos juntos algo
            <br />
            hermoso
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Listo para transformar tu espacio? Contáctanos hoy mismo y
            descubre cómo podemos hacer realidad la visión de tu hogar o
            negocio con un diseño interior excepcional.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-16"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#C8A553]/30">
              <Mail className="w-5 h-5 text-[#C8A553]" />
            </div>
            <h3 className="text-lg mb-2 tracking-wide">Email</h3>
            <a
              href="mailto:hello@varodesign.com"
              className="text-white/70 hover:text-[#C8A553] transition-colors"
            >
              hello@varodesign.com
            </a>
          </div>
          <div className="text-center ">
            <a
              href="https://www.instagram.com/varo.portfolio?utm_source=qr&igsh=MTRwbzB6azIybzltdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#C8A553] transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#C8A553]/30">
                <Instagram className="w-5 h-5 text-[#C8A553]" />
              </div>
              <h3 className="text-lg mb-2 tracking-wide">Instagram</h3>
                @varo.portfolio
            </a>
          </div>
          <div className="text-center ">
            <a
              href="https://www.linkedin.com/in/valentina-rodriguez-rubio-98a7b8233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#C8A553] transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#C8A553]/30">
                <Linkedin className="w-5 h-5 text-[#C8A553]" />
              </div>
              <h3 className="text-lg mb-2 tracking-wide">Linkedin</h3>
                Valentina Rodriguez
            </a>
          </div>
          <div className="text-center ">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#C8A553]/30">
              <MapPin className="w-5 h-5 text-[#C8A553]" />
            </div>
            <h3 className="text-lg mb-2 tracking-wide">Ubicación</h3>
            <p className="text-white/70">
              Buenos Aires, Argentina
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.a
            href="mailto:hello@varodesign.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-[#C8A553] text-white hover:bg-[#B89543] transition-colors tracking-wider text-sm"
          >
            START A PROJECT
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <Image src='/valen_logo.jpeg' alt="VA RO DESIGN" className="h-10 opacity-80" width={40} height={40} />
          </div>
          
          <div className="text-sm text-white/50 text-center md:text-right">
            <p>© 2026 VA RO DESIGN. Todos los derechos reservados.</p>
            <p className="mt-1">Creando interiores excepcionales</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
