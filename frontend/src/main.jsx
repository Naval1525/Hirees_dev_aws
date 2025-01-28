
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


// Lazy load components with explicit imports
const App = lazy(() => /* @vite-ignore */ import('./App.jsx'));
const Toaster = lazy(() =>
  import('./components/ui/sonner.jsx').then(module => ({
    default: module.Toaster
  }))
);

// Loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
      {/* Brand Section */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-5xl font-bold text-blue-600">
          Hirees
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2" />
      </div>

      {/* Loading Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl w-full max-w-lg animate-slide-up">
        {/* Spinner */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Status */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Initializing Your Experience
          </h2>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-progress" />
          </div>

          <p className="text-sm text-gray-600 text-center">
            Please wait while we redirect you to your requested page
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center animate-fade-in">
        <p className="text-sm text-gray-500">
          Optimizing your experience for the best performance
        </p>
      </div>
    </div>

    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slide-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes progress {
        0% { width: 0%; }
        100% { width: 100%; }
      }

      .animate-fade-in {
        animation: fade-in 0.5s ease-out forwards;
      }

      .animate-slide-up {
        animation: slide-up 0.5s ease-out forwards;
      }

      .animate-progress {
        animation: progress 2s linear infinite;
      }
    `}</style>
  </div>
);


export default LoadingSpinner;

const persistor = persistStore(store);

// Preload critical components with explicit imports
const preloadComponents = () => {
  const preloadApp = () => import('./App.jsx');
  const preloadToaster = () => import('./components/ui/sonner.jsx');

  Promise.all([
    preloadApp(),
    preloadToaster()
  ]).catch(error => {
    console.error('Error preloading components:', error);
  });
};

// Initialize root with lazy loading
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <Suspense fallback={<LoadingSpinner />}>
          <App />
          <Suspense fallback={null}>
            <Toaster />
          </Suspense>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// Preload components after initial render
if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(preloadComponents);
} else {
  setTimeout(preloadComponents, 1000);
}