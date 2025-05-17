
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadIcon } from "lucide-react";

export default function UploadPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t("upload")}</h1>
      </div>

      <Tabs defaultValue="upload">
        <TabsList>
          <TabsTrigger value="upload">{t("upload")}</TabsTrigger>
          <TabsTrigger value="scheduled">{t("scheduled")}</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <Card className="bg-card lg:col-span-2">
              <CardHeader>
                <CardTitle>{t("videoUpload")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                    <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Drag and drop your video</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        or click to browse your files
                      </p>
                    </div>
                    <Button variant="default" className="mt-4">
                      Select File
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter video title" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Input id="description" placeholder="Enter video description" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input id="tags" placeholder="Enter tags separated by commas" />
                    </div>
                    <Button className="w-full">
                      Upload Video
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Upload Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="privacy">Privacy</Label>
                    <select id="privacy" className="w-full p-2 rounded-md border border-border bg-background">
                      <option>Public</option>
                      <option>Unlisted</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <select id="category" className="w-full p-2 rounded-md border border-border bg-background">
                      <option>Education</option>
                      <option>Entertainment</option>
                      <option>Gaming</option>
                      <option>Music</option>
                      <option>Tech</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="playlist">Playlist</Label>
                    <select id="playlist" className="w-full p-2 rounded-md border border-border bg-background">
                      <option>None</option>
                      <option>Tutorials</option>
                      <option>Vlogs</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="scheduled">
          <Card className="bg-card mt-6">
            <CardHeader>
              <CardTitle>Scheduled Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold">No scheduled videos</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Your scheduled videos will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
