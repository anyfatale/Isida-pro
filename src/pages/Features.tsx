import FeatureCard from "@/components/FeatureCard";
import { GamingButton } from "@/components/ui/gaming-button";
import { 
  Target, 
  Eye, 
  MousePointer, 
  Code, 
  Zap, 
  Settings, 
  Shield, 
  Activity,
  Users,
  Crosshair,
  Map,
  Timer,
  Gamepad2,
  Cpu,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Advanced Aimbot",
      description: "Precision targeting with smooth aim transitions, FOV circle configuration, bone selection (head/body/nearest), humanization settings, and prediction algorithms for moving targets.",
      type: "aimbot" as const
    },
    {
      icon: Eye,
      title: "ESP/Wallhack",
      description: "See enemies through walls with customizable boxes, player names, health bars, weapon information, distance display, and team identification with color coding.",
      type: "esp" as const
    },
    {
      icon: MousePointer,
      title: "Triggerbot",
      description: "Automatic shooting when crosshair is positioned over enemy targets. Features configurable delay, humanization, weapon-specific settings, and team check options.",
      type: "triggerbot" as const
    },
    {
      icon: Code,
      title: "Script Executor", 
      description: "Execute custom scripts and modifications with support for Lua, JavaScript, and C# scripts. Advanced API access for game manipulation and automation.",
      type: "executor" as const
    },
    {
      icon: Zap,
      title: "Speed Modifications",
      description: "Enhance movement capabilities with speed hacks, jump height modifications, no fall damage, bunny hopping automation, and physics manipulation.",
      type: "misc" as const
    },
    {
      icon: Crosshair,
      title: "Crosshair Enhancement",
      description: "Custom crosshair designs with dynamic sizing, color options, opacity controls, and recoil pattern visualization for improved accuracy.",
      type: "misc" as const
    },
    {
      icon: Map,
      title: "Radar Modifications",
      description: "Enhanced radar systems showing enemy positions, item locations, objective markers, and tactical information overlay with customizable ranges.",
      type: "esp" as const
    },
    {
      icon: Timer,
      title: "Game Timers",
      description: "Display important game timings including bomb/spike timers, ability cooldowns, respawn counters, and round information for strategic advantage.",
      type: "misc" as const
    },
    {
      icon: Users,
      title: "Team Utilities",
      description: "Team-based enhancements with teammate highlighting, team damage prevention, spectator warnings, and coordinated strategy tools.",
      type: "misc" as const
    },
    {
      icon: Gamepad2,
      title: "Input Automation",
      description: "Automated input sequences for complex movements, recoil compensation macros, automatic weapon switching, and ability usage optimization.",
      type: "misc" as const
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Game performance enhancements including FPS unlocking, input lag reduction, CPU priority adjustment, and memory optimization for smoother gameplay.",
      type: "misc" as const
    },
    {
      icon: Lock,
      title: "Security Features",
      description: "Advanced protection systems with HWID spoofing, memory encryption, process hiding, and anti-detection mechanisms to ensure user safety.",
      type: "misc" as const
    }
  ];

  const cheatTypes = [
    {
      title: "Internal Cheats",
      description: "Injected directly into the game process memory for maximum access and functionality.",
      pros: ["Full game access", "High performance", "Advanced features"],
      cons: ["Higher detection risk", "Game updates break functionality"],
      icon: Cpu,
      color: "from-destructive/20 to-warning/20"
    },
    {
      title: "External Cheats", 
      description: "Run as separate processes that read game memory externally for enhanced security.",
      pros: ["Lower detection risk", "Stable across updates", "Easier to develop"],
      cons: ["Limited functionality", "Performance overhead"],
      icon: Shield,
      color: "from-primary/20 to-primary-glow/20"
    },
    {
      title: "Kernel Cheats",
      description: "Operate at kernel level with highest privileges for maximum stealth and capabilities.",
      pros: ["Maximum stealth", "Complete system access", "Hardest to detect"],
      cons: ["Requires driver installation", "System restart needed"],
      icon: Lock,
      color: "from-secondary/20 to-primary/20"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 glow-text">
            Features Overview
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-4xl mx-auto">
            Comprehensive guide to game enhancement features and cheat types. Understanding the tools that give you the competitive edge.
          </p>
        </div>

        {/* Cheat Types Explanation */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold text-foreground mb-8 text-center">
            Understanding Cheat Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cheatTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={type.title}
                  className={`glass-effect rounded-lg p-6 border border-primary/20 hover-glow bg-gradient-to-br ${type.color} animate-slide-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center mb-4">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-orbitron font-bold text-foreground">{type.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground font-rajdhani mb-6 text-center">
                    {type.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-success font-orbitron font-semibold text-sm mb-2">ADVANTAGES:</h4>
                      <ul className="space-y-1">
                        {type.pros.map((pro) => (
                          <li key={pro} className="text-xs text-muted-foreground font-rajdhani flex items-center">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mr-2" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-destructive font-orbitron font-semibold text-sm mb-2">CONSIDERATIONS:</h4>
                      <ul className="space-y-1">
                        {type.cons.map((con) => (
                          <li key={con} className="text-xs text-muted-foreground font-rajdhani flex items-center">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold text-foreground mb-8 text-center">
            Available Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </section>

        {/* Safety Information */}
        <section className="mb-20">
          <div className="glass-effect rounded-2xl p-12 border border-primary/20 bg-gradient-to-br from-background-secondary/50 to-background-tertiary/30">
            <div className="text-center mb-8">
              <Activity className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
              <h2 className="text-3xl font-orbitron font-bold text-foreground mb-4 glow-text">
                Safety & Anti-Detection
              </h2>
              <p className="text-lg text-muted-foreground font-rajdhani max-w-3xl mx-auto">
                Our advanced protection systems ensure maximum safety while using enhancement tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background-secondary rounded-lg p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-bold text-foreground mb-2">Memory Protection</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Advanced memory encryption and obfuscation techniques
                </p>
              </div>
              
              <div className="bg-background-secondary rounded-lg p-6 text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-bold text-foreground mb-2">HWID Spoofing</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Hardware fingerprint masking and rotation systems
                </p>
              </div>
              
              <div className="bg-background-secondary rounded-lg p-6 text-center">
                <Cpu className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-bold text-foreground mb-2">Process Hiding</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Kernel-level process concealment from detection systems
                </p>
              </div>
              
              <div className="bg-background-secondary rounded-lg p-6 text-center">
                <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-bold text-foreground mb-2">Behavior Analysis</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Human-like behavior patterns to avoid statistical detection
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="glass-effect rounded-2xl p-12 border border-primary/20">
            <Target className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-orbitron font-bold text-foreground mb-6 glow-text">
              Ready to Enhance Your Gaming?
            </h2>
            <p className="text-xl text-muted-foreground font-rajdhani mb-8 max-w-2xl mx-auto">
              Experience the ultimate gaming enhancement suite with professional-grade features and unmatched reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/program">
                <GamingButton variant="primary" size="xl">
                  Try Isida Program
                </GamingButton>
              </Link>
              <Link to="/games">
                <GamingButton variant="secondary" size="xl">
                  View Supported Games
                </GamingButton>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;