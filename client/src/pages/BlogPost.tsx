
import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { getBlogPost, getBlogPosts } from "@/lib/blog-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Linkedin, Twitter, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { tr, enUS } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";

import { useScroll } from "framer-motion";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const slug = params?.slug || "";
  const post = getBlogPost(slug, language);
  
  // Get related posts (excluding current one)
  const allPosts = getBlogPosts(language);
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.category === post?.category)
    .slice(0, 3);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            {language === 'tr' ? 'Yazı Bulunamadı' : 'Article Not Found'}
          </h1>
          <Link href="/blog">
            <Button>{language === 'tr' ? 'Bloga Dön' : 'Back to Blog'}</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'd MMMM yyyy', { locale: language === 'tr' ? tr : enUS });
  };

  const shareUrl = window.location.href;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <article className="flex-1 pt-24 pb-20">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
             <Link href="/blog">
              <Button variant="ghost" className="text-slate-500 hover:text-primary pl-0 hover:bg-transparent -ml-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'tr' ? 'Bloga Dön' : 'Back to Blog'}
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-blue-50 text-primary font-bold px-3 py-1 text-sm hover:bg-blue-100 transition-colors border-0">
                {post.category}
              </Badge>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-medium text-slate-500 flex items-center">
                {formatDate(post.date)}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Author Card */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl w-fit border border-slate-100 mb-8">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-6 h-6" />
               </div>
               <div>
                  <div className="text-sm font-bold text-slate-900">{post.author}</div>
                  <div className="text-xs text-slate-500">
                    {language === 'tr' ? 'İçerik Editörü' : 'Content Editor'} • {post.readingTime} {language === 'tr' ? 'dk okuma' : 'min read'}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Sidebar: Table of Contents & Share */}
            <div className="hidden lg:block w-64 shrink-0">
               <div className="sticky top-32 space-y-12">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                      {language === 'tr' ? 'Paylaş' : 'Share'}
                    </h4>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-500 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-colors">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-500 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-900 hover:bg-slate-100 transition-colors" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                      {language === 'tr' ? 'Etiketler' : 'Tags'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                       {post.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition-colors cursor-default">
                            #{tag}
                          </span>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 max-w-3xl prose prose-slate prose-lg 
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:leading-tight
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-slate-600 prose-li:marker:text-primary
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-slate-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <Separator className="my-12 md:my-20" />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12">
                {language === 'tr' ? 'Bunları da Beğenebilirsiniz' : 'You Might Also Like'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(related => (
                  <Link key={related.id} href={`/blog/${related.slug}`}>
                    <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white flex flex-col overflow-hidden rounded-2xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-white/90 text-slate-900 font-bold text-xs backdrop-blur-sm shadow-sm hover:bg-white">
                            {related.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-slate-400 mb-3 font-bold uppercase tracking-wider flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {formatDate(related.date)}
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-3">
                          {related.title}
                        </h3>
                        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed flex-1">
                          {related.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
