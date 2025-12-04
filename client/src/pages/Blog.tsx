
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { getBlogPosts } from "@/lib/blog-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
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

  // Featured Post (First one)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      {/* Hero Section with Pattern */}
      <div className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-bold mb-6 border border-primary/30"
              >
                <TrendingUp className="w-4 h-4" />
                {language === 'tr' ? 'Sektörel İçgörüler' : 'Industry Insights'}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight"
              >
                {language === 'tr' ? 'Blog & Haberler' : 'Blog & News'}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-400 max-w-xl leading-relaxed"
              >
                {language === 'tr' 
                  ? 'Su teknolojileri, pompa sistemleri ve mühendislik dünyasından en güncel makaleler, teknik rehberler ve haberler.' 
                  : 'Latest articles, technical guides and news from the world of water technologies, pump systems and engineering.'}
              </motion.p>
            </div>

            {/* Search Box in Hero */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-96"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input 
                    placeholder={language === 'tr' ? 'İçeriklerde ara...' : 'Search content...'} 
                    className="pl-12 h-14 rounded-lg border-0 bg-slate-800/80 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary backdrop-blur-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 -mt-10 relative z-20">
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          <Button 
            variant={selectedCategory === null ? "default" : "secondary"}
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-6 font-bold shadow-lg ${selectedCategory === null ? 'bg-primary hover:bg-primary/90' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
          >
            {language === 'tr' ? 'Tümü' : 'All'}
          </Button>
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "secondary"}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-6 font-bold shadow-md transition-all ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-white text-slate-600 hover:bg-slate-50 hover:scale-105'}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="space-y-12">
            
            {/* Featured Post Layout */}
            {featuredPost && !searchQuery && !selectedCategory && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className="group cursor-pointer relative rounded-3xl overflow-hidden bg-slate-900 aspect-[16/9] md:aspect-[21/9] shadow-2xl">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                      <Badge className="bg-primary hover:bg-primary text-white border-none px-4 py-1.5 mb-6 text-sm font-bold uppercase tracking-wide">
                        {featuredPost.category}
                      </Badge>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-primary-foreground transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg md:text-xl text-slate-200 mb-8 line-clamp-2 md:line-clamp-3 max-w-2xl leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
                         <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(featuredPost.date)}
                         </span>
                         <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readingTime} {language === 'tr' ? 'dk okuma' : 'min read'}
                         </span>
                         <span className="flex items-center gap-2 text-primary font-bold ml-4 group-hover:translate-x-2 transition-transform">
                            {language === 'tr' ? 'Haberi Oku' : 'Read Article'} <ArrowRight className="w-4 h-4" />
                         </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Grid Layout for other posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery || selectedCategory ? filteredPosts : gridPosts).map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col overflow-hidden rounded-2xl">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/95 text-slate-900 hover:bg-white font-bold backdrop-blur-md shadow-sm px-3 py-1">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                          <span>{formatDate(post.date)}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span>{post.readingTime} {language === 'tr' ? 'DK' : 'MIN'}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-primary font-bold text-sm mt-auto group/link">
                          {language === 'tr' ? 'Devamını Oku' : 'Read More'} 
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {language === 'tr' ? 'Sonuç Bulunamadı' : 'No Results Found'}
            </h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              {language === 'tr' ? 'Aramanızla eşleşen yazı bulunamadı. Lütfen farklı anahtar kelimeler deneyin.' : 'No articles found matching your search. Please try different keywords.'}
            </p>
            <Button 
              variant="outline" 
              size="lg"
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
