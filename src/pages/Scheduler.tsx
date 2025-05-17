
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, Filter, Plus, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SchedulerPage = () => {
  const { t } = useLanguage();

  // Mock scheduled videos data
  const scheduledVideos = [
    {
      id: 'vid_sched_1',
      title: 'Top 10 Smartphone Features Coming in 2025',
      thumbnailUrl: 'https://picsum.photos/seed/tech1/300/150',
      channelName: 'Tech Insights',
      channelAvatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=tech',
      scheduledDate: '2023-06-15T14:30:00Z',
      status: 'scheduled',
    },
    {
      id: 'vid_sched_2',
      title: 'How To Build a $800 Gaming PC That Crushes AAA Games',
      thumbnailUrl: 'https://picsum.photos/seed/gaming1/300/150',
      channelName: 'Game Reviews',
      channelAvatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=games',
      scheduledDate: '2023-06-17T18:00:00Z',
      status: 'scheduled',
    },
    {
      id: 'vid_sched_3',
      title: '5 Investing Strategies to Build Wealth in 2023',
      thumbnailUrl: 'https://picsum.photos/seed/finance1/300/150',
      channelName: 'Financial Freedom',
      channelAvatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=finance',
      scheduledDate: '2023-06-20T12:00:00Z',
      status: 'scheduled',
    },
  ];

  // Function to format date
  const formatScheduledDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("schedule")}</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="default" className="bg-accent hover:bg-accent-hover">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="mt-4">
          <div className="space-y-4">
            {scheduledVideos.map((video) => (
              <Card key={video.id} className="bg-card">
                <CardContent className="flex flex-col md:flex-row gap-4 p-4">
                  <div className="w-full md:w-1/4">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={video.channelAvatar} alt={video.channelName} />
                          <AvatarFallback>{video.channelName.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{video.channelName}</span>
                      </div>
                      <Badge variant={video.status === 'scheduled' ? 'outline' : 'secondary'}>
                        {video.status.charAt(0).toUpperCase() + video.status.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="font-medium text-lg">{video.title}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{formatScheduledDate(video.scheduledDate).date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{formatScheduledDate(video.scheduledDate).time}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Reschedule</Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-ai hover:bg-ai-hover ml-auto"
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Optimize Time
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="published">
          <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md mt-4">
            <p className="text-muted-foreground">No recently published videos</p>
          </div>
        </TabsContent>
        <TabsContent value="calendar">
          <Card className="bg-card mt-4">
            <CardHeader>
              <CardTitle>Content Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-80 border-2 border-dashed rounded-md">
                <p className="text-muted-foreground">Calendar view will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SchedulerPage;
