'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.2);

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        aria-label="Portfolio projects"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {projectsData.map((project, index) => (
          <article
            key={project.title}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <meta itemProp="name" content={project.title} />
            <meta itemProp="description" content={project.description} />
            <Project project={project} index={index} />
          </article>
        ))}
      </div>
    </section>
  );
};
