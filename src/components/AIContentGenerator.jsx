import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  X, 
  RefreshCw,
  Copy,
  Download,
  Send,
  Wand2,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Palette,
  Lightbulb,
  TrendingUp,
  Users,
  Target,
  Zap
} from 'lucide-react';

const AIContentGenerator = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('text');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('blog');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');

  const contentTypes = {
    text: [
      { id: 'blog', label: 'Blog Post', icon: FileText },
      { id: 'social', label: 'Social Media', icon: Users },
      { id: 'email', label: 'Email', icon: Send },
      { id: 'ad', label: 'Advertisement', icon: Target },
      { id: 'description', label: 'Product Description', icon: FileText }
    ],
    visual: [
      { id: 'logo', label: 'Logo Design', icon: Palette },
      { id: 'banner', label: 'Banner', icon: Image },
      { id: 'poster', label: 'Poster', icon: Image },
      { id: 'icon', label: 'Icon Set', icon: Image }
    ],
    code: [
      { id: 'component', label: 'React Component', icon: Code },
      { id: 'function', label: 'JavaScript Function', icon: Code },
      { id: 'css', label: 'CSS Styles', icon: Code },
      { id: 'api', label: 'API Endpoint', icon: Code }
    ]
  };

  const tones = [
    { id: 'professional', label: 'Professional' },
    { id: 'casual', label: 'Casual' },
    { id: 'friendly', label: 'Friendly' },
    { id: 'authoritative', label: 'Authoritative' },
    { id: 'creative', label: 'Creative' }
  ];

  const lengths = [
    { id: 'short', label: 'Short (50-100 words)' },
    { id: 'medium', label: 'Medium (200-500 words)' },
    { id: 'long', label: 'Long (500+ words)' }
  ];

  const generateContent = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    
    // Simulate AI content generation
    setTimeout(() => {
      const mockContent = generateMockContent(prompt, contentType, tone, length);
      setGeneratedContent(mockContent);
      setIsGenerating(false);
    }, 2000);
  };

  const generateMockContent = (prompt, type, tone, length) => {
    const templates = {
      blog: {
        professional: `# ${prompt}: A Comprehensive Guide

## Introduction
In today's rapidly evolving digital landscape, understanding ${prompt.toLowerCase()} has become crucial for businesses and individuals alike. This comprehensive guide will explore the key aspects, benefits, and implementation strategies.

## Key Benefits
- **Enhanced Efficiency**: Implementing ${prompt.toLowerCase()} can significantly improve operational efficiency
- **Cost Reduction**: Strategic adoption leads to measurable cost savings
- **Competitive Advantage**: Early adoption provides a significant market advantage

## Implementation Strategy
1. **Assessment Phase**: Evaluate current capabilities and requirements
2. **Planning Phase**: Develop a detailed implementation roadmap
3. **Execution Phase**: Roll out the solution in manageable phases
4. **Optimization Phase**: Continuously monitor and improve performance

## Conclusion
${prompt} represents a transformative opportunity for organizations willing to embrace innovation. By following the strategies outlined in this guide, you can position yourself for long-term success.`,
        casual: `Hey there! 👋

So you want to know about ${prompt.toLowerCase()}? Well, you've come to the right place! Let me break it down for you in a way that actually makes sense.

## What's the deal with ${prompt}?

Honestly, it's pretty cool stuff. Here's why you should care:

✨ **It's actually useful** - Not just another buzzword
🚀 **Easy to get started** - No need to be a tech genius
💰 **Worth the investment** - The ROI is real

## Getting Started

Don't overthink it! Here's what I'd do:

1. Start small - pick one thing to focus on
2. Test it out - see if it works for you
3. Scale up - once you see results, go bigger

## My Take

${prompt} isn't going anywhere, so you might as well get on board. Trust me, your future self will thank you! 🎯`
      },
      social: {
        professional: `🚀 Excited to share insights on ${prompt}!

Key takeaways:
✅ Proven strategies that work
✅ Real-world applications
✅ Measurable results

Ready to transform your approach? Let's connect! #${prompt.replace(/\s+/g, '')} #Innovation #Growth`,
        casual: `OMG, you guys! 😍

Just discovered something amazing about ${prompt.toLowerCase()} and I had to share!

It's literally changing everything for me. Like, why didn't I know about this sooner? 🤯

Who else is excited about this? Drop a comment below! 👇

#${prompt.replace(/\s+/g, '')} #GameChanger #MindBlown`
      },
      email: {
        professional: `Subject: ${prompt} - Your Next Opportunity

Dear [Name],

I hope this email finds you well. I wanted to reach out regarding an exciting opportunity related to ${prompt.toLowerCase()}.

After analyzing your current situation, I believe there's significant potential for improvement in this area. Here's what I propose:

**The Opportunity**
- Immediate impact on your bottom line
- Long-term strategic advantages
- Minimal risk, maximum reward

**Next Steps**
1. Schedule a brief consultation
2. Review the detailed proposal
3. Begin implementation

I'd love to discuss this further. Are you available for a 15-minute call this week?

Best regards,
[Your Name]`,
        casual: `Hey [Name]! 👋

Hope you're doing awesome! 

I just had this crazy idea about ${prompt.toLowerCase()} and thought of you immediately. 

Basically, I think we could totally crush it with this approach. Want to grab coffee and chat about it? ☕

Let me know what works for you!

Cheers! 🎉`
      }
    };

    return templates[type]?.[tone] || `Generated content about ${prompt} in ${tone} tone.`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  const downloadContent = () => {
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${contentType}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'text', label: 'Text Content', icon: FileText },
    { id: 'visual', label: 'Visual Content', icon: Image },
    { id: 'code', label: 'Code Generation', icon: Code }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          exit={{ y: 20 }}
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-primary/95 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg"
        >
          {/* Header */}
          <div className="p-6 border-b border-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-light">AI Content Generator</h2>
                  <p className="text-sm text-accent/60">Generate high-quality content with AI assistance</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-accent" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 py-4 border-b border-accent/20">
            <div className="flex gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'text-accent/80 hover:text-light hover:bg-accent/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Input Section */}
            <Card className="bg-primary/50 backdrop-blur-sm border border-accent/20">
              <CardHeader>
                <CardTitle className="text-light flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-400" />
                  Content Generation Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-light mb-2 block">Content Prompt</label>
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe what you want to create..."
                    className="bg-primary-dark border-accent/20 text-light focus:border-purple-500"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-light mb-2 block">Content Type</label>
                    <select
                      value={contentType}
                      onChange={(e) => setContentType(e.target.value)}
                      className="w-full p-2 bg-primary-dark border border-accent/20 rounded-lg text-light focus:border-purple-500"
                    >
                      {contentTypes[activeTab]?.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-light mb-2 block">Tone</label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full p-2 bg-primary-dark border border-accent/20 rounded-lg text-light focus:border-purple-500"
                    >
                      {tones.map((toneOption) => (
                        <option key={toneOption.id} value={toneOption.id}>
                          {toneOption.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-light mb-2 block">Length</label>
                    <select
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full p-2 bg-primary-dark border border-accent/20 rounded-lg text-light focus:border-purple-500"
                    >
                      {lengths.map((lengthOption) => (
                        <option key={lengthOption.id} value={lengthOption.id}>
                          {lengthOption.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button
                  onClick={generateContent}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Content */}
            {generatedContent && (
              <Card className="bg-primary/50 backdrop-blur-sm border border-accent/20">
                <CardHeader>
                  <CardTitle className="text-light flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      Generated Content
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        size="sm"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                      <Button
                        onClick={downloadContent}
                        variant="outline"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary-dark rounded-lg p-4 border border-accent/20">
                    <pre className="text-sm text-light whitespace-pre-wrap font-sans">
                      {generatedContent}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* AI Suggestions */}
            <Card className="bg-primary/50 backdrop-blur-sm border border-accent/20">
              <CardHeader>
                <CardTitle className="text-light flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-primary-dark rounded-lg border border-accent/20">
                    <h4 className="text-sm font-semibold text-light mb-2">Content Ideas</h4>
                    <ul className="text-xs text-accent/80 space-y-1">
                      <li>• "10 Tips for Better Design"</li>
                      <li>• "Case Study: Brand Transformation"</li>
                      <li>• "Industry Trends 2024"</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-primary-dark rounded-lg border border-accent/20">
                    <h4 className="text-sm font-semibold text-light mb-2">Optimization Tips</h4>
                    <ul className="text-xs text-accent/80 space-y-1">
                      <li>• Use action words in headlines</li>
                      <li>• Include relevant keywords</li>
                      <li>• Add call-to-action</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIContentGenerator;
