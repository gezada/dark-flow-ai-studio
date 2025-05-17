
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, FileImage, Upload as UploadIcon, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { channels } from "@/lib/mock-data";

const UploadPage = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [privacyStatus, setPrivacyStatus] = useState<"public" | "unlisted" | "private">("unlisted");
  const [thumbnail1, setThumbnail1] = useState<File | null>(null);
  const [thumbnail2, setThumbnail2] = useState<File | null>(null);
  const [thumbnail3, setThumbnail3] = useState<File | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<1 | 2 | 3>(1);
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(undefined);
  const [scheduleVideo, setScheduleVideo] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  
  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>, thumbnailNumber: 1 | 2 | 3) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (thumbnailNumber === 1) setThumbnail1(file);
      else if (thumbnailNumber === 2) setThumbnail2(file);
      else if (thumbnailNumber === 3) setThumbnail3(file);
      
      setSelectedThumbnail(thumbnailNumber);
    }
  };

  const removeThumbnail = (thumbnailNumber: 1 | 2 | 3) => {
    if (thumbnailNumber === 1) setThumbnail1(null);
    else if (thumbnailNumber === 2) setThumbnail2(null);
    else if (thumbnailNumber === 3) setThumbnail3(null);
    
    // If we're removing the currently selected thumbnail, select another one
    if (selectedThumbnail === thumbnailNumber) {
      if (thumbnailNumber === 1 && thumbnail2) setSelectedThumbnail(2);
      else if (thumbnailNumber === 2 && thumbnail1) setSelectedThumbnail(1);
      else if (thumbnailNumber === 3 && thumbnail1) setSelectedThumbnail(1);
      else if (thumbnailNumber === 3 && thumbnail2) setSelectedThumbnail(2);
    }
  };

  const generateThumbnailPreview = (file: File | null) => {
    if (!file) return null;
    return URL.createObjectURL(file);
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Upload Video</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-red-600 hover:bg-red-700">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Channel Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Channel</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedChannel} onValueChange={setSelectedChannel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a channel" />
                </SelectTrigger>
                <SelectContent>
                  {channels.map(channel => (
                    <SelectItem key={channel.id} value={channel.id.toString()}>
                      <div className="flex items-center gap-2">
                        <img src={channel.avatar} alt={channel.name} className="w-6 h-6 rounded-full" />
                        <span>{channel.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          
          {/* Video Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Video File</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center">
                {videoFile ? (
                  <div className="space-y-4">
                    <Badge className="bg-green-600">{videoFile.name}</Badge>
                    <p className="text-sm text-muted-foreground">
                      Size: {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                    <Button variant="outline" onClick={() => setVideoFile(null)}>
                      <X className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <UploadIcon size={48} className="text-muted-foreground" />
                    </div>
                    <p className="text-lg">Drag and drop your video file here</p>
                    <p className="text-sm text-muted-foreground">or</p>
                    <div>
                      <Input
                        type="file"
                        id="video-upload"
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                      />
                      <Label htmlFor="video-upload" asChild>
                        <Button variant="outline">Select File</Button>
                      </Label>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Video Details */}
          <Card>
            <CardHeader>
              <CardTitle>Video Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  value={videoTitle} 
                  onChange={(e) => setVideoTitle(e.target.value)} 
                  placeholder="Enter a title that will grab viewers' attention"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={videoDescription} 
                  onChange={(e) => setVideoDescription(e.target.value)} 
                  placeholder="Describe your video for viewers and search engines" 
                  rows={6}
                />
              </div>
              
              <div>
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {tag}
                      <X 
                        className="ml-2 h-3 w-3 cursor-pointer" 
                        onClick={() => handleRemoveTag(tag)} 
                      />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input 
                    value={currentTag} 
                    onChange={(e) => setCurrentTag(e.target.value)} 
                    placeholder="Add a tag" 
                    onKeyDown={handleKeyDown}
                  />
                  <Button variant="outline" onClick={handleAddTag}>Add</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Thumbnails */}
          <Card>
            <CardHeader>
              <CardTitle>Thumbnails A/B Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Upload up to 3 different thumbnails to test which performs better. YouTube will automatically optimize for the best performing thumbnail.
              </p>
              
              <Tabs defaultValue="thumbnail1">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger 
                      value="thumbnail1" 
                      disabled={!thumbnail1}
                      onClick={() => setSelectedThumbnail(1)}
                    >
                      Thumbnail 1
                    </TabsTrigger>
                    <TabsTrigger 
                      value="thumbnail2" 
                      disabled={!thumbnail2}
                      onClick={() => setSelectedThumbnail(2)}
                    >
                      Thumbnail 2
                    </TabsTrigger>
                    <TabsTrigger 
                      value="thumbnail3" 
                      disabled={!thumbnail3}
                      onClick={() => setSelectedThumbnail(3)}
                    >
                      Thumbnail 3
                    </TabsTrigger>
                  </TabsList>
                  <Badge variant={selectedThumbnail === 1 ? "default" : "secondary"}>
                    {selectedThumbnail === 1 ? "Selected" : ""}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Thumbnail 1 */}
                  <div className={`border rounded-lg p-2 ${selectedThumbnail === 1 ? 'ring-2 ring-red-600' : ''}`}>
                    {thumbnail1 ? (
                      <div className="relative">
                        <img 
                          src={generateThumbnailPreview(thumbnail1)} 
                          alt="Thumbnail 1" 
                          className="w-full h-auto rounded aspect-video object-cover"
                        />
                        <Button 
                          size="icon" 
                          variant="destructive" 
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeThumbnail(1)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant={selectedThumbnail === 1 ? "default" : "outline"} 
                          className="mt-2 w-full"
                          onClick={() => setSelectedThumbnail(1)}
                        >
                          {selectedThumbnail === 1 ? "Selected" : "Select"}
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-32 bg-secondary rounded">
                        <Input
                          type="file"
                          id="thumbnail1-upload"
                          accept="image/*"
                          onChange={(e) => handleThumbnailUpload(e, 1)}
                          className="hidden"
                        />
                        <Label htmlFor="thumbnail1-upload" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-2">
                            <FileImage className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm">Upload Thumbnail 1</span>
                          </div>
                        </Label>
                      </div>
                    )}
                  </div>
                  
                  {/* Thumbnail 2 */}
                  <div className={`border rounded-lg p-2 ${selectedThumbnail === 2 ? 'ring-2 ring-red-600' : ''}`}>
                    {thumbnail2 ? (
                      <div className="relative">
                        <img 
                          src={generateThumbnailPreview(thumbnail2)} 
                          alt="Thumbnail 2" 
                          className="w-full h-auto rounded aspect-video object-cover"
                        />
                        <Button 
                          size="icon" 
                          variant="destructive" 
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeThumbnail(2)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant={selectedThumbnail === 2 ? "default" : "outline"} 
                          className="mt-2 w-full"
                          onClick={() => setSelectedThumbnail(2)}
                        >
                          {selectedThumbnail === 2 ? "Selected" : "Select"}
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-32 bg-secondary rounded">
                        <Input
                          type="file"
                          id="thumbnail2-upload"
                          accept="image/*"
                          onChange={(e) => handleThumbnailUpload(e, 2)}
                          className="hidden"
                        />
                        <Label htmlFor="thumbnail2-upload" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-2">
                            <FileImage className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm">Upload Thumbnail 2</span>
                          </div>
                        </Label>
                      </div>
                    )}
                  </div>
                  
                  {/* Thumbnail 3 */}
                  <div className={`border rounded-lg p-2 ${selectedThumbnail === 3 ? 'ring-2 ring-red-600' : ''}`}>
                    {thumbnail3 ? (
                      <div className="relative">
                        <img 
                          src={generateThumbnailPreview(thumbnail3)} 
                          alt="Thumbnail 3" 
                          className="w-full h-auto rounded aspect-video object-cover"
                        />
                        <Button 
                          size="icon" 
                          variant="destructive" 
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeThumbnail(3)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant={selectedThumbnail === 3 ? "default" : "outline"} 
                          className="mt-2 w-full"
                          onClick={() => setSelectedThumbnail(3)}
                        >
                          {selectedThumbnail === 3 ? "Selected" : "Select"}
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-32 bg-secondary rounded">
                        <Input
                          type="file"
                          id="thumbnail3-upload"
                          accept="image/*"
                          onChange={(e) => handleThumbnailUpload(e, 3)}
                          className="hidden"
                        />
                        <Label htmlFor="thumbnail3-upload" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-2">
                            <FileImage className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm">Upload Thumbnail 3</span>
                          </div>
                        </Label>
                      </div>
                    )}
                  </div>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="privacy-public" className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    id="privacy-public" 
                    name="privacy" 
                    value="public" 
                    checked={privacyStatus === "public"} 
                    onChange={() => setPrivacyStatus("public")} 
                    className="h-4 w-4"
                  />
                  Public
                </Label>
                <span className="text-xs text-muted-foreground">Anyone can view</span>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="privacy-unlisted" className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    id="privacy-unlisted" 
                    name="privacy" 
                    value="unlisted" 
                    checked={privacyStatus === "unlisted"} 
                    onChange={() => setPrivacyStatus("unlisted")} 
                    className="h-4 w-4"
                  />
                  Unlisted
                </Label>
                <span className="text-xs text-muted-foreground">Anyone with the link can view</span>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="privacy-private" className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    id="privacy-private" 
                    name="privacy" 
                    value="private" 
                    checked={privacyStatus === "private"} 
                    onChange={() => setPrivacyStatus("private")} 
                    className="h-4 w-4"
                  />
                  Private
                </Label>
                <span className="text-xs text-muted-foreground">Only you can view</span>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Schedule</CardTitle>
                <div className="flex items-center gap-2">
                  <Switch id="schedule-switch" checked={scheduleVideo} onCheckedChange={setScheduleVideo} />
                  <Label htmlFor="schedule-switch">
                    {scheduleVideo ? 'Scheduled' : 'Upload now'}
                  </Label>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {scheduleVideo ? (
                <div className="space-y-4">
                  <div>
                    <Label>Publication date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {scheduledDate ? format(scheduledDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={scheduledDate}
                          onSelect={setScheduledDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label htmlFor="time">Publication time</Label>
                    <Select defaultValue="12:00">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Time zone</Label>
                    <Select defaultValue="gmt">
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                        <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                        <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                        <SelectItem value="cet">CET (Central European Time)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Your video will be published immediately after processing is complete.
                </p>
              )}
            </CardContent>
          </Card>
          
          {/* Advanced Options */}
          <Card>
            <CardHeader>
              <CardTitle>Advanced Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Switch id="comments-switch" defaultChecked />
                <Label htmlFor="comments-switch">Allow comments</Label>
              </div>
              
              <Separator />
              
              <div className="flex items-center gap-2">
                <Switch id="display-switch" defaultChecked />
                <Label htmlFor="display-switch">Display likes and views</Label>
              </div>
              
              <Separator />
              
              <div className="flex items-center gap-2">
                <Switch id="recommend-switch" defaultChecked />
                <Label htmlFor="recommend-switch">Show in recommendations</Label>
              </div>
            </CardContent>
          </Card>
          
          {/* Upload Button */}
          <Button className="w-full bg-red-600 hover:bg-red-700">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload Video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
