import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut, Trophy, Activity } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";

export const UserProfileHeader = () => {
  const { profile } = useProfile();

  const frameStyles = {
    none: "",
    neon: "ring-2 ring-primary shadow-neon animate-glow-pulse",
    matrix: "ring-2 ring-success shadow-[0_0_20px_hsl(var(--success)/0.5)]",
    gold: "ring-2 ring-warning shadow-[0_0_20px_hsl(var(--warning)/0.5)]",
    fire: "ring-2 ring-destructive shadow-[0_0_20px_hsl(var(--destructive)/0.5)]"
  };

  const nicknameStyles = {
    font: {
      orbitron: "font-orbitron",
      rajdhani: "font-rajdhani", 
      cyber: "font-mono",
      elegant: "font-serif"
    },
    color: {
      primary: "text-primary",
      success: "text-success",
      warning: "text-warning", 
      destructive: "text-destructive",
      rainbow: "bg-gradient-to-r from-primary via-success to-warning bg-clip-text text-transparent"
    }
  };

  if (!profile.name) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-3 hover:bg-primary/10 rounded-lg p-2 transition-all duration-300 group">
        <div className="flex items-center space-x-2">
          <span className={cn(
            "text-sm font-medium transition-colors",
            nicknameStyles.font[profile.nicknameStyle.font],
            nicknameStyles.color[profile.nicknameStyle.color]
          )}>
            {profile.nickname}
          </span>
          <Avatar className={cn("w-8 h-8", frameStyles[profile.frameStyle])}>
            <AvatarImage src={profile.avatar} alt={profile.nickname} />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground">
              {profile.nickname.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-56 glass-effect border-primary/30 bg-background/95 backdrop-blur-md"
      >
        <div className="px-2 py-1.5">
          <p className="text-sm font-medium">Witaj, {profile.name}!</p>
          <p className="text-xs text-muted-foreground">Poziom {profile.stats.level}</p>
        </div>
        
        <DropdownMenuSeparator className="bg-primary/20" />
        
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center cursor-pointer">
            <User className="w-4 h-4 mr-2" />
            Profil
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/statistics" className="flex items-center cursor-pointer">
            <Activity className="w-4 h-4 mr-2" />
            Statystyki
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/achievements" className="flex items-center cursor-pointer">
            <Trophy className="w-4 h-4 mr-2" />
            Osiągnięcia
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-primary/20" />
        
        <DropdownMenuItem asChild>
          <Link to="/settings" className="flex items-center cursor-pointer">
            <Settings className="w-4 h-4 mr-2" />
            Ustawienia
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-primary/20" />
        
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="w-4 h-4 mr-2" />
          Wyloguj się
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};