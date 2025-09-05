import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/vidath-profile.jpg';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

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

  return (
    <section
      id="home"
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="fade-in-up scroll-fade">
            <p className="text-accent-muted text-lg mb-4 tracking-wider">
              Hello, I'm Vidath
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight glow-hover">
              <span className="text-gradient">Full-Stack</span>
              <br />
              <span className="text-accent">Developer</span>
              <br />
              <span className="text-accent-muted">& UI/UX Designer</span>
            </h1>
            <p className="text-accent-muted text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed">
              Computer Science undergraduate at SLIIT, passionate about building modern,
              scalable, and interactive web applications that solve real-world problems.
            </p>
          </div>

          {/* Call-to-action Buttons */}
          <div className="fade-in-up animation-delay-200 flex flex-col sm:flex-row items-center gap-4 mb-12 scroll-fade">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="btn-animated glass-effect px-8 py-3 text-lg font-semibold"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>

            <div className="flex items-center gap-4">
              <a href="mailto:vidaththeekshana@gmail.com" className="icon-hover p-3 rounded-full border border-accent-subtle">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/vidath-theekshana" className="icon-hover p-3 rounded-full border border-accent-subtle">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/vidaththeekshana" className="icon-hover p-3 rounded-full border border-accent-subtle">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="fade-in-up animation-delay-400 grid grid-cols-2 lg:grid-cols-4 gap-6 scroll-fade">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-accent-muted text-sm tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Polygon Frame */}
        <div className="fade-in-right animation-delay-200 flex justify-center lg:justify-end scroll-fade relative">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Background pattern */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-hexagon-pattern opacity-20 animate-breath"></div>
            </div>

            {/* Polygon / Advanced Frame */}
            <div className="relative polygon-frame polygon-gradient animate-breath hover-glow overflow-hidden w-full h-full">
              <img
                src={profileImage}
                alt="Vidath Theekshana"
                className="w-full h-full object-cover object-center clip-polygon"
              />
              {/* Holo cinematic layers */}
              <div className="holo-layer"></div>
              <div className="holo-layer"></div>
              {/* Wireframe overlay */}
              <div className="polygon-wireframe"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-accent-muted" />
      </div>
    </section>
  );
};

export default HeroSection;
