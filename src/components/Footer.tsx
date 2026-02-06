import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background section-padding !py-12">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/supercool_logo.png"
                alt="Super Cool AC Logo"
                className="w-[8.5rem] h-10 object-contain"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted partner for all air conditioning needs. Quality service, guaranteed satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "About", "Contact", "Terms", "Privacy"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-background/70">
                  <p>9846 767 111</p>
                  <p>9846 767 172</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <p className="text-background/70">
                  Building No: 27-2/1, Pattambi, Sankaramangalam
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Super Cool Air Conditioning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
