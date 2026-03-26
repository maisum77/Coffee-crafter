import Link from 'next/link'
import { MapPin, Phone, Mail, Camera } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Craft', href: '/craft' },
  { label: 'Reserve', href: '/reserve' },
  { label: 'Journal', href: '/journal' },
  { label: 'Find Us', href: '/find-us' },
]

const socialLinks = [
  { platform: 'Instagram', handle: '@coffeecraft.world', icon: Camera, href: 'https://instagram.com/coffeecraft.world' },
]

export default function Footer() {
  return (
    <footer className="bg-cc-void border-t border-cc-copper/30">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-sub-display font-semibold text-xl text-cc-copper tracking-wider">
                COFFEE<span className="font-script text-cc-gold mx-1">·</span>CRAFT
              </span>
            </div>
            <p className="font-script italic text-cc-parchment text-lg">
              Where craft meets cup.
            </p>
            <p className="text-cc-fog text-sm max-w-xs">
              Ultra-premium specialty coffee experience in DHA Lahore, Pakistan.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-sub-display text-cc-cream text-sm uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cc-fog hover:text-cc-cream transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-px bg-cc-copper transition-all duration-fast group-hover:w-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div>
            <h3 className="font-sub-display text-cc-cream text-sm uppercase tracking-wider mb-6">
              Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cc-copper" />
                <div>
                  <p className="text-cc-cream text-sm">DHA Lahore, Pakistan</p>
                  <p className="font-mono text-cc-fog text-xs">31.4697° N, 74.4022° E</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cc-copper" />
                <a href="tel:+923001234567" className="font-mono text-cc-cream text-sm hover:text-cc-copper transition-colors">
                  +92 300 1234567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cc-copper" />
                <a href="mailto:hello@coffeecraft.world" className="text-cc-cream text-sm hover:text-cc-copper transition-colors">
                  hello@coffeecraft.world
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-sub-display text-cc-cream text-sm uppercase tracking-wider mb-4">
                Follow
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cc-fog hover:text-cc-copper transition-colors group"
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cc-copper/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cc-fog text-xs">
              © {new Date().getFullYear()} CoffeeCraft. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-cc-fog hover:text-cc-cream text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cc-fog hover:text-cc-cream text-xs transition-colors">
                Terms of Service
              </Link>
              <span className="font-mono text-cc-fog text-xs">
                v1.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}