
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadIcon, Calendar as CalendarIcon, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function UploadPage() {
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const [isScheduled, setIsScheduled] = useState(false);
  
  const handleAddThumbnail = () => {
    if (thumbnails.length < 3) {
      // In a real app, we would use a file upload dialog
      // For this demo, we're just adding placeholder images
      setThumbnails([...thumbnails, `/placeholder.svg?${Math.random()}`]);
    }
  };
  
  const handleRemoveThumbnail = (index: number) => {
    setThumbnails(thumbnails.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Upload</h1>
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
                      <Label htmlFor="channel">Channel</Label>
                      <select id="channel" className="w-full p-2 rounded-md border border-border bg-background">
                        <option>Gaming Channel</option>
                        <option>Tech Reviews</option>
                        <option>Cooking Tutorials</option>
                      </select>
                    </div>
                    
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
                    
                    {/* Thumbnail A/B Testing */}
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label>Thumbnails (A/B Testing)</Label>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          onClick={handleAddThumbnail}
                          disabled={thumbnails.length >= 3}
                        >
                          Add Thumbnail
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        {thumbnails.length === 0 && (
                          <div className="col-span-full border rounded-md p-8 border-dashed border-border text-center">
                            <ImageIcon className="w-10 h-10 mx-auto text-muted-foreground" />
                            <p className="text-sm text-muted-foreground mt-2">Add up to 3 thumbnails for A/B testing</p>
                          </div>
                        )}
                        
                        {thumbnails.map((thumbnail, index) => (
                          <div key={index} className="relative border rounded-md overflow-hidden group">
                            <img src={thumbnail} alt={`Thumbnail ${index + 1}`} className="w-full aspect-video object-cover" />
                            <div className="absolute top-1 right-1">
                              <Button 
                                type="button" 
                                variant="destructive" 
                                size="icon" 
                                className="w-6 h-6 rounded-full"
                                onClick={() => handleRemoveThumbnail(index)}
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
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
                    <select id="privacy" className="w-full p-2 rounded-md border border-border bg-background" defaultValue="unlisted">
                      <option value="public">Public</option>
                      <option value="unlisted">Unlisted</option>
                      <option value="private">Private</option>
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
                  
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="schedule"
                        checked={isScheduled}
                        onChange={(e) => setIsScheduled(e.target.checked)}
                        className="h-4 w-4 rounded border-border text-primary focus:ring-0"
                      />
                      <Label htmlFor="schedule">Schedule Upload</Label>
                    </div>
                    
                    {isScheduled && (
                      <div className="pt-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          <select className="p-2 border rounded-md bg-background">
                            <option>01</option>
                            <option>02</option>
                            {/* Add hours 1-12 */}
                          </select>
                          <select className="p-2 border rounded-md bg-background">
                            <option>00</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                          </select>
                          <select className="p-2 border rounded-md bg-background">
                            <option>AM</option>
                            <option>PM</option>
                          </select>
                        </div>
                      </div>
                    )}
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
