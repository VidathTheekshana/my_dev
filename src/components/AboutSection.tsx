import { GraduationCap, Code, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

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

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-accent-muted text-lg max-w-3xl mx-auto">
            Discover my journey in technology and passion for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="fade-in-left">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold text-accent">Education & Background</h3>
              </div>
              <p className="text-accent-muted leading-relaxed">
                Currently pursuing a Computer Science degree at SLIIT (Sri Lanka Institute of Information Technology), 
                where I'm developing a strong foundation in software engineering principles, algorithms, and system design.
              </p>
            </div>

            <div className="fade-in-left animation-delay-200">
              <h3 className="text-2xl font-semibold text-accent mb-4">My Philosophy</h3>
              <p className="text-accent-muted leading-relaxed mb-4">
                I believe in the power of technology to solve real-world problems and improve people's lives. 
                My approach combines technical excellence with user-centered design, ensuring that every solution 
                I create is not only functional but also intuitive and engaging.
              </p>
              <p className="text-accent-muted leading-relaxed">
                Continuous learning is at the core of my professional journey. I'm always exploring new 
                technologies, frameworks, and design patterns to stay at the forefront of the rapidly 
                evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className={`surface-gradient border-accent-subtle p-6 scale-on-hover fade-in-right animation-delay-${index * 200}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent p-3 rounded-lg bg-accent-subtle/10">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-accent mb-2">
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

        {/* Timeline or additional info could go here */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-subtle/10 border border-accent-subtle">
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