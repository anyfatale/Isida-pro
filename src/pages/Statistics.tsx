import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useProfile } from "@/hooks/useProfile";
import { 
  Activity, 
  Users, 
  Trophy, 
  Target, 
  Zap, 
  Shield, 
  Calendar,
  TrendingUp,
  Clock,
  GamepadIcon,
  Award
} from "lucide-react";

const Statistics = () => {
  const { profile, updateStats } = useProfile();
  const [liveStats, setLiveStats] = useState({
    onlineUsers: 0,
    activeGames: 0,
    totalInjects: 0
  });

  // Simulate live data updates
  useEffect(() => {
    const updateLiveData = () => {
      setLiveStats({
        onlineUsers: Math.floor(Math.random() * 1000) + 2500,
        activeGames: Math.floor(Math.random() * 50) + 180,
        totalInjects: Math.floor(Math.random() * 10000) + 45000
      });
    };

    updateLiveData();
    const interval = setInterval(updateLiveData, 5000);
    return () => clearInterval(interval);
  }, []);

  const globalStats = [
    {
      title: "Użytkownicy Online",
      value: liveStats.onlineUsers.toLocaleString(),
      icon: Users,
      color: "text-success",
      bgColor: "bg-success/20",
      change: "+12%"
    },
    {
      title: "Aktywne Sesje Gry",
      value: liveStats.activeGames.toLocaleString(),
      icon: GamepadIcon,
      color: "text-primary",
      bgColor: "bg-primary/20",
      change: "+8%"
    },
    {
      title: "Łączne Inject'y",
      value: liveStats.totalInjects.toLocaleString(),
      icon: Zap,
      color: "text-warning",
      bgColor: "bg-warning/20",
      change: "+23%"
    },
    {
      title: "Pomyślne Sesje",
      value: "99.7%",
      icon: Shield,
      color: "text-success",
      bgColor: "bg-success/20",
      change: "+0.2%"
    }
  ];

  const personalStats = [
    {
      label: "Rozegrane Gry",
      value: profile.stats.gamesPlayed,
      maxValue: 100,
      icon: Target,
      color: "text-primary"
    },
    {
      label: "Godziny Aktywności",
      value: profile.stats.hoursActive,
      maxValue: 500,
      icon: Clock,
      color: "text-success"
    },
    {
      label: "Odblokowane Osiągnięcia",
      value: profile.stats.achievementsUnlocked,
      maxValue: 50,
      icon: Award,
      color: "text-warning"
    },
    {
      label: "Poziom Doświadczenia",
      value: profile.stats.level,
      maxValue: 100,
      icon: TrendingUp,
      color: "text-purple-400"
    }
  ];

  const gameStats = [
    {
      game: "Counter-Strike 2",
      sessions: 45,
      winRate: 87,
      avgTime: "2.3h",
      lastPlayed: "2 godziny temu",
      status: "active"
    },
    {
      game: "Valorant", 
      sessions: 32,
      winRate: 92,
      avgTime: "1.8h",
      lastPlayed: "5 godzin temu",
      status: "active"
    },
    {
      game: "Fortnite",
      sessions: 18,
      winRate: 76,
      avgTime: "3.1h", 
      lastPlayed: "1 dzień temu",
      status: "inactive"
    },
    {
      game: "FiveM",
      sessions: 67,
      winRate: 94,
      avgTime: "4.2h",
      lastPlayed: "3 godziny temu",
      status: "active"
    }
  ];

  const achievements = [
    {
      name: "Pierwszy Inject",
      description: "Pomyślnie wykonaj pierwszy inject cheata",
      completed: true,
      date: "2024-01-15"
    },
    {
      name: "Gracz Miesiąca",
      description: "Zagraj przez 100+ godzin w miesiącu",
      completed: true,
      date: "2024-02-01"
    },
    {
      name: "Master Cheater",
      description: "Osiągnij 95% win rate w 3 różnych grach",
      completed: false,
      progress: 67
    },
    {
      name: "Legenda ISIDA",
      description: "Używaj ISIDA przez 6+ miesięcy",
      completed: false,
      progress: 45
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-4 glow-text">
            Statystyki
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Śledź swoje postępy i wydajność w grach
          </p>
        </div>

        {/* Global Stats */}
        <div className="mb-12">
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-foreground">Statystyki Globalne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                        <Icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <Badge className="bg-success/20 text-success text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.title}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Personal Stats */}
        <div className="mb-12">
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-foreground">Twoje Statystyki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalStats.map((stat) => {
              const Icon = stat.icon;
              const percentage = (stat.value / stat.maxValue) * 100;
              
              return (
                <Card key={stat.label} className="glass-effect border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${stat.color}`} />
                        <span className="font-medium">{stat.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <Progress value={percentage} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>{stat.maxValue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Game Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-foreground">Statystyki Gier</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {gameStats.map((game) => (
              <Card key={game.game} className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron">{game.game}</CardTitle>
                    <Badge className={game.status === 'active' ? 'bg-success/20 text-success' : 'bg-muted/20 text-muted-foreground'}>
                      {game.status === 'active' ? 'Aktywne' : 'Nieaktywne'}
                    </Badge>
                  </div>
                  <CardDescription>Ostatnio grano: {game.lastPlayed}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{game.sessions}</div>
                      <div className="text-xs text-muted-foreground">Sesji</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">{game.winRate}%</div>
                      <div className="text-xs text-muted-foreground">Win Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-warning">{game.avgTime}</div>
                      <div className="text-xs text-muted-foreground">Śr. Czas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-foreground">Osiągnięcia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${achievement.completed ? 'bg-success/20' : 'bg-muted/20'}`}>
                      <Trophy className={`w-5 h-5 ${achievement.completed ? 'text-success' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{achievement.name}</h3>
                        {achievement.completed && (
                          <Badge className="bg-success/20 text-success">Ukończone</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      {achievement.completed ? (
                        <div className="text-xs text-muted-foreground">
                          Ukończone: {new Date(achievement.date!).toLocaleDateString('pl-PL')}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Progress value={achievement.progress} className="h-2" />
                          <div className="text-xs text-muted-foreground">
                            Postęp: {achievement.progress}%
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;