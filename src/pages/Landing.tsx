
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight, LayoutDashboard, User, Users, Video, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login functionality
    if (email && password) {
      toast({
        title: "Success!",
        description: "You've been logged in successfully.",
      });
      navigate("/");
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields.",
      });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration functionality
    if (email && password && name) {
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      });
      setActiveTab("login");
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LayoutDashboard className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold">Dark Hammer</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-sm hover:text-red-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm hover:text-red-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm hover:text-red-600 transition-colors">Testimonials</a>
          </div>
          <Button onClick={() => setActiveTab("login")} className="bg-red-600 hover:bg-red-700">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Revolutionize Your <span className="text-red-600">YouTube Content</span> Strategy
            </h1>
            <p className="text-xl text-muted-foreground">
              AI-powered content creation, management, and analytics for YouTube creators and agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setActiveTab("register")} size="lg" className="bg-red-600 hover:bg-red-700">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo <Video className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">JD</div>
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">AR</div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white">MC</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-medium">5,000+</span> creators already using Dark Hammer
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-red-600/20 to-purple-600/20 blur-3xl"></div>
            <div className="bg-card border shadow-xl rounded-xl overflow-hidden">
              {/* Auth Form */}
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "register")} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="p-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">Password</label>
                      <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">Login</Button>
                  </form>
                </TabsContent>
                <TabsContent value="register" className="p-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reg-email" className="text-sm font-medium">Email</label>
                      <Input id="reg-email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reg-password" className="text-sm font-medium">Password</label>
                      <Input id="reg-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">Create Account</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Dominate YouTube</h2>
          <p className="text-lg text-muted-foreground">
            Our all-in-one platform helps you create better content, optimize your workflow, and grow your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Zap className="h-10 w-10 text-red-600" />}
            title="AI-Powered Content Creation"
            description="Generate video ideas, write compelling scripts, create eye-catching thumbnails, and more with our advanced AI."
          />
          <FeatureCard 
            icon={<Users className="h-10 w-10 text-red-600" />}
            title="Multi-Channel Management"
            description="Effortlessly manage multiple YouTube channels from a single dashboard with advanced permission controls."
          />
          <FeatureCard 
            icon={<LayoutDashboard className="h-10 w-10 text-red-600" />}
            title="Advanced Analytics"
            description="Get actionable insights into your channel's performance with our comprehensive analytics dashboard."
          />
        </div>

        <div className="mt-16 border rounded-lg bg-card p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Complete Content Workflow</h3>
              <p className="mb-6 text-muted-foreground">
                Our streamlined workflow takes you from idea to published video with ease. Every step of the creation process is optimized for maximum efficiency.
              </p>
              
              <ul className="space-y-4">
                <WorkflowItem number="1" title="Generate Ideas" description="AI-powered content ideation based on trending topics" />
                <WorkflowItem number="2" title="Create Headlines" description="Craft attention-grabbing titles that drive clicks" />
                <WorkflowItem number="3" title="Design Thumbnails" description="Create thumbnails that stand out in the feed" />
                <WorkflowItem number="4" title="Write Scripts" description="Generate full video scripts optimized for engagement" />
                <WorkflowItem number="5" title="Schedule Upload" description="Publish at the perfect time for maximum reach" />
              </ul>
            </div>
            <div className="bg-card border rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-medium">Ideas</h4>
                    <p className="text-sm text-muted-foreground">AI-powered content ideas</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-border mx-auto"></div>
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-medium">Headlines</h4>
                    <p className="text-sm text-muted-foreground">Catchy titles with AI</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-border mx-auto"></div>
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-medium">Thumbnails</h4>
                    <p className="text-sm text-muted-foreground">Eye-catching thumbnails</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-border mx-auto"></div>
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">4</div>
                  <div>
                    <h4 className="font-medium">Scripts</h4>
                    <p className="text-sm text-muted-foreground">Full video scripts</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-border mx-auto"></div>
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">5</div>
                  <div>
                    <h4 className="font-medium">Upload</h4>
                    <p className="text-sm text-muted-foreground">Optimize publish times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto py-20 px-4 md:px-6 bg-secondary/30 rounded-lg my-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent pricing that scales with your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            name="Creator" 
            price="$29" 
            description="Perfect for individual creators"
            features={[
              "Up to 3 YouTube Channels",
              "50 AI Generations/month",
              "Basic Analytics",
              "7-day Content Calendar"
            ]}
          />
          <PricingCard 
            name="Professional" 
            price="$59" 
            description="For serious content creators"
            features={[
              "Up to 10 YouTube Channels",
              "200 AI Generations/month",
              "Advanced Analytics",
              "30-day Content Calendar",
              "Comment Management"
            ]}
            highlighted
          />
          <PricingCard 
            name="Agency" 
            price="$149" 
            description="For teams and agencies"
            features={[
              "Unlimited YouTube Channels",
              "Unlimited AI Generations",
              "Team Collaboration",
              "API Access",
              "Advanced Analytics",
              "Dedicated Support"
            ]}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-20 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by Creators Worldwide</h2>
          <p className="text-lg text-muted-foreground">
            See what our users are saying about Dark Hammer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Dark Hammer has completely transformed how I create content. I'm able to produce twice as many videos in half the time."
            author="Alex Martinez"
            role="Tech YouTuber, 1.2M subscribers"
          />
          <TestimonialCard 
            quote="The AI features are mind-blowing. I've never seen anything like it. My thumbnails are getting way more clicks now."
            author="Sarah Johnson"
            role="Beauty Content Creator, 850K subscribers"
          />
          <TestimonialCard 
            quote="As an agency managing 20+ channels, Dark Hammer has been a game-changer for our workflow and productivity."
            author="Michael Chen"
            role="CEO, ViewBoost Agency"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20 px-4 md:px-6">
        <div className="bg-card border rounded-xl p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your YouTube Strategy?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using Dark Hammer to create better content, grow their audience, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setActiveTab("register")} size="lg" className="bg-red-600 hover:bg-red-700">
              Start Your Free Trial <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-10 px-4 md:px-6 border-t">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Features</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground">Tutorials</a></li>
              <li><a href="#" className="hover:text-foreground">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Press</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <LayoutDashboard className="h-5 w-5 text-red-600" />
            <span className="font-bold">Dark Hammer</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dark Hammer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-card">
      <CardContent className="pt-6">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface WorkflowItemProps {
  number: string;
  title: string;
  description: string;
}

const WorkflowItem = ({ number, title, description }: WorkflowItemProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs text-white mr-3 mt-0.5">
        {number}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ name, price, description, features, highlighted = false }: PricingCardProps) => {
  return (
    <Card className={`bg-card relative ${highlighted ? 'border-red-600 shadow-lg' : ''}`}>
      {highlighted && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-max px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-4 w-4 text-red-600 mt-1 mr-3" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${highlighted ? 'bg-red-600 hover:bg-red-700' : 'bg-secondary hover:bg-secondary/80'}`}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="bg-card">
      <CardContent className="pt-6">
        <div className="mb-4 text-4xl text-muted-foreground">"</div>
        <p className="mb-6">{quote}</p>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPage;
