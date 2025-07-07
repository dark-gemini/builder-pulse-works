import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  TrendingUp,
  Shield,
  AlertTriangle,
  BarChart3,
  Globe,
  Users,
  Clock,
} from "lucide-react";

interface AnalyticsData {
  threat_trends: { date: string; count: number; severity: number }[];
  network_stats: { name: string; threats: number; uptime: number }[];
  performance_metrics: {
    response_time: number;
    accuracy: number;
    threats_blocked: number;
    false_positives: number;
  };
}

export default function Analytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    threat_trends: [],
    network_stats: [],
    performance_metrics: {
      response_time: 2.3,
      accuracy: 94.7,
      threats_blocked: 1247,
      false_positives: 12,
    },
  });
  const [timeRange, setTimeRange] = useState("24h");

  useEffect(() => {
    // Generate mock analytics data
    const generateThreatTrends = () => {
      const trends = [];
      for (let i = 23; i >= 0; i--) {
        trends.push({
          date: new Date(Date.now() - i * 3600000).toLocaleTimeString([], {
            hour: "2-digit",
          }),
          count: Math.floor(Math.random() * 50) + 10,
          severity: Math.floor(Math.random() * 100),
        });
      }
      return trends;
    };

    const networkStats = [
      { name: "Ethereum", threats: 156, uptime: 99.7 },
      { name: "Bitcoin", threats: 89, uptime: 99.9 },
      { name: "Polygon", threats: 203, uptime: 99.2 },
      { name: "Arbitrum", threats: 67, uptime: 99.8 },
      { name: "Optimism", threats: 45, uptime: 99.6 },
      { name: "Avalanche", threats: 78, uptime: 99.4 },
    ];

    setAnalytics({
      threat_trends: generateThreatTrends(),
      network_stats: networkStats,
      performance_metrics: {
        response_time: 2.3 + (Math.random() - 0.5) * 0.5,
        accuracy: 94.7 + (Math.random() - 0.5) * 2,
        threats_blocked: 1247 + Math.floor(Math.random() * 100),
        false_positives: 12 + Math.floor(Math.random() * 5),
      },
    });

    // Real-time updates
    const interval = setInterval(() => {
      setAnalytics((prev) => ({
        ...prev,
        threat_trends: prev.threat_trends.map((trend, idx) =>
          idx === prev.threat_trends.length - 1
            ? { ...trend, count: Math.floor(Math.random() * 50) + 10 }
            : trend,
        ),
        performance_metrics: {
          ...prev.performance_metrics,
          response_time: 2.3 + (Math.random() - 0.5) * 0.5,
          threats_blocked:
            prev.performance_metrics.threats_blocked +
            Math.floor(Math.random() * 3),
        },
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [timeRange]);

  const timeRanges = ["1h", "24h", "7d", "30d"];

  return (
    <div className="pl-64 min-h-screen bg-gradient-to-br from-background via-gemini-dark to-gemini-deep">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Security Analytics
            </h1>
            <p className="text-muted-foreground">
              Comprehensive threat intelligence and performance metrics
            </p>
          </div>

          <div className="flex gap-2">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Response Time</p>
                  <p className="text-3xl font-bold text-accent">
                    {analytics.performance_metrics.response_time.toFixed(1)}s
                  </p>
                </div>
                <Clock className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Detection Accuracy
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {analytics.performance_metrics.accuracy.toFixed(1)}%
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
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
                  <p className="text-3xl font-bold text-accent">
                    {analytics.performance_metrics.threats_blocked.toLocaleString()}
                  </p>
                </div>
                <Shield className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    False Positives
                  </p>
                  <p className="text-3xl font-bold text-destructive">
                    {analytics.performance_metrics.false_positives}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Threat Trends Chart */}
          <div className="xl:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Threat Detection Trends
                  <Badge variant="secondary" className="ml-auto">
                    Live
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Simple ASCII chart simulation */}
                <div className="h-64 relative">
                  <div className="grid grid-cols-12 gap-1 h-full">
                    {analytics.threat_trends.slice(-12).map((trend, idx) => {
                      const height = (trend.count / 60) * 100;
                      const severity = trend.severity;
                      return (
                        <div key={idx} className="flex flex-col justify-end">
                          <div
                            className={`w-full rounded-t transition-all duration-500 ${
                              severity > 70
                                ? "bg-destructive"
                                : severity > 40
                                  ? "bg-yellow-500"
                                  : "bg-accent"
                            }`}
                            style={{ height: `${height}%` }}
                            title={`${trend.count} threats at ${trend.date}`}
                          />
                          <span className="text-xs text-muted-foreground text-center mt-2">
                            {trend.date}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
                    <span>60</span>
                    <span>45</span>
                    <span>30</span>
                    <span>15</span>
                    <span>0</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded" />
                    <span className="text-muted-foreground">Low Severity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded" />
                    <span className="text-muted-foreground">
                      Medium Severity
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded" />
                    <span className="text-muted-foreground">High Severity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Network Statistics */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent" />
                  Network Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.network_stats.map((network) => (
                    <div key={network.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {network.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            {network.threats} threats
                          </span>
                          <Badge
                            variant={
                              network.uptime > 99.5
                                ? "secondary"
                                : "destructive"
                            }
                            className="text-xs"
                          >
                            {network.uptime}%
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            network.uptime > 99.5
                              ? "bg-accent"
                              : "bg-destructive"
                          }`}
                          style={{ width: `${network.uptime}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Threats */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Top Threat Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: "Flash Loan Attacks", count: 89, trend: "+12%" },
                    { type: "Bridge Exploits", count: 67, trend: "-5%" },
                    { type: "Phishing Contracts", count: 156, trend: "+23%" },
                    { type: "MEV Exploitation", count: 234, trend: "+8%" },
                    { type: "Governance Attacks", count: 34, trend: "-2%" },
                  ].map((threat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-medium">{threat.type}</p>
                        <p className="text-xs text-muted-foreground">
                          {threat.count} detected
                        </p>
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          threat.trend.startsWith("+")
                            ? "text-destructive"
                            : "text-accent"
                        }`}
                      >
                        {threat.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="w-4 h-4 text-primary" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Security Analysts
                  </span>
                  <span className="text-sm font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    API Integrations
                  </span>
                  <span className="text-sm font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    AI Queries/Hour
                  </span>
                  <span className="text-sm font-medium">2,847</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="w-4 h-4 text-accent" />
                Protection Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Assets Protected
                  </span>
                  <span className="text-sm font-medium">$47.2B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Coverage Rate
                  </span>
                  <span className="text-sm font-medium">97.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Incidents Prevented
                  </span>
                  <span className="text-sm font-medium">1,247</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="w-4 h-4 text-primary" />
                Performance Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">94.7</div>
                <p className="text-sm text-muted-foreground">
                  Overall Security Score
                </p>
                <div className="mt-4 w-full bg-secondary rounded-full h-2">
                  <div
                    className="h-2 bg-primary rounded-full transition-all duration-500"
                    style={{ width: "94.7%" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
