import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    useCase: "general",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pl-64 min-h-screen bg-gradient-to-br from-background via-gemini-dark to-gemini-deep">
      <div className="p-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Contact DarkIntel
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our threat intelligence experts
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Request Demo or Information
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you
                  within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thank you for your interest!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll be in touch within 24 hours to discuss your threat
                      intelligence needs.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Work Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company / Organization *
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Security Corp"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Use Case / Interest
                      </label>
                      <select
                        value={formData.useCase}
                        onChange={(e) =>
                          setFormData({ ...formData, useCase: e.target.value })
                        }
                        className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary text-foreground"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="demo">Schedule Demo</option>
                        <option value="enterprise">Enterprise Solution</option>
                        <option value="api">API Integration</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your threat intelligence needs, current challenges, or specific questions..."
                        rows={5}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent/10"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule Call
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our privacy policy
                      and terms of service. We'll only use your information to
                      respond to your inquiry.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Email Signup */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  Threat Intelligence Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Subscribe to receive weekly threat intelligence briefings and
                  security alerts directly in your inbox.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="security@yourcompany.com"
                    className="flex-1"
                  />
                  <Button className="bg-accent hover:bg-accent/90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Join 5,000+ security professionals receiving our intel updates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      security@darkintel.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      sales@darkintel.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-xs text-muted-foreground">
                      24/7 Emergency Hotline
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Headquarters</p>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, CA
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Global Operations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      &lt; 24 hours typical
                    </p>
                    <p className="text-sm text-muted-foreground">
                      &lt; 1 hour for enterprise
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
              <CardHeader>
                <CardTitle className="text-base">Support Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  Emergency Incident Response
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2 text-accent" />
                  Technical Support Portal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2 text-warning" />
                  Schedule Strategy Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  Documentation & Guides
                </Button>
              </CardContent>
            </Card>

            {/* SLA Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-warning/20">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Service Level Agreement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Platform Uptime
                    </span>
                    <Badge variant="secondary">99.9%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Data Freshness
                    </span>
                    <Badge variant="secondary">&lt; 1 hour</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Support Response
                    </span>
                    <Badge variant="secondary">&lt; 4 hours</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Emergency Response
                    </span>
                    <Badge variant="secondary">&lt; 15 min</Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Enterprise customers receive priority support and dedicated
                  account management
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
