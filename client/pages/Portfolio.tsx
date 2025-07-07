import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Shield,
  AlertTriangle,
  Eye,
  Plus,
  DollarSign,
} from "lucide-react";

interface Asset {
  id: string;
  symbol: string;
  name: string;
  balance: number;
  value_usd: number;
  risk_score: number;
  blockchain: string;
  change_24h: number;
  last_activity: Date;
}

interface Portfolio {
  total_value: number;
  total_risk_score: number;
  assets: Asset[];
  protected_value: number;
}

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState<Portfolio>({
    total_value: 0,
    total_risk_score: 0,
    assets: [],
    protected_value: 0,
  });
  const [newWallet, setNewWallet] = useState("");

  useEffect(() => {
    // Simulate portfolio data
    const mockAssets: Asset[] = [
      {
        id: "1",
        symbol: "ETH",
        name: "Ethereum",
        balance: 156.7,
        value_usd: 387420,
        risk_score: 15,
        blockchain: "Ethereum",
        change_24h: 2.4,
        last_activity: new Date(Date.now() - 3600000),
      },
      {
        id: "2",
        symbol: "BTC",
        name: "Bitcoin",
        balance: 8.92,
        value_usd: 892000,
        risk_score: 8,
        blockchain: "Bitcoin",
        change_24h: -1.2,
        last_activity: new Date(Date.now() - 7200000),
      },
      {
        id: "3",
        symbol: "USDC",
        name: "USD Coin",
        balance: 245000,
        value_usd: 245000,
        risk_score: 5,
        blockchain: "Ethereum",
        change_24h: 0.1,
        last_activity: new Date(Date.now() - 1800000),
      },
      {
        id: "4",
        symbol: "MATIC",
        name: "Polygon",
        balance: 125000,
        value_usd: 156000,
        risk_score: 25,
        blockchain: "Polygon",
        change_24h: 5.7,
        last_activity: new Date(Date.now() - 900000),
      },
    ];

    const totalValue = mockAssets.reduce(
      (sum, asset) => sum + asset.value_usd,
      0,
    );
    const avgRiskScore = Math.round(
      mockAssets.reduce((sum, asset) => sum + asset.risk_score, 0) /
        mockAssets.length,
    );

    setPortfolio({
      total_value: totalValue,
      total_risk_score: avgRiskScore,
      assets: mockAssets,
      protected_value: totalValue * 0.97, // 97% protected
    });

    // Simulate real-time updates
    const interval = setInterval(() => {
      setPortfolio((prev) => ({
        ...prev,
        assets: prev.assets.map((asset) => ({
          ...asset,
          value_usd: asset.value_usd * (1 + (Math.random() - 0.5) * 0.02),
          change_24h: asset.change_24h + (Math.random() - 0.5) * 0.5,
          risk_score: Math.max(
            0,
            Math.min(100, asset.risk_score + (Math.random() - 0.5) * 2),
          ),
        })),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (score: number) => {
    if (score < 20) return "text-accent";
    if (score < 50) return "text-yellow-500";
    return "text-destructive";
  };

  const getRiskBadge = (score: number) => {
    if (score < 20) return { variant: "secondary", label: "Low Risk" };
    if (score < 50) return { variant: "default", label: "Medium Risk" };
    return { variant: "destructive", label: "High Risk" };
  };

  return (
    <div className="pl-64 min-h-screen bg-gradient-to-br from-background via-gemini-dark to-gemini-deep">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Asset Portfolio
          </h1>
          <p className="text-muted-foreground">
            Cross-chain asset tracking and risk monitoring
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Total Portfolio Value
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    ${portfolio.total_value.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Protected Value
                  </p>
                  <p className="text-3xl font-bold text-accent">
                    ${portfolio.protected_value.toLocaleString()}
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
                    Average Risk Score
                  </p>
                  <p
                    className={`text-3xl font-bold ${getRiskColor(portfolio.total_risk_score)}`}
                  >
                    {portfolio.total_risk_score}/100
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
                    Assets Tracked
                  </p>
                  <p className="text-3xl font-bold text-accent">
                    {portfolio.assets.length}
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Asset List */}
          <div className="xl:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Asset Holdings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolio.assets.map((asset) => {
                    const riskBadge = getRiskBadge(asset.risk_score);
                    return (
                      <div
                        key={asset.id}
                        className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="font-bold text-primary">
                              {asset.symbol[0]}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">
                              {asset.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {asset.balance.toLocaleString()} {asset.symbol} •{" "}
                              {asset.blockchain}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-medium text-foreground">
                            ${asset.value_usd.toLocaleString()}
                          </p>
                          <div className="flex items-center gap-2 justify-end mt-1">
                            <div
                              className={`flex items-center gap-1 text-sm ${
                                asset.change_24h >= 0
                                  ? "text-accent"
                                  : "text-destructive"
                              }`}
                            >
                              {asset.change_24h >= 0 ? (
                                <TrendingUp className="w-3 h-3" />
                              ) : (
                                <TrendingDown className="w-3 h-3" />
                              )}
                              {Math.abs(asset.change_24h).toFixed(1)}%
                            </div>
                            <Badge
                              variant={riskBadge.variant as any}
                              className="text-xs"
                            >
                              {riskBadge.label}
                            </Badge>
                          </div>
                        </div>

                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Analyze
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Add Wallet */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Add Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    value={newWallet}
                    onChange={(e) => setNewWallet(e.target.value)}
                    placeholder="Enter wallet address..."
                  />
                  <Button className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Track Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Low Risk Assets
                    </span>
                    <span className="text-sm font-medium text-accent">
                      {portfolio.assets.filter((a) => a.risk_score < 20).length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Medium Risk Assets
                    </span>
                    <span className="text-sm font-medium text-yellow-500">
                      {
                        portfolio.assets.filter(
                          (a) => a.risk_score >= 20 && a.risk_score < 50,
                        ).length
                      }
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      High Risk Assets
                    </span>
                    <span className="text-sm font-medium text-destructive">
                      {
                        portfolio.assets.filter((a) => a.risk_score >= 50)
                          .length
                      }
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Actions */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Security Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="w-4 h-4 mr-2" />
                    Enable Monitoring
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Set Risk Alerts
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {portfolio.assets.slice(0, 3).map((asset) => (
                    <div key={asset.id} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {asset.symbol} activity
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {asset.last_activity.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
