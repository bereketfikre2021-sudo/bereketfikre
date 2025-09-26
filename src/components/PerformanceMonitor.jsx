import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Zap, Clock, Wifi, WifiOff, X } from 'lucide-react';

const PerformanceMonitor = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    imageCount: 0,
    optimizedImages: 0,
    connectionSpeed: 'unknown',
    isOnline: navigator.onLine
  });

  useEffect(() => {
    // Monitor performance metrics
    const measurePerformance = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }

      // Count images
      const images = document.querySelectorAll('img');
      const optimizedImages = document.querySelectorAll('picture');
      setMetrics(prev => ({
        ...prev,
        imageCount: images.length,
        optimizedImages: optimizedImages.length
      }));

      // Detect connection speed
      if (navigator.connection) {
        const connection = navigator.connection;
        const speed = connection.effectiveType || 'unknown';
        setMetrics(prev => ({ ...prev, connectionSpeed: speed }));
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor online/offline status
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getPerformanceScore = () => {
    let score = 100;
    
    // Deduct points for slow load time
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 2000) score -= 10;
    else if (metrics.loadTime > 1000) score -= 5;

    // Deduct points for unoptimized images
    const optimizationRatio = metrics.optimizedImages / Math.max(metrics.imageCount, 1);
    if (optimizationRatio < 0.5) score -= 15;
    else if (optimizationRatio < 0.8) score -= 10;

    // Deduct points for slow connection
    if (metrics.connectionSpeed === 'slow-2g' || metrics.connectionSpeed === '2g') score -= 10;
    else if (metrics.connectionSpeed === '3g') score -= 5;

    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score) => {
    if (score >= 90) return 'bg-green-500/20 border-green-500/30';
    if (score >= 70) return 'bg-yellow-500/20 border-yellow-500/30';
    return 'bg-red-500/20 border-red-500/30';
  };

  return (
    <>
      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="fixed top-20 right-16 z-40 w-80 bg-primary/95 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-accent/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light">Performance</h3>
                    <p className="text-sm text-accent/60">Real-time metrics</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-accent/10 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-accent/60" />
                </button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="p-4 border-b border-accent/20">
              <div className={`p-4 rounded-lg border ${getScoreBg(performanceScore)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-light">Performance Score</span>
                  <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                    {performanceScore}
                  </span>
                </div>
                <div className="w-full bg-primary/30 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${
                      performanceScore >= 90 ? 'bg-green-400' :
                      performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${performanceScore}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-4 space-y-3">
              {/* Load Time */}
              <div className="flex items-center justify-between p-3 bg-primary/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-light">Load Time</span>
                </div>
                <span className="text-sm font-medium text-accent">
                  {metrics.loadTime > 0 ? `${(metrics.loadTime / 1000).toFixed(2)}s` : 'Measuring...'}
                </span>
              </div>

              {/* Image Optimization */}
              <div className="flex items-center justify-between p-3 bg-primary/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  <span className="text-sm text-light">Image Optimization</span>
                </div>
                <span className="text-sm font-medium text-accent">
                  {metrics.optimizedImages}/{metrics.imageCount}
                </span>
              </div>

              {/* Connection Status */}
              <div className="flex items-center justify-between p-3 bg-primary/30 rounded-lg">
                <div className="flex items-center gap-2">
                  {metrics.isOnline ? (
                    <Wifi className="w-4 h-4 text-green-400" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-red-400" />
                  )}
                  <span className="text-sm text-light">Connection</span>
                </div>
                <span className="text-sm font-medium text-accent">
                  {metrics.isOnline ? metrics.connectionSpeed : 'Offline'}
                </span>
              </div>
            </div>

            {/* Recommendations */}
            <div className="p-4 border-t border-accent/20">
              <h4 className="text-sm font-semibold text-light mb-2">Recommendations</h4>
              <div className="space-y-2">
                {performanceScore < 90 && (
                  <div className="text-xs text-accent/80">
                    • Consider enabling more image optimization
                  </div>
                )}
                {metrics.loadTime > 2000 && (
                  <div className="text-xs text-accent/80">
                    • Page load time could be improved
                  </div>
                )}
                {!metrics.isOnline && (
                  <div className="text-xs text-accent/80">
                    • You're currently offline
                  </div>
                )}
                {performanceScore >= 90 && (
                  <div className="text-xs text-green-400">
                    ✓ Excellent performance!
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;
