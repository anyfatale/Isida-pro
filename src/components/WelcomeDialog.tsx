import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GamingButton } from "@/components/ui/gaming-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, User } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";

export const WelcomeDialog = () => {
  const { isFirstVisit, setUserName } = useProfile();
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isFirstVisit) {
      // Delay the dialog to allow page to load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isFirstVisit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setUserName(name.trim());
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md glass-effect border-primary/30 animate-scale-in">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 animate-glow-pulse">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-2xl font-orbitron text-foreground glow-text">
            Witaj w ISIDA
          </DialogTitle>
          <DialogDescription className="font-rajdhani text-muted-foreground">
            Jak masz na imię? Pomoże nam to spersonalizować Twoje doświadczenie.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Twoje imię
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Wprowadź swoje imię..."
              className="bg-background-secondary border-primary/30 focus:border-primary"
              autoFocus
            />
          </div>
          
          <div className="flex justify-center pt-4">
            <GamingButton 
              type="submit" 
              variant="primary" 
              size="lg"
              disabled={!name.trim()}
              className="min-w-32"
            >
              Rozpocznij
            </GamingButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};