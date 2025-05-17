
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ideas } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Filter, Plus, Search, Sparkles } from "lucide-react";

const IdeasPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("ideas")}</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button className="bg-ai hover:bg-ai-hover">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Ideas
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center gap-2 flex-1">
          <Input placeholder="Search ideas..." className="max-w-sm" />
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Ideas</TabsTrigger>
          <TabsTrigger value="high">High Potential</TabsTrigger>
          <TabsTrigger value="medium">Medium Potential</TabsTrigger>
          <TabsTrigger value="low">Low Potential</TabsTrigger>
          <TabsTrigger value="used">Used</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {ideas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
            <NewIdeaCard />
          </div>
        </TabsContent>
        <TabsContent value="high" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {ideas
              .filter((idea) => idea.potentialScore === 'high')
              .map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="medium" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {ideas
              .filter((idea) => idea.potentialScore === 'medium')
              .map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

function IdeaCard({ idea }: { idea: any }) {
  const potentialColor = {
    high: "bg-green-500/10 text-green-500",
    medium: "bg-yellow-500/10 text-yellow-500",
    low: "bg-red-500/10 text-red-500",
  };

  return (
    <Card className="bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge className={potentialColor[idea.potentialScore]}>
            {idea.potentialScore.charAt(0).toUpperCase() + idea.potentialScore.slice(1)} Potential
          </Badge>
          <span className="text-xs text-muted-foreground">
            {new Date(idea.createdAt).toLocaleDateString()}
          </span>
        </div>
        <CardTitle className="text-lg">{idea.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{idea.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {idea.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        <Button variant="default" size="sm">
          Create Content
        </Button>
      </CardFooter>
    </Card>
  );
}

function NewIdeaCard() {
  return (
    <Card className="bg-secondary/50 border-dashed flex flex-col items-center justify-center text-center p-6">
      <div className="rounded-full bg-secondary p-3 mb-4">
        <Plus className="h-6 w-6" />
      </div>
      <h3 className="font-semibold mb-1">Add New Idea</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Manually add content ideas or generate with AI
      </p>
      <div className="flex gap-2">
        <Button variant="outline">Add Manually</Button>
        <Button className="bg-ai hover:bg-ai-hover">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate
        </Button>
      </div>
    </Card>
  );
}

export default IdeasPage;
