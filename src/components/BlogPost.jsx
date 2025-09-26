import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User, Tag } from 'lucide-react';

const BlogPostDetail = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="outline"
            onClick={onBack}
            className="border-accent/30 text-accent hover:bg-accent hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-primary/50 border-accent/20">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-2 text-sm text-accent/70 mb-4">
                <Badge variant="outline" className="border-accent/30 text-accent">
                  {post.category}
                </Badge>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              
              <CardTitle className="text-3xl md:text-4xl font-bold text-light leading-tight mb-6">
                {post.title}
              </CardTitle>
              
              <div className="flex items-center justify-center gap-4 text-accent/80">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  <span>Save</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Article Image */}
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tag className="w-10 h-10 text-accent" />
                  </div>
                  <p className="text-accent/80">Article Illustration</p>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-lg text-accent/90 leading-relaxed mb-8">
                  {post.content}
                </div>
                
                {/* Extended Content */}
                <div className="space-y-6 text-accent/80 leading-relaxed">
                  <p>
                    In today's competitive design landscape, understanding these principles is more important than ever. 
                    Whether you're working on a startup's first brand identity or refreshing an established company's visual presence, 
                    the fundamentals remain the same.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-light mt-8 mb-4">Key Takeaways</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Color psychology significantly impacts consumer behavior and brand perception</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Consistent application across all touchpoints builds brand recognition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cultural context plays a crucial role in color interpretation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Testing and iteration are essential for optimal color selection</span>
                    </li>
                  </ul>
                  
                  <p>
                    As designers, we have the power to influence emotions and behaviors through our color choices. 
                    By understanding the psychology behind colors and applying this knowledge thoughtfully, 
                    we can create brands that not only look great but also connect with audiences on a deeper level.
                  </p>
                </div>
              </div>
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-accent/20">
                <h4 className="text-lg font-semibold text-light mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/20 text-accent/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.article>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-light mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Placeholder for related articles */}
            <Card className="bg-primary/50 border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-light mb-2">More Design Insights</h4>
                <p className="text-accent/80 text-sm">Explore more articles about design principles and industry trends.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/50 border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-light mb-2">Case Studies</h4>
                <p className="text-accent/80 text-sm">See how these principles apply in real-world projects.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
