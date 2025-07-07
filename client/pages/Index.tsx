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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quantum Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real-time threat detection and predictive security analytics for
              next-generation crypto infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Eye className="w-5 h-5 mr-2" />
                Access Intelligence Dashboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
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
              Intelligence Operations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-driven modules for comprehensive threat detection and
              asset protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary"
                  >
                    Active
                  </Badge>
                </div>
                <CardTitle className="text-xl">Cross-Chain Sentinel</CardTitle>
                <CardDescription>
                  Real-time monitoring across 40+ blockchain networks with
                  predictive threat modeling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Networks Monitored</span>
                    <span className="text-primary font-medium">42</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Threats Detected</span>
                    <span className="text-accent font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Response Time</span>
                    <span className="text-primary font-medium">&lt;2.3s</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Zap className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent"
                  >
                    Processing
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Quantum Prediction Engine
                </CardTitle>
                <CardDescription>
                  AI-powered threat prediction with 94.7% accuracy in attack
                  vector identification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Prediction Accuracy</span>
                    <span className="text-accent font-medium">94.7%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Models Running</span>
                    <span className="text-primary font-medium">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Data Points</span>
                    <span className="text-accent font-medium">2.8M/sec</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Lock className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary"
                  >
                    Secure
                  </Badge>
                </div>
                <CardTitle className="text-xl">Asset Recovery Matrix</CardTitle>
                <CardDescription>
                  Automated forensic analysis and recovery protocols for
                  compromised digital assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Recovery Rate</span>
                    <span className="text-primary font-medium">87.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Cases</span>
                    <span className="text-accent font-medium">23</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Assets Recovered</span>
                    <span className="text-primary font-medium">$156M</span>
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
                    className="bg-destructive/20 text-destructive"
                  >
                    Alert
                  </Badge>
                </div>
                <CardTitle className="text-xl">Dark Web Intelligence</CardTitle>
                <CardDescription>
                  Deep monitoring of underground markets and threat actor
                  communications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Sources Monitored</span>
                    <span className="text-accent font-medium">347</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Intel Reports</span>
                    <span className="text-primary font-medium">89/day</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Threat Actors</span>
                    <span className="text-destructive font-medium">1,892</span>
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
                    Analyzing
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Market Manipulation Detection
                </CardTitle>
                <CardDescription>
                  Advanced algorithms detecting pump-and-dump schemes and
                  coordinated attacks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Markets Tracked</span>
                    <span className="text-primary font-medium">2,456</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Manipulations Detected</span>
                    <span className="text-destructive font-medium">34</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Prevention Rate</span>
                    <span className="text-accent font-medium">91.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Globe className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent"
                  >
                    Global
                  </Badge>
                </div>
                <CardTitle className="text-xl">Compliance Automation</CardTitle>
                <CardDescription>
                  Real-time regulatory compliance across 67 jurisdictions with
                  automated reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Jurisdictions</span>
                    <span className="text-accent font-medium">67</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Compliance Score</span>
                    <span className="text-primary font-medium">98.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Auto Reports</span>
                    <span className="text-accent font-medium">247/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Threat Analysis Interface */}
      <section className="py-24 bg-gradient-to-r from-card/20 to-card/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Threat Analysis Interface
              </h2>
              <p className="text-xl text-muted-foreground">
                Submit transaction hashes, wallet addresses, or suspicious
                activity for real-time AI analysis
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Intelligence Analysis Console
                </CardTitle>
                <CardDescription>
                  Input data for comprehensive threat assessment and risk
                  scoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label
                    htmlFor="threat-input"
                    className="block text-sm font-medium mb-2"
                  >
                    Transaction Data / Wallet Address / Suspicious Activity
                  </label>
                  <Textarea
                    id="threat-input"
                    placeholder="Enter transaction hash, wallet address, or describe suspicious activity..."
                    className="min-h-32 bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="analysis-type"
                      className="block text-sm font-medium mb-2"
                    >
                      Analysis Type
                    </label>
                    <select
                      id="analysis-type"
                      className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary text-foreground"
                    >
                      <option>Comprehensive Scan</option>
                      <option>Quick Assessment</option>
                      <option>Deep Forensics</option>
                      <option>Pattern Recognition</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="priority"
                      className="block text-sm font-medium mb-2"
                    >
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary text-foreground"
                    >
                      <option>Standard</option>
                      <option>High</option>
                      <option>Critical</option>
                      <option>Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Zap className="w-4 h-4 mr-2" />
                    Analyze Threat
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Live Monitor
                  </Button>
                  <Button variant="outline" className="border-primary/50">
                    Load Sample Data
                  </Button>
                </div>
              </CardContent>
            </Card>
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
      <footer className="py-12 border-t border-primary/20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Dark Gemini
              </h3>
              <p className="text-muted-foreground text-sm">
                Next-generation crypto security intelligence platform powered by
                quantum AI technology.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Intelligence</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Threat Detection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Asset Recovery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Dark Web Intel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    API Access
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>intelligence@darkgemini.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Emergency Response</li>
                <li>Global Operations</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2025 Dark Gemini Labs. All rights reserved. Quantum-secured
              intelligence platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
