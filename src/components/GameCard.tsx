import { GamingButton } from "./ui/gaming-button";
import { Target, Eye, Zap, Settings } from "lucide-react";

interface GameCardProps {
  name: string;
  image: string;
  features: string[];
  status: "active" | "development" | "maintenance";
  description: string;
  onSelect: () => void;
}

const GameCard = ({ name, image, features, status, description, onSelect }: GameCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "text-success border-success/50 bg-success/10";
      case "development":
        return "text-warning border-warning/50 bg-warning/10";
      case "maintenance":
        return "text-destructive border-destructive/50 bg-destructive/10";
      default:
        return "text-muted-foreground border-border bg-muted/10";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "active":
        return "ACTIVE";
      case "development":
        return "IN DEVELOPMENT";
      case "maintenance":
        return "MAINTENANCE";
      default:
        return "UNKNOWN";
    }
  };

  return (
    <div className="group relative glass-effect rounded-lg overflow-hidden hover-glow transition-all duration-500 border border-primary/20 hover:border-primary/50">
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-orbitron font-bold border ${getStatusColor()}`}>
        {getStatusText()}
      </div>

      {/* Game Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/90 via-transparent to-transparent" />
        
        {/* Scan Line Effect */}
        <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-orbitron font-bold text-foreground mb-2 glow-text">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 font-rajdhani">
          {description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-orbitron font-semibold text-primary mb-2">
            AVAILABLE CHEATS:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {features.slice(0, 4).map((feature, index) => {
              const icons = [Target, Eye, Zap, Settings];
              const Icon = icons[index] || Settings;
              
              return (
                <div key={feature} className="flex items-center space-x-2 text-xs font-rajdhani">
                  <Icon className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              );
            })}
          </div>
          {features.length > 4 && (
            <p className="text-xs text-primary font-rajdhani mt-1">
              +{features.length - 4} more features
            </p>
          )}
        </div>

        {/* Action Button */}
        <GamingButton
          variant={status === "active" ? "primary" : "secondary"}
          size="sm"
          className="w-full"
          onClick={onSelect}
          disabled={status === "maintenance"}
        >
          {status === "active" ? "SELECT GAME" : status === "development" ? "COMING SOON" : "UNAVAILABLE"}
        </GamingButton>
      </div>
    </div>
  );
};

export default GameCard;