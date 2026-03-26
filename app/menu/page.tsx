import PageTransition from '@/components/animations/PageTransition';
import { Coffee, Clock, Star, Thermometer } from 'lucide-react';

export const metadata = {
  title: 'Menu | CoffeeCraft',
  description: 'Explore our curated selection of specialty coffees, brewing methods, and seasonal offerings.',
};

export default function MenuPage() {
  const categories = [
    { id: 1, name: 'Espresso', count: 8, icon: Coffee },
    { id: 2, name: 'Pour Over', count: 6, icon: Thermometer },
    { id: 3, name: 'Cold Brew', count: 4, icon: Clock },
    { id: 4, name: 'Seasonal', count: 3, icon: Star },
  ];

  const menuItems = [
    { id: 1, name: 'Ethiopian Yirgacheffe', description: 'Floral, bergamot, lemon zest', price: 'PKR 850', category: 'Pour Over' },
    { id: 2, name: 'Colombian Huila', description: 'Dark chocolate, caramel, walnut', price: 'PKR 800', category: 'Espresso' },
    { id: 3, name: 'Kenyan AA', description: 'Black currant, tomato, brown sugar', price: 'PKR 900', category: 'Pour Over' },
    { id: 4, name: 'Guatemalan Antigua', description: 'Cocoa, spice, orange blossom', price: 'PKR 820', category: 'Espresso' },
    { id: 5, name: 'Sumatra Mandheling', description: 'Earthy, cedar, dark cherry', price: 'PKR 780', category: 'Pour Over' },
    { id: 6, name: 'Costa Rican Tarrazú', description: 'Honey, almond, red apple', price: 'PKR 870', category: 'Cold Brew' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-cc-void">
        {/* Background Grain Overlay */}
        <div className="fixed inset-0 z-0 grain-overlay opacity-[0.02]" />
        
        {/* Hero Section */}
        <div className="relative z-10 pt-24 pb-16 px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-cc-copper" />
                <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                  Curated Selections
                </span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cc-cream mb-6 max-w-4xl">
                The CoffeeCraft Menu
              </h1>
              
              <p className="font-body text-lg text-cc-parchment/70 max-w-2xl">
                Each offering is the result of meticulous sourcing, precise roasting, 
                and expert brewing. Our menu evolves with the seasons and our discoveries.
              </p>
            </div>
          </div>
        </div>
        
        {/* Categories */}
        <div className="relative z-10 pb-12 px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    className="group p-6 border border-cc-mahogany/30 bg-cc-void/50 backdrop-blur-sm hover:border-cc-copper transition-all duration-300 text-left"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 border border-cc-mahogany/30 group-hover:border-cc-copper transition-colors">
                        <Icon className="w-5 h-5 text-cc-copper" />
                      </div>
                      <span className="font-mono text-xs text-cc-parchment/50">
                        {category.count} items
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-cc-cream group-hover:text-cc-copper transition-colors">
                      {category.name}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="relative z-10 pb-24 px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="group p-6 border border-cc-mahogany/30 bg-cc-void/50 backdrop-blur-sm hover:border-cc-copper transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display text-xl text-cc-cream group-hover:text-cc-copper transition-colors">
                        {item.name}
                      </h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-cc-void border border-cc-mahogany/30 font-display text-[10px] uppercase tracking-widest text-cc-copper">
                        {item.category}
                      </span>
                    </div>
                    <span className="font-display text-lg text-cc-copper">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-body text-sm text-cc-parchment/70 mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-cc-mahogany/30">
                    <span className="font-display text-xs uppercase tracking-widest text-cc-parchment/50 group-hover:text-cc-copper transition-colors">
                      Add to order
                    </span>
                    <button className="px-4 py-2 border border-cc-mahogany/30 text-cc-parchment/70 font-display text-xs uppercase tracking-widest hover:border-cc-copper hover:text-cc-copper transition-colors">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Seasonal Spotlight */}
        <div className="relative z-10 py-20 px-6 md:px-8 lg:px-12 border-t border-cc-mahogany/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-cc-copper" />
                  <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                    Seasonal Spotlight
                  </span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl text-cc-cream mb-6">
                  Winter Blend 2024
                </h2>
                
                <p className="font-body text-cc-parchment/70 mb-6">
                  A limited-edition blend crafted for the colder months. Notes of dark chocolate, 
                  orange zest, toasted hazelnut, and a hint of warming spice.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                    <span className="font-body text-sm text-cc-parchment/70">
                      Available until February 28, 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                    <span className="font-body text-sm text-cc-parchment/70">
                      Whole bean or ground
                    </span>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-cc-copper text-cc-void font-display text-sm uppercase tracking-widest hover:bg-cc-gold transition-colors">
                  Reserve Your Bag
                </button>
              </div>
              
              <div className="h-64 lg:h-80 bg-gradient-to-br from-cc-copper/20 via-cc-mahogany/30 to-cc-void border border-cc-mahogany/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl text-cc-copper/30 mb-4">☕</div>
                  <p className="font-display text-sm uppercase tracking-widest text-cc-parchment/50">
                    Winter Exclusive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}