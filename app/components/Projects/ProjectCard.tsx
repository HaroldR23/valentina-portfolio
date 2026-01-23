import { motion } from "motion/react";

import { ProjectCardProps } from "@/app/props";

const ProjectCard = ({ id, title, category, imageUrl }: ProjectCardProps) => {
  return (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: id * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 md:aspect-video overflow-hidden mb-6 bg-[#D4C4A8]">
                <motion.img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div> 

              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-2xl md:text-3xl mb-2 group-hover:text-[#C8A553] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#A89F91] tracking-wider text-sm">
                    {category}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-6xl md:text-7xl text-[#E8DCC8] font-light leading-none">
                    {String(id + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.article>

  )
};

export default ProjectCard;