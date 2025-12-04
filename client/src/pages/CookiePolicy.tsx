import { Layout } from "@/components/layout/Layout";
import { Cookie, Settings, Info, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SEO } from "@/components/shared/SEO";

export default function CookiePolicy() {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO 
        title={t('footer.cookie')} 
        description={t('cookie.subtitle')} 
        canonical="https://kurlar.com.tr/cerez-politikasi"
      />
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Cookie className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('cookie.title')}</h1>
                <p className="text-blue-100 text-lg">{t('cookie.subtitle')}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-12 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Info className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">{t('cookie.what_is')}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  {t('cookie.what_is_desc')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">{t('cookie.types')}</h2>
                </div>
                <div className="pl-14 space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-1">Zorunlu Çerezler</h3>
                    <p className="text-sm text-slate-600">{t('cookie.types_desc_mandatory')}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-1">Analitik Çerezler</h3>
                    <p className="text-sm text-slate-600">{t('cookie.types_desc_analytics')}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-1">İşlevsel Çerezler</h3>
                    <p className="text-sm text-slate-600">{t('cookie.types_desc_functional')}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">{t('cookie.management')}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  {t('cookie.management_desc')}
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
