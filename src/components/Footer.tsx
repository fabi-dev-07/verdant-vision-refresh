import { Building2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-background">Tecosoft</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Pioneering the future of digital transformation with cutting-edge 
              Digital Twin technology and Industry 4.0 solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-background">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Digital Twins</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Industry 4.0</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">IoT Solutions</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">AI & Analytics</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-background">Industries</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Logistics</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Energy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Automotive</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-background">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-background/70">info@tecosoft.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-background/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-background/70">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Tecosoft. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer