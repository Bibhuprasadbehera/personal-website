import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'

console.log("Script loaded: main.jsx");

try {
  const rootElement = document.getElementById('root');
  console.log("Root element found:", rootElement);

  if (!rootElement) {
    throw new Error("Root element not found!");
  }

  const root = createRoot(rootElement);
  console.log("React Root created");

  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
  console.log("Render called");
} catch (error) {
  console.error("CRITICAL ERROR IN MAIN.JSX:", error);
  document.body.innerHTML = `<div style="color: red; padding: 20px;"><h1>Critical Error</h1><pre>${error.message}\n${error.stack}</pre></div>`;
}
