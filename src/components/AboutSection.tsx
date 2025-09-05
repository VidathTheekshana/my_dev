import { GraduationCap, Code, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Expertise in both frontend and backend technologies, creating end-to-end solutions.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with modern design principles.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex challenges and building innovative solutions.'
    }
  ];

  const cardRefs = useRef([]);

  // Scroll fade-in animation
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-fade');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }, []);

  // 3D tilt for highlight cards
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.05)`;
      };
      const handleMouseLeave = () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      };
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }, []);

  return (
    <section id="about" className="py-20 relative bg-surface overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent-subtle rounded-full opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-subtle rounded-full opacity-10 animate-float-slow delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient glow-hover">
            About Me
          </h2>
          <p className="text-accent-muted text-lg max-w-3xl mx-auto scroll-fade">
            Discover my journey in technology and passion for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="fade-in-left scroll-fade">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-accent glow-hover" />
                <h3 className="text-2xl font-semibold text-accent">Education & Background</h3>
              </div>
              <p className="text-accent-muted leading-relaxed">
                Currently pursuing a Computer Science degree at SLIIT (Sri Lanka Institute of Information Technology), 
                developing strong foundations in software engineering, algorithms, and system design.
              </p>
            </div>

            <div className="fade-in-left animation-delay-200 scroll-fade">
              <h3 className="text-2xl font-semibold text-accent mb-4 glow-hover">My Philosophy</h3>
              <p className="text-accent-muted leading-relaxed mb-4">
                I believe in the power of technology to solve real-world problems and improve people's lives. 
                My approach combines technical excellence with user-centered design for intuitive solutions.
              </p>
              <p className="text-accent-muted leading-relaxed">
                Continuous learning is at the core of my journey. Exploring new technologies and design patterns keeps me ahead in the evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                ref={(el) => cardRefs.current[index] = el}
                className={`surface-gradient border-accent-subtle p-6 scale-on-hover fade-in-right scroll-fade animation-delay-${index * 200} transition-transform duration-300 shadow-lg hover:shadow-glow hover:cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent p-3 rounded-lg bg-accent-subtle/10 glow-hover">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-accent mb-2 glow-hover">
                      {highlight.title}
                    </h4>
                    <p className="text-accent-muted leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Location / Availability */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-subtle/10 border border-accent-subtle shadow-glow animate-fade-in scroll-fade">
            <span className="text-accent-muted">Based in Sri Lanka</span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-accent-muted">Available for opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
