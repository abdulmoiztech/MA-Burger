/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Flame, 
  Star,
  Menu as MenuIcon,
  X,
  MessageCircle,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

const MENU_ITEMS = [
  {
    id: 1,
    name: "MA Classic",
    description: "The original smash. Single beef patty, MA sauce, and house pickles.",
    price: "Rs. 850",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Double Smash",
    description: "Twice the beef, twice the cheese. For the real energy seekers.",
    price: "Rs. 1,250",
    badge: "🔥 Spicy",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Crispy Chicken",
    description: "Buttermilk fried chicken, spicy slaw, and ember mayo.",
    price: "Rs. 950",
    badge: "New",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "The Desi Stack",
    description: "A local twist with mint chutney and masala-spiced onions.",
    price: "Rs. 1,100",
    badge: "🔥 Spicy",
    image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "BBQ Boss",
    description: "Smoky BBQ sauce, crispy onion rings, and double cheddar.",
    price: "Rs. 1,350",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Cheese Overflow",
    description: "Drenched in our signature liquid gold cheese sauce.",
    price: "Rs. 1,450",
    badge: "New",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop"
  }
];

const TESTIMONIALS = [
  {
    name: "Zainab Khan",
    text: "Best smash burger in Karachi, hands down. The MA sauce is addictive!",
    rating: 5
  },
  {
    name: "Ahmed Raza",
    text: "The Double Smash is pure energy. Masha Allah, the quality is consistent every time.",
    rating: 5
  },
  {
    name: "Sana Malik",
    text: "Love the vibe and the burgers. The Desi Stack is a must-try for spice lovers.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const headline = "Burgers So Good, It's Masha Allah.".split(" ");

  return (
    <div className="relative min-h-screen bg-charcoal selection:bg-ember selection:text-white overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise" />

      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center transition-all duration-500 ${isScrolled ? "bg-[#111] border-b border-white/5 py-3" : "bg-transparent"}`}>
        <div className="text-2xl font-display text-ember flex items-center gap-2">
          <Flame size={24} className="fill-ember" />
          <span className="text-gold">MA</span> BURGER
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-semibold">
          {["Menu", "About", "Our Story"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-ember transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2 bg-ember text-white shadow-glow-orange animate-pulse-subtle hover:scale-105 transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest">
            Order Now
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cream z-50"
          >
            {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-0 z-50 bg-[#111] flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {["Menu", "About", "Our Story"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl font-display hover:text-ember transition-colors"
          >
            {item}
          </a>
        ))}
        <button className="mt-4 px-10 py-4 bg-ember text-white rounded-full font-display text-2xl uppercase tracking-widest shadow-glow-orange">
          Order Now
        </button>
      </motion.div>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Ember Glow Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="z-10">
            <h1 className="text-7xl md:text-9xl mb-6 leading-[0.9] flex flex-wrap gap-x-4">
              {headline.map((word, i) => (
                <span 
                  key={i} 
                  className="animate-fade-up inline-block"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word === "Masha" ? <span className="text-ember">Masha</span> : word === "Allah." ? <span className="text-ember">Allah.</span> : word}
                </span>
              ))}
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl text-cream/60 font-light mb-10 max-w-lg"
            >
              Handcrafted smash burgers. Fresh. Fired. Blessed.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-ember text-white font-display text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-glow-orange">
                See Our Menu
              </button>
              <button className="px-8 py-4 border border-cream/20 hover:border-cream transition-colors font-display text-xl uppercase tracking-widest">
                Our Story
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop" 
              alt="Hero Burger" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,107,0,0.3)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop" 
              alt="Hero Burger" 
              className="w-full h-auto rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <div className="bg-charcoal border-y border-cream/5 py-8 overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll gap-20 items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest"><Star size={16} fill="currentColor" /> 4.9/5 Rating</span>
              <span className="text-cream/40 font-bold uppercase tracking-widest">10,000+ Burgers Served</span>
              <span className="text-cream/40 font-bold uppercase tracking-widest">100% Halal</span>
              <span className="text-cream/40 font-bold uppercase tracking-widest">Fresh Daily</span>
              <span className="text-cream/40 font-bold uppercase tracking-widest">Karachi's Favourite</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. MENU SECTION */}
      <section id="menu" className="py-32 px-6 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl mb-4">The <span className="text-ember">MA Menu</span></h2>
            <p className="text-cream/40">Handcrafted with passion, served with pride.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.map((item, index) => (
              <div 
                key={item.id}
                className="bg-charcoal-light border border-cream/5 p-6 rounded-2xl hover:border-ember transition-all duration-300 group shadow-glow-orange-hover hover:-translate-y-2 price-pulse"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-ember text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.badge}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl">{item.name}</h3>
                  <span className="text-gold font-bold price-tag transition-all">{item.price}</span>
                </div>
                <p className="text-cream/40 text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>
                <button className="w-full py-3 border border-cream/10 group-hover:bg-ember group-hover:border-ember transition-all text-xs font-bold uppercase tracking-widest">
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT / OUR STORY SECTION */}
      <section id="about" className="py-32 px-6 relative overflow-hidden reveal-on-scroll">
        {/* Calligraphy Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
          <div className="text-[30vw] font-serif leading-none">ماشاء الله</div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <Quote className="text-ember mb-8" size={60} />
            <h2 className="text-5xl md:text-7xl leading-tight">
              "Every burger is made with <span className="text-ember italic font-sans font-light lowercase">two hands</span> and <span className="text-gold italic font-sans font-light lowercase">one prayer</span>."
            </h2>
          </div>

          <div className="space-y-6">
            <div className="text-ember font-bold uppercase tracking-[0.3em]">Our Story</div>
            <p className="text-xl text-cream/60 leading-relaxed">
              MA Burger started with a simple mission: to bring the intensity of Karachi's street food to a premium dining experience. Our name carries the "Masha Allah" blessing—a reminder of the gratitude and soul we pour into every grill.
            </p>
            <p className="text-xl text-cream/60 leading-relaxed">
              We are committed to 100% Halal ingredients, sourcing the freshest meat daily to ensure every bite is a testament to quality and faith.
            </p>
            <button className="px-10 py-4 border border-ember text-ember hover:bg-ember hover:text-white transition-all font-display text-xl uppercase tracking-widest">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-32 px-6 bg-cream/5 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl mb-20 text-center">What <span className="text-ember">They Say</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={i}
                className="p-10 border border-cream/5 bg-charcoal rounded-2xl"
              >
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg text-cream/80 italic mb-8">"{t.text}"</p>
                <div className="text-sm font-bold uppercase tracking-widest text-ember">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ORDER / CTA SECTION */}
      <section className="py-32 px-6 reveal-on-scroll">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-ember to-[#CC5500] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 pointer-events-none" />
          <div>
            <h2 className="text-6xl md:text-8xl mb-6 text-white">Ready to Take a Bite?</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 font-light">Order fresh. Pick up hot. Eat happy.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-display text-2xl uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                <MessageCircle size={24} /> Order on WhatsApp
              </button>
              <button className="flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-full font-display text-2xl uppercase tracking-widest hover:bg-white hover:text-ember transition-all">
                <Phone size={24} /> Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="contact" className="bg-black pt-32 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-2">
              <div className="text-4xl font-display text-ember mb-8 flex items-center gap-2">
                <Flame size={32} className="fill-ember" />
                <span className="text-gold">MA</span> BURGER
              </div>
              <p className="text-cream/40 max-w-md mb-10 leading-relaxed">
                Premium Pakistani burger brand bringing the energy of Karachi to your plate. Masha Allah in every bite, street-credible in every grill.
              </p>
              <div className="flex gap-6">
                <a href="#" className="p-3 border border-cream/10 rounded-full hover:bg-ember hover:border-ember transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 border border-cream/10 rounded-full hover:bg-ember hover:border-ember transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-3 border border-cream/10 rounded-full hover:bg-ember hover:border-ember transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-cream/60">
                <li><a href="#menu" className="hover:text-ember transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-ember transition-colors">About</a></li>
                <li><a href="#our-story" className="hover:text-ember transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-ember transition-colors">Locations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Contact</h4>
              <p className="text-cream/40 text-sm mb-6">Visit us in Karachi or order online.</p>
              <div className="space-y-4 text-cream/60 text-sm">
                <div className="flex items-center gap-3"><MapPin size={16} className="text-ember" /> DHA Phase 6, Karachi</div>
                <div className="flex items-center gap-3"><Phone size={16} className="text-ember" /> +92 300 1234567</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <div className="text-[10px] uppercase tracking-widest text-cream/20">
              © 2025 MA Burger. All rights reserved. Masha Allah 🤲
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-cream/20">
              <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-cream/20 flex items-center gap-2">
              Made with <Star size={10} className="text-gold fill-gold" /> in Karachi
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
