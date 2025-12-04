
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { getBlogPosts } from "@/lib/blog-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, User, ChevronRight, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { tr, enUS } from "date-fns/locale";

export default function Blog() {
  const { t, language } = useLanguage();
  const posts = getBlogPosts(language);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(new Set(posts.map(post => post.category)));

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'd MMMM yyyy', { locale: language === 'tr' ? tr : enUS });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/water-bg.jpg')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            {language === 'tr' ? 'Blog & Haberler' : 'Blog & News'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            {language === 'tr' 
              ? 'Sektörel gelişmeler, teknik makaleler ve ürünlerimiz hakkında güncel bilgiler.' 
              : 'Industry updates, technical articles, and latest news about our products.'}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full whitespace-nowrap"
            >
              {language === 'tr' ? 'Tümü' : 'All'}
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full whitespace-nowrap border-slate-200"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input 
              placeholder={language === 'tr' ? 'Yazılarda ara...' : 'Search articles...'} 
              className="pl-10 rounded-full border-slate-200 bg-white focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col bg-white cursor-pointer hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-slate-900 hover:bg-white font-bold backdrop-blur-sm shadow-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime} {language === 'tr' ? 'dk oku' : 'min read'}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded uppercase tracking-wide">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="px-6 pb-6 pt-0">
                      <div className="w-full text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        {language === 'tr' ? 'Devamını Oku' : 'Read More'} <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'tr' ? 'Sonuç Bulunamadı' : 'No Results Found'}
            </h3>
            <p className="text-slate-500">
              {language === 'tr' ? 'Aramanızla eşleşen yazı bulunamadı.' : 'No articles found matching your search.'}
            </p>
            <Button 
              variant="link" 
              className="mt-2 text-primary"
              onClick={() => {setSearchQuery(""); setSelectedCategory(null);}}
            >
              {language === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
