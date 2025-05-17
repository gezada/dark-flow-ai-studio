
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload as UploadIcon, Calendar, Check, Image } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UploadPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("upload")}</h1>
        <Button variant="default" className="bg-accent hover:bg-accent-hover">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule
        </Button>
      </div>

      <Tabs defaultValue="upload">
        <TabsList>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <Card className="bg-card lg:col-span-2">
              <CardHeader>
                <CardTitle>Video Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                    <UploadIcon className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-1">Drop your video file here</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supports MP4, MOV up to 10GB
                    </p>
                    <Button variant="outline">Select Video</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter video title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Enter video description" rows={5} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input id="tags" placeholder="tech, smartphones, review" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Channel Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <ChannelOption
                      name="Tech Insights"
                      subscribers="256K"
                      selected={true}
                    />
                    <ChannelOption
                      name="Game Reviews"
                      subscribers="175K"
                      selected={false}
                    />
                    <ChannelOption
                      name="Financial Freedom"
                      subscribers="320K"
                      selected={false}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Thumbnail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                      <Image className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground text-center">
                        Drop thumbnail or click to browse
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Select from Library
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="scheduled">
          <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md mt-6">
            <p className="text-muted-foreground">No videos currently scheduled</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ChannelOptionProps {
  name: string;
  subscribers: string;
  selected: boolean;
}

function ChannelOption({ name, subscribers, selected }: ChannelOptionProps) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-md ${selected ? 'bg-secondary' : 'hover:bg-secondary/50'}`}>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mr-3">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{subscribers} subscribers</p>
        </div>
      </div>
      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${selected ? 'bg-accent text-white' : 'border'}`}>
        {selected && <Check className="h-3 w-3" />}
      </div>
    </div>
  );
}

export default UploadPage;
