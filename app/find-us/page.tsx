import PageTransition from '@/components/animations/PageTransition';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

export const metadata = {
  title: 'Find Us | CoffeeCraft',
  description: 'Visit our specialty coffee lab in DHA Lahore. Find our location, hours, and contact information.',
};

export default function FindUsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-cc-void">
        {/* Background Grain Overlay */}
        <div className="fixed inset-0 z-0 grain-overlay opacity-[0.02]" />
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Layout Container */}
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Side - Information */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-2xl mx-auto h-full flex flex-col justify-center">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-px bg-cc-copper" />
                    <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                      Our Location
                    </span>
                  </div>
                  
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cc-cream mb-8">
                    Find Us
                  </h1>
                  
                  <p className="font-body text-lg text-cc-parchment/70 mb-10">
                    Nestled in the heart of DHA Lahore, our coffee lab is a sanctuary for 
                    those who appreciate the craft. Come experience precision brewing in an 
                    atmosphere designed for contemplation.
                  </p>
                </div>
                
                {/* Address */}
                <div className="space-y-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-cc-mahogany/30">
                      <MapPin className="w-5 h-5 text-cc-copper" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-2">
                        Address
                      </h3>
                      <p className="font-body text-cc-cream">
                        CoffeeCraft Specialty Coffee Lab
                      </p>
                      <p className="font-body text-cc-parchment/70">
                        Block Y, DHA Phase 6<br />
                        Lahore, Punjab 54000<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-cc-mahogany/30">
                      <Clock className="w-5 h-5 text-cc-copper" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-2">
                        Hours
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center border-b border-cc-mahogany/10 pb-2">
                          <span className="font-body text-cc-parchment/70">Monday – Thursday</span>
                          <span className="font-mono text-cc-cream">8:00 AM – 9:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-cc-mahogany/10 pb-2">
                          <span className="font-body text-cc-parchment/70">Friday – Sunday</span>
                          <span className="font-mono text-cc-cream">8:00 AM – 10:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="font-body text-cc-parchment/70">Weekend Brunch</span>
                          <span className="font-mono text-cc-cream">10:00 AM – 3:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 border border-cc-mahogany/30">
                        <Phone className="w-5 h-5 text-cc-copper" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-2">
                          Phone
                        </h3>
                        <a 
                          href="tel:+923001234567" 
                          className="font-body text-cc-cream hover:text-cc-copper transition-colors"
                        >
                          +92 300 123 4567
                        </a>
                        <p className="font-mono text-xs text-cc-parchment/50 mt-1">
                          For reservations
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 border border-cc-mahogany/30">
                        <Mail className="w-5 h-5 text-cc-copper" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-2">
                          Email
                        </h3>
                        <a 
                          href="mailto:hello@coffeecraft.com" 
                          className="font-body text-cc-cream hover:text-cc-copper transition-colors"
                        >
                          hello@coffeecraft.com
                        </a>
                        <p className="font-mono text-xs text-cc-parchment/50 mt-1">
                          General inquiries
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Directions */}
                  <div className="pt-6 border-t border-cc-mahogany/30">
                    <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-4">
                      Getting Here
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                        <span className="font-body text-sm text-cc-parchment/70">
                          15 minutes from Lahore Airport
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                        <span className="font-body text-sm text-cc-parchment/70">
                          Street parking available
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                        <span className="font-body text-sm text-cc-parchment/70">
                          Wheelchair accessible entrance
                        </span>
                      </li>
                    </ul>
                    
                    <button className="mt-6 group inline-flex items-center gap-3 px-6 py-3 bg-cc-copper text-cc-void font-display text-sm uppercase tracking-widest hover:bg-cc-gold transition-colors">
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Map */}
            <div className="lg:w-1/2 relative">
              {/* Map Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-cc-espresso via-cc-mahogany to-cc-void">
                {/* Simulated Map Grid */}
                <div className="absolute inset-0 opacity-20">
                  {/* Horizontal Lines */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-px bg-cc-cream/10"
                      style={{ top: `${i * 10}%` }}
                    />
                  ))}
                  {/* Vertical Lines */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-px bg-cc-cream/10"
                      style={{ left: `${i * 10}%` }}
                    />
                  ))}
                </div>
                
                {/* Map Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pulse Animation */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 rounded-full bg-cc-copper/20 animate-ping" />
                      <div className="absolute inset-4 rounded-full bg-cc-copper/30 animate-ping" style={{ animationDelay: '0.5s' }} />
                    </div>
                    
                    {/* Marker */}
                    <div className="relative p-4 bg-cc-void border border-cc-copper">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cc-copper">
                          <MapPin className="w-5 h-5 text-cc-void" />
                        </div>
                        <div>
                          <p className="font-display text-sm text-cc-cream">CoffeeCraft</p>
                          <p className="font-mono text-xs text-cc-parchment/70">DHA Phase 6</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <button className="p-3 bg-cc-void/80 backdrop-blur-sm border border-cc-mahogany/30 hover:border-cc-copper transition-colors">
                    <span className="font-display text-xs text-cc-cream">+</span>
                  </button>
                  <button className="p-3 bg-cc-void/80 backdrop-blur-sm border border-cc-mahogany/30 hover:border-cc-copper transition-colors">
                    <span className="font-display text-xs text-cc-cream">−</span>
                  </button>
                  <button className="p-3 bg-cc-void/80 backdrop-blur-sm border border-cc-mahogany/30 hover:border-cc-copper transition-colors">
                    <Navigation className="w-4 h-4 text-cc-cream" />
                  </button>
                </div>
                
                {/* Location Labels */}
                <div className="absolute top-10 left-10">
                  <div className="p-2 bg-cc-void/80 backdrop-blur-sm border border-cc-mahogany/30">
                    <p className="font-mono text-xs text-cc-parchment/70">DHA Phase 6</p>
                  </div>
                </div>
                <div className="absolute bottom-10 left-10">
                  <div className="p-2 bg-cc-void/80 backdrop-blur-sm border border-cc-mahogany/30">
                    <p className="font-mono text-xs text-cc-parchment/70">Main Boulevard</p>
                  </div>
                </div>
                <div className="absolute top-1/3 right-10">
                  <div className="p-2 bg-cc-void/80 backdrop-blur-sm border border-cc-mahogany/30">
                    <p className="font-mono text-xs text-cc-parchment/70">Y Block</p>
                  </div>
                </div>
              </div>
              
              {/* Map Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cc-void to-transparent">
                <div className="max-w-md">
                  <p className="font-mono text-xs text-cc-parchment/50">
                    Interactive map powered by Google Maps. Click and drag to explore the area.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="py-16 px-8 lg:px-12 border-t border-cc-mahogany/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-4">
                    Private Events
                  </h3>
                  <p className="font-body text-sm text-cc-parchment/70 mb-4">
                    Our lab is available for private tastings, workshops, and corporate events after hours.
                  </p>
                  <a 
                    href="mailto:events@coffeecraft.com" 
                    className="font-display text-xs uppercase tracking-widest text-cc-copper border-b border-cc-copper/50 pb-1 hover:border-cc-copper transition-colors"
                  >
                    Inquire about events
                  </a>
                </div>
                
                <div>
                  <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-4">
                    Parking
                  </h3>
                  <p className="font-body text-sm text-cc-parchment/70 mb-4">
                    Street parking is available on surrounding streets. Valet service available on weekends from 6 PM onwards.
                  </p>
                  <p className="font-mono text-xs text-cc-parchment/50">
                    Free for guests with reservations
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-4">
                    Accessibility
                  </h3>
                  <p className="font-body text-sm text-cc-parchment/70 mb-4">
                    Our space is fully wheelchair accessible with ramp entry, accessible restrooms, and ground-level seating.
                  </p>
                  <p className="font-mono text-xs text-cc-parchment/50">
                    Service animals welcome
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