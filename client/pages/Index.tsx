import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Shield,
  Zap,
  Eye,
  AlertTriangle,
  TrendingUp,
  Lock,
  Activity,
  Globe,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Index() {
  const [threatLevel, setThreatLevel] = useState(0);
  const [assetsProtected, setAssetsProtected] = useState(0);
  const [activeThreats, setActiveThreats] = useState(0);

  useEffect(() => {
    // Animate counters on mount
    const interval = setInterval(() => {
      setThreatLevel((prev) => (prev < 23 ? prev + 1 : 23));
      setAssetsProtected((prev) => (prev < 47 ? prev + 1 : 47));
      setActiveThreats((prev) => (prev < 12 ? prev + 1 : 12));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-gemini-dark to-gemini-deep text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-50" />
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge
              variant="outline"
              className="mb-6 border-primary/50 text-primary bg-primary/10"
            >
              <Shield className="w-4 h-4 mr-2" />
              Dark Gemini Intelligence Portal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Darknet Threat Intelligence Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Detect Leaks, Monitor Chatter, Investigate Breaches in Real Time
            </p>

            {/* Context Block */}
            <div className="bg-card/30 border border-primary/20 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse" />
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Demo Interface
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built as a data visualization and security interface demo.
                    This dashboard aggregates and analyzes darknet activity
                    including credentials, exploits, and threat actor
                    communications.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => (window.location.href = "/operations")}
              >
                <Eye className="w-5 h-5 mr-2" />
                Access Intelligence Dashboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => (window.location.href = "/ai-chat")}
              >
                <Activity className="w-5 h-5 mr-2" />
                Live Threat Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Stats */}
      <section className="py-16 border-y border-primary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {threatLevel}%
              </div>
              <div className="text-muted-foreground">Current Threat Level</div>
              <div className="text-sm text-accent mt-1">
                ↓ 8% from yesterday
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                ${assetsProtected}B
              </div>
              <div className="text-muted-foreground">Assets Protected</div>
              <div className="text-sm text-primary mt-1">↑ 12% this month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-destructive mb-2">
                {activeThreats}
              </div>
              <div className="text-muted-foreground">
                Active Threats Blocked
              </div>
              <div className="text-sm text-accent mt-1">Last 24 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Modules */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Darknet Intelligence Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time monitoring of underground markets, forums, and threat
              actor communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-destructive/20 hover:border-destructive/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Shield className="w-8 h-8 text-destructive group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="destructive"
                    className="bg-destructive/20 text-destructive"
                  >
                    Active
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Credential Intelligence
                </CardTitle>
                <CardDescription>
                  Monitor stolen credentials, wallet leaks, and digital asset
                  exposures across darknet databases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Databases Monitored</span>
                    <span className="text-destructive font-medium">847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Wallet Leaks Found</span>
                    <span className="text-accent font-medium">12,847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New Breaches (24h)</span>
                    <span className="text-destructive font-medium">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <AlertTriangle className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent"
                  >
                    Scanning
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Malware & Exploit Tracking
                </CardTitle>
                <CardDescription>
                  Track crypto phishing kits, malware campaigns, and exploit
                  development in underground forums
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Phishing Kits</span>
                    <span className="text-destructive font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Campaigns</span>
                    <span className="text-accent font-medium">89</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New Exploits</span>
                    <span className="text-destructive font-medium">34</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Globe className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary"
                  >
                    Live
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Marketplace Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time surveillance of darknet marketplaces for stolen
                  digital assets and financial instruments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Marketplaces</span>
                    <span className="text-primary font-medium">67</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Listings Tracked</span>
                    <span className="text-accent font-medium">45,789</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Crypto Assets Listed</span>
                    <span className="text-destructive font-medium">2,456</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Users className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent"
                  >
                    Monitoring
                  </Badge>
                </div>
                <CardTitle className="text-xl">Forum Intelligence</CardTitle>
                <CardDescription>
                  Track threat actor discussions, technique sharing, and
                  emerging attack planning across underground forums
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Forums Monitored</span>
                    <span className="text-accent font-medium">247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Threat Actors</span>
                    <span className="text-destructive font-medium">8,923</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Posts Analyzed</span>
                    <span className="text-primary font-medium">1.2M</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <TrendingUp className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary"
                  >
                    AI-Powered
                  </Badge>
                </div>
                <CardTitle className="text-xl">Scam Domain Detection</CardTitle>
                <CardDescription>
                  AI-powered detection of fake exchanges, phishing sites, and
                  fraudulent DeFi frontends targeting crypto users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Domains Scanned</span>
                    <span className="text-primary font-medium">2.8M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Scam Sites Found</span>
                    <span className="text-destructive font-medium">12,847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Takedown Success</span>
                    <span className="text-accent font-medium">89.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-warning/20 hover:border-warning/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Lock className="w-8 h-8 text-warning group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-warning/20 text-warning"
                  >
                    Gemini-AI
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Crypto Threat Analysis
                </CardTitle>
                <CardDescription>
                  Gemini AI-enhanced detection of wallet compromises, DeFi
                  exploits, and blockchain-specific attack vectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Wallet Compromises</span>
                    <span className="text-destructive font-medium">456</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>DeFi Exploits</span>
                    <span className="text-destructive font-medium">78</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Prevention Rate</span>
                    <span className="text-accent font-medium">94.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Darknet Intelligence Interface */}
      <section className="py-24 bg-gradient-to-r from-card/20 to-card/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Darknet Intelligence Console
              </h2>
              <p className="text-xl text-muted-foreground">
                Search darknet databases, monitor threat actor communications,
                and investigate digital asset compromises
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Search Interface */}
              <div className="lg:col-span-2">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-primary" />
                      Intelligence Search Console
                    </CardTitle>
                    <CardDescription>
                      Search across credential databases, forums, marketplaces,
                      and exploit repositories
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label
                        htmlFor="search-input"
                        className="block text-sm font-medium mb-2"
                      >
                        Search Query (Email, Domain, Wallet Address, Username,
                        etc.)
                      </label>
                      <Input
                        id="search-input"
                        placeholder="e.g., binance.com, wallet:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa, user@example.com"
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>

                    {/* Intelligence Type Filters */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Intelligence Type Filters
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          {
                            label: "Credentials",
                            count: "2.4M",
                            color: "destructive",
                          },
                          { label: "Malware", count: "156K", color: "accent" },
                          {
                            label: "Marketplace",
                            count: "89K",
                            color: "primary",
                          },
                          { label: "Forum", count: "1.2M", color: "warning" },
                        ].map((filter, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            className={`justify-between h-auto py-3 border-${filter.color}/20 hover:bg-${filter.color}/10`}
                          >
                            <span className="text-sm">{filter.label}</span>
                            <Badge variant="secondary" className="text-xs">
                              {filter.count}
                            </Badge>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Time Range
                        </label>
                        <select className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary text-foreground">
                          <option>Last 24 hours</option>
                          <option>Last 7 days</option>
                          <option>Last 30 days</option>
                          <option>Last 90 days</option>
                          <option>All time</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Risk Level
                        </label>
                        <select className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary text-foreground">
                          <option>All Levels</option>
                          <option>High Risk</option>
                          <option>Medium Risk</option>
                          <option>Low Risk</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Source Reliability
                        </label>
                        <select className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary text-foreground">
                          <option>All Sources</option>
                          <option>Verified Only</option>
                          <option>High Confidence</option>
                          <option>Medium Confidence</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        <Zap className="w-4 h-4 mr-2" />
                        Search Intelligence
                      </Button>
                      <Button
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent/10"
                      >
                        <Activity className="w-4 h-4 mr-2" />
                        Live Monitor
                      </Button>
                      <Button
                        variant="outline"
                        className="border-warning text-warning hover:bg-warning/10"
                      >
                        Advanced Query
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Search Analytics & Alert Rules */}
              <div className="space-y-6">
                {/* Search Analytics */}
                <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-accent" />
                      Search Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Today's Searches
                          </span>
                          <span className="text-sm font-medium">2,847</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Total Hits
                          </span>
                          <span className="text-sm font-medium text-destructive">
                            156,789
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            New Records (24h)
                          </span>
                          <span className="text-sm font-medium text-accent">
                            4,567
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-primary/20 pt-4">
                        <h4 className="text-sm font-medium mb-3">
                          Top Search Terms
                        </h4>
                        <div className="space-y-2">
                          {[
                            { term: "crypto wallet", hits: "12.4K" },
                            { term: "binance", hits: "8.9K" },
                            { term: "metamask", hits: "6.7K" },
                            { term: "coinbase", hits: "5.2K" },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between text-xs"
                            >
                              <span className="text-muted-foreground">
                                {item.term}
                              </span>
                              <span className="text-accent">{item.hits}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alert Rules */}
                <Card className="bg-card/50 backdrop-blur-sm border-warning/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning" />
                      Alert Rules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium">
                          Notify me when...
                        </h4>

                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start text-xs h-8 border-destructive/20 hover:bg-destructive/10"
                          >
                            + My domain appears in breach
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start text-xs h-8 border-accent/20 hover:bg-accent/10"
                          >
                            + Wallet address leaked
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start text-xs h-8 border-primary/20 hover:bg-primary/10"
                          >
                            + New phishing kit found
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start text-xs h-8 border-warning/20 hover:bg-warning/10"
                          >
                            + Threat actor mentions company
                          </Button>
                        </div>
                      </div>

                      <div className="border-t border-primary/20 pt-4">
                        <h4 className="text-sm font-medium mb-3">
                          Active Alerts (3)
                        </h4>
                        <div className="space-y-2">
                          {[
                            {
                              text: "Domain monitoring",
                              status: "active",
                              color: "accent",
                            },
                            {
                              text: "Credential leaks",
                              status: "triggered",
                              color: "destructive",
                            },
                            {
                              text: "Threat mentions",
                              status: "active",
                              color: "primary",
                            },
                          ].map((alert, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between text-xs"
                            >
                              <span className="text-muted-foreground">
                                {alert.text}
                              </span>
                              <Badge
                                variant={
                                  alert.status === "triggered"
                                    ? "destructive"
                                    : "secondary"
                                }
                                className="text-xs"
                              >
                                {alert.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Gemini AI Crypto Boost */}
                <Card className="bg-card/50 backdrop-blur-sm border-warning/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Zap className="w-4 h-4 text-warning" />
                      Gemini AI Boost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-xs text-muted-foreground">
                        Enhanced with Gemini AI for crypto-specific threat
                        detection
                      </p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">
                            Wallet Leaks Detected
                          </span>
                          <span className="text-destructive font-medium">
                            1,247
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">
                            Phishing Kits Found
                          </span>
                          <span className="text-destructive font-medium">
                            89
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">
                            Scam Domains
                          </span>
                          <span className="text-destructive font-medium">
                            456
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">
                            DeFi Exploits
                          </span>
                          <span className="text-destructive font-medium">
                            23
                          </span>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        className="w-full bg-warning hover:bg-warning/90 text-warning-foreground"
                      >
                        Enhanced Crypto Scan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Status */}
      <section className="py-16 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <div className="text-2xl font-bold text-primary">99.97%</div>
              <div className="text-muted-foreground">System Uptime</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <div className="text-2xl font-bold text-accent">156ms</div>
              <div className="text-muted-foreground">Avg Response</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-4" />
              <div className="text-2xl font-bold text-primary">247</div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="w-12 h-12 text-accent mb-4" />
              <div className="text-2xl font-bold text-accent">Zero</div>
              <div className="text-muted-foreground">Data Breaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-primary/20 bg-card/20">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Dark Gemini Intelligence
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Advanced AI-powered digital asset security platform providing
                real-time threat detection, predictive analytics, and
                quantum-resilient protection for blockchain infrastructure, DeFi
                protocols, and institutional digital asset operations.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  Powered by{" "}
                  <a
                    href="https://gemini.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    Gemini AI Technology
                  </a>
                </div>
                <div className="text-xs text-muted-foreground">
                  Enterprise-grade security • SOC2 Certified • 99.9% Uptime SLA
                </div>
              </div>
            </div>

            {/* Digital Asset Security */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                Digital Asset Security
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/threat-detection"
                    className="hover:text-primary transition"
                  >
                    Threat Detection AI
                  </a>
                </li>
                <li>
                  <a
                    href="/wallet-monitoring"
                    className="hover:text-primary transition"
                  >
                    Wallet Monitoring
                  </a>
                </li>
                <li>
                  <a
                    href="/smart-contract-auditing"
                    className="hover:text-primary transition"
                  >
                    Smart Contract Auditing
                  </a>
                </li>
                <li>
                  <a
                    href="/defi-protection"
                    className="hover:text-primary transition"
                  >
                    DeFi Protocol Protection
                  </a>
                </li>
                <li>
                  <a
                    href="/bridge-security"
                    className="hover:text-primary transition"
                  >
                    Cross-Chain Bridge Security
                  </a>
                </li>
                <li>
                  <a
                    href="/nft-authentication"
                    className="hover:text-primary transition"
                  >
                    NFT Authentication
                  </a>
                </li>
              </ul>
            </div>

            {/* AI Analytics */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                AI-Driven Analytics
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/predictive-modeling"
                    className="hover:text-primary transition"
                  >
                    Predictive Threat Modeling
                  </a>
                </li>
                <li>
                  <a
                    href="/behavioral-analysis"
                    className="hover:text-primary transition"
                  >
                    Behavioral Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="/pattern-recognition"
                    className="hover:text-primary transition"
                  >
                    Pattern Recognition
                  </a>
                </li>
                <li>
                  <a
                    href="/risk-scoring"
                    className="hover:text-primary transition"
                  >
                    Dynamic Risk Scoring
                  </a>
                </li>
                <li>
                  <a
                    href="/anomaly-detection"
                    className="hover:text-primary transition"
                  >
                    Anomaly Detection
                  </a>
                </li>
                <li>
                  <a
                    href="/market-manipulation"
                    className="hover:text-primary transition"
                  >
                    Market Manipulation Detection
                  </a>
                </li>
              </ul>
            </div>

            {/* Enterprise Solutions */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                Enterprise Solutions
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/institutional-custody"
                    className="hover:text-primary transition"
                  >
                    Institutional Custody
                  </a>
                </li>
                <li>
                  <a
                    href="/compliance-automation"
                    className="hover:text-primary transition"
                  >
                    Compliance Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/incident-response"
                    className="hover:text-primary transition"
                  >
                    Incident Response
                  </a>
                </li>
                <li>
                  <a
                    href="/forensic-analysis"
                    className="hover:text-primary transition"
                  >
                    Digital Forensics
                  </a>
                </li>
                <li>
                  <a
                    href="/asset-recovery"
                    className="hover:text-primary transition"
                  >
                    Asset Recovery Services
                  </a>
                </li>
                <li>
                  <a
                    href="/white-label"
                    className="hover:text-primary transition"
                  >
                    White-Label Solutions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="border-t border-primary/20 pt-8 mb-8">
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Technology Stack & Integrations
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
              <div>
                <div className="font-medium text-foreground mb-2">
                  Blockchain Networks
                </div>
                <div>
                  Ethereum • Bitcoin • Polygon • Arbitrum • Optimism • Avalanche
                  • Solana • Cosmos
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-2">
                  AI & Machine Learning
                </div>
                <div>
                  Large Language Models • Computer Vision • Neural Networks •
                  Deep Learning • NLP
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-2">
                  Security Protocols
                </div>
                <div>
                  Zero-Knowledge Proofs • Multi-Signature • Hardware Security
                  Modules • Quantum Cryptography
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-2">
                  Compliance Standards
                </div>
                <div>
                  SOC2 • ISO27001 • GDPR • CCPA • AML • KYC • FATF • MiCA
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="border-t border-primary/20 pt-8 mb-8">
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Digital Asset Security Use Cases
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-medium text-foreground mb-2">
                  Institutional Clients
                </div>
                <div>
                  Hedge Funds • Family Offices • Investment Banks • Pension
                  Funds • Insurance Companies • Central Banks
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-2">
                  DeFi & Web3
                </div>
                <div>
                  DEX Protocols • Lending Platforms • Yield Farming • Liquidity
                  Pools • DAOs • DeFi Aggregators
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-2">
                  Infrastructure Providers
                </div>
                <div>
                  Custodians • Exchanges • Wallet Providers • Payment Processors
                  • Node Operators • Validators
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="border-t border-primary/20 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                &copy; 2025 Dark Gemini Labs. All rights reserved. •
                <a
                  href="/privacy"
                  className="hover:text-primary transition ml-1"
                >
                  Privacy Policy
                </a>{" "}
                •
                <a href="/terms" className="hover:text-primary transition ml-1">
                  Terms of Service
                </a>{" "}
                •
                <a
                  href="/security"
                  className="hover:text-primary transition ml-1"
                >
                  Security
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                Enterprise Digital Asset Security Platform • 24/7 Global
                Operations • intelligence@darkgemini.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
