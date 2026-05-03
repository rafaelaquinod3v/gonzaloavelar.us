import { ui, defaultLang } from '../i18n/ui';

export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '000000000000';

export function getWhatsAppUrl(lang: keyof typeof ui, messageKey: keyof typeof ui[typeof defaultLang] = 'whatsapp.message') {
  const message = ui[lang][messageKey] || ui[defaultLang][messageKey];
  const number = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
