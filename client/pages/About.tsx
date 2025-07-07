import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  Lock,
  Zap,
} from "lucide-react";

export default function About() {
  return (
    <div className="pl-64 min-h-screen bg-gradient-to-br from-background via-gemini-dark to-gemini-deep">
      <div className="p-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                About DarkIntel
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional Threat Intelligence Platform
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mission */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DarkIntel provides security teams with real-time visibility
                  into underground threat activities. We monitor the dark web's
                  most active forums, marketplaces, and communication channels
                  to deliver actionable intelligence before threats impact your
                  organization.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Built by cybersecurity professionals, our platform aggregates
                  threat intelligence from over 347 underground sources,
                  providing comprehensive coverage of credential leaks, malware
                  campaigns, and emerging attack vectors.
                </p>
              </CardContent>
            </Card>

            {/* Platform Overview */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent" />
                  Platform Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Data Sources
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 247+ Underground Forums</li>
                      <li>• 67+ Darknet Marketplaces</li>
                      <li>• 156+ Telegram Channels</li>
                      <li>• 89+ Onion Services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Intelligence Types
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Credential Databases (2.4M records)</li>
                      <li>• Malware Samples (156K signatures)</li>
                      <li>• Threat Actor Profiles (8.9K tracked)</li>
                      <li>• Exploit Intelligence (12K vectors)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology */}
            <Card className="bg-card/50 backdrop-blur-sm border-warning/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-warning" />
                  Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      AI-Powered Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Our platform uses advanced machine learning models,
                      including Gemini AI integration, to automatically classify
                      threats, identify patterns, and prioritize intelligence
                      based on relevance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Real-Time Processing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Data is collected continuously and processed in real-time,
                      with updates pushed to the dashboard within minutes of
                      discovery. Our distributed architecture ensures 99.9%
                      uptime.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Open Source Note */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Open Source & Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DarkIntel's frontend interface is open source and available
                  for security researchers and developers to contribute to. Our
                  goal is to build the most comprehensive threat intelligence
                  platform through community collaboration.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-primary/50">
                    <Globe className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button variant="outline" className="border-accent/50">
                    <Users className="w-4 h-4 mr-2" />
                    Join Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Platform Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Data Sources
                    </span>
                    <span className="text-sm font-medium text-primary">
                      347+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Records Indexed
                    </span>
                    <span className="text-sm font-medium text-accent">
                      2.4M+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Daily Updates
                    </span>
                    <span className="text-sm font-medium text-warning">
                      156K
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Uptime
                    </span>
                    <span className="text-sm font-medium text-accent">
                      99.9%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary" className="w-full justify-center">
                    SOC 2 Type II Certified
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center">
                    ISO 27001 Compliant
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center">
                    GDPR Compliant
                  </Badge>
                  <div className="text-xs text-muted-foreground text-center pt-2">
                    All data is encrypted in transit and at rest
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Policy */}
            <Card className="bg-card/50 backdrop-blur-sm border-warning/20">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Lock className="w-4 h-4 text-warning" />
                  Data Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      Data Anonymization:
                    </strong>{" "}
                    All displayed data is anonymized and sanitized for
                    demonstration purposes.
                  </p>
                  <p>
                    <strong className="text-foreground">
                      Source Protection:
                    </strong>{" "}
                    We never expose specific source locations or compromise
                    ongoing investigations.
                  </p>
                  <p>
                    <strong className="text-foreground">Ethical Use:</strong>{" "}
                    Intelligence is provided for defensive purposes only.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Contact & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Clock className="w-4 h-4 mr-2" />
                    Schedule Demo
                  </Button>
                  <div className="text-xs text-muted-foreground text-center pt-2">
                    Available 24/7 for enterprise customers
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
