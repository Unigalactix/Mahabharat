import React from 'react';

interface State {
  error: Error | null;
}

/**
 * Last-line-of-defence error boundary that wraps the whole app.
 * If any render throws, we show a devotional fallback panel with a Reload
 * button instead of leaving the user staring at a blank black page.
 *
 * This is what "fix the blank page forever" actually looks like — even a
 * future regression cannot produce a white/black screen, only this fallback.
 */
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('[Mahabharata Codex] Unhandled render error:', error, info);
  }

  private handleReload = () => {
    // Hard reload bypasses bfcache and forces a fresh bundle fetch.
    window.location.reload();
  };

  private handleHome = () => {
    window.location.hash = '/';
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-ink text-parchment">
          <div className="glass max-w-lg w-full p-8 text-center">
            <div className="text-6xl mb-4">🕉️</div>
            <p className="font-sanskrit text-goldlight/80 text-sm mb-2">
              क्षम्यतां जगन्नाथ
            </p>
            <h1 className="font-display text-gold text-2xl mb-3">
              Something went wrong
            </h1>
            <p className="text-parchment/70 text-sm leading-relaxed mb-2">
              The Codex hit an unexpected error while rendering this view.
              Your browser may have cached an older bundle. A reload should
              fix it instantly.
            </p>
            <p className="text-parchment/40 text-xs font-mono mb-6 break-words">
              {this.state.error.message}
            </p>
            <div className="flex gap-2 justify-center flex-wrap">
              <button
                type="button"
                onClick={this.handleReload}
                className="pill pill-active"
              >
                Reload
              </button>
              <button
                type="button"
                onClick={this.handleHome}
                className="pill"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
