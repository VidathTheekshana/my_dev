import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import personImage from "@/assets/vidath-profile.jpg"; 
import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { value: "4+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Right-half person image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full pointer-events-none z-0">
        <img
          src={personImage}
          alt="Vidath Theekshana"
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Greeting */}
          <motion.p variants={item} className="text-accent-muted text-lg mb-4 tracking-wider">
            Hello, I’m <span className="font-semibold text-accent">Vidath Theekshana</span>
          </motion.p>

          {/* Heading */}
          <motion.h1 variants={item} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <motion.span variants={item} className="text-gradient animate-gradient">Full-Stack</motion.span>
            <br />
            <motion.span variants={item} className="text-accent">Developer</motion.span>
            <br />
            <motion.span variants={item} className="text-accent-muted">& UI/UX Designer</motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={item} className="text-accent-muted text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed">
            Computer Science undergraduate at SLIIT, passionate about building modern,
            scalable, and interactive web applications that solve real-world problems.
          </motion.p>

          {/* Call-to-action */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
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
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={item} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-accent-muted text-sm tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <ArrowDown className="w-6 h-6 text-accent-muted" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
