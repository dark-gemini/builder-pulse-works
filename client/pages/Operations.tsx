import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Shield,
  Activity,
  Globe,
  Zap,
  Eye,
  TrendingUp,
  Clock,
} from "lucide-react";

interface ThreatEvent {
  id: string;
  type: "high" | "medium" | "low";
  title: string;
  description: string;
  timestamp: Date;
  blockchain: string;
  risk_score: number;
}

export default function Operations() {
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  const [globalThreatLevel, setGlobalThreatLevel] = useState(23);
  const [activeMonitors, setActiveMonitors] = useState(47);
  const [blockedThreats, setBlockedThreats] = useState(156);

  // Simulate real-time threat feed
  useEffect(() => {
    const generateThreat = (): ThreatEvent => {
      const types = ["high", "medium", "low"] as const;
      const blockchains = [
        "Ethereum",
        "Bitcoin",
        "Polygon",
        "Arbitrum",
        "Optimism",
      ];
      const threatTypes = [
        "Flash loan attack detected",
        "Suspicious bridge activity",
        "Market manipulation attempt",
        "Phishing contract deployed",
        "Large fund movement",
        "MEV bot exploitation",
        "Governance attack vector",
        "Cross-chain bridge exploit",
      ];

      return {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        title: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        description: `Automated detection on ${blockchains[Math.floor(Math.random() * blockchains.length)]}`,
        timestamp: new Date(),
        blockchain: blockchains[Math.floor(Math.random() * blockchains.length)],
        risk_score: Math.floor(Math.random() * 100),
      };
    };

    // Initial threats
    setThreats(Array.from({ length: 5 }, generateThreat));

    // Real-time updates
    const interval = setInterval(() => {
      setThreats((prev) => [generateThreat(), ...prev.slice(0, 9)]);
      setGlobalThreatLevel((prev) =>
        Math.max(10, Math.min(90, prev + (Math.random() - 0.5) * 5)),
      );
      setActiveMonitors((prev) =>
        Math.max(40, Math.min(50, prev + (Math.random() - 0.5) * 2)),
      );
      setBlockedThreats((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getThreatColor = (type: string) => {
    switch (type) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="pl-64 min-h-screen bg-gradient-to-br from-background via-gemini-dark to-gemini-deep">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Operations Center
          </h1>
          <p className="text-muted-foreground">
            Real-time digital asset threat monitoring and incident response
          </p>
        </div>

        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Global Threat Level
                  </p>
                  <p className="text-3xl font-bold text-destructive">
                    {Math.round(globalThreatLevel)}%
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Active Monitors
                  </p>
                  <p className="text-3xl font-bold text-accent">
                    {Math.round(activeMonitors)}
                  </p>
                </div>
                <Eye className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Threats Blocked
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {blockedThreats}
                  </p>
                </div>
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Response Time</p>
                  <p className="text-3xl font-bold text-accent">2.3s</p>
                </div>
                <Zap className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Threat Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Live Threat Feed
                  <Badge variant="secondary" className="ml-auto">
                    Real-time
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {threats.map((threat) => (
                    <div
                      key={threat.id}
                      className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
                    >
                      <Badge
                        variant={getThreatColor(threat.type) as any}
                        className="mt-1"
                      >
                        {threat.type.toUpperCase()}
                      </Badge>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground">
                          {threat.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {threat.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            {threat.blockchain}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Risk: {threat.risk_score}/100
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {threat.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Investigate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Network Status */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent" />
                  Network Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Ethereum", status: "operational", load: 87 },
                    { name: "Bitcoin", status: "operational", load: 92 },
                    { name: "Polygon", status: "warning", load: 95 },
                    { name: "Arbitrum", status: "operational", load: 78 },
                    { name: "Optimism", status: "operational", load: 83 },
                  ].map((network) => (
                    <div
                      key={network.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            network.status === "operational"
                              ? "bg-accent"
                              : "bg-destructive"
                          }`}
                        />
                        <span className="text-sm font-medium">
                          {network.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {network.load}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Emergency Stop
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="w-4 h-4 mr-2" />
                    Force Scan
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
