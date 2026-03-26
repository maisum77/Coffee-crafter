import HeroSection from '@/components/sections/HeroSection'
import StatementSection from '@/components/sections/StatementSection'
import FeaturedCategories from '@/components/sections/FeaturedCategories'
import { Coffee, Star, Users, Clock } from 'lucide-react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <FeaturedCategories />
      
      {/* Craft Feature Section */}
      <section className="py-24 px-6 md:px-8 lg:px-12 bg-cc-void">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-cc-copper" />
                <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                  The Craft
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl text-cc-cream mb-6">
                Precision in Every Step
              </h2>
              
              <p className="font-body text-lg text-cc-parchment/70 mb-8">
                From sourcing single-origin beans to perfecting extraction parameters, 
                our approach is rooted in science, guided by passion, and executed with precision.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-3 border border-cc-mahogany/30 w-fit">
                    <Coffee className="w-5 h-5 text-cc-copper" />
                  </div>
                  <h3 className="font-display text-lg text-cc-cream">Direct Trade</h3>
                  <p className="font-body text-sm text-cc-parchment/70">
                    Working directly with farmers for quality and sustainability
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 border border-cc-mahogany/30 w-fit">
                    <Star className="w-5 h-5 text-cc-copper" />
                  </div>
                  <h3 className="font-display text-lg text-cc-cream">Micro-Lot Roasting</h3>
                  <p className="font-body text-sm text-cc-parchment/70">
                    Small batch roasting to highlight unique flavor profiles
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-64 lg:h-80 bg-gradient-to-br from-cc-copper/10 via-cc-mahogany/20 to-cc-void border border-cc-mahogany/30 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-6xl text-cc-copper/30 mb-4">⚗️</div>
                <p className="font-display text-sm uppercase tracking-widest text-cc-parchment/50">
                  The Alchemist's Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Teaser */}
      <section className="py-24 px-6 md:px-8 lg:px-12 border-t border-cc-mahogany/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-cc-copper" />
              <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                Seasonal Highlights
              </span>
              <div className="w-8 h-px bg-cc-copper" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-cc-cream mb-6">
              From Our Menu
            </h2>
            
            <p className="font-body text-lg text-cc-parchment/70 max-w-2xl mx-auto">
              A preview of our current offerings. The full menu evolves with the seasons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-cc-mahogany/30 hover:border-cc-copper transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="w-5 h-5 text-cc-copper" />
                <span className="font-display text-xs uppercase tracking-widest text-cc-copper">
                  Espresso
                </span>
              </div>
              <h3 className="font-display text-2xl text-cc-cream mb-3">Colombian Huila</h3>
              <p className="font-body text-cc-parchment/70 mb-6">
                Dark chocolate, caramel, walnut. Perfect as a straight shot or cortado.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-cc-mahogany/30">
                <span className="font-display text-lg text-cc-copper">PKR 800</span>
                <button className="font-display text-xs uppercase tracking-widest text-cc-parchment/50 hover:text-cc-copper transition-colors">
                  View details →
                </button>
              </div>
            </div>
            
            <div className="p-8 border border-cc-mahogany/30 hover:border-cc-copper transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-cc-copper" />
                <span className="font-display text-xs uppercase tracking-widest text-cc-copper">
                  Cold Brew
                </span>
              </div>
              <h3 className="font-display text-2xl text-cc-cream mb-3">Kenyan AA Nitro</h3>
              <p className="font-body text-cc-parchment/70 mb-6">
                Black currant, tomato, brown sugar. Served on nitro tap for creamy texture.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-cc-mahogany/30">
                <span className="font-display text-lg text-cc-copper">PKR 900</span>
                <button className="font-display text-xs uppercase tracking-widest text-cc-parchment/50 hover:text-cc-copper transition-colors">
                  View details →
                </button>
              </div>
            </div>
            
            <div className="p-8 border border-cc-mahogany/30 hover:border-cc-copper transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-cc-copper" />
                <span className="font-display text-xs uppercase tracking-widest text-cc-copper">
                  Workshop
                </span>
              </div>
              <h3 className="font-display text-2xl text-cc-cream mb-3">Brewing Masterclass</h3>
              <p className="font-body text-cc-parchment/70 mb-6">
                2-hour session on pour-over techniques, equipment, and tasting notes.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-cc-mahogany/30">
                <span className="font-display text-lg text-cc-copper">PKR 2,500</span>
                <button className="font-display text-xs uppercase tracking-widest text-cc-parchment/50 hover:text-cc-copper transition-colors">
                  Book now →
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-flex items-center gap-3 px-6 py-3 border border-cc-mahogany/30 text-cc-parchment/70 font-display text-sm uppercase tracking-widest hover:border-cc-copper hover:text-cc-copper transition-all duration-300"
            >
              <span>Explore Full Menu</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 px-6 md:px-8 lg:px-12 border-t border-cc-mahogany/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-cc-copper" />
            <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
              Stay Connected
            </span>
            <div className="w-8 h-px bg-cc-copper" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-cc-cream mb-6">
            Join The Inner Circle
          </h2>
          
          <p className="font-body text-lg text-cc-parchment/70 mb-8 max-w-2xl mx-auto">
            Receive exclusive updates on seasonal releases, brewing tips, and event invitations.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border-0 border-b border-cc-mahogany focus:border-cc-copper focus:ring-0 text-cc-cream py-3 px-0 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-cc-copper text-cc-void font-display text-sm uppercase tracking-widest hover:bg-cc-gold transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="font-mono text-xs text-cc-parchment/50 mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}