import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, BarChart3, TrendingUp, Users, Eye, MousePointer, Globe, Clock, Smartphone, Monitor, Download, Share, Heart, MessageCircle, Star, Calendar, Filter, RefreshCw } from 'lucide-react';

const AnalyticsDashboard = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);

  // Mock analytics data - in real implementation, this would come from your analytics service
  const analyticsData = {
    overview: {
      totalViews: 12450,
      uniqueVisitors: 8930,
      avgSessionDuration: '3:24',
      bounceRate: 23.5,
      conversionRate: 8.2,
      topPages: [
        { page: '/', views: 3450, percentage: 27.7 },
        { page: '/#work', views: 2890, percentage: 23.2 },
        { page: '/#about', views: 2100, percentage: 16.9 },
        { page: '/#contact', views: 1890, percentage: 15.2 },
        { page: '/#services', views: 2120, percentage: 17.0 }
      ],
      trafficSources: [
        { source: 'Direct', visitors: 4560, percentage: 51.1 },
        { source: 'Google Search', visitors: 2890, percentage: 32.4 },
        { source: 'Social Media', visitors: 980, percentage: 11.0 },
        { source: 'Referrals', visitors: 500, percentage: 5.6 }
      ],
      deviceBreakdown: [
        { device: 'Desktop', visitors: 5350, percentage: 59.9 },
        { device: 'Mobile', visitors: 3120, percentage: 34.9 },
        { device: 'Tablet', visitors: 460, percentage: 5.2 }
      ]
    },
    engagement: {
      videoViews: 2340,
      videoCompletionRate: 78.5,
      caseStudyViews: 1890,
      contactFormSubmissions: 45,
      newsletterSignups: 120,
      socialShares: 89,
      timeOnPage: {
        home: '2:45',
        work: '4:12',
        about: '1:58',
        contact: '3:30'
      },
      userInteractions: [
        { action: 'Portfolio View', count: 1890, trend: '+12%' },
        { action: 'Case Study Open', count: 1200, trend: '+8%' },
        { action: 'Video Play', count: 2340, trend: '+25%' },
        { action: 'Contact Form', count: 45, trend: '+15%' },
        { action: 'Download CV', count: 89, trend: '+5%' }
      ]
    },
    performance: {
      pageLoadTime: 1.2,
      coreWebVitals: {
        lcp: 1.8,
        fid: 45,
        cls: 0.05
      },
      seoScore: 94,
      accessibilityScore: 98,
      bestPracticesScore: 96,
      performanceScore: 89,
      pwaScore: 92
    },
    userBehavior: {
      heatmapData: [
        { element: 'Hero CTA', clicks: 890, percentage: 23.4 },
        { element: 'Portfolio Cards', clicks: 2340, percentage: 61.5 },
        { element: 'Contact Form', clicks: 450, percentage: 11.8 },
        { element: 'Social Links', clicks: 130, percentage: 3.4 }
      ],
      scrollDepth: {
        '0-25%': 100,
        '25-50%': 89.2,
        '50-75%': 67.8,
        '75-100%': 45.3
      },
      exitPages: [
        { page: '/#work', exits: 234, percentage: 18.7 },
        { page: '/#contact', exits: 189, percentage: 15.1 },
        { page: '/#about', exits: 156, percentage: 12.5 }
      ]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'engagement', label: 'Engagement', icon: Users },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'behavior', label: 'User Behavior', icon: MousePointer }
  ];

  const timeRanges = [
    { id: '24h', label: '24 Hours' },
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-green-400';
    if (trend.startsWith('-')) return 'text-red-400';
    return 'text-accent/60';
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden bg-primary rounded-2xl border border-accent/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-primary/95 backdrop-blur-sm border-b border-accent/20 p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-light">Analytics Dashboard</h2>
                <p className="text-accent/80">Real-time insights into your website performance</p>
              </div>
              <div className="flex items-center gap-4">
                {/* Time Range Selector */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-accent/60" />
                  <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="bg-primary/50 border border-accent/20 rounded-lg px-3 py-2 text-light text-sm"
                  >
                    {timeRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-accent" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-accent text-primary shadow-lg'
                        : 'text-accent hover:text-light hover:bg-accent/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-accent/60 text-sm">Total Views</p>
                            <p className="text-2xl font-bold text-light">{formatNumber(analyticsData.overview.totalViews)}</p>
                            <p className="text-green-400 text-sm">+12.5%</p>
                          </div>
                          <Eye className="w-8 h-8 text-accent/60" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-accent/60 text-sm">Unique Visitors</p>
                            <p className="text-2xl font-bold text-light">{formatNumber(analyticsData.overview.uniqueVisitors)}</p>
                            <p className="text-green-400 text-sm">+8.3%</p>
                          </div>
                          <Users className="w-8 h-8 text-accent/60" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-accent/60 text-sm">Avg. Session</p>
                            <p className="text-2xl font-bold text-light">{analyticsData.overview.avgSessionDuration}</p>
                            <p className="text-green-400 text-sm">+15.2%</p>
                          </div>
                          <Clock className="w-8 h-8 text-accent/60" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-accent/60 text-sm">Conversion Rate</p>
                            <p className="text-2xl font-bold text-light">{analyticsData.overview.conversionRate}%</p>
                            <p className="text-green-400 text-sm">+3.1%</p>
                          </div>
                          <TrendingUp className="w-8 h-8 text-accent/60" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Top Pages */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="bg-primary/50 border-accent/20">
                      <CardHeader>
                        <CardTitle className="text-light">Top Pages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {analyticsData.overview.topPages.map((page, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-accent/60 text-sm w-6">{index + 1}</span>
                                <span className="text-light text-sm">{page.page}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-20 h-2 bg-accent/20 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-accent rounded-full"
                                    style={{ width: `${page.percentage}%` }}
                                  />
                                </div>
                                <span className="text-accent/60 text-sm w-12 text-right">{page.views}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardHeader>
                        <CardTitle className="text-light">Traffic Sources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {analyticsData.overview.trafficSources.map((source, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Globe className="w-4 h-4 text-accent/60" />
                                <span className="text-light text-sm">{source.source}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-20 h-2 bg-accent/20 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-accent rounded-full"
                                    style={{ width: `${source.percentage}%` }}
                                  />
                                </div>
                                <span className="text-accent/60 text-sm w-12 text-right">{source.percentage}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Device Breakdown */}
                  <Card className="bg-primary/50 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-light">Device Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {analyticsData.overview.deviceBreakdown.map((device, index) => (
                          <div key={index} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                              {device.device === 'Desktop' ? (
                                <Monitor className="w-8 h-8 text-accent" />
                              ) : device.device === 'Mobile' ? (
                                <Smartphone className="w-8 h-8 text-accent" />
                              ) : (
                                <Monitor className="w-8 h-8 text-accent" />
                              )}
                            </div>
                            <p className="text-light font-semibold">{device.device}</p>
                            <p className="text-2xl font-bold text-accent">{device.percentage}%</p>
                            <p className="text-accent/60 text-sm">{formatNumber(device.visitors)} visitors</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'engagement' && (
                <motion.div
                  key="engagement"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Engagement Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-accent/60 text-sm">Video Views</p>
                            <p className="text-2xl font-bold text-light">{formatNumber(analyticsData.engagement.videoViews)}</p>
                            <p className="text-green-400 text-sm">+25.3%</p>
                          </div>
                          <Eye className="w-8 h-8 text-accent/60" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-accent/60 text-sm">Case Study Views</p>
                            <p className="text-2xl font-bold text-light">{formatNumber(analyticsData.engagement.caseStudyViews)}</p>
                            <p className="text-green-400 text-sm">+18.7%</p>
                          </div>
                          <BarChart3 className="w-8 h-8 text-accent/60" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-accent/60 text-sm">Contact Forms</p>
                            <p className="text-2xl font-bold text-light">{analyticsData.engagement.contactFormSubmissions}</p>
                            <p className="text-green-400 text-sm">+15.2%</p>
                          </div>
                          <MessageCircle className="w-8 h-8 text-accent/60" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* User Interactions */}
                  <Card className="bg-primary/50 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-light">User Interactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analyticsData.engagement.userInteractions.map((interaction, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-primary/30 rounded-lg">
                            <div>
                              <p className="text-light font-medium">{interaction.action}</p>
                              <p className="text-accent/60 text-sm">{interaction.count} interactions</p>
                            </div>
                            <div className="text-right">
                              <p className={`text-sm font-medium ${getTrendColor(interaction.trend)}`}>
                                {interaction.trend}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'performance' && (
                <motion.div
                  key="performance"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Performance Scores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-400">{analyticsData.performance.seoScore}</span>
                        </div>
                        <p className="text-light font-semibold">SEO Score</p>
                        <p className="text-accent/60 text-sm">Excellent</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-blue-400">{analyticsData.performance.performanceScore}</span>
                        </div>
                        <p className="text-light font-semibold">Performance</p>
                        <p className="text-accent/60 text-sm">Good</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-purple-400">{analyticsData.performance.accessibilityScore}</span>
                        </div>
                        <p className="text-light font-semibold">Accessibility</p>
                        <p className="text-accent/60 text-sm">Excellent</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/50 border-accent/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-orange-400">{analyticsData.performance.pwaScore}</span>
                        </div>
                        <p className="text-light font-semibold">PWA Score</p>
                        <p className="text-accent/60 text-sm">Excellent</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Core Web Vitals */}
                  <Card className="bg-primary/50 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-light">Core Web Vitals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-green-400">{analyticsData.performance.coreWebVitals.lcp}s</span>
                          </div>
                          <p className="text-light font-semibold">LCP</p>
                          <p className="text-accent/60 text-sm">Largest Contentful Paint</p>
                          <Badge className="bg-green-500/20 text-green-400 mt-2">Good</Badge>
                        </div>

                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-green-400">{analyticsData.performance.coreWebVitals.fid}ms</span>
                          </div>
                          <p className="text-light font-semibold">FID</p>
                          <p className="text-accent/60 text-sm">First Input Delay</p>
                          <Badge className="bg-green-500/20 text-green-400 mt-2">Good</Badge>
                        </div>

                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-green-400">{analyticsData.performance.coreWebVitals.cls}</span>
                          </div>
                          <p className="text-light font-semibold">CLS</p>
                          <p className="text-accent/60 text-sm">Cumulative Layout Shift</p>
                          <Badge className="bg-green-500/20 text-green-400 mt-2">Good</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'behavior' && (
                <motion.div
                  key="behavior"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Heatmap Data */}
                  <Card className="bg-primary/50 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-light">Click Heatmap</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analyticsData.userBehavior.heatmapData.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-primary/30 rounded-lg">
                            <div>
                              <p className="text-light font-medium">{item.element}</p>
                              <p className="text-accent/60 text-sm">{item.clicks} clicks</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-20 h-2 bg-accent/20 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-accent rounded-full"
                                  style={{ width: `${item.percentage}%` }}
                                />
                              </div>
                              <span className="text-accent/60 text-sm w-12 text-right">{item.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Scroll Depth */}
                  <Card className="bg-primary/50 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-light">Scroll Depth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(analyticsData.userBehavior.scrollDepth).map(([depth, percentage]) => (
                          <div key={depth} className="flex items-center justify-between">
                            <span className="text-light text-sm">{depth}</span>
                            <div className="flex items-center gap-3">
                              <div className="w-32 h-2 bg-accent/20 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-accent rounded-full"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                              <span className="text-accent/60 text-sm w-12 text-right">{percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnalyticsDashboard;
