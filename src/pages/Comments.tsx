
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, MessageSquare, Search, Sparkles, ThumbsUp, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { comments } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CommentsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{t("comments")}</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button className="bg-accent hover:bg-accent-hover">
            <MessageSquare className="mr-2 h-4 w-4" />
            Bulk Actions
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center gap-2 flex-1">
          <Input placeholder="Search comments..." className="max-w-sm" />
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Channel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Channels</SelectItem>
              <SelectItem value="tech">Tech Insights</SelectItem>
              <SelectItem value="game">Game Reviews</SelectItem>
              <SelectItem value="finance">Financial Freedom</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="likes">Most Likes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">
            Pending
            <Badge variant="secondary" className="ml-2">
              {comments.filter(c => !c.replied).length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="replied">Replied</TabsTrigger>
          <TabsTrigger value="all">All Comments</TabsTrigger>
          <TabsTrigger value="flagged">Flagged</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="mt-4">
          {comments.filter(c => !c.replied).map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </TabsContent>
        <TabsContent value="replied" className="mt-4">
          {comments.filter(c => c.replied).map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </TabsContent>
        <TabsContent value="all" className="mt-4">
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

function CommentCard({ comment }: { comment: any }) {
  return (
    <Card className="bg-card mb-4">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={comment.authorAvatar} alt={comment.author} />
              <AvatarFallback>{comment.author.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{comment.author}</div>
              <div className="text-xs text-muted-foreground">
                {new Date(comment.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={comment.replied ? "secondary" : "outline"}>
              {comment.replied ? "Replied" : "Pending"}
            </Badge>
            <div className="flex items-center gap-1 bg-secondary text-xs font-medium px-2 py-1 rounded">
              <ThumbsUp className="h-3 w-3" /> {comment.likes}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3 whitespace-pre-line">
          <p>{comment.content}</p>
        </div>
        
        {comment.replied ? (
          <div className="ml-6 mt-3 border-l-2 pl-3">
            <div className="text-xs text-muted-foreground mb-1">Your reply:</div>
            <p className="text-sm">Thank you for your feedback! We'll consider making a follow-up video on that topic.</p>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <Textarea placeholder="Write your reply..." className="text-sm" rows={2} />
            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Hide
                </Button>
                <Button className="bg-ai hover:bg-ai-hover" size="sm">
                  <Sparkles className="h-4 w-4 mr-1" />
                  AI Reply
                </Button>
              </div>
              <Button variant="default" size="sm">Reply</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default CommentsPage;
