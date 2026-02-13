import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SCRIPT_URL = import.meta.env.VITE_APP_SCRIPT_URL as string | undefined;

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!SCRIPT_URL) {
      setFormStatus('error');
      setErrorMessage('Form endpoint is not configured.');
      return;
    }
    const form = e.currentTarget;
    const formData = {
      firstName: (form.querySelector('[name="firstName"]') as HTMLInputElement)?.value?.trim() ?? '',
      lastName: (form.querySelector('[name="lastName"]') as HTMLInputElement)?.value?.trim() ?? '',
      email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? '',
      service: (form.querySelector('[name="service"]') as HTMLSelectElement)?.value?.trim() ?? '',
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value?.trim() ?? '',
    };
    setFormStatus('submitting');
    setErrorMessage('');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: new URLSearchParams(formData),
        mode: 'no-cors',
      });
      // With no-cors we can't read the response; assume success if no error
      setFormStatus('success');
      form.reset();
    } catch (err) {
      setFormStatus('error');
      setErrorMessage('Failed to send. Please try again or email us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-16 pb-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="bg-primary-600 text-white p-10 lg:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">{t.contact.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 opacity-80 mt-1" />
                  <div>
                    <p className="text-sm opacity-70 mb-1">{t.contact.email}</p>
                    <p className="font-medium">gloriacloudco@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 opacity-80 mt-1" />
                  <div>
                    <p className="text-sm opacity-70 mb-1">{t.contact.phone}</p>
                    <p className="font-medium">(303) 257-2959</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 lg:w-2/3">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.messageSent}</h3>
                <p className="text-slate-600">{t.contact.thankYou}</p>
                <button 
                  onClick={() => setFormStatus('idle')} 
                  className="mt-8 text-primary-600 font-medium hover:underline"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.firstName}</label>
                    <input required name="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder={t.contact.placeholderFirst} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.lastName}</label>
                    <input required name="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder={t.contact.placeholderLast} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.emailAddress}</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder={t.contact.placeholderEmail} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.serviceInterested}</label>
                  <select name="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white">
                    <option value={t.footer.websiteDesign}>{t.footer.websiteDesign}</option>
                    <option value={t.footer.webAppDev}>{t.footer.webAppDev}</option>
                    <option value={t.footer.nonProfitProgram}>{t.footer.nonProfitProgram}</option>
                    <option value={t.contact.other}>{t.contact.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.message}</label>
                  <textarea required name="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder={t.contact.placeholderMessage}></textarea>
                </div>
                {formStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? t.contact.sending : t.contact.sendMessage}
                  {formStatus !== 'submitting' && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;