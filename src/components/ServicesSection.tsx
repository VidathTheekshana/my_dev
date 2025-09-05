import { Palette, Code, Smartphone, Globe, Database, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Next.js, Java Spring Boot, and databases.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'System Architecture']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience and modern design principles.',
      features: ['User Interface Design', 'User Experience Research', 'Responsive Design', 'Design Systems']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Web Design',
      description: 'Mobile-first approach ensuring your applications work seamlessly across all devices and screen sizes.',
      features: ['Mobile Optimization', 'Cross-browser Compatibility', 'Performance Optimization', 'Accessibility']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Solutions',
      description: 'Designing and implementing efficient database structures and management systems for your applications.',
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Performance Tuning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Services
          </h2>
          <p className="text-accent-muted text-lg max-w-3xl mx-auto">
            Comprehensive development and design services to bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group surface-gradient border-accent-subtle p-8 scale-on-hover fade-in-up animation-delay-${index * 200} relative overflow-hidden`}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-subtle/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent-subtle/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-accent mb-4">
                  {service.title}
                </h3>
                <p className="text-accent-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-accent-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-accent mb-4">Development Process</h3>
            <p className="text-accent-muted max-w-2xl mx-auto">
              A streamlined approach to ensure quality deliverables and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding requirements and project scope' },
              { step: '02', title: 'Design', desc: 'Creating wireframes and visual designs' },
              { step: '03', title: 'Development', desc: 'Building and testing the solution' },
              { step: '04', title: 'Deployment', desc: 'Launching and ongoing maintenance' }
            ].map((phase, index) => (
              <div key={index} className={`text-center fade-in-up animation-delay-${(index + 4) * 200}`}>
                <div className="w-16 h-16 rounded-full bg-accent-subtle/10 flex items-center justify-center text-accent font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-accent mb-2">{phase.title}</h4>
                <p className="text-accent-muted text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;