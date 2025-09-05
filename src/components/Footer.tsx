import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-accent-subtle py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="text-3xl font-bold text-gradient mb-4">
            Vidath Theekshana
          </div>
          
          {/* Tagline */}
          <p className="text-accent-muted text-lg mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Designer passionate about creating 
            innovative digital experiences that make a difference.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#skills', label: 'Skills' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#services', label: 'Services' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-accent-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-accent-subtle">
            <div className="flex items-center gap-2 text-accent-muted text-sm mb-4 sm:mb-0">
              <span>© 2024 Vidath Theekshana. </span>
             
              <span>and lots of coffee</span>
            </div>

            {/* Back to top button */}
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="border-accent-subtle text-accent-muted hover:border-accent hover:text-accent"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;