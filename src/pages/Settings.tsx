import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, Globe, ListFilter, Moon, Sun, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { LanguageSelector } from "@/components/language-selector";
import { useTheme } from "@/components/theme-provider";
import { Badge } from "@/components/ui/badge";

const SettingsPage = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("settings")}</h1>
        <Button variant="default">
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="account">
        <div className="sm:flex">
          <div className="mb-4 sm:mb-0 sm:mr-4 sm:w-48 flex-shrink-0">
            <TabsList className="flex sm:flex-col w-full">
              <TabsTrigger value="account" className="justify-start w-full">
                <User className="mr-2 h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="appearance" className="justify-start w-full">
                <Moon className="mr-2 h-4 w-4" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="language" className="justify-start w-full">
                <Globe className="mr-2 h-4 w-4" />
                Language
              </TabsTrigger>
              <TabsTrigger value="billing" className="justify-start w-full">
                <ListFilter className="mr-2 h-4 w-4" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="api" className="justify-start w-full">
                <ChevronDown className="mr-2 h-4 w-4" />
                API Settings
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="flex-1">
            <TabsContent value="account">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" defaultValue="••••••••••" />
                  </div>
                  <div className="mt-6">
                    <h3 className="mb-4 text-lg font-medium">Linked Accounts</h3>
                    <div className="flex justify-between items-center p-3 border rounded-md mb-2">
                      <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="currentColor">
                          <path d="M21.582 7.643a2.607 2.607 0 00-1.84-1.84C18.254 5.355 12 5.355 12 5.355s-6.254 0-7.742.448a2.607 2.607 0 00-1.84 1.84C2 9.13 2 12.004 2 12.004s0 2.874.418 4.36a2.607 2.607 0 001.84 1.84c1.488.448 7.742.448 7.742.448s6.254 0 7.742-.448a2.607 2.607 0 001.84-1.84c.418-1.487.418-4.36.418-4.36s0-2.874-.418-4.361z" />
                          <path fill="white" d="M9.773 15.02l5.142-3.016-5.142-3.016v6.032z" />
                        </svg>
                        YouTube
                      </div>
                      <Badge className="bg-green-500/10 text-green-500">
                        <Check className="mr-1 h-3 w-3" /> Connected
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.194 14.175l-1.357 1.357-4.342-4.342V6.825h1.919v5.594l3.78 3.756z" />
                        </svg>
                        Google Analytics
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="appearance">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="flex gap-4">
                      <div 
                        className="flex flex-col items-center gap-2 p-4 rounded-md cursor-not-allowed border border-accent opacity-75"
                      >
                        <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                          <Moon className="h-6 w-6" />
                        </div>
                        <span>Dark</span>
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <div 
                        className="flex flex-col items-center gap-2 p-4 rounded-md cursor-not-allowed border border-secondary opacity-50"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center text-gray-900">
                          <Sun className="h-6 w-6" />
                        </div>
                        <span>Light (Not Available)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="densed-ui">Compact UI</Label>
                    <div className="flex items-center gap-2">
                      <Switch id="densed-ui" />
                      <span className="text-sm text-muted-foreground">Use a more compact UI layout</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="language">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Language & Region</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Interface Language</Label>
                    <LanguageSelector />
                    <p className="text-sm text-muted-foreground mt-1">
                      This affects all text in the application interface.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>AI Content Generation Language</Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Select which language AI should use when generating content:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="radio" id="use-ui-lang" name="ai-lang" className="h-4 w-4 text-accent" defaultChecked />
                        <label htmlFor="use-ui-lang">Use interface language</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="radio" id="custom-lang" name="ai-lang" className="h-4 w-4 text-accent" />
                        <label htmlFor="custom-lang">Specify custom language for each channel</label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="billing">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Billing & Subscription</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Card className="flex-1 bg-secondary border-accent">
                      <CardHeader>
                        <CardTitle>Current Plan</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold">Creator</div>
                          <div className="text-accent text-lg">$29/month</div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-accent" />
                            Up to 10 Channels
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-accent" />
                            All AI Features
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-accent" />
                            50 AI Generations/month
                          </li>
                        </ul>
                        <div className="pt-2">
                          <Button variant="outline" className="w-full">Manage Plan</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="flex-1 bg-secondary/30">
                      <CardHeader>
                        <CardTitle>Agency Plan</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold">$99/month</div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2" />
                            Up to 50 Channels
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2" />
                            All AI Features
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2" />
                            Team Management
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2" />
                            Unlimited AI Generations
                          </li>
                        </ul>
                        <div className="pt-2">
                          <Button variant="default" className="w-full">Upgrade</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="api">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>API Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="openai-key">OpenAI API Key</Label>
                    <Input id="openai-key" placeholder="Enter your OpenAI API key" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Required for advanced AI features. <a href="#" className="text-accent hover:underline">Learn more</a>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stability-key">Stability AI API Key</Label>
                    <Input id="stability-key" placeholder="Enter your Stability AI API key" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Required for AI image generation. <a href="#" className="text-accent hover:underline">Learn more</a>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="elevenlabs-key">ElevenLabs API Key</Label>
                    <Input id="elevenlabs-key" placeholder="Enter your ElevenLabs API key" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Required for AI voice generation. <a href="#" className="text-accent hover:underline">Learn more</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
