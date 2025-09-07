import { useState } from "react";
import { Link } from "react-router-dom";
import { GamingButton } from "./ui/gaming-button";
import { UserProfileHeader } from "./UserProfileHeader";
import { Shield, Target, Zap, Download, Info, Menu, X, User, BarChart3, Trophy, Wrench } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Shield },
    { name: "Games", href: "/games", icon: Target },
    { name: "Features", href: "/features", icon: Zap },
    { name: "Program", href: "/program", icon: Download },
    { name: "Tools", href: "/tools", icon: Wrench },
    { name: "Statistics", href: "/statistics", icon: BarChart3 },
    { name: "About", href: "/about", icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors" />
              <div className="absolute inset-0 blur-md bg-primary/30 group-hover:bg-primary-glow/40 transition-all" />
            </div>
            <span className="text-xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent">
              ISIDA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium font-rajdhani hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-primary group-hover:text-primary-glow transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* User Profile / CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <UserProfileHeader />
            <GamingButton variant="neon" size="sm" asChild>
              <Link to="/program">Download Now</Link>
            </GamingButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <GamingButton
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </GamingButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background-secondary rounded-lg mt-2 border border-primary/20">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium font-rajdhani hover:bg-primary/10 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <GamingButton variant="neon" size="sm" className="w-full">
                  Download Now
                </GamingButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;