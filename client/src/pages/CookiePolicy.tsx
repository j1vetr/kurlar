import { Layout } from "@/components/layout/Layout";
import { Cookie, Settings, Info, CheckCircle } from "lucide-react";

export default function CookiePolicy() {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Cookie className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Çerez Politikası</h1>
                <p className="text-blue-100 text-lg">Daha iyi bir deneyim için çerezleri nasıl kullanıyoruz?</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-12 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Info className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Çerez (Cookie) Nedir?</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, site tercihlerinizin hatırlanması, oturumun açık tutulması ve size özel içerik sunulması gibi işlevler için kullanılır.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Kullandığımız Çerez Türleri</h2>
                </div>
                <div className="pl-14 space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-1">Zorunlu Çerezler</h3>
                    <p className="text-sm text-slate-600">Web sitesinin düzgün çalışması için gerekli olan temel çerezlerdir.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-1">Analitik Çerezler</h3>
                    <p className="text-sm text-slate-600">Ziyaretçi davranışlarını analiz ederek sitemizi geliştirmemize yardımcı olur.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-1">İşlevsel Çerezler</h3>
                    <p className="text-sm text-slate-600">Dil tercihi gibi kişisel ayarlarınızı hatırlamamızı sağlar.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Çerez Yönetimi</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  Tarayıcı ayarlarınız üzerinden çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz. Ancak, çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-8 mt-8">
                <p className="text-sm text-slate-500">
                  Bu politika hakkında sorularınız için bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
