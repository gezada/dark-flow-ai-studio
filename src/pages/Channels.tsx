
import { useLanguage } from "@/components/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { channels } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const ChannelsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("channels")}</h1>
        <Button variant="default" className="bg-accent hover:bg-accent-hover">
          {t("addChannel")}
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {channels.map((channel) => (
          <Card key={channel.id} className="bg-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={channel.avatar} alt={channel.name} />
                  <AvatarFallback>{channel.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{channel.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {channel.subscribers.toLocaleString()} subscribers
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Today's Views</span>
                    <span className="font-semibold">{channel.viewsToday.toLocaleString()}</span>
                  </div>
                  <Progress value={65} className="h-1 mt-1" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Revenue</span>
                    <span className="font-semibold">${channel.revenueEstimate.toLocaleString()}</span>
                  </div>
                  <Progress value={75} className="h-1 mt-1" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Watch Time (hrs)</span>
                    <span className="font-semibold">{Math.floor(channel.watchTime / 60).toLocaleString()}</span>
                  </div>
                  <Progress value={85} className="h-1 mt-1" />
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Button variant="outline" className="flex-1">Analytics</Button>
                <Button variant="outline" className="flex-1">Content</Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add Channel Card */}
        <Card className="bg-secondary/50 border-dashed flex flex-col items-center justify-center h-full p-6">
          <div className="rounded-full bg-secondary p-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">{t("addChannel")}</h3>
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Connect a new YouTube channel to your dashboard
          </p>
          <Button className="bg-accent hover:bg-accent-hover">
            Connect Channel
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ChannelsPage;
