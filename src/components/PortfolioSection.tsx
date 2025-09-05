import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, Next.js, and Tailwind CSS featuring smooth animations, interactive sections, and optimized performance.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      image: '/placeholder.svg',
      liveDemo: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Catering Service Web Application',
      description: 'Full-stack web application for managing catering services with user authentication, order management, and admin dashboard.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
      image: '/placeholder.svg',
      liveDemo: '#',
      github: '#',
      featured: true
    },
    {
      title: 'FormLang++',
      description: 'Domain-specific language designed for generating HTML forms with custom syntax and compiler implementation.',
      technologies: ['Java', 'ANTLR', 'Compiler Design', 'HTML Generation'],
      image: '/placeholder.svg',
      liveDemo: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Weather Station X',
      description: 'IoT-based weather monitoring system with real-time data collection, analysis, and visualization dashboard.',
      technologies: ['Arduino', 'React', 'Node.js', 'MongoDB', 'IoT Sensors'],
      image: '/placeholder.svg',
      liveDemo: '#',
      github: '#',
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-accent-muted text-lg max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={index}
                className={`group surface-gradient border-accent-subtle overflow-hidden scale-on-hover fade-in-up animation-delay-${index * 200}`}
              >
                {/* Project Image */}
                <div className="aspect-video bg-accent-subtle/20 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        className="bg-accent text-background hover:bg-accent-muted"
                        asChild
                      >
                        <a href={project.liveDemo}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-background"
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-accent mb-3">
                    {project.title}
                  </h3>
                  <p className="text-accent-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-accent-subtle/20 text-accent-muted hover:bg-accent-subtle/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Desktop Links */}
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="bg-accent text-background hover:bg-accent-muted"
                      asChild
                    >
                      <a href={project.liveDemo}>
                        View Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent-subtle text-accent-muted hover:border-accent hover:text-accent"
                      asChild
                    >
                      <a href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={index}
                className={`surface-gradient border-accent-subtle p-6 scale-on-hover fade-in-up animation-delay-${(index + 2) * 200}`}
              >
                <h3 className="text-xl font-semibold text-accent mb-3">
                  {project.title}
                </h3>
                <p className="text-accent-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent-subtle/20 text-accent-muted text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="bg-accent-subtle/20 text-accent-muted text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent-subtle text-accent-muted hover:border-accent hover:text-accent flex-1"
                    asChild
                  >
                    <a href={project.liveDemo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent-subtle text-accent-muted hover:border-accent hover:text-accent flex-1"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-background px-8 py-3"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
