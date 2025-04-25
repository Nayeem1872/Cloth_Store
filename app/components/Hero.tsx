import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  const humanFigureVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 0.9,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const humanFigureRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 0.9,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/10 dark:to-secondary/10 z-10"></div>
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092854584-2d5ba3eeb14d?q=80&w=1974')] bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Global Clothing
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Sourcing Excellence
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Connecting premium clothing manufacturers with global brands through
            sustainable and ethical partnerships.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Our Services
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Partner With Us
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full border border-foreground/20 backdrop-blur-sm bg-background/50"
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-0 bottom-0 h-[90%] w-[300px] z-10 hidden lg:block"
        variants={humanFigureVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full">
          <motion.img
            src="/images/pic1.jpg"
            alt="Professional figure"
            className="h-full w-full object-cover object-center opacity-80 rounded-tr-3xl"
            style={{
              clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
              filter: "saturate(0.8) contrast(1.1)",
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-0 h-[90%] w-[300px] z-10 hidden lg:block"
        variants={humanFigureRightVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full">
          <motion.img
            src="/images/pic2.jpg"
            alt="Professional figure"
            className="h-full w-full object-cover object-center opacity-80 rounded-tl-3xl"
            style={{
              clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
              filter: "saturate(0.8) contrast(1.1)",
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -right-20 w-80 h-80 bg-secondary/30 dark:bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default Hero;
