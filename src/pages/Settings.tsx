import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GamingButton } from "@/components/ui/gaming-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useProfile } from "@/hooks/useProfile";
import { useToast } from "@/hooks/use-toast";
import { 
  Settings as SettingsIcon, 
  Palette, 
  User, 
  Bell, 
  Shield, 
  Monitor,
  Volume2,
  Gamepad2
} from "lucide-react";
import { cn } from "@/lib/utils";

const Settings = () => {
  const { profile, updateProfile } = useProfile();
  const { toast } = useToast();

  const frameOptions = [
    { id: 'none', name: 'Brak ramki', preview: '' },
    { id: 'neon', name: 'Neon', preview: 'ring-2 ring-primary shadow-neon animate-glow-pulse' },
    { id: 'matrix', name: 'Matrix', preview: 'ring-2 ring-success shadow-[0_0_20px_hsl(var(--success)/0.5)]' },
    { id: 'gold', name: 'Złoto', preview: 'ring-2 ring-warning shadow-[0_0_20px_hsl(var(--warning)/0.5)]' },
    { id: 'fire', name: 'Ogień', preview: 'ring-2 ring-destructive shadow-[0_0_20px_hsl(var(--destructive)/0.5)]' }
  ];

  const fontOptions = [
    { id: 'orbitron', name: 'Orbitron (Futurystyczny)', preview: 'font-orbitron' },
    { id: 'rajdhani', name: 'Rajdhani (Gaming)', preview: 'font-rajdhani' },
    { id: 'cyber', name: 'Cyber (Monospace)', preview: 'font-mono' },
    { id: 'elegant', name: 'Elegant (Serif)', preview: 'font-serif' }
  ];

  const colorOptions = [
    { id: 'primary', name: 'Primary Blue', preview: 'text-primary' },
    { id: 'success', name: 'Matrix Green', preview: 'text-success' },
    { id: 'warning', name: 'Gold', preview: 'text-warning' },
    { id: 'destructive', name: 'Red Alert', preview: 'text-destructive' },
    { id: 'rainbow', name: 'Rainbow', preview: 'bg-gradient-to-r from-primary via-success to-warning bg-clip-text text-transparent' }
  ];

  const handleFrameChange = (frameId: string) => {
    updateProfile({ frameStyle: frameId as any });
    toast({
      title: "Ramka zaktualizowana",
      description: `Zmieniono styl ramki na: ${frameOptions.find(f => f.id === frameId)?.name}`,
    });
  };

  const handleNicknameStyleChange = (type: 'font' | 'color', value: string) => {
    const newStyle = {
      ...profile.nicknameStyle,
      [type]: value
    };
    updateProfile({ nicknameStyle: newStyle });
    
    toast({
      title: "Styl nickname zaktualizowany",
      description: `Zmieniono ${type === 'font' ? 'czcionkę' : 'kolor'} nickname`,
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-4 glow-text">
            Ustawienia
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Dostosuj swoje doświadczenie z ISIDA
          </p>
        </div>

        {/* Profile Customization */}
        <Card className="glass-effect border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <User className="w-5 h-5 text-primary" />
              Dostosowanie Profilu
            </CardTitle>
            <CardDescription>
              Personalizuj wygląd swojego profilu i nickname
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Current Profile Preview */}
            <div className="flex items-center gap-4 p-4 glass-effect rounded-lg border border-primary/20">
              <Avatar className={cn(
                "w-16 h-16",
                frameOptions.find(f => f.id === profile.frameStyle)?.preview
              )}>
                <AvatarImage src={profile.avatar} alt={profile.nickname} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl">
                  {profile.nickname.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className={cn(
                  "text-lg font-bold",
                  fontOptions.find(f => f.id === profile.nicknameStyle.font)?.preview,
                  colorOptions.find(c => c.id === profile.nicknameStyle.color)?.preview
                )}>
                  {profile.nickname}
                </div>
                <div className="text-sm text-muted-foreground">Podgląd twojego profilu</div>
              </div>
            </div>

            {/* Frame Selection */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Styl Ramki Awatara</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {frameOptions.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => handleFrameChange(frame.id)}
                    className={cn(
                      "flex flex-col items-center p-3 rounded-lg border-2 transition-all hover:scale-105",
                      profile.frameStyle === frame.id 
                        ? "border-primary bg-primary/10" 
                        : "border-primary/20 hover:border-primary/50"
                    )}
                  >
                    <Avatar className={cn("w-12 h-12 mb-2", frame.preview)}>
                      <AvatarFallback>{profile.nickname.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-center">{frame.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Selection */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Czcionka Nickname</Label>
              <Select 
                value={profile.nicknameStyle.font} 
                onValueChange={(value) => handleNicknameStyleChange('font', value)}
              >
                <SelectTrigger className="bg-background-secondary border-primary/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-effect border-primary/30">
                  {fontOptions.map((font) => (
                    <SelectItem key={font.id} value={font.id}>
                      <span className={font.preview}>{font.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Kolor Nickname</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleNicknameStyleChange('color', color.id)}
                    className={cn(
                      "flex flex-col items-center p-3 rounded-lg border-2 transition-all hover:scale-105",
                      profile.nicknameStyle.color === color.id 
                        ? "border-primary bg-primary/10" 
                        : "border-primary/20 hover:border-primary/50"
                    )}
                  >
                    <div className={cn("text-lg font-bold mb-1", color.preview)}>
                      Aa
                    </div>
                    <span className="text-xs text-center">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Settings */}
        <Card className="glass-effect border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <SettingsIcon className="w-5 h-5 text-primary" />
              Ustawienia Aplikacji
            </CardTitle>
            <CardDescription>
              Konfiguruj zachowanie aplikacji i powiadomienia
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Powiadomienia</Label>
                <p className="text-sm text-muted-foreground">Otrzymuj powiadomienia o aktualizacjach</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Auto-aktualizacje</Label>
                <p className="text-sm text-muted-foreground">Automatyczne pobieranie aktualizacji</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Statystyki użycia</Label>
                <p className="text-sm text-muted-foreground">Pomóż nam ulepszyć ISIDA</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Tryb deweloperski</Label>
                <p className="text-sm text-muted-foreground">Zaawansowane opcje i logi</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Gaming Settings */}
        <Card className="glass-effect border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <Gamepad2 className="w-5 h-5 text-primary" />
              Ustawienia Gaming
            </CardTitle>
            <CardDescription>
              Optymalizacja dla najlepszego doświadczenia w grach
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-base">Priorytet procesów</Label>
              <Select defaultValue="high">
                <SelectTrigger className="bg-background-secondary border-primary/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-effect border-primary/30">
                  <SelectItem value="low">Niski</SelectItem>
                  <SelectItem value="normal">Normalny</SelectItem>
                  <SelectItem value="high">Wysoki</SelectItem>
                  <SelectItem value="realtime">Czas rzeczywisty</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Optymalizacja CPU</Label>
                <p className="text-sm text-muted-foreground">Automatyczna optymalizacja dla gier</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Boost FPS</Label>
                <p className="text-sm text-muted-foreground">Maksymalizuj wydajność graficzną</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Redukcja input lag</Label>
                <p className="text-sm text-muted-foreground">Minimalizuj opóźnienia myszy i klawiatury</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="glass-effect border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-orbitron">
              <Shield className="w-5 h-5 text-primary" />
              Bezpieczeństwo
            </CardTitle>
            <CardDescription>
              Ustawienia bezpieczeństwa i prywatności
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Automatyczne czyszczenie logów</Label>
                <p className="text-sm text-muted-foreground">Usuń logi po zamknięciu aplikacji</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Szyfrowanie pamięci</Label>
                <p className="text-sm text-muted-foreground">Dodatkowa ochrona procesów</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Tryb niewidoczny</Label>
                <p className="text-sm text-muted-foreground">Ukryj procesy przed wykryciem</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <GamingButton variant="primary" className="flex-1">
            Zapisz wszystkie ustawienia
          </GamingButton>
          <GamingButton variant="secondary" className="flex-1">
            Przywróć domyślne
          </GamingButton>
        </div>
      </div>
    </div>
  );
};

export default Settings;