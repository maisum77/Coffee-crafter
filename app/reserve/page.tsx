import ReservationForm from '@/components/sections/ReservationForm';
import PageTransition from '@/components/animations/PageTransition';
import { Coffee } from 'lucide-react';

export const metadata = {
  title: 'Reserve a Table | CoffeeCraft',
  description: 'Secure your seat at our specialty coffee lab. Reserve a table for an unforgettable coffee experience.',
};

export default function ReservePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-cc-void">
        {/* Background Grain Overlay */}
        <div className="fixed inset-0 z-0 grain-overlay opacity-[0.02]" />
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Layout Container */}
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Side - Atmospheric Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cc-void via-cc-void/90 to-cc-void/80 z-10" />
              
              {/* Simulated atmospheric image with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cc-espresso via-cc-mahogany to-cc-copper/20 opacity-70" />
              
              {/* Coffee cup pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cc-copper/30 rounded-full" />
                <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-cc-copper/20 rounded-full" />
                <div className="absolute top-2/3 left-1/3 w-32 h-32 border border-cc-copper/10 rounded-full" />
              </div>
              
              {/* Content overlay */}
              <div className="relative z-20 h-full flex flex-col justify-between p-8 lg:p-12">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Coffee className="w-6 h-6 text-cc-copper" />
                    <span className="font-display text-sm uppercase tracking-widest text-cc-copper">
                      The Experience
                    </span>
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cc-cream mb-6 max-w-lg">
                    An evening at the coffee lab
                  </h2>
                  
                  <p className="font-body text-cc-parchment/70 mb-8 max-w-md">
                    Our tables are limited to ensure each guest receives the full attention of our baristas. 
                    Reservations are recommended, especially for evenings and weekends.
                  </p>
                </div>
                
                {/* Details */}
                <div className="space-y-6">
                  <div className="border-t border-cc-mahogany/30 pt-6">
                    <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-4">
                      Reservation Details
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                        <span className="font-body text-sm text-cc-parchment/70">
                          Maximum party size: 8 guests
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                        <span className="font-body text-sm text-cc-parchment/70">
                          Reservations held for 15 minutes
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cc-copper rounded-full" />
                        <span className="font-body text-sm text-cc-parchment/70">
                          24-hour cancellation policy
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Reservation Form */}
            <div className="lg:w-1/2 bg-cc-espresso">
              <div className="h-full overflow-y-auto">
                <div className="p-8 lg:p-12">
                  <ReservationForm />
                  
                  {/* Additional Information */}
                  <div className="mt-12 pt-8 border-t border-cc-mahogany/30">
                    <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-4">
                      Need assistance?
                    </h3>
                    <p className="font-body text-sm text-cc-parchment/70 mb-4">
                      For large parties, private events, or special accommodations, please contact our reservations team.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="tel:+923001234567" 
                        className="font-display text-xs uppercase tracking-widest text-cc-copper border-b border-cc-copper/50 pb-1 hover:border-cc-copper transition-colors"
                      >
                        +92 300 123 4567
                      </a>
                      <a 
                        href="mailto:reservations@coffeecraft.com" 
                        className="font-display text-xs uppercase tracking-widest text-cc-copper border-b border-cc-copper/50 pb-1 hover:border-cc-copper transition-colors"
                      >
                        reservations@coffeecraft.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="mt-8">
                    <h3 className="font-display text-sm uppercase tracking-widest text-cc-copper mb-4">
                      Hours
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-body text-sm text-cc-parchment/70">Monday - Thursday</p>
                        <p className="font-mono text-sm text-cc-cream">8 AM - 9 PM</p>
                      </div>
                      <div>
                        <p className="font-body text-sm text-cc-parchment/70">Friday - Sunday</p>
                        <p className="font-mono text-sm text-cc-cream">8 AM - 10 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}