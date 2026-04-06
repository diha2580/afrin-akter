import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Palette, 
  Megaphone, 
  PenTool, 
  BarChart3, 
  Compass,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Download
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold text-brand-blue"
          >
            AA.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-8 text-sm font-medium"
          >
            <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-blue transition-colors">Skills</a>
            <a href="#experience" className="hover:text-brand-blue transition-colors">Experience</a>
            <a href="#portfolio" className="hover:text-brand-blue transition-colors">Portfolio</a>
            <a href="#contact" className="px-4 py-2 bg-brand-blue text-white rounded-full hover:bg-blue-700 transition-all">Get in Touch</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="z-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Available for new projects
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-7xl lg:text-9xl font-display font-black text-brand-blue leading-[0.9] mb-8">
              AFRIN <br />
              <span className="text-stroke">AKTER</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
              A creative <span className="text-brand-blue font-bold">Graphic Designer</span> and <span className="text-brand-blue font-bold">Digital Marketer</span> dedicated to building engaging content and impactful brand identities.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold flex items-center gap-2 hover:gap-4 transition-all shadow-lg shadow-brand-blue/20">
                View Work <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-brand-blue text-brand-blue rounded-xl font-bold hover:bg-brand-blue hover:text-white transition-all">
                Download CV
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://i.postimg.cc/HLy1hYtG/Whats-App-Image-2026-04-06-at-10-32-39-PM.jpg" 
                alt="Afrin Akter"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-display font-bold text-brand-blue mb-6">About Me</h2>
              <div className="w-20 h-1.5 bg-brand-blue rounded-full"></div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                I am Afrin Akter, a creative Digital Marketer and Graphic Designer with a passion for building engaging content and effective marketing strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                I specialize in social media marketing, branding, and visual design, combining creativity with strategic thinking to deliver impactful results. I am always eager to learn, grow, and contribute to innovative projects.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-cream rounded-lg text-brand-blue">
                    <Palette size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visual Design</h4>
                    <p className="text-sm text-gray-500">Crafting compelling visuals that resonate with audiences.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-cream rounded-lg text-brand-blue">
                    <Megaphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Digital Marketing</h4>
                    <p className="text-sm text-gray-500">Strategic campaigns that drive engagement and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-brand-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-brand-blue mb-4">Expertise</h2>
            <p className="text-gray-600">Specialized skills developed through years of practice</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Graphic Design", icon: <PenTool />, level: 95 },
              { name: "Illustration", icon: <Palette />, level: 85 },
              { name: "Product Analysis", icon: <BarChart3 />, level: 80 },
              { name: "Art Direction", icon: <Compass />, level: 90 }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-brand-blue"
                  />
                </div>
                <span className="text-xs font-bold text-brand-blue mt-2 block">{skill.level}% Proficiency</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-brand-blue text-white rounded-3xl">
              <h3 className="text-2xl font-display font-bold mb-8">Languages</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">Bangla</span>
                    <span>Native</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">English</span>
                    <span>Professional</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 border-4 border-dashed border-brand-blue/20 rounded-3xl">
              <div className="text-center">
                <p className="text-brand-blue font-bold text-xl mb-4 italic">"Creativity is intelligence having fun."</p>
                <p className="text-gray-500 text-sm">— Albert Einstein</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-display font-bold text-brand-blue mb-12 flex items-center gap-4">
              Work Experience
            </h2>
            <div className="space-y-12">
              {[
                {
                  role: "Digital Marketer",
                  company: "Marketplace",
                  period: "2024 - Present",
                  desc: "Developed and executed digital marketing campaigns that increased online engagement and brand visibility. Analyzed market trends and consumer behavior to optimize marketing strategies."
                },
                {
                  role: "Graphic Designer",
                  company: "Marketplace",
                  period: "2023 - Present",
                  desc: "Creative and detail-oriented Graphics Designer with a strong background in visual storytelling and digital design. Adept at using the latest design software to produce innovative and compelling graphics."
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-brand-blue/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-blue"></div>
                  <span className="text-sm font-bold text-brand-blue uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                  <p className="text-brand-blue font-medium mb-4">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-display font-bold text-brand-blue mb-12 flex items-center gap-4">
              Education
            </h2>
            <div className="space-y-12">
              {[
                {
                  degree: "HSC",
                  school: "Raipur Kamil Madrasa",
                  period: "2015 - 2017"
                },
                {
                  degree: "SSC",
                  school: "Raipur Kamil Madrasa",
                  period: "2014 - 2015"
                }
              ].map((edu, i) => (
                <div key={i} className="p-8 bg-brand-cream rounded-2xl border border-brand-blue/10">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{edu.period}</span>
                  <h3 className="text-2xl font-bold mt-2">{edu.degree}</h3>
                  <p className="text-gray-600 mt-1">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-display font-bold text-brand-blue mb-4">Portfolio</h2>
              <p className="text-gray-600 max-w-md">A selection of my recent works in graphic design and digital marketing.</p>
            </div>
            <div className="flex gap-2">
              {['All', 'Design', 'Marketing', 'Illustration'].map((filter) => (
                <button 
                  key={filter}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'All' ? 'bg-brand-blue text-white' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EcoStyle Brand Identity",
                category: "Design",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
                desc: "Complete visual identity system for a sustainable fashion brand, including logo, typography, and color palette."
              },
              {
                title: "TechNova Social Campaign",
                category: "Marketing",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
                desc: "Strategic social media campaign that increased engagement by 45% across Instagram and LinkedIn."
              },
              {
                title: "Nature's Whisper Series",
                category: "Illustration",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
                desc: "A series of custom digital illustrations inspired by organic forms and botanical elements."
              },
              {
                title: "Global Retail Analysis",
                category: "Marketing",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                desc: "In-depth market research and consumer behavior analysis for a major retail expansion project."
              },
              {
                title: "Artistic Direction - Bloom",
                category: "Design",
                image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
                desc: "Creative direction for a lifestyle magazine, focusing on minimalist aesthetics and bold typography."
              },
              {
                title: "Corporate Illustration Set",
                category: "Illustration",
                image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
                desc: "A cohesive set of digital illustrations for a SaaS platform's onboarding experience."
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-brand-blue flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-blue">
                    {project.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{project.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 border-2 border-brand-blue text-brand-blue rounded-xl font-bold hover:bg-brand-blue hover:text-white transition-all">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-display font-bold mb-8">Let's create something <span className="italic opacity-70">extraordinary</span> together.</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-md">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:afrinakter68670@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-blue transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-medium">afrinakter68670@gmail.com</span>
                </a>
                <a href="tel:+8801619498341" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-blue transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg font-medium">+8801619-498341</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg font-medium">North keroa, Raipur, Laxmipur-3710</span>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {[Instagram, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 text-gray-900">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-brand-blue/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 text-center text-gray-500 text-sm border-t border-gray-100">
        <p>© {new Date().getFullYear()} Afrin Akter. All rights reserved.</p>
      </footer>
    </div>
  );
}
