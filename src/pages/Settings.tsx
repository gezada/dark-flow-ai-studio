
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, Globe, ListFilter, Moon, Plus, Sun, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SettingsPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button variant="default" className="bg-red-600 hover:bg-red-700">
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64 flex-shrink-0">
            <div className="sticky top-4">
              <div className="mb-6 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Creator Pro</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Change Avatar
                </Button>
              </div>
              
              <TabsList className="flex flex-col w-full h-auto space-y-1">
                <TabsTrigger value="profile" className="justify-start w-full px-3 py-2">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="account" className="justify-start w-full px-3 py-2">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </TabsTrigger>
                <TabsTrigger value="appearance" className="justify-start w-full px-3 py-2">
                  <Moon className="mr-2 h-4 w-4" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger value="notifications" className="justify-start w-full px-3 py-2">
                  <Globe className="mr-2 h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="billing" className="justify-start w-full px-3 py-2">
                  <ListFilter className="mr-2 h-4 w-4" />
                  Subscription
                </TabsTrigger>
                <TabsTrigger value="api" className="justify-start w-full px-3 py-2">
                  <ChevronDown className="mr-2 h-4 w-4" />
                  API Settings
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <div className="flex-1">
            <TabsContent value="profile">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="display-name">Display Name</Label>
                    <Input id="display-name" defaultValue="JohnTheCreator" />
                    <p className="text-xs text-muted-foreground">
                      This is the name that will be displayed on your public profile.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio" 
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" placeholder="https://yourwebsite.com" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card mt-6">
                <CardHeader>
                  <CardTitle>Social Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="youtube">YouTube Channel</Label>
                    <Input id="youtube" placeholder="https://youtube.com/@yourchannel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input id="twitter" placeholder="https://twitter.com/yourusername" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input id="instagram" placeholder="https://instagram.com/yourusername" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="text-green-500 border-green-500 text-xs">Verified</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700">Change Password</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add an extra layer of security to your account by requiring a verification code along with your password.
                    </p>
                    <div className="flex items-center gap-4">
                      <Switch id="2fa" />
                      <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      <div 
                        className="flex flex-col items-center gap-2 p-4 rounded-md cursor-not-allowed border border-accent opacity-75"
                      >
                        <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                          <Moon className="h-6 w-6" />
                        </div>
                        <span>Dark</span>
                        <Check className="text-accent h-4 w-4" />
                        <Badge variant="secondary" className="mt-auto">Current</Badge>
                      </div>
                      <div 
                        className="flex flex-col items-center gap-2 p-4 rounded-md cursor-not-allowed border border-secondary opacity-50"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center text-gray-900">
                          <Sun className="h-6 w-6" />
                        </div>
                        <span>Light</span>
                        <span className="text-xs text-muted-foreground mt-auto">Coming soon</span>
                      </div>
                      <div 
                        className="flex flex-col items-center gap-2 p-4 rounded-md cursor-not-allowed border border-secondary opacity-50"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                          <Moon className="h-6 w-6" />
                        </div>
                        <span>Midnight</span>
                        <span className="text-xs text-muted-foreground mt-auto">Coming soon</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Interface Settings</h3>
                    
                    <div className="grid gap-6">
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="densed-ui" className="font-medium">Compact UI</Label>
                          <p className="text-sm text-muted-foreground">
                            Use a more compact UI layout
                          </p>
                        </div>
                        <Switch id="densed-ui" />
                      </div>
                      
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="animations" className="font-medium">Interface Animations</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable animations throughout the interface
                          </p>
                        </div>
                        <Switch id="animations" defaultChecked />
                      </div>
                      
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="sidebar-collapsed" className="font-medium">Collapsed Sidebar by Default</Label>
                          <p className="text-sm text-muted-foreground">
                            Start with the sidebar collapsed
                          </p>
                        </div>
                        <Switch id="sidebar-collapsed" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card mt-6">
                <CardHeader>
                  <CardTitle>Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    <div className="flex flex-row items-center justify-between">
                      <div>
                        <Label htmlFor="reduced-motion" className="font-medium">Reduce Motion</Label>
                        <p className="text-sm text-muted-foreground">
                          Limit animations and transitions
                        </p>
                      </div>
                      <Switch id="reduced-motion" />
                    </div>
                    
                    <div className="flex flex-row items-center justify-between">
                      <div>
                        <Label htmlFor="high-contrast" className="font-medium">High Contrast Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Increase contrast for better visibility
                        </p>
                      </div>
                      <Switch id="high-contrast" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="font-size">Font Size</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="font-size">
                          <SelectValue placeholder="Select font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium (Default)</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="x-large">Extra Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    
                    <div className="grid gap-4">
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="notify-comments" className="font-medium">New Comments</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when someone comments on your videos
                          </p>
                        </div>
                        <Switch id="notify-comments" defaultChecked />
                      </div>
                      
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="notify-subs" className="font-medium">New Subscribers</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when someone subscribes to your channel
                          </p>
                        </div>
                        <Switch id="notify-subs" defaultChecked />
                      </div>
                      
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="notify-uploads" className="font-medium">Video Processing Complete</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when your video upload processing is complete
                          </p>
                        </div>
                        <Switch id="notify-uploads" defaultChecked />
                      </div>
                      
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="notify-marketing" className="font-medium">Marketing Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive promotional emails and product updates
                          </p>
                        </div>
                        <Switch id="notify-marketing" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">App Notifications</h3>
                    
                    <div className="grid gap-4">
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="notify-app-comments" className="font-medium">New Comments</Label>
                          <p className="text-sm text-muted-foreground">
                            Show notifications for new comments
                          </p>
                        </div>
                        <Switch id="notify-app-comments" defaultChecked />
                      </div>
                      
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="notify-app-milestones" className="font-medium">Channel Milestones</Label>
                          <p className="text-sm text-muted-foreground">
                            Show notifications for subscriber milestones
                          </p>
                        </div>
                        <Switch id="notify-app-milestones" defaultChecked />
                      </div>
                      
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          <Label htmlFor="notify-app-analytics" className="font-medium">Analytics Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Show notifications for significant analytics changes
                          </p>
                        </div>
                        <Switch id="notify-app-analytics" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Subscription Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <Card className="flex-1 bg-secondary border-red-600 border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Creator Pro</CardTitle>
                          <Badge className="bg-red-600">Current Plan</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold">$29/month</div>
                          <div className="text-sm text-muted-foreground">Billed monthly</div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Up to 10 Channels
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            All AI Features
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            50 AI Generations/month
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Advanced Analytics
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Email Support
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
                          <div className="text-sm text-muted-foreground">Billed monthly</div>
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
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2" />
                            Priority Support
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2" />
                            API Access
                          </li>
                        </ul>
                        <div className="pt-2">
                          <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">Upgrade</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card mt-6">
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="billing-name">Full Name</Label>
                    <Input id="billing-name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-email">Email Address</Label>
                    <Input id="billing-email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="billing-address">Billing Address</Label>
                      <Input id="billing-address" placeholder="Street address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-city">City</Label>
                      <Input id="billing-city" placeholder="City" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="billing-state">State/Province</Label>
                      <Input id="billing-state" placeholder="State" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-zip">ZIP/Postal Code</Label>
                      <Input id="billing-zip" placeholder="ZIP code" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-country">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger id="billing-country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card mt-6">
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border rounded-md">
                    <div className="h-10 w-16 bg-gray-700 rounded-md flex items-center justify-center">
                      <span className="text-white font-semibold">VISA</span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Visa ending in 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/2025</div>
                    </div>
                    <Badge className="ml-auto">Default</Badge>
                  </div>
                  
                  <Button variant="outline" size="sm" className="mt-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-card mt-6">
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Description</th>
                          <th className="px-4 py-3">Amount</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3">May 1, 2023</td>
                          <td className="px-4 py-3">Creator Pro Plan - Monthly</td>
                          <td className="px-4 py-3">$29.00</td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className="text-green-500 border-green-500">Paid</Badge>
                          </td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3">Apr 1, 2023</td>
                          <td className="px-4 py-3">Creator Pro Plan - Monthly</td>
                          <td className="px-4 py-3">$29.00</td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className="text-green-500 border-green-500">Paid</Badge>
                          </td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3">Mar 1, 2023</td>
                          <td className="px-4 py-3">Creator Pro Plan - Monthly</td>
                          <td className="px-4 py-3">$29.00</td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className="text-green-500 border-green-500">Paid</Badge>
                          </td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                  <div>
                    <h3 className="text-lg font-medium mb-2">Your API Keys</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      API keys allow you to authenticate your API requests. Keep these keys secure!
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">Production API Key</div>
                          <Badge>Production</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input 
                            value="••••••••••••••••••••••••••••••" 
                            readOnly 
                            className="font-mono"
                          />
                          <Button variant="outline">Copy</Button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">Created on Mar 12, 2023</span>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-100/10">
                            Revoke
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">Development API Key</div>
                          <Badge variant="outline">Development</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input 
                            value="••••••••••••••••••••••••••••••" 
                            readOnly 
                            className="font-mono"
                          />
                          <Button variant="outline">Copy</Button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">Created on Apr 5, 2023</span>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-100/10">
                            Revoke
                          </Button>
                        </div>
                      </div>
                      
                      <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Generate New API Key
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">External API Integration</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="openai-key">OpenAI API Key</Label>
                        <Input id="openai-key" placeholder="Enter your OpenAI API key" type="password" />
                        <p className="text-xs text-muted-foreground mt-1">
                          Required for advanced AI features. <a href="#" className="text-accent hover:underline">Learn more</a>
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="stability-key">Stability AI API Key</Label>
                        <Input id="stability-key" placeholder="Enter your Stability AI API key" type="password" />
                        <p className="text-xs text-muted-foreground mt-1">
                          Required for AI image generation. <a href="#" className="text-accent hover:underline">Learn more</a>
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="elevenlabs-key">ElevenLabs API Key</Label>
                        <Input id="elevenlabs-key" placeholder="Enter your ElevenLabs API key" type="password" />
                        <p className="text-xs text-muted-foreground mt-1">
                          Required for AI voice generation. <a href="#" className="text-accent hover:underline">Learn more</a>
                        </p>
                      </div>
                      
                      <Button className="bg-red-600 hover:bg-red-700 mt-2">Save API Keys</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Webhook Settings</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure webhooks to receive realtime updates from our system.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="webhook-url">Webhook URL</Label>
                        <Input id="webhook-url" placeholder="https://your-app.com/webhook" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Events to subscribe to</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="event-video-processed" className="h-4 w-4" />
                            <Label htmlFor="event-video-processed">Video Processed</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="event-comments" className="h-4 w-4" />
                            <Label htmlFor="event-comments">New Comments</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="event-subs" className="h-4 w-4" />
                            <Label htmlFor="event-subs">New Subscribers</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="event-milestones" className="h-4 w-4" />
                            <Label htmlFor="event-milestones">Channel Milestones</Label>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline">Save Webhook Settings</Button>
                    </div>
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
