import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Send,
  Bot,
  User,
  Zap,
  Eye,
  Shield,
  Upload,
  Search,
  TrendingUp,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  analysis?: {
    risk_score: number;
    threat_type: string;
    recommendations: string[];
  };
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hello! I'm your AI Security Analyst. I can help you analyze threats, investigate suspicious activity, and provide security recommendations. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();

    // Simulate AI analysis based on input
    let content = "";
    let analysis = undefined;

    if (
      lowerMessage.includes("0x") ||
      lowerMessage.includes("wallet") ||
      lowerMessage.includes("address")
    ) {
      const riskScore = Math.floor(Math.random() * 100);
      const threatTypes = [
        "Phishing",
        "Money Laundering",
        "MEV Bot",
        "Flash Loan Attack",
        "Bridge Exploit",
      ];
      const threatType =
        threatTypes[Math.floor(Math.random() * threatTypes.length)];

      content = `I've analyzed the wallet address you provided. Based on on-chain behavior patterns and cross-referencing with known threat databases, here's what I found:`;

      analysis = {
        risk_score: riskScore,
        threat_type: threatType,
        recommendations: [
          riskScore > 70
            ? "❌ HIGH RISK - Recommend blocking this address"
            : "✅ LOW RISK - Address appears clean",
          "Monitor for large transaction volumes",
          "Check recent transaction patterns",
          "Cross-reference with known exploit databases",
        ],
      };
    } else if (
      lowerMessage.includes("flash loan") ||
      lowerMessage.includes("exploit")
    ) {
      content = `Flash loan attacks are a significant threat vector. I've detected ${Math.floor(Math.random() * 50)} potential flash loan exploits in the last 24 hours. Key indicators include:\n\n• Large borrowing followed by immediate repayment\n• Price manipulation patterns\n• Unusual arbitrage activities\n• Smart contract vulnerabilities`;
    } else if (
      lowerMessage.includes("bridge") ||
      lowerMessage.includes("cross-chain")
    ) {
      content = `Cross-chain bridge security is critical. Current threat landscape shows:\n\n• 12 active bridge monitoring systems\n• 3 potential vulnerabilities detected this week\n• $2.1B in bridge TVL under protection\n• 99.7% uptime across all monitored bridges`;
    } else if (
      lowerMessage.includes("defi") ||
      lowerMessage.includes("protocol")
    ) {
      content = `DeFi protocol analysis shows current market conditions:\n\n• 156 protocols under active monitoring\n• 23 new vulnerability signatures detected\n• Average response time: 2.3 seconds\n• 94.7% threat prediction accuracy`;
    } else if (
      lowerMessage.includes("market") ||
      lowerMessage.includes("manipulation")
    ) {
      content = `Market manipulation detection systems are tracking:\n\n• 2,456 trading pairs across 47 exchanges\n• 89 potential pump-and-dump schemes flagged\n• $47M in suspicious volume detected\n• 91.2% prevention rate for confirmed manipulations`;
    } else {
      const responses = [
        "I can help you analyze blockchain transactions, investigate wallet addresses, and identify potential security threats. What specific security concern would you like me to examine?",
        "My threat detection models are trained on the latest attack vectors. Would you like me to analyze a specific transaction hash or wallet address?",
        "I have access to real-time threat intelligence across 42 blockchain networks. How can I assist with your security analysis?",
        "I can provide risk assessments for smart contracts, wallet addresses, and transaction patterns. What would you like me to investigate?",
      ];
      content = responses[Math.floor(Math.random() * responses.length)];
    }

    return {
      id: Math.random().toString(36).substr(2, 9),
      type: "ai",
      content,
      timestamp: new Date(),
      analysis,
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const quickActions = [
    { label: "Analyze wallet address", icon: Search },
    { label: "Check transaction hash", icon: Eye },
    { label: "Scan for exploits", icon: Shield },
    { label: "Market analysis", icon: TrendingUp },
  ];

  return (
    <div className="pl-64 min-h-screen bg-gradient-to-br from-background via-gemini-dark to-gemini-deep">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI Security Analyst
          </h1>
          <p className="text-muted-foreground">
            Intelligent digital asset threat analysis and security
            recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="xl:col-span-3">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-[700px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  Dark Gemini AI
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent"
                  >
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-accent-foreground"
                          }`}
                        >
                          {message.type === "user" ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>

                        <div
                          className={`p-4 rounded-lg ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          <p className="whitespace-pre-line">
                            {message.content}
                          </p>

                          {message.analysis && (
                            <div className="mt-4 p-3 bg-background/50 rounded-lg space-y-2">
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                <span className="font-medium">
                                  Threat Analysis
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">
                                    Risk Score:
                                  </span>
                                  <span
                                    className={`ml-2 font-bold ${
                                      message.analysis.risk_score > 70
                                        ? "text-destructive"
                                        : message.analysis.risk_score > 40
                                          ? "text-yellow-500"
                                          : "text-accent"
                                    }`}
                                  >
                                    {message.analysis.risk_score}/100
                                  </span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">
                                    Threat Type:
                                  </span>
                                  <span className="ml-2 font-medium">
                                    {message.analysis.threat_type}
                                  </span>
                                </div>
                              </div>

                              <div>
                                <span className="text-muted-foreground text-sm">
                                  Recommendations:
                                </span>
                                <ul className="mt-1 space-y-1">
                                  {message.analysis.recommendations.map(
                                    (rec, idx) => (
                                      <li key={idx} className="text-sm">
                                        {rec}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            </div>
                          )}

                          <span className="text-xs opacity-70 block mt-2">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-accent rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-accent rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <span className="text-sm text-muted-foreground ml-2">
                            AI is analyzing...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about threats, analyze addresses, or request security insights..."
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} disabled={isLoading}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickActions.map((action, idx) => {
                    const Icon = action.icon;
                    return (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-start gap-2"
                        onClick={() => setInput(action.label)}
                      >
                        <Icon className="w-4 h-4" />
                        {action.label}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Upload for Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Upload Transaction Data
                  </Button>

                  <Textarea
                    placeholder="Paste wallet addresses, transaction hashes, or contract addresses..."
                    className="min-h-24"
                  />

                  <Button className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Analyze
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">AI Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Accuracy
                    </span>
                    <span className="text-sm font-medium">94.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Response Time
                    </span>
                    <span className="text-sm font-medium">1.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Queries Today
                    </span>
                    <span className="text-sm font-medium">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Threats Identified
                    </span>
                    <span className="text-sm font-medium">156</span>
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
