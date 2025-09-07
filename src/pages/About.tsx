import { GamingButton } from "@/components/ui/gaming-button";
import { Shield, User, Code, Target, Award, Activity, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "50,000+" },
    { icon: Target, label: "Games Supported", value: "15+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Activity, label: "Success Rate", value: "99.8%" }
  ];

  const timeline = [
    {
      year: "2016",
      title: "Project Genesis",
      description: "Kamil Poreba started developing game enhancement tools as a hobby project while studying computer science."
    },
    {
      year: "2018", 
      title: "First Public Release",
      description: "Released the first version of game modification tools for Counter-Strike series with basic ESP and aimbot functionality."
    },
    {
      year: "2020",
      title: "Advanced Anti-Detection",
      description: "Developed revolutionary kernel-level anti-detection systems and memory protection algorithms."
    },
    {
      year: "2022",
      title: "Multi-Game Support",
      description: "Expanded to support multiple popular games including Valorant, Fortnite, and FiveM with dedicated cheat modules."
    },
    {
      year: "2024",
      title: "Isida Launch",
      description: "Launched Isida - the most advanced gaming enhancement suite with AI-powered features and unmatched reliability."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 glow-text">
            About Isida
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            The story behind the most advanced gaming enhancement suite, created by passionate developers for the gaming community.
          </p>
        </div>

        {/* Creator Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-orbitron font-bold text-foreground mb-2">
                  Kamil Poreba
                </h2>
                <p className="text-primary font-rajdhani text-lg mb-4">
                  Creator & Lead Developer
                </p>
                <p className="text-muted-foreground font-rajdhani">
                  Expert reverse engineer and security researcher with 8+ years of experience in game modification and anti-cheat bypass technologies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-effect rounded-lg p-6 border border-primary/20">
                <Code className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                  Technical Expertise
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Specialized in low-level programming, kernel development, reverse engineering, 
                  and advanced anti-detection techniques for modern gaming platforms.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6 border border-primary/20">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                  Security Research
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Continuous research into game security systems, anti-cheat mechanisms, 
                  and protection bypassing to stay ahead of detection methods.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6 border border-primary/20">
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                  Community Impact
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Building tools that enhance gaming experiences while maintaining ethical 
                  standards and promoting responsible usage within the gaming community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="glass-effect rounded-lg p-6 text-center border border-primary/20 hover-glow animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-orbitron font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-rajdhani text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold text-foreground mb-12 text-center">
            Development Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className="relative flex items-start animate-slide-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center border-4 border-background">
                    <span className="text-primary-foreground font-orbitron font-bold text-sm">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 glass-effect rounded-lg p-6 border border-primary/20 flex-1">
                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-rajdhani">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20">
          <div className="glass-effect rounded-2xl p-12 border border-primary/20 bg-gradient-to-br from-background-secondary/50 to-background-tertiary/30">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
              <h2 className="text-3xl font-orbitron font-bold text-foreground mb-4 glow-text">
                Our Philosophy
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  Quality First
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  We prioritize quality over quantity, ensuring every feature is thoroughly tested and optimized for performance.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  Community Driven
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Our development is guided by community feedback and the evolving needs of competitive gamers worldwide.
                </p>
              </div>
              
              <div className="text-center">
                <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-orbitron font-bold text-foreground mb-2">
                  Continuous Innovation
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  We constantly push the boundaries of what's possible in game enhancement technology and anti-detection systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section className="text-center">
          <div className="glass-effect rounded-2xl p-12 border border-primary/20">
            <Target className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-orbitron font-bold text-foreground mb-6 glow-text">
              Join the Isida Community
            </h2>
            <p className="text-xl text-muted-foreground font-rajdhani mb-8 max-w-2xl mx-auto">
              Become part of a community that values innovation, quality, and the pursuit of gaming excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/program">
                <GamingButton variant="primary" size="xl">
                  Download Isida
                </GamingButton>
              </Link>
              <GamingButton variant="secondary" size="xl">
                Join Community
              </GamingButton>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground font-rajdhani text-sm">
                For business inquiries or technical support, contact us through our community channels.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;