
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

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const { t, language } = useLanguage();
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

      {/* Progress Bar (Scroll Indicator) could be added here */}

      <article className="flex-1 pt-24 pb-20">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-slate-500 hover:text-primary pl-0 hover:bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'tr' ? 'Bloga Dön' : 'Back to Blog'}
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="bg-blue-50 text-primary font-bold px-3 py-1 text-sm hover:bg-blue-100 transition-colors">
                {post.category}
              </Badge>
              {post.tags.map(tag => (
                <span key={tag} className="text-sm font-medium text-slate-500 flex items-center">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm font-medium mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} {language === 'tr' ? 'dk okuma' : 'min read'}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex flex-col md:flex-row gap-12 relative">
            
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 prose prose-slate prose-lg max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-li:text-slate-600
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar / Share */}
            <div className="md:w-16 flex md:flex-col gap-4 items-center md:sticky md:top-32 h-fit">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden md:block rotate-180 writing-mode-vertical mb-2">
                {language === 'tr' ? 'Paylaş' : 'Share'}
              </span>
              
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

          <Separator className="my-12 md:my-20" />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                {language === 'tr' ? 'İlginizi Çekebilir' : 'Related Articles'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(related => (
                  <Link key={related.id} href={`/blog/${related.slug}`}>
                    <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group bg-slate-50">
                      <div className="aspect-video overflow-hidden rounded-t-xl">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="text-xs text-slate-400 mb-2 font-bold uppercase tracking-wide">
                          {related.category}
                        </div>
                        <h3 className="font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h3>
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
