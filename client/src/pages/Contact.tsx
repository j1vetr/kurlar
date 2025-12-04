import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SEO } from "@/components/shared/SEO";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "En az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası giriniz." }),
  subject: z.string().min(5, { message: "Konu en az 5 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
});

export default function Contact() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check for hash and scroll
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock submission
    console.log(values);
    setIsSubmitted(true);
    toast.success(t('contact.form.success'));
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <Layout>
      <SEO 
        title={t('seo.contact.title')} 
        description={t('seo.contact.desc')} 
        canonical="https://kurlar.com.tr/iletisim"
      />
      
      {/* Elegant Hero */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-primary/60 font-bold tracking-widest uppercase text-sm mb-4 block">
             {t('contact.title')}
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            {t('contact.headline')}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>
      </div>

      {/* Main Info Section - Cards */}
      <div className="container mx-auto px-6 -mt-16 relative z-20 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Head Office Card */}
           <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                 <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contact.head_office')}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                İbni Melek OSB. Mah. Tosbi Yol<br/>
                5. Sok. No: 5 Tire / İzmir
              </p>
              <a href="https://g.co/kgs/2gGV7No" target="_blank" rel="noopener noreferrer" className="mt-auto text-primary font-bold hover:text-blue-800 flex items-center gap-2">
                {t('contact.get_directions')} <ArrowRight className="w-4 h-4" />
              </a>
           </div>

           {/* Phone Support */}
           <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                 <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contact.phone_support')}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {t('contact.phone_desc')}
              </p>
              <a href="tel:902325123030" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors">
                +90 (232) 512 30 30
              </a>
           </div>

           {/* Email */}
           <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                 <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contact.email')}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {t('contact.email_desc')}
              </p>
              <a href="mailto:info@kurlar.com.tr" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                info@kurlar.com.tr
              </a>
           </div>
        </div>
      </div>

      {/* Contact Form Section - High Design */}
      <div id="contact-form" className="bg-slate-50 py-24 border-t border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            
            {/* Left Side - Visual/Info */}
            <div className="lg:w-5/12 bg-slate-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1574&q=80')] bg-cover bg-center opacity-20"></div>
               <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
               
               <div className="relative z-10">
                 <h2 className="text-3xl font-heading font-bold mb-6">{t('contact.form.title')}</h2>
                 <p className="text-slate-300 text-lg leading-relaxed mb-8">
                   {t('contact.form.subtitle')}
                 </p>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4 text-slate-300">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                       <Phone className="w-5 h-5" />
                     </div>
                     <div>
                       <div className="text-xs uppercase tracking-wider font-bold text-slate-500">Call Us</div>
                       <div className="font-medium text-white">+90 (232) 512 30 30</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 text-slate-300">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                       <Mail className="w-5 h-5" />
                     </div>
                     <div>
                       <div className="text-xs uppercase tracking-wider font-bold text-slate-500">Email Us</div>
                       <div className="font-medium text-white">info@kurlar.com.tr</div>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="relative z-10 mt-12">
                 <div className="flex gap-4">
                   {/* Social Icons Placeholder if needed */}
                 </div>
               </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-7/12 p-12 bg-white">
               {isSubmitted ? (
                 <div className="h-full flex flex-col items-center justify-center text-center p-8">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle2 className="w-10 h-10" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Teşekkürler!</h3>
                   <p className="text-slate-600 max-w-md mx-auto">
                     {t('contact.form.success')}
                   </p>
                   <Button 
                     variant="outline" 
                     className="mt-8" 
                     onClick={() => setIsSubmitted(false)}
                   >
                     Yeni Mesaj Gönder
                   </Button>
                 </div>
               ) : (
                 <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <FormField
                         control={form.control}
                         name="name"
                         render={({ field }) => (
                           <FormItem>
                             <FormLabel className="text-slate-700 font-bold">{t('contact.form.name')}</FormLabel>
                             <FormControl>
                               <Input placeholder="John Doe" {...field} className="bg-slate-50 border-slate-200 focus:bg-white h-12" />
                             </FormControl>
                             <FormMessage />
                           </FormItem>
                         )}
                       />
                       <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                           <FormItem>
                             <FormLabel className="text-slate-700 font-bold">{t('contact.form.email')}</FormLabel>
                             <FormControl>
                               <Input placeholder="john@example.com" {...field} className="bg-slate-50 border-slate-200 focus:bg-white h-12" />
                             </FormControl>
                             <FormMessage />
                           </FormItem>
                         )}
                       />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <FormField
                         control={form.control}
                         name="phone"
                         render={({ field }) => (
                           <FormItem>
                             <FormLabel className="text-slate-700 font-bold">{t('contact.form.phone')}</FormLabel>
                             <FormControl>
                               <Input placeholder="+90 555 000 00 00" {...field} className="bg-slate-50 border-slate-200 focus:bg-white h-12" />
                             </FormControl>
                             <FormMessage />
                           </FormItem>
                         )}
                       />
                       <FormField
                         control={form.control}
                         name="subject"
                         render={({ field }) => (
                           <FormItem>
                             <FormLabel className="text-slate-700 font-bold">{t('contact.form.subject')}</FormLabel>
                             <FormControl>
                               <Input placeholder="Bilgi Talebi / Teklif İsteği" {...field} className="bg-slate-50 border-slate-200 focus:bg-white h-12" />
                             </FormControl>
                             <FormMessage />
                           </FormItem>
                         )}
                       />
                     </div>

                     <FormField
                       control={form.control}
                       name="message"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel className="text-slate-700 font-bold">{t('contact.form.message')}</FormLabel>
                           <FormControl>
                             <Textarea 
                               placeholder="Mesajınızı buraya yazınız..." 
                               className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white resize-none" 
                               {...field} 
                             />
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />

                     <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-blue-900/20">
                       {t('contact.form.send')} <Send className="ml-2 w-5 h-5" />
                     </Button>
                   </form>
                 </Form>
               )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Full Width */}
      <div className="w-full h-[500px] bg-slate-100 relative border-t border-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.641431896711!2d27.70699921244816!3d38.12527557178196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b93de0ed96103d%3A0x8cff47f9de61ed93!2zS3VybGFyIERhbGfEscOnIFBvbXBhICYgRGFsZ8Sxw6cgTW90b3I!5e0!3m2!1str!2str!4v1764785445493!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(0%)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
        
      </div>
    </Layout>
  );
}
