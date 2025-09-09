import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import personImage from "@/assets/vidaa.png"; 
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
      {/* Right-half hero image */}
      <motion.div
        className="absolute right-0 inset-y-0 flex items-center w-1/2 pointer-events-none z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={personImage}
          alt="Vidath Theekshana"
          className="w-full h-auto object-contain object-right rounded-xl"
        />
      </motion.div>

      {/* Text Content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Typewriter Greeting */}
          <motion.p variants={item} className="text-accent-muted text-lg mb-4 tracking-wider">
            <span className="typewriter-loop">Hello, I’m Vidath Theekshana</span>
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
