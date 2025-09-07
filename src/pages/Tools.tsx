import { useState } from "react";
import { GamingButton } from "@/components/ui/gaming-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Volume2, 
  Lock, 
  Cpu, 
  Trash2, 
  Download, 
  Play, 
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react";

const Tools = () => {
  const { toast } = useToast();
  const [downloads, setDownloads] = useState<{ [key: string]: number }>({});

  const tools = [
    {
      id: 'hwid-spoofer',
      name: 'HWID Spoofer',
      description: 'Zaawansowane narzędzie do zmiany identyfikatorów sprzętowych. Chroni przed wykryciem przez systemy anti-cheat.',
      icon: Shield,
      version: '3.2.1',
      size: '2.4 MB',
      status: 'active' as const,
      features: [
        'Spoofing GPU, CPU, RAM',
        'BIOS & Motherboard ID',
        'Network MAC Address',
        'Registry Cleanup',
        'Automatyczne backupy'
      ],
      compatibility: ['Windows 10', 'Windows 11'],
      filename: 'HWID-Spoofer-v3.2.1.exe'
    },
    {
      id: 'woofer',
      name: 'Woofer',
      description: 'Zaawansowany modyfikator dźwięku dla gier. Poprawia słyszalność kroków przeciwników i redukuje niepotrzebne dźwięki.',
      icon: Volume2,
      version: '1.8.5',
      size: '1.2 MB',
      status: 'active' as const,
      features: [
        'Wzmocnienie kroków',
        'Redukcja szumów',
        'Surround Sound Enhancement',
        'Predefiniowane profile gier',
        'Real-time EQ'
      ],
      compatibility: ['CS2', 'Valorant', 'Apex Legends'],
      filename: 'Woofer-v1.8.5.exe'
    },
    {
      id: 'memory-encryption',
      name: 'Memory Encryption',
      description: 'Zabezpiecza pamięć procesów przed odczytem przez systemy wykrywania cheatów. Szyfruje krytyczne dane.',
      icon: Lock,
      version: '2.1.0',
      size: '3.8 MB',
      status: 'beta' as const,
      features: [
        'AES-256 Encryption',
        'Dynamic Memory Protection',
        'Anti-Debugging',
        'Process Hollowing Protection',
        'Real-time Monitoring'
      ],
      compatibility: ['Wszystkie gry'],
      filename: 'Memory-Encryption-v2.1.0-beta.exe'
    },
    {
      id: 'pc-optimizer',
      name: 'PC Optimizer',
      description: 'Kompleksowa optymalizacja systemu dla lepszej wydajności w grach. Zwiększa FPS i redukuje input lag.',
      icon: Cpu,
      version: '4.3.2',
      size: '5.1 MB',
      status: 'active' as const,
      features: [
        'RAM Optimization',
        'CPU Priority Management',
        'Network Optimization',
        'GPU Tweaks',
        'Registry Optimization'
      ],
      compatibility: ['Windows 10', 'Windows 11'],
      filename: 'PC-Optimizer-v4.3.2.exe'
    },
    {
      id: 'pc-cleaner',
      name: 'PC Cleaner',
      description: 'Zaawansowane narzędzie czyszczące system z logów anti-cheat, cache i innych śladów aktywności.',
      icon: Trash2,
      version: '2.7.8',
      size: '1.9 MB',
      status: 'active' as const,
      features: [
        'Anti-cheat Logs Cleanup',
        'Browser Cache Removal',
        'System Temp Files',
        'Registry Cleanup',
        'Secure File Deletion'
      ],
      compatibility: ['Wszystkie systemy'],
      filename: 'PC-Cleaner-v2.7.8.exe'
    }
  ];

  const handleDownload = async (tool: typeof tools[0]) => {
    toast({
      title: "Rozpoczęto pobieranie",
      description: `Pobieranie ${tool.name} v${tool.version}...`,
    });

    // Simulate download progress
    setDownloads(prev => ({ ...prev, [tool.id]: 0 }));
    
    const interval = setInterval(() => {
      setDownloads(prev => {
        const currentProgress = prev[tool.id] || 0;
        const newProgress = Math.min(currentProgress + Math.random() * 15, 100);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          // Create and download actual file
          const blob = new Blob([`Isida ${tool.name} v${tool.version} - Symulacja pliku`], { 
            type: 'application/octet-stream' 
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = tool.filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          toast({
            title: "Pobieranie zakończone",
            description: `${tool.name} został pobrany pomyślnie!`,
          });
          
          setTimeout(() => {
            setDownloads(prev => {
              const newDownloads = { ...prev };
              delete newDownloads[tool.id];
              return newDownloads;
            });
          }, 2000);
        }
        
        return { ...prev, [tool.id]: newProgress };
      });
    }, 200);
  };

  const getStatusBadge = (status: 'active' | 'beta' | 'development') => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success/20 text-success"><CheckCircle className="w-3 h-3 mr-1" />Aktywne</Badge>;
      case 'beta':
        return <Badge className="bg-warning/20 text-warning"><AlertTriangle className="w-3 h-3 mr-1" />Beta</Badge>;
      case 'development':
        return <Badge className="bg-muted/20 text-muted-foreground"><Info className="w-3 h-3 mr-1" />W rozwoju</Badge>;
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 glow-text">
            Narzędzia i Utilities
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            Zaawansowane narzędzia systemowe dla gamingu. Optymalizacja, ochrona i enhancement w jednym miejscu.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isDownloading = downloads[tool.id] !== undefined;
            const downloadProgress = downloads[tool.id] || 0;
            
            return (
              <Card key={tool.id} className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors" />
                        <div className="absolute inset-0 blur-md bg-primary/30 group-hover:bg-primary-glow/40 transition-all" />
                      </div>
                      <div>
                        <CardTitle className="font-orbitron text-xl">{tool.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground">v{tool.version}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{tool.size}</span>
                        </div>
                      </div>
                    </div>
                    {getStatusBadge(tool.status)}
                  </div>
                  <CardDescription className="font-rajdhani text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Funkcje:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-success" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compatibility */}
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Kompatybilność:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tool.compatibility.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Download Section */}
                  <div className="border-t border-primary/20 pt-4">
                    {isDownloading ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Pobieranie...</span>
                          <span>{Math.round(downloadProgress)}%</span>
                        </div>
                        <Progress value={downloadProgress} className="h-2" />
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <GamingButton 
                          onClick={() => handleDownload(tool)}
                          variant="primary" 
                          className="flex-1"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Pobierz {tool.name}
                        </GamingButton>
                        
                        <GamingButton variant="ghost" size="icon">
                          <Info className="w-4 h-4" />
                        </GamingButton>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Warning Section */}
        <div className="mt-16">
          <Card className="glass-effect border-warning/50 bg-warning/5">
            <CardHeader>
              <CardTitle className="flex items-center text-warning font-orbitron">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Ważne Informacje
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground font-rajdhani">
              <p>• Wszystkie narzędzia są przeznaczone wyłącznie do celów edukacyjnych i testowych</p>
              <p>• Używaj odpowiedzialnie zgodnie z regulaminami gier i lokalnym prawem</p>
              <p>• Regularne aktualizacje zapewniają najlepszą kompatybilność i bezpieczeństwo</p>
              <p>• W przypadku problemów skontaktuj się z naszym wsparciem technicznym</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tools;