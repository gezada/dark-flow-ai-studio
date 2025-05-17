
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout";
import Dashboard from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChannelsPage from "./pages/Channels";
import IdeasPage from "./pages/Ideas";
import HeadlinesPage from "./pages/Headlines";
import ThumbnailsPage from "./pages/Thumbnails";
import ScriptsPage from "./pages/Scripts";
import UploadPage from "./pages/Upload";
import AnalyticsPage from "./pages/Analytics";
import CommentsPage from "./pages/Comments";
import SchedulerPage from "./pages/Scheduler";
import SettingsPage from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/channels" element={<ChannelsPage />} />
            <Route path="/ideas" element={<IdeasPage />} />
            <Route path="/headlines" element={<HeadlinesPage />} />
            <Route path="/thumbnails" element={<ThumbnailsPage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/comments" element={<CommentsPage />} />
            <Route path="/scheduler" element={<SchedulerPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
