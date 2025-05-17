
import { useLanguage } from "@/components/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardStats, channels, comments, ideas } from "@/lib/mock-data";
import { BarChart, CheckCircle, ChevronRight, ListFilter, MessagesSquare, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t("dashboard")}</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <ListFilter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="default" size="sm" className="bg-accent hover:bg-accent-hover">
            <TrendingUp className="mr-2 h-4 w-4" />
            Last 7 Days
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title={t("viewsToday")} 
          value={dashboardStats.totalViews.toLocaleString()} 
          change="+12.5%" 
          positive={true} 
        />
        <StatCard 
          title={t("subscribers")} 
          value={dashboardStats.totalSubscribers.toLocaleString()} 
          change="+5.3%" 
          positive={true} 
        />
        <StatCard 
          title={t("watchTime")} 
          value={`${Math.floor(dashboardStats.totalWatchTime / 60).toLocaleString()} hrs`} 
          change="+8.1%" 
          positive={true} 
        />
        <StatCard 
          title={t("revenueEstimate")} 
          value={`$${dashboardStats.totalRevenue.toLocaleString()}`} 
          change="+15.2%" 
          positive={true} 
        />
      </div>

      {/* Workflow */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Content Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-0 md:gap-4">
            {/* Timeline steps for workflow */}
            <div className="flex flex-col md:flex-row justify-between w-full mb-6 md:mb-10">
              <WorkflowTimelineItem 
                number={1}
                title="Ideas"
                description="AI content ideas"
                active={true}
                href="/ideas"
                badge={`${ideas.length} ideas`}
              />
              <WorkflowConnector />
              <WorkflowTimelineItem 
                number={2}
                title="Headlines"
                description="Catchy titles"
                href="/headlines"
              />
              <WorkflowConnector />
              <WorkflowTimelineItem 
                number={3}
                title="Thumbnails"
                description="Eye-catching images"
                href="/thumbnails"
              />
              <WorkflowConnector />
              <WorkflowTimelineItem 
                number={4}
                title="Scripts"
                description="Full video scripts"
                href="/scripts"
              />
              <WorkflowConnector />
              <WorkflowTimelineItem 
                number={5}
                title="Upload"
                description="Schedule content"
                href="/upload"
              />
            </div>

            {/* Cards below timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
              <WorkflowCard 
                title={t("generateIdeas")} 
                description="AI-powered content ideas" 
                buttonText="Generate" 
                badge={`${ideas.length} ideas`}
                href="/ideas"
              />
              <WorkflowCard 
                title={t("createHeadlines")} 
                description="Catchy titles with AI" 
                buttonText="Create"
                href="/headlines" 
              />
              <WorkflowCard 
                title={t("designThumbnail")} 
                description="Eye-catching thumbnails" 
                buttonText="Design"
                href="/thumbnails" 
              />
              <WorkflowCard 
                title={t("writeScript")} 
                description="Full video scripts" 
                buttonText="Write"
                href="/scripts" 
              />
              <WorkflowCard 
                title={t("upload")} 
                description="Optimize publish times" 
                buttonText="Upload" 
                badge="Ready"
                href="/upload"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Channel Overview */}
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Channel Overview</CardTitle>
            <Badge variant="outline" className="ml-auto">
              {channels.length} Channels
            </Badge>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Channel</TableHead>
                  <TableHead className="text-right">Subscribers</TableHead>
                  <TableHead className="text-right">Views Today</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {channels.map((channel) => (
                  <TableRow key={channel.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={channel.avatar} alt={channel.name} />
                          <AvatarFallback>{channel.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span>{channel.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {channel.subscribers.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {channel.viewsToday.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Channels</Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Comments */}
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Comments</CardTitle>
            <Badge variant="outline" className="ml-auto">
              <MessagesSquare className="mr-1 h-3 w-3" />
              {dashboardStats.pendingComments} pending
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {comments.slice(0, 3).map((comment) => (
                <div key={comment.id} className="flex gap-3 rounded-lg border p-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.authorAvatar} alt={comment.author} />
                    <AvatarFallback>{comment.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{comment.author}</div>
                      <Badge variant={comment.replied ? "secondary" : "outline"} className="ml-auto">
                        {comment.replied ? "Replied" : "Pending"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Comments</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

function StatCard({ title, value, change, positive }: StatCardProps) {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`flex items-center mt-1 text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
          <span>{change}</span> vs. last period
        </p>
      </CardContent>
    </Card>
  );
}

interface WorkflowCardProps {
  title: string;
  description: string;
  buttonText: string;
  badge?: string;
  href: string;
}

function WorkflowCard({ title, description, buttonText, badge, href }: WorkflowCardProps) {
  return (
    <Card className="bg-secondary">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {badge && (
            <Badge variant="outline">{badge}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-4">{description}</p>
        <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent-hover" asChild>
          <Link to={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

interface WorkflowTimelineItemProps {
  number: number;
  title: string;
  description: string;
  active?: boolean;
  completed?: boolean;
  href: string;
  badge?: string;
}

function WorkflowTimelineItem({ number, title, description, active = false, completed = false, href, badge }: WorkflowTimelineItemProps) {
  return (
    <div className="relative flex-1 text-center md:text-left mb-6 md:mb-0">
      <Link to={href} className="flex flex-col md:block items-center group">
        <div className={`
          w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mb-2
          ${active ? 'bg-red-600 text-white' : 'bg-secondary text-foreground'}
          ${completed ? 'bg-green-600 text-white' : ''}
          mx-auto md:mx-0
          group-hover:scale-105 transition-transform
        `}>
          {completed ? <CheckCircle className="w-6 h-6" /> : number}
        </div>
        <div>
          <div className="font-medium group-hover:text-red-600 transition-colors">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
          {badge && <Badge variant="secondary" className="mt-1">{badge}</Badge>}
        </div>
      </Link>
    </div>
  );
}

function WorkflowConnector() {
  return (
    <div className="hidden md:flex items-center justify-center flex-1 max-w-[80px]">
      <ChevronRight className="text-muted-foreground" />
    </div>
  );
}

export default Dashboard;
