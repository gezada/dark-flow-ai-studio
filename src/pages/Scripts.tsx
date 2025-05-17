
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ideas } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ScriptsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("scripts")}</h1>
        <Button className="bg-ai hover:bg-ai-hover">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Script
        </Button>
      </div>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Script Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="idea">
            <TabsList>
              <TabsTrigger value="idea">From Idea</TabsTrigger>
              <TabsTrigger value="headline">From Headline</TabsTrigger>
              <TabsTrigger value="scratch">From Scratch</TabsTrigger>
            </TabsList>
            <TabsContent value="idea" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ideas.slice(0, 3).map((idea) => (
                  <Card key={idea.id} className="bg-secondary">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge className={idea.potentialScore === 'high' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}>
                          {idea.potentialScore.charAt(0).toUpperCase() + idea.potentialScore.slice(1)} Potential
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{idea.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{idea.description}</p>
                      <Button variant="default" size="sm" className="w-full">
                        <Sparkles className="mr-2 h-3 w-3" />
                        Generate Script
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="headline">
              <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md mt-4">
                <p className="text-muted-foreground">Select a headline to generate a script</p>
              </div>
            </TabsContent>
            <TabsContent value="scratch">
              <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md mt-4">
                <p className="text-muted-foreground">Create a script from scratch</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mt-8">Recent Scripts</h2>

      <div className="grid gap-6">
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Top 10 Smartphone Features Coming in 2025</CardTitle>
              <Badge>Draft</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/50 rounded-md p-4 max-h-60 overflow-y-auto">
              <p className="text-sm">
                [INTRO]<br /><br />

                Hey there tech enthusiasts! Welcome back to the channel. Today, we're taking a peek into the future of smartphones, specifically the groundbreaking features we expect to see by 2025. The pace of innovation is accelerating, and what's coming will completely transform how we use our devices.<br /><br />
                
                [SECTION 1: AI INTEGRATION]<br /><br />
                
                The first major evolution will be true AI assistants. Unlike today's basic voice assistants, 2025 smartphones will feature AI that truly understands context and can perform complex tasks across apps. Imagine saying, "Summarize my meeting, create action items, and schedule follow-ups" – and it actually works flawlessly.<br /><br />
                
                The neural processors powering these phones will be 5x more powerful than today's chips, enabling real-time language translation without internet, advanced photo editing with a single prompt, and AI that learns your habits to optimize battery life and performance.<br /><br />
                
                [SECTION 2: DISPLAY TECHNOLOGY]<br /><br />
                
                Next up: revolutionary displays. Foldable phones are just the beginning...
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-xs text-muted-foreground">Created: May 15, 2023</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Export</Button>
                <Button variant="default" size="sm">Use for Video</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScriptsPage;
