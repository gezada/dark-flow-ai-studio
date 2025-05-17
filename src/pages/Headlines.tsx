
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeadlinesPage = () => {
  const { t } = useLanguage();

  // Sample headline variations for demo
  const headlineVariations = [
    {
      id: 'headline_1',
      title: 'Top 10 Smartphone Features Coming in 2025',
      variations: [
        { text: '10 Revolutionary Smartphone Features Coming in 2025', score: 92 },
        { text: 'Future Phones: 10 Game-Changing Features Coming in 2025', score: 87 },
        { text: '2025 Smartphones Will Blow Your Mind: 10 Upcoming Features', score: 76 },
      ]
    },
    {
      id: 'headline_2',
      title: 'Budget Gaming PC Build Guide 2023',
      variations: [
        { text: 'How To Build a $800 Gaming PC That Crushes AAA Games', score: 94 },
        { text: 'Ultimate $800 Gaming PC Build Guide for 2023', score: 89 },
        { text: 'Build a Beast Gaming PC for Under $800 in 2023', score: 85 },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("headlines")}</h1>
        <Button className="bg-ai hover:bg-ai-hover">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Headlines
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {headlineVariations.map((headline) => (
          <Card key={headline.id} className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">{headline.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {headline.variations.map((variation, index) => (
                  <div key={index} className="border rounded-md p-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={index === 0 ? "default" : "outline"}>
                        {index === 0 ? 'Best' : `Option ${index + 1}`}
                      </Badge>
                      <div className="flex items-center bg-secondary text-xs font-medium px-2 py-1 rounded-full">
                        <span>CTR Score:</span>
                        <span className="ml-1 font-bold text-accent">{variation.score}</span>
                      </div>
                    </div>
                    <p className="text-base font-medium">{variation.text}</p>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="default" size="sm">Use</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HeadlinesPage;
