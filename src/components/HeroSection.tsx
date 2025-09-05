import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/vidath-profile.jpg';

const HeroSection = () => {
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

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="fade-in-up">
            <p className="text-accent-muted text-lg mb-4 tracking-wider">
              Hello, I'm Vidath
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Full-Stack</span><br />
              <span className="text-accent">Developer</span><br />
              <span className="text-accent-muted">& UI/UX Designer</span>
            </h1>
            <p className="text-accent-muted text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed">
              Computer Science undergraduate at SLIIT, passionate about building modern, 
              scalable, and interactive web applications that solve real-world problems.
            </p>
          </div>

          <div className="fade-in-up animation-delay-200 flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Button 
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-accent text-background hover:bg-accent-muted transition-all duration-300 px-8 py-3 text-lg"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:vidaththeekshana@gmail.com"
                className="p-3 rounded-full border border-accent-subtle hover:border-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/vidath-theekshana"
                className="p-3 rounded-full border border-accent-subtle hover:border-accent transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/vidaththeekshana"
                className="p-3 rounded-full border border-accent-subtle hover:border-accent transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="fade-in-up animation-delay-400 grid grid-cols-2 lg:grid-cols-4 gap-6">
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
        <div className="fade-in-right animation-delay-200 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow">
              <img 
                src={profileImage} 
                alt="Vidath Theekshana - Full-Stack Developer" 
                className="w-full h-full object-cover object-center scale-on-hover"
              />
            </div>
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