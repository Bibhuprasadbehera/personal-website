import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full bg-bio-panel border border-red-500/30 rounded-2xl p-8 md:p-12">
                        <div className="text-center">
                            <div className="inline-block p-4 rounded-full bg-red-500/10 mb-6">
                                <svg className="w-16 h-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h1>
                            <p className="text-gray-400 mb-8">
                                The application encountered an unexpected error. Don't worry, this has been logged.
                            </p>

                            {this.state.error && (
                                <details className="text-left mb-8">
                                    <summary className="cursor-pointer text-bio-green font-mono text-sm mb-2">
                                        Technical Details
                                    </summary>
                                    <pre className="bg-bio-dark p-4 rounded-lg overflow-x-auto text-xs text-gray-400 border border-white/10">
                                        {this.state.error.toString()}
                                    </pre>
                                </details>
                            )}

                            <button
                                onClick={() => window.location.reload()}
                                className="px-8 py-3 rounded-lg bg-bio-green text-bio-dark font-bold hover:bg-bio-green/90 transition-colors"
                            >
                                Reload Page
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
