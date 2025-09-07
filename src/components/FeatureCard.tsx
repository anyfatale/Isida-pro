import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  type: "aimbot" | "esp" | "triggerbot" | "executor" | "misc";
}

const FeatureCard = ({ icon: Icon, title, description, type }: FeatureCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "aimbot":
        return "from-destructive/20 to-warning/20 border-destructive/30";
      case "esp":
        return "from-primary/20 to-primary-glow/20 border-primary/30";
      case "triggerbot":
        return "from-warning/20 to-success/20 border-warning/30";
      case "executor":
        return "from-secondary/20 to-primary/20 border-secondary/30";
      case "misc":
        return "from-muted/20 to-accent/20 border-muted/30";
      default:
        return "from-muted/20 to-accent/20 border-muted/30";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "aimbot":
        return "AIM ASSISTANCE";
      case "esp":
        return "VISUAL HACK";
      case "triggerbot":
        return "AUTO TRIGGER";
      case "executor":
        return "SCRIPT RUNNER";
      case "misc":
        return "MISC HACK";
      default:
        return "FEATURE";
    }
  };

  return (
    <div className={`relative glass-effect rounded-lg p-6 hover-glow transition-all duration-500 bg-gradient-to-br ${getTypeColor()} border group`}>
      {/* Type Badge */}
      <div className="absolute top-3 right-3 text-xs font-orbitron font-bold text-primary opacity-60">
        {getTypeLabel()}
      </div>

      {/* Icon */}
      <div className="mb-4">
        <div className="relative inline-block">
          <Icon className="w-10 h-10 text-primary group-hover:text-primary-glow transition-colors duration-300" />
          <div className="absolute inset-0 blur-md bg-primary/30 group-hover:bg-primary-glow/40 transition-all duration-300" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-orbitron font-bold text-foreground mb-2 group-hover:glow-text transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm font-rajdhani leading-relaxed">
        {description}
      </p>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default FeatureCard;