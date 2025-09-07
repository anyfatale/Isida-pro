import { useState } from "react";
import { GamingButton } from "@/components/ui/gaming-button";
import { 
  Shield, 
  Target, 
  Eye, 
  Zap, 
  Settings, 
  Download,
  Play,
  Pause,
  Square,
  Activity,
  Users,
  Lock,
  Unlock,
  Cpu,
  HardDrive,
  Wifi
} from "lucide-react";

interface GameData {
  name: string;
  process: string;
  status: "detected" | "not-detected" | "injected";
  cheatType: "Internal" | "External" | "Kernel";
  features: string[];
  description: string;
}

const CheatProgram = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [isInjected, setIsInjected] = useState(false);
  const [programStatus, setProgramStatus] = useState<"idle" | "scanning" | "ready" | "injecting" | "injected">("idle");

  const games: Record<string, GameData> = {
    cs2: {
      name: "Counter-Strike 2",
      process: "cs2.exe",
      status: "detected",
      cheatType: "Kernel",
      features: [
        "Advanced Aimbot (Smooth, FOV, Bone selection)",
        "ESP/Wallhack (Players, Items, Grenades)",
        "Triggerbot (Configurable delay)",
        "Bhop (Automatic bunnyhopping)",
        "No Recoil/Spread compensation", 
        "Radar modifications",
        "Crosshair customization",
        "Rank revealer"
      ],
      description: "Kernel-level CS2 cheat with advanced anti-detection. Uses direct memory manipulation and HWID spoofing."
    },
    valorant: {
      name: "Valorant",
      process: "VALORANT-Win64-Shipping.exe",
      status: "not-detected",
      cheatType: "External",
      features: [
        "Pixel-perfect Aimbot",
        "Agent ESP with abilities",
        "Triggerbot (Humanized)",
        "No spread/recoil",
        "Bomb timer",
        "Spike defuse helper"
      ],
      description: "External process cheat for Valorant using advanced screen analysis and memory reading techniques."
    },
    fivem: {
      name: "FiveM (GTA V)",
      process: "FiveM.exe",
      status: "detected",
      cheatType: "Internal",
      features: [
        "Lua Script Executor",
        "Player ESP (Name, Health, Weapons)",
        "Vehicle ESP and spawner",
        "Teleportation system",
        "Godmode/Invincibility",
        "Money manipulation",
        "Weather/Time control",
        "No clip mode"
      ],
      description: "Internal DLL injection for FiveM with full server-side bypass and advanced scripting capabilities."
    },
    fortnite: {
      name: "Fortnite",
      process: "FortniteClient-Win64-Shipping.exe",
      status: "not-detected",
      cheatType: "External",
      features: [
        "Advanced Aimbot (Prediction)",
        "Player ESP (Distance, Health)",
        "Loot ESP (Weapons, Items)",
        "Building assistance",
        "No fall damage",
        "Speed modifications"
      ],
      description: "External Fortnite enhancement suite with prediction-based aimbot and comprehensive ESP system."
    }
  };

  const handleGameSelect = (gameKey: string) => {
    setSelectedGame(gameKey);
    setProgramStatus("scanning");
    
    // Simulate process scanning
    setTimeout(() => {
      setProgramStatus("ready");
    }, 2000);
  };

  const handleInject = () => {
    if (!selectedGame) return;
    
    setProgramStatus("injecting");
    
    // Simulate injection process
    setTimeout(() => {
      setIsInjected(true);
      setProgramStatus("injected");
      games[selectedGame].status = "injected";
    }, 3000);
  };

  const handleEject = () => {
    setIsInjected(false);
    setProgramStatus("ready");
    if (selectedGame) {
      games[selectedGame].status = "detected";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "detected":
      case "injected":
        return "text-success";
      case "not-detected":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "detected":
        return "PROCESS DETECTED";
      case "not-detected":
        return "PROCESS NOT FOUND";
      case "injected":
        return "SUCCESSFULLY INJECTED";
      default:
        return "UNKNOWN";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-4 glow-text">
            ISIDA PROGRAM
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Advanced Game Enhancement Control Panel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Selection */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-lg p-6 border border-primary/20">
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Game Selection
              </h2>
              
              <div className="space-y-3">
                {Object.entries(games).map(([key, game]) => (
                  <div
                    key={key}
                    onClick={() => handleGameSelect(key)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover-glow ${
                      selectedGame === key
                        ? 'border-primary bg-primary/10 shadow-neon'
                        : 'border-border bg-background-secondary hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-orbitron font-semibold text-sm text-foreground">
                        {game.name}
                      </h3>
                      <span className={`text-xs font-rajdhani ${getStatusColor(game.status)}`}>
                        {getStatusText(game.status)}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">
                      Process: {game.process}
                    </div>
                    <div className="text-xs text-primary font-rajdhani mt-1">
                      Type: {game.cheatType}
                    </div>
                  </div>
                ))}
              </div>

              {/* System Status */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-sm font-orbitron font-bold text-foreground mb-3">
                  System Status
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-3 h-3 text-primary" />
                      <span className="text-muted-foreground">CPU Usage</span>
                    </div>
                    <span className="text-success">12%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <HardDrive className="w-3 h-3 text-primary" />
                      <span className="text-muted-foreground">Memory</span>
                    </div>
                    <span className="text-success">45MB</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-3 h-3 text-primary" />
                      <span className="text-muted-foreground">Connection</span>
                    </div>
                    <span className="text-success">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Control Panel */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-lg p-8 border border-primary/20">
              {!selectedGame ? (
                <div className="text-center py-20">
                  <Shield className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                    Select a Game
                  </h3>
                  <p className="text-muted-foreground font-rajdhani">
                    Choose a game from the left panel to begin the injection process
                  </p>
                </div>
              ) : (
                <div>
                  {/* Game Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-orbitron font-bold text-foreground glow-text">
                        {games[selectedGame].name}
                      </h2>
                      <p className="text-muted-foreground font-rajdhani">
                        Cheat Type: <span className="text-primary">{games[selectedGame].cheatType}</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {isInjected ? (
                        <Unlock className="w-6 h-6 text-success" />
                      ) : (
                        <Lock className="w-6 h-6 text-muted-foreground" />
                      )}
                      <span className={`font-orbitron text-sm ${
                        isInjected ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        {isInjected ? 'INJECTED' : 'NOT INJECTED'}
                      </span>
                    </div>
                  </div>

                  {/* Status Display */}
                  <div className="mb-8">
                    <div className="bg-background-secondary rounded-lg p-6 border border-border">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-orbitron font-semibold text-foreground">
                          Injection Status
                        </h3>
                        <Activity className={`w-5 h-5 ${
                          programStatus === 'injected' ? 'text-success animate-pulse' : 'text-primary'
                        }`} />
                      </div>
                      
                      <div className="text-center py-6">
                        {programStatus === "idle" && (
                          <p className="text-muted-foreground font-rajdhani">Ready to scan for game process...</p>
                        )}
                        {programStatus === "scanning" && (
                          <div>
                            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
                            <p className="text-primary font-rajdhani">Scanning for game process...</p>
                          </div>
                        )}
                        {programStatus === "ready" && (
                          <p className="text-success font-rajdhani">Game process detected! Ready for injection.</p>
                        )}
                        {programStatus === "injecting" && (
                          <div>
                            <div className="animate-spin w-8 h-8 border-2 border-warning border-t-transparent rounded-full mx-auto mb-4" />
                            <p className="text-warning font-rajdhani">Injecting Isida.dll...</p>
                          </div>
                        )}
                        {programStatus === "injected" && (
                          <p className="text-success font-rajdhani font-bold">Successfully injected! All features active.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Injection Controls */}
                  <div className="flex gap-4 mb-8">
                    <GamingButton
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      onClick={handleInject}
                      disabled={programStatus !== "ready" || isInjected}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Inject Isida.dll
                    </GamingButton>
                    
                    <GamingButton
                      variant="danger"
                      size="lg"
                      onClick={handleEject}
                      disabled={!isInjected}
                    >
                      <Square className="w-5 h-5 mr-2" />
                      Eject
                    </GamingButton>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="text-lg font-orbitron font-bold text-foreground mb-4">
                      Available Features
                    </h3>
                    <p className="text-sm text-muted-foreground font-rajdhani mb-4">
                      {games[selectedGame].description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {games[selectedGame].features.map((feature, index) => {
                        const icons = [Target, Eye, Zap, Settings, Users, Activity];
                        const Icon = icons[index % icons.length];
                        
                        return (
                          <div
                            key={feature}
                            className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${
                              isInjected 
                                ? 'border-success/30 bg-success/5 text-success' 
                                : 'border-border bg-background-secondary text-muted-foreground'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isInjected ? 'text-success' : 'text-primary'}`} />
                            <span className="text-sm font-rajdhani">{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-lg p-8 border border-primary/20">
            <Download className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">
              Download Isida.exe
            </h2>
            <p className="text-muted-foreground font-rajdhani mb-6">
              Get the latest version of Isida cheat program
            </p>
            <GamingButton 
              variant="neon" 
              size="xl"
              onClick={() => {
                // Simulate download
                window.alert("Download started! Isida.exe (2.4MB)");
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Isida.exe
            </GamingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatProgram;