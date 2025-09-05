import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/vidath-profile.jpg';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const cardRef = useRef(null);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  // Scroll fade-in effect
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

  // Mouse move 3D tilt effect
  useEffect(() => {
    const card = cardRef.current;
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

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
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
              <a
                href="mailto:vidaththeekshana@gmail.com"
                className="icon-hover p-3 rounded-full border border-accent-subtle"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vidath-theekshana"
                className="icon-hover p-3 rounded-full border border-accent-subtle"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/vidaththeekshana"
                className="icon-hover p-3 rounded-full border border-accent-subtle"
              >
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

        {/* Profile Image */}
        <div className="fade-in-right animation-delay-200 flex justify-center lg:justify-end scroll-fade">
          <div
            ref={cardRef}
            className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow transition-transform duration-300"
            style={{ perspective: '1000px' }}
          >
            <img
              src={profileImage}
              alt="Vidath Theekshana - Full-Stack Developer"
              className="w-full h-full object-cover object-center"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent-subtle rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-accent-subtle rounded-full opacity-30"></div>
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
