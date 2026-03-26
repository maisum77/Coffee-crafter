'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Coffee, Compass, Thermometer } from 'lucide-react';

interface JournalCardProps {
  article: {
    id: number;
    title: string;
    category: string;
    readingTime: string;
    imageColor: string;
    excerpt: string;
    icon: 'book' | 'coffee' | 'compass' | 'thermometer';
  };
}

const iconMap = {
  book: BookOpen,
  coffee: Coffee,
  compass: Compass,
  thermometer: Thermometer,
};

export default function JournalCard({ article }: JournalCardProps) {
  const Icon = iconMap[article.icon];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden border border-cc-mahogany/30 bg-cc-void/50 backdrop-blur-sm transition-all duration-500 group-hover:border-cc-copper/50">
        {/* Image/Color Block */}
        <div className={`relative h-64 ${article.imageColor} overflow-hidden`}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cc-void/80 via-transparent to-transparent" />
          
          {/* Icon */}
          <div className="absolute top-6 left-6">
            <div className="p-2 bg-cc-void/50 backdrop-blur-sm border border-cc-mahogany/30">
              <Icon className="w-5 h-5 text-cc-copper" />
            </div>
          </div>
          
          {/* Category Tag */}
          <div className="absolute top-6 right-6">
            <span className="inline-block px-3 py-1 bg-cc-void/80 backdrop-blur-sm border border-cc-mahogany/30 font-display text-[10px] uppercase tracking-widest text-cc-copper">
              {article.category}
            </span>
          </div>
          
          {/* Hover Arrow */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            className="absolute bottom-6 right-6"
          >
            <div className="p-2 bg-cc-void/80 backdrop-blur-sm border border-cc-copper">
              <ArrowRight className="w-4 h-4 text-cc-copper" />
            </div>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-cc-parchment/50">
              {article.readingTime}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-cc-mahogany/30 rounded-full group-hover:bg-cc-copper transition-colors"
                />
              ))}
            </div>
          </div>
          
          <h3 className="font-display text-xl text-cc-cream mb-3 group-hover:text-cc-copper transition-colors">
            {article.title}
          </h3>
          
          <p className="font-body text-sm text-cc-parchment/70 mb-6">
            {article.excerpt}
          </p>
          
          {/* Read More Link */}
          <div className="flex items-center justify-between pt-4 border-t border-cc-mahogany/30">
            <span className="font-display text-xs uppercase tracking-widest text-cc-parchment/50 group-hover:text-cc-copper transition-colors">
              Read Article
            </span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4 text-cc-mahogany/30 group-hover:text-cc-copper transition-colors" />
            </motion.div>
          </div>
        </div>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-cc-copper/5 via-transparent to-cc-copper/5 blur-sm" />
        </div>
      </div>
    </motion.article>
  );
}