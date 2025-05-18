
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { channels, comments, ideas } from '@/lib/mock-data';

interface UIState {
  theme: 'dark' | 'light';
  locale: string;
  sidebarCollapsed: boolean;
  stepProgress: number;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setLocale: (locale: string) => void;
  setStepProgress: (step: number) => void;
}

interface DataState {
  channels: typeof channels;
  ideas: typeof ideas;
  comments: typeof comments;
  addChannel: (channel: any) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'dark',
      locale: 'en',
      sidebarCollapsed: false,
      stepProgress: 1,
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setTheme: (theme) => set({ theme }),
      setLocale: (locale) => set({ locale }),
      setStepProgress: (step) => set({ stepProgress: step }),
    }),
    {
      name: 'dark-hammer-ui',
    }
  )
);

export const useDataStore = create<DataState>((set) => ({
  channels: channels,
  ideas: ideas,
  comments: comments,
  addChannel: (channel) => set((state) => ({ 
    channels: [...state.channels, channel] 
  })),
}));
