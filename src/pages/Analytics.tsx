
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, BarChart, Calendar, Filter } from "lucide-react";
import { channels, viewsChartData, subscribersChartData } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar } from 'recharts';

const AnalyticsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("analytics")}</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Views" 
          value="2.7M"
          change="+12.5%" 
          positive={true} 
        />
        <StatCard 
          title="Watch Time" 
          value="156K hrs"
          change="+8.3%" 
          positive={true} 
        />
        <StatCard 
          title="Avg. CTR" 
          value="4.7%"
          change="-0.8%" 
          positive={false} 
        />
        <StatCard 
          title="Revenue" 
          value="$38.2K"
          change="+15.2%" 
          positive={true} 
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Views</CardTitle>
              <Select defaultValue="all">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Channels</SelectItem>
                  {channels.map(channel => (
                    <SelectItem key={channel.id} value={channel.id}>
                      {channel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={viewsChartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
                <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 12 }} tickLine={{ stroke: '#444' }} />
                <YAxis tick={{ fill: '#888', fontSize: 12 }} tickLine={{ stroke: '#444' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#222', borderColor: '#444', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="views" stroke="#FF0000" fill="#FF0000" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Subscribers</CardTitle>
              <Select defaultValue="all">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Channels</SelectItem>
                  {channels.map(channel => (
                    <SelectItem key={channel.id} value={channel.id}>
                      {channel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={subscribersChartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
                <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 12 }} tickLine={{ stroke: '#444' }} />
                <YAxis tick={{ fill: '#888', fontSize: 12 }} tickLine={{ stroke: '#444' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#222', borderColor: '#444', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="subscribers" stroke="#8A2BE2" fill="#8A2BE2" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-card">
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Performance by Video</CardTitle>
            <Tabs defaultValue="views">
              <TabsList>
                <TabsTrigger value="views">Views</TabsTrigger>
                <TabsTrigger value="watchTime">Watch Time</TabsTrigger>
                <TabsTrigger value="ctr">CTR</TabsTrigger>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={channels.flatMap(channel => 
                  channel.recentVideos.slice(0, 2).map(video => ({
                    title: video.title,
                    views: video.views
                  }))
                )}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 70,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
                <XAxis 
                  dataKey="title" 
                  tick={{ fill: '#888', fontSize: 12 }} 
                  tickLine={{ stroke: '#444' }}
                  angle={-45}
                  textAnchor="end"
                  height={70}
                />
                <YAxis tick={{ fill: '#888', fontSize: 12 }} tickLine={{ stroke: '#444' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#222', borderColor: '#444', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                <Bar dataKey="views" fill="#FF0000" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
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
          {positive ? (
            <ArrowUp className="mr-1 h-3 w-3" />
          ) : (
            <ArrowDown className="mr-1 h-3 w-3" />
          )}
          <span>{change}</span> vs. prev. period
        </p>
      </CardContent>
    </Card>
  );
}

export default AnalyticsPage;
