import PageTransition from '@/components/animations/PageTransition';
import JournalCard from '@/components/sections/JournalCard';
import { BookOpen, Coffee, Compass, Thermometer } from 'lucide-react';

export const metadata = {
  title: 'Journal | CoffeeCraft',
  description: 'Coffee education, origin stories, brewing guides, and seasonal announcements from our specialty coffee lab.',
};

// Sample journal articles data
const journalArticles = [
  {
    id: 1,
    title: 'The Art of Single-Origin: Tracing Ethiopian Yirgacheffe',
    category: 'ORIGIN STORIES',
    readingTime: '8 min read',
    imageColor: 'from-cc-copper/20 to-cc-mahogany/30',
    excerpt: 'Exploring the terroir and processing methods that give Yirgacheffe its distinctive floral notes and bright acidity.',
    icon: 'compass' as const,
  },
  {
    id: 2,
    title: 'Cold Brew vs. Japanese Iced Coffee: A Summer Showdown',
    category: 'BREWING GUIDES',
    readingTime: '6 min read',
    imageColor: 'from-cc-espresso/20 to-cc-void/30',
    excerpt: 'Two methods for iced coffee perfection. We break down the science, flavor profiles, and best practices.',
    icon: 'thermometer' as const,
  },
  {
    id: 3,
    title: 'Seasonal Spotlight: Winter Blend 2024',
    category: 'SEASONAL',
    readingTime: '5 min read',
    imageColor: 'from-cc-gold/20 to-cc-copper/30',
    excerpt: 'Our master roaster reveals the inspiration behind this year\'s winter blend—notes of dark chocolate, orange zest, and toasted hazelnut.',
    icon: 'coffee' as const,
  },
  {
    id: 4,
    title: 'The Chemistry of Extraction: Understanding TDS',
    category: 'SCIENCE',
    readingTime: '12 min read',
    imageColor: 'from-cc-parchment/10 to-cc-cream/20',
    excerpt: 'Total Dissolved Solids (TDS) explained. How measuring extraction percentage can elevate your home brewing.',
    icon: 'book' as const,
  },
  {
    id: 5,
    title: 'Meet the Farmers: Direct Trade in Colombia',
    category: 'SUSTAINABILITY',
    readingTime: '10 min read',
    imageColor: 'from-cc-mahogany/20 to-cc-espresso/30',
    excerpt: 'A journey to Huila, Colombia, where we work directly with smallholder farmers committed to sustainable practices.',
    icon: 'compass' as const,
  },
  {
    id: 6,
    title: 'Home Espresso: Choosing Your First Machine',
    category: 'GEAR GUIDE',
    readingTime: '7 min read',
    imageColor: 'from-cc-void/20 to-cc-espresso/30',
    excerpt: 'Navigating the world of home espresso machines—from entry-level to prosumer, what to look for and what to avoid.',
    icon: 'thermometer' as const,
  },
];

export default function JournalPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-cc-void">
        {/* Background Grain Overlay */}
        <div className="fixed inset-0 z-0 grain-overlay opacity-[0.02]" />
        
        {/* Header */}
        <div className="relative z-10 pt-24 pb-16 px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-cc-copper" />
                <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                  CoffeeCraft Journal
                </span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cc-cream mb-6 max-w-4xl">
                The Alchemist's Notebook
              </h1>
              
              <p className="font-body text-lg text-cc-parchment/70 max-w-2xl">
                A curated collection of coffee knowledge, origin stories, brewing techniques, 
                and seasonal discoveries from our specialty coffee lab.
              </p>
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button className="px-4 py-2 bg-cc-copper text-cc-void font-display text-xs uppercase tracking-widest transition-colors">
                All Articles
              </button>
              <button className="px-4 py-2 border border-cc-mahogany/30 text-cc-parchment/70 font-display text-xs uppercase tracking-widest hover:border-cc-copper hover:text-cc-copper transition-colors">
                Origin Stories
              </button>
              <button className="px-4 py-2 border border-cc-mahogany/30 text-cc-parchment/70 font-display text-xs uppercase tracking-widest hover:border-cc-copper hover:text-cc-copper transition-colors">
                Brewing Guides
              </button>
              <button className="px-4 py-2 border border-cc-mahogany/30 text-cc-parchment/70 font-display text-xs uppercase tracking-widest hover:border-cc-copper hover:text-cc-copper transition-colors">
                Seasonal
              </button>
              <button className="px-4 py-2 border border-cc-mahogany/30 text-cc-parchment/70 font-display text-xs uppercase tracking-widest hover:border-cc-copper hover:text-cc-copper transition-colors">
                Science
              </button>
            </div>
          </div>
        </div>
        
        {/* Masonry Grid */}
        <div className="relative z-10 pb-24 px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journalArticles.map((article) => (
                <JournalCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Load More */}
            <div className="mt-16 text-center">
              <button className="group inline-flex items-center gap-3 px-6 py-3 border border-cc-mahogany/30 text-cc-parchment/70 font-display text-sm uppercase tracking-widest hover:border-cc-copper hover:text-cc-copper transition-all duration-300">
                <span>Load More Articles</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="relative z-10 py-20 px-6 md:px-8 lg:px-12 border-t border-cc-mahogany/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-cc-copper" />
              <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                Stay Updated
              </span>
              <div className="w-8 h-px bg-cc-copper" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-cc-cream mb-6">
              Join The Inner Circle
            </h2>
            
            <p className="font-body text-cc-parchment/70 mb-8 max-w-2xl mx-auto">
              Receive exclusive articles, brewing tips, and early access to seasonal releases 
              directly in your inbox.
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
        </div>
      </div>
    </PageTransition>
  );
}