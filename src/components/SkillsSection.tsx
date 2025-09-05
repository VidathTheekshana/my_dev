import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const skills = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'TypeScript / JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML / CSS', level: 95 },
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Java / Spring Boot', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'Database Design', level: 80 },
      ]
    },
    {
      category: 'UI/UX Design',
      skills: [
        { name: 'User Interface Design', level: 88 },
        { name: 'User Experience', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Design Systems', level: 82 },
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Docker', level: 70 },
      ]
    }
  ];

  // Scroll fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // 3D tilt for cards
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const handleMouseMove = (e: MouseEvent) => {
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
    <section id="skills" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-accent-subtle rounded-full opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-subtle rounded-full opacity-10 animate-float-slow delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient glow-hover">
            Skills & Expertise
          </h2>
          <p className="text-accent-muted text-lg max-w-3xl mx-auto scroll-fade">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              ref={(el) => (cardRefs.current[categoryIndex] = el)}
              className={`surface-gradient border-accent-subtle p-6 fade-in-up scroll-fade animation-delay-${categoryIndex * 200} transition-transform duration-300 shadow-lg hover:shadow-glow cursor-pointer`}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6 glow-hover">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-muted font-medium">{skill.name}</span>
                      <span className="text-accent text-sm">{skill.level}%</span>
                    </div>
                    <Progress
                      value={isVisible ? skill.level : 0}
                      className="h-2 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Learning', value: '3+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Projects Built', value: '20+' },
              { label: 'Code Quality', value: '95%' },
            ].map((stat, index) => (
              <div key={index} className="fade-in-up scroll-fade animation-delay-600 glow-hover">
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
      </div>
    </section>
  );
};

export default SkillsSection;
