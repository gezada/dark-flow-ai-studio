
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, ImagePlus, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ThumbnailsPage = () => {
  const { t } = useLanguage();

  // Sample thumbnail data
  const thumbnails = [
    {
      id: 'thumb_1',
      title: 'Top 10 Smartphone Features',
      imageUrl: 'https://picsum.photos/seed/tech1/640/360',
      ctr: 8.7,
    },
    {
      id: 'thumb_2',
      title: 'Gaming PC Build Guide',
      imageUrl: 'https://picsum.photos/seed/gaming1/640/360',
      ctr: 9.2,
    },
    {
      id: 'thumb_3',
      title: 'Cryptocurrency Trends',
      imageUrl: 'https://picsum.photos/seed/crypto1/640/360',
      ctr: 7.5,
    },
    {
      id: 'thumb_4',
      title: 'Investing with $100',
      imageUrl: 'https://picsum.photos/seed/invest1/640/360',
      ctr: 8.9,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("thumbnails")}</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <ImagePlus className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button className="bg-ai hover:bg-ai-hover">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate
          </Button>
        </div>
      </div>

      <Card className="bg-card">
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Thumbnail Generator</h2>
              <p className="text-sm text-muted-foreground">Create eye-catching thumbnails with AI</p>
            </div>
            <Input className="max-w-sm" placeholder="Enter title or description for thumbnail..." />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Tabs defaultValue="ai">
              <TabsList className="mb-4">
                <TabsTrigger value="ai">AI Generated</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="editor">Custom Editor</TabsTrigger>
              </TabsList>
              <TabsContent value="ai">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {thumbnails.map((thumbnail) => (
                    <ThumbnailCard key={thumbnail.id} thumbnail={thumbnail} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="templates">
                <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md">
                  <p className="text-muted-foreground">Choose a template to get started</p>
                </div>
              </TabsContent>
              <TabsContent value="editor">
                <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md">
                  <p className="text-muted-foreground">Custom editor will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {thumbnails.map((thumbnail) => (
          <ThumbnailCard key={thumbnail.id} thumbnail={thumbnail} />
        ))}
      </div>
    </div>
  );
};

function ThumbnailCard({ thumbnail }: { thumbnail: any }) {
  return (
    <Card className="bg-card overflow-hidden">
      <div className="relative">
        <img 
          src={thumbnail.imageUrl} 
          alt={thumbnail.title} 
          className="w-full aspect-video object-cover" 
        />
        <Badge className="absolute top-2 right-2 bg-accent text-white">
          CTR {thumbnail.ctr}%
        </Badge>
      </div>
      <CardContent className="p-3">
        <p className="text-sm font-medium mb-2 line-clamp-1">{thumbnail.title}</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">Edit</Button>
          <Button variant="ghost" size="sm" className="flex-none">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ThumbnailsPage;
