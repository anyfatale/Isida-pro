import GameCard from "@/components/GameCard";
import { Shield } from "lucide-react";

const Games = () => {
  const games = [
    {
      name: "Counter-Strike 2",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      features: ["Advanced Aimbot", "ESP/Wallhack", "Triggerbot", "Bhop", "No Recoil", "Radar Hack", "Crosshair", "Rank Revealer"],
      status: "active" as const,
      description: "Premium CS2 enhancement suite with kernel-level injection and advanced anti-detection systems."
    },
    {
      name: "Valorant", 
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      features: ["Pixel Aimbot", "Agent ESP", "Triggerbot", "No Spread", "Bomb Timer", "Defuse Helper"],
      status: "active" as const,
      description: "External process cheat for Valorant with advanced screen analysis and Riot Vanguard bypass."
    },
    {
      name: "Fortnite",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop", 
      features: ["Prediction Aimbot", "Player ESP", "Loot ESP", "Building Hack", "Speed Hack", "No Fall Damage"],
      status: "development" as const,
      description: "Next-generation Fortnite cheats currently in beta testing phase with prediction-based systems."
    },
    {
      name: "FiveM (GTA V)",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      features: ["Lua Executor", "Player ESP", "Vehicle ESP", "Teleport", "Godmode", "Money Hack", "Weather Control", "Noclip"],
      status: "active" as const,
      description: "Complete FiveM mod menu with server-side bypass and advanced Lua script execution."
    },
    {
      name: "Apex Legends",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      features: ["Smooth Aimbot", "Legend ESP", "Loot ESP", "Triggerbot", "No Recoil", "Third Person"],
      status: "development" as const,
      description: "Advanced Apex Legends enhancement tools with smooth humanized aiming and comprehensive ESP."
    },
    {
      name: "Call of Duty",
      image: "https://images.unsplash.com/photo-1552820728-242b1b6d6bc6?w=400&h=300&fit=crop",
      features: ["Aimbot", "ESP", "UAV Hack", "Wallbang", "Auto Drop", "Slide Cancel"],
      status: "maintenance" as const,
      description: "Multi-version CoD support currently under maintenance due to recent game updates."
    },
    {
      name: "PUBG",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      features: ["Aimbot", "Player ESP", "Vehicle ESP", "Loot ESP", "No Recoil", "Speed Hack"],
      status: "active" as const,
      description: "PUBG enhancement suite with advanced prediction algorithms and zone information."
    },
    {
      name: "Rust",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      features: ["Aimbot", "Player ESP", "Animal ESP", "Resource ESP", "No Recoil", "Auto Farm"],
      status: "development" as const,
      description: "Comprehensive Rust cheats with resource detection and automated farming capabilities."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 glow-text">
            Supported Games
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            Professional game enhancement tools for the most popular titles. Each cheat is carefully crafted with advanced anti-detection systems and regular updates.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-effect rounded-lg p-6 text-center border border-primary/20">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground font-rajdhani">Supported Games</div>
          </div>
          <div className="glass-effect rounded-lg p-6 text-center border border-primary/20">
            <div className="text-3xl font-orbitron font-bold text-success mb-2">99.8%</div>
            <div className="text-muted-foreground font-rajdhani">Undetected Rate</div>
          </div>
          <div className="glass-effect rounded-lg p-6 text-center border border-primary/20">
            <div className="text-3xl font-orbitron font-bold text-warning mb-2">24/7</div>
            <div className="text-muted-foreground font-rajdhani">Support Available</div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div 
              key={game.name} 
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GameCard
                {...game}
                onSelect={() => {
                  console.log(`Selected game: ${game.name}`);
                }}
              />
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20">
          <div className="glass-effect rounded-2xl p-12 border border-primary/20 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-orbitron font-bold text-foreground mb-4 glow-text">
              Anti-Detection Technology
            </h2>
            <p className="text-lg text-muted-foreground font-rajdhani max-w-3xl mx-auto mb-8">
              Our cheats utilize advanced techniques including kernel-level injection, memory encryption, 
              HWID spoofing, and behavioral analysis to ensure maximum safety and minimal detection risk.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-background-secondary rounded-lg p-4">
                <h3 className="font-orbitron font-bold text-primary mb-2">Kernel Level</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Direct kernel access for maximum stealth and performance
                </p>
              </div>
              <div className="bg-background-secondary rounded-lg p-4">
                <h3 className="font-orbitron font-bold text-primary mb-2">Memory Encryption</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Advanced encryption to hide cheat signatures from detection
                </p>
              </div>
              <div className="bg-background-secondary rounded-lg p-4">
                <h3 className="font-orbitron font-bold text-primary mb-2">HWID Spoofing</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Hardware fingerprint masking for additional security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;