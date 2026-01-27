'use client';

import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#C8A553] text-sm tracking-[0.3em] mb-4">
            02 — PORTAFOLIO
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Obras seleccionadas
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id} 
              category={project.category} 
              id={project.id} 
              imageUrl={project.imageUrl} 
              title={project.title} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
