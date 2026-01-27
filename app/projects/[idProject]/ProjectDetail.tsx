"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ProjectDetailProps } from "@/app/props";
import Image from "next/image";

const ProjectDetail = ({ 
  project
 } : ProjectDetailProps) => {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-[#F5F2ED]/95 backdrop-blur-sm z-50 border-b border-[#E8DCC8]/30">
        <div className="px-6 md:px-12 py-6">
          <Link
            href="/"
            className="flex items-center gap-3 group hover:text-[#C8A553]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider">VOLVER</span>
          </Link>
        </div>
      </header>

      {/* Contenido */}
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header del proyecto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-[#C8A553] text-sm tracking-[0.3em] mb-4">
              {project.category}
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {project.title}
            </h1>

            {/* Detalles del proyecto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-[#E8DCC8]/50 py-8">
              <div>
                <p className="text-[#A89F91] text-sm tracking-wider mb-2">AÑO</p>
                <p className="text-xl">{project.details.year}</p>
              </div>
              <div>
                <p className="text-[#A89F91] text-sm tracking-wider mb-2">ÁREA</p>
                <p className="text-xl">{project.details.area}</p>
              </div>
              <div>
                <p className="text-[#A89F91] text-sm tracking-wider mb-2">UBICACIÓN</p>
                <p className="text-xl">{project.details.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-[#2C2C2C]">
                {project.description}
              </p>
            </div>
          </motion.div>

          {/* Galería de imágenes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 md:space-y-12"
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-16/10 overflow-hidden bg-[#D4C4A8]"
              >
                <Image
                  src={image}
                  fill
                  alt={`${project.title} - imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Botón de volver al final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center"
          >
            <Link
              href="/"
              className="flex items-center gap-3 group hover:text-[#C8A553]"
            >
                <ArrowLeft className="w-5 h-5" />
                VOLVER A PROYECTOS
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default ProjectDetail;
