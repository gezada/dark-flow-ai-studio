
export interface ChannelData {
  id: string;
  name: string;
  avatar: string;
  subscribers: number;
  totalViews: number;
  revenueEstimate: number;
  viewsToday: number;
  watchTime: number; // in minutes
  recentVideos: VideoData[];
}

export interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
  publishedAt: string;
  duration: string;
}

export interface IdeaData {
  id: string;
  title: string;
  description: string;
  potentialScore: 'low' | 'medium' | 'high';
  createdAt: string;
  tags: string[];
}

export interface CommentData {
  id: string;
  videoId: string;
  channelId: string;
  author: string;
  authorAvatar: string;
  content: string;
  likes: number;
  publishedAt: string;
  replied: boolean;
}

// Mock channel data for demonstration
export const channels: ChannelData[] = [
  {
    id: 'chan_1',
    name: 'Tech Insights',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=tech',
    subscribers: 256000,
    totalViews: 15400000,
    revenueEstimate: 12500,
    viewsToday: 45600,
    watchTime: 289000,
    recentVideos: Array(5).fill(null).map((_, i) => ({
      id: `vid_${i}_chan_1`,
      title: `Latest Tech Trends ${2023 + i}`,
      thumbnail: `https://picsum.photos/seed/tech${i}/300/150`,
      views: Math.floor(Math.random() * 100000) + 50000,
      likes: Math.floor(Math.random() * 10000) + 5000,
      comments: Math.floor(Math.random() * 1000) + 100,
      publishedAt: new Date(2023, i, 15).toISOString(),
      duration: `${Math.floor(Math.random() * 10) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    })),
  },
  {
    id: 'chan_2',
    name: 'Game Reviews',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=games',
    subscribers: 175000,
    totalViews: 9200000,
    revenueEstimate: 8750,
    viewsToday: 32400,
    watchTime: 211000,
    recentVideos: Array(5).fill(null).map((_, i) => ({
      id: `vid_${i}_chan_2`,
      title: `Review: Top Game ${i + 1} of ${2023}`,
      thumbnail: `https://picsum.photos/seed/game${i}/300/150`,
      views: Math.floor(Math.random() * 80000) + 20000,
      likes: Math.floor(Math.random() * 8000) + 2000,
      comments: Math.floor(Math.random() * 800) + 100,
      publishedAt: new Date(2023, i + 1, 5).toISOString(),
      duration: `${Math.floor(Math.random() * 15) + 10}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    })),
  },
  {
    id: 'chan_3',
    name: 'Financial Freedom',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=finance',
    subscribers: 320000,
    totalViews: 18700000,
    revenueEstimate: 16800,
    viewsToday: 51200,
    watchTime: 347000,
    recentVideos: Array(5).fill(null).map((_, i) => ({
      id: `vid_${i}_chan_3`,
      title: `Invest Smart: Strategy ${i + 1}`,
      thumbnail: `https://picsum.photos/seed/finance${i}/300/150`,
      views: Math.floor(Math.random() * 120000) + 60000,
      likes: Math.floor(Math.random() * 12000) + 6000,
      comments: Math.floor(Math.random() * 1500) + 200,
      publishedAt: new Date(2023, i + 2, 20).toISOString(),
      duration: `${Math.floor(Math.random() * 8) + 7}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    })),
  },
];

// Mock ideas data
export const ideas: IdeaData[] = [
  {
    id: 'idea_1',
    title: 'Top 10 Smartphone Features Coming in 2025',
    description: 'Coverage of the most anticipated smartphone features coming next year, including AI assistants, foldable advances, and battery tech.',
    potentialScore: 'high',
    createdAt: new Date(2023, 5, 12).toISOString(),
    tags: ['tech', 'smartphones', 'future', 'AI'],
  },
  {
    id: 'idea_2',
    title: 'Why High Refresh Rate Matters for Gaming',
    description: 'Explaining the importance of high refresh rates for gaming monitors and how it affects gameplay experience.',
    potentialScore: 'medium',
    createdAt: new Date(2023, 5, 14).toISOString(),
    tags: ['gaming', 'hardware', 'monitors'],
  },
  {
    id: 'idea_3',
    title: 'Budget Gaming PC Build Guide 2023',
    description: 'Step-by-step guide to building a gaming PC under $800 that can handle most modern games.',
    potentialScore: 'high',
    createdAt: new Date(2023, 5, 15).toISOString(),
    tags: ['gaming', 'PC build', 'budget', 'hardware'],
  },
  {
    id: 'idea_4',
    title: 'Cryptocurrency Trends to Watch',
    description: 'Analysis of emerging trends in cryptocurrency and which coins might be worth watching.',
    potentialScore: 'medium',
    createdAt: new Date(2023, 5, 18).toISOString(),
    tags: ['finance', 'crypto', 'blockchain', 'investment'],
  },
  {
    id: 'idea_5',
    title: 'How to Start Investing with Just $100',
    description: 'Guide for beginners on how to start investing with minimal capital and build wealth over time.',
    potentialScore: 'high',
    createdAt: new Date(2023, 5, 20).toISOString(),
    tags: ['finance', 'investing', 'beginner', 'wealth building'],
  },
];

// Mock comments data
export const comments: CommentData[] = [
  {
    id: 'comment_1',
    videoId: 'vid_0_chan_1',
    channelId: 'chan_1',
    author: 'TechEnthusiast',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechEnthusiast',
    content: 'Great video! I\'ve been waiting for a good explanation of these new features. Could you do a follow-up on battery technology?',
    likes: 245,
    publishedAt: new Date(2023, 6, 2).toISOString(),
    replied: false,
  },
  {
    id: 'comment_2',
    videoId: 'vid_1_chan_1',
    channelId: 'chan_1',
    author: 'GadgetGuru',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GadgetGuru',
    content: 'I disagree with your take on foldable phones. They\'re definitely the future and many manufacturers are investing heavily in this technology.',
    likes: 87,
    publishedAt: new Date(2023, 6, 3).toISOString(),
    replied: true,
  },
  {
    id: 'comment_3',
    videoId: 'vid_0_chan_2',
    channelId: 'chan_2',
    author: 'GameMaster',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GameMaster',
    content: 'This game deserves a 9/10 at least! The graphics and storyline are amazing.',
    likes: 154,
    publishedAt: new Date(2023, 6, 1).toISOString(),
    replied: false,
  },
  {
    id: 'comment_4',
    videoId: 'vid_2_chan_2',
    channelId: 'chan_2',
    author: 'CasualGamer',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CasualGamer',
    content: 'I bought this game based on your review and was really disappointed. The controls are clunky and there are too many microtransactions.',
    likes: 32,
    publishedAt: new Date(2023, 6, 4).toISOString(),
    replied: false,
  },
  {
    id: 'comment_5',
    videoId: 'vid_0_chan_3',
    channelId: 'chan_3',
    author: 'MoneyMinded',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MoneyMinded',
    content: 'Thanks for the investment tips! I've been using your strategy for 3 months and already seeing good returns.',
    likes: 312,
    publishedAt: new Date(2023, 6, 2).toISOString(),
    replied: true,
  },
];

// Dashboard stats summary
export const dashboardStats = {
  totalViews: channels.reduce((sum, channel) => sum + channel.viewsToday, 0),
  totalSubscribers: channels.reduce((sum, channel) => sum + channel.subscribers, 0),
  totalWatchTime: channels.reduce((sum, channel) => sum + channel.watchTime, 0),
  totalRevenue: channels.reduce((sum, channel) => sum + channel.revenueEstimate, 0),
  pendingComments: comments.filter(c => !c.replied).length,
  scheduledVideos: 7,
  ideasCount: ideas.length,
  channelsCount: channels.length,
};

// Mock chart data for analytics
export const viewsChartData = Array(30).fill(null).map((_, i) => ({
  date: new Date(2023, 5, i + 1).toISOString().split('T')[0],
  views: Math.floor(Math.random() * 50000) + 20000
}));

export const subscribersChartData = Array(30).fill(null).map((_, i) => ({
  date: new Date(2023, 5, i + 1).toISOString().split('T')[0],
  subscribers: 250000 + (i * 300) + Math.floor(Math.random() * 200)
}));
