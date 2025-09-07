import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GamingButton } from "@/components/ui/gaming-button";
import GameCard from "@/components/GameCard";
import FeatureCard from "@/components/FeatureCard";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { useProfile } from "@/hooks/useProfile";
import heroImage from "@/assets/hero-gaming.jpg";
import { 
  Shield, 
  Target, 
  Eye, 
  Zap, 
  Settings, 
  Download, 
  Play, 
  Users, 
  Award,
  Activity,
  Code,
  MousePointer
} from "lucide-react";

const Home = () => {
  const { profile } = useProfile();
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Games Supported", value: "15+", icon: Target },
    { label: "Success Rate", value: "99.8%", icon: Award },
    { label: "Uptime", value: "24/7", icon: Activity }
  ];

  const games = [
    {
      name: "Counter-Strike 2",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      features: ["Aimbot", "ESP/Wallhack", "Triggerbot", "Bhop", "Radar", "No Recoil"],
      status: "active" as const,
      description: "Advanced CS2 cheats with undetected features and smooth performance."
    },
    {
      name: "Valorant",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      features: ["Aimbot", "ESP", "Triggerbot", "No Spread"],
      status: "active" as const,
      description: "Premium Valorant hacks with advanced anti-cheat bypass."
    },
    {
      name: "Fortnite",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      features: ["Aimbot", "ESP", "Building Hacks", "Speed Hack"],
      status: "development" as const,
      description: "Next-gen Fortnite cheats currently in development phase."
    },
    {
      name: "FiveM",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      features: ["Lua Executor", "ESP", "Godmode", "Teleport"],
      status: "active" as const,
      description: "Complete FiveM mod menu with advanced scripting capabilities."
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Aimbot",
      description: "Precise targeting system with smooth aim, FOV circle, and bone selection. Configurable speed and humanization.",
      type: "aimbot" as const
    },
    {
      icon: Eye,
      title: "ESP/Wallhack",
      description: "See enemies through walls with customizable boxes, names, health, weapons, and distance information.",
      type: "esp" as const
    },
    {
      icon: MousePointer,
      title: "Triggerbot",
      description: "Automatic shooting when crosshair is on target. Configurable delay and humanization settings.",
      type: "triggerbot" as const
    },
    {
      icon: Code,
      title: "Script Executor",
      description: "Execute custom scripts and modifications. Support for Lua, JavaScript, and C# scripts.",
      type: "executor" as const
    },
    {
      icon: Zap,
      title: "Speed Hack",
      description: "Modify movement speed, jump height, and other physics properties for enhanced gameplay.",
      type: "misc" as const
    },
    {
      icon: Settings,
      title: "Advanced Settings",
      description: "Comprehensive configuration panel with profiles, keybinds, and visual customization options.",
      type: "misc" as const
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="min-h-screen">
      <WelcomeDialog />
      
      {/* Personalized Welcome Message */}
      {profile.name && (
        <div className="fixed top-20 left-4 z-40 animate-fade-in">
          <div className="glass-effect rounded-lg p-3 border border-primary/30">
            <p className="text-sm font-rajdhani text-primary">
              Witaj, <span className="font-bold">{profile.name}</span>! 👋
            </p>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80 matrix-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent glow-text">
                ISIDA
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">
                Gaming Enhancement Suite
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-rajdhani max-w-2xl mx-auto">
              Advanced game modifications and enhancement tools. Undetected, reliable, and feature-rich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/program">
                <GamingButton variant="primary" size="xl" className="group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Isida
                </GamingButton>
              </Link>
              
              <GamingButton variant="neon" size="xl" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Watch Demo
              </GamingButton>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className={`glass-effect rounded-lg p-4 transition-all duration-500 ${
                      currentStat === index ? 'border-primary shadow-neon' : 'border-primary/20'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${
                      currentStat === index ? 'text-primary-glow' : 'text-primary'
                    } transition-colors`} />
                    <div className="text-lg font-orbitron font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-foreground mb-4 glow-text">
              Supported Games
            </h2>
            <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
              Professional game enhancement tools for the most popular titles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <GameCard
                key={game.name}
                {...game}
                onSelect={() => {
                  // Handle game selection
                  console.log(`Selected game: ${game.name}`);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-foreground mb-4 glow-text">
              Feature Overview
            </h2>
            <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
              Understanding different types of game enhancement tools and their capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 border border-primary/20 hover:border-primary/50 transition-all duration-500">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-6 glow-text">
              Ready to Enhance Your Gaming?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-rajdhani">
              Join thousands of users who trust Isida for their gaming enhancement needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/program">
                <GamingButton variant="primary" size="xl">
                  Get Started Now
                </GamingButton>
              </Link>
              <Link to="/features">
                <GamingButton variant="secondary" size="xl">
                  Learn More
                </GamingButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-background-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent">
                ISIDA
              </span>
            </div>
            <p className="text-muted-foreground font-rajdhani mb-2">
              Created by <span className="text-primary font-semibold">Kamil Poreba</span>
            </p>
            <p className="text-sm text-muted-foreground font-rajdhani">
              Advanced Gaming Enhancement Suite • Undetected • Reliable • Professional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;