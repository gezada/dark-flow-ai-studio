import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import App from './App';
import './index.css';
import './i18n';

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">Loading...</div>}>
    <App />
  </Suspense>
);