import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'vidaththeekshana@gmail.com', href: 'mailto:vidaththeekshana@gmail.com' },
    { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '0788243686', href: 'tel:0788243686' },
    { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'Sri Lanka', href: null },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: 'https://linkedin.com/in/vidath-theekshana' },
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', href: 'https://github.com/vidaththeekshana' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', href: 'mailto:vidaththeekshana@gmail.com' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({ title: "Message sent successfully!", description: "Thank you! I'll get back soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-surface scroll-fade">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-16 ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient glow-hover">Get In Touch</h2>
          <p className="text-accent-muted text-lg max-w-3xl mx-auto">
            Let's discuss your next project or just say hello. Open to collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`fade-in-left ${isVisible ? 'visible' : ''}`}>
              <h3 className="text-3xl font-bold text-accent mb-6 glow-hover">Let's Connect</h3>
              <p className="text-accent-muted leading-relaxed mb-8">
                Available for freelance work and new opportunities. Reach out via any channel below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <Card 
                  key={idx} 
                  className={`card-tilt surface-gradient border-accent-subtle p-4 flex items-center gap-4 scale-on-hover fade-in-left animation-delay-${idx * 200}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-subtle/10 text-accent icon-hover">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-accent-muted mb-1">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-accent hover:text-accent-muted transition-all duration-300">{info.value}</a>
                    ) : (
                      <div className="text-accent">{info.value}</div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Icons */}
            <div className={`fade-in-left animation-delay-600 ${isVisible ? 'visible' : ''}`}>
              <h4 className="text-xl font-semibold text-accent mb-4 glow-hover">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-subtle/10 text-accent icon-hover scale-on-hover transition-all duration-300" 
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-tilt">
            <Card className="card-tilt-inner surface-gradient border-accent-subtle p-8 fade-in-right scale-on-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput id="name" label="Name" name="name" value={formData.name} onChange={handleInputChange} />
                  <FormInput id="email" label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <FormInput id="subject" label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} />
                <FormTextarea id="message" label="Message" name="message" value={formData.message} onChange={handleInputChange} rows={5} />

                <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-background hover:bg-accent-muted transition-all duration-300 py-3 btn-animated">
                  {isSubmitting ? <div className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>Sending...</div> : <div className="flex items-center gap-2"><Send className="w-5 h-5" /> Send Message</div>}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 fade-in-up animation-delay-800 ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-subtle/10 border border-accent-subtle glow-hover">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent-muted">Usually responds within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Input & Textarea Components with hover glow
const FormInput = ({ id, label, name, value, onChange, type = 'text' }: any) => (
  <div>
    <label htmlFor={id} className="block text-accent text-sm font-medium mb-2">{label} *</label>
    <Input id={id} name={name} type={type} required value={value} onChange={onChange} className="bg-input border-input-border text-accent placeholder:text-accent-muted focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" />
  </div>
);

const FormTextarea = ({ id, label, name, value, onChange, rows }: any) => (
  <div>
    <label htmlFor={id} className="block text-accent text-sm font-medium mb-2">{label} *</label>
    <Textarea id={id} name={name} required value={value} onChange={onChange} rows={rows} className="bg-input border-input-border text-accent placeholder:text-accent-muted focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none" />
  </div>
);

export default ContactSection;
