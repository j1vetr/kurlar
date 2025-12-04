import { Layout } from "@/components/layout/Layout";
import { Shield, Lock, Eye, FileText, Server } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-slate-900 p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('privacy.title')}</h1>
                <p className="text-blue-100 text-lg">{t('privacy.subtitle')}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-12 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">1. {t('privacy.collection')}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  {t('privacy.collection_desc')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Server className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">2. {t('privacy.security')}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  {t('privacy.security_desc')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">3. {t('privacy.links')}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  {t('privacy.links_desc')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">4. {t('privacy.changes')}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  {t('privacy.changes_desc')}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-8 mt-8">
                <p className="text-sm text-slate-500">
                  Son Güncelleme: 01.01.2025 <br/>
                  İletişim: info@kurlar.com.tr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
