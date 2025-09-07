import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GamingButton } from "@/components/ui/gaming-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useProfile } from "@/hooks/useProfile";
import { Upload, Save, Edit2, Calendar, Award, Activity, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Profile = () => {
  const { profile, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    nickname: profile.nickname,
    avatar: profile.avatar
  });

  const frameOptions = [
    { id: 'none', name: 'Brak ramki', class: '' },
    { id: 'neon', name: 'Neon', class: 'ring-2 ring-primary shadow-neon animate-glow-pulse' },
    { id: 'matrix', name: 'Matrix', class: 'ring-2 ring-success shadow-[0_0_20px_hsl(var(--success)/0.5)]' },
    { id: 'gold', name: 'Złoto', class: 'ring-2 ring-warning shadow-[0_0_20px_hsl(var(--warning)/0.5)]' },
    { id: 'fire', name: 'Ogień', class: 'ring-2 ring-destructive shadow-[0_0_20px_hsl(var(--destructive)/0.5)]' }
  ];

  const handleSave = () => {
    updateProfile({
      nickname: editData.nickname,
      avatar: editData.avatar
    });
    setIsEditing(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setEditData(prev => ({ ...prev, avatar: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative glass-effect rounded-2xl p-8 mb-8 border border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-success/10" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <Avatar className={cn(
                "w-32 h-32", 
                frameOptions.find(f => f.id === profile.frameStyle)?.class
              )}>
                <AvatarImage src={profile.avatar} alt={profile.nickname} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-3xl">
                  {profile.nickname.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-primary rounded-full p-2 cursor-pointer hover:bg-primary-glow transition-colors">
                  <Upload className="w-4 h-4 text-primary-foreground" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileUpload}
                    className="hidden" 
                  />
                </label>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-4 mb-2">
                {isEditing ? (
                  <Input
                    value={editData.nickname}
                    onChange={(e) => setEditData(prev => ({ ...prev, nickname: e.target.value }))}
                    className="text-2xl font-orbitron font-bold bg-background-secondary"
                  />
                ) : (
                  <h1 className="text-3xl font-orbitron font-bold text-foreground glow-text">
                    {profile.nickname}
                  </h1>
                )}
              </div>
              
              <p className="text-muted-foreground mb-4">
                Członek od {new Date(profile.joinDate).toLocaleDateString('pl-PL')}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-primary/20 text-primary">
                  Poziom {profile.stats.level}
                </Badge>
                <Badge className="bg-success/20 text-success">
                  {profile.stats.achievementsUnlocked} Osiągnięć
                </Badge>
                <Badge className="bg-warning/20 text-warning">
                  {profile.stats.hoursActive}h Aktywności
                </Badge>
              </div>
              
              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <GamingButton onClick={handleSave} variant="primary" size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Zapisz
                    </GamingButton>
                    <GamingButton 
                      onClick={() => setIsEditing(false)} 
                      variant="secondary" 
                      size="sm"
                    >
                      Anuluj
                    </GamingButton>
                  </>
                ) : (
                  <GamingButton onClick={() => setIsEditing(true)} variant="neon" size="sm">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edytuj Profil
                  </GamingButton>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Users className="w-5 h-5 text-primary" />
                <Badge variant="outline">Gry</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profile.stats.gamesPlayed}</div>
              <p className="text-xs text-muted-foreground">Rozegranych gier</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Activity className="w-5 h-5 text-success" />
                <Badge variant="outline">Czas</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profile.stats.hoursActive}h</div>
              <p className="text-xs text-muted-foreground">Aktywności</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Award className="w-5 h-5 text-warning" />
                <Badge variant="outline">Nagrody</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profile.stats.achievementsUnlocked}</div>
              <p className="text-xs text-muted-foreground">Osiągnięć</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Calendar className="w-5 h-5 text-primary-glow" />
                <Badge variant="outline">Level</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profile.stats.level}</div>
              <p className="text-xs text-muted-foreground">Aktualny poziom</p>
            </CardContent>
          </Card>
        </div>

        {/* Frame Selection */}
        <Card className="glass-effect border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="font-orbitron">Dostosuj Ramkę Awatara</CardTitle>
            <CardDescription>
              Wybierz styl ramki wokół swojego zdjęcia profilowego
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {frameOptions.map((frame) => (
                <div
                  key={frame.id}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    profile.frameStyle === frame.id 
                      ? "border-primary bg-primary/10" 
                      : "border-primary/20 hover:border-primary/50"
                  )}
                  onClick={() => updateProfile({ frameStyle: frame.id as any })}
                >
                  <Avatar className={cn("w-16 h-16 mb-2", frame.class)}>
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback>
                      {profile.nickname.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{frame.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;