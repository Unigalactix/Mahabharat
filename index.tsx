
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// HashRouter is used because the site is served from GitHub Pages at a
// sub-path (/Mahabharat/) and deep-links must survive a hard refresh
// without a SPA fallback file.
//
// ErrorBoundary is the last line of defence: a runtime exception can never
// produce a blank page again — the worst case is a devotional "something
// went wrong, reload" panel.
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
