import T_enLocale from './en';
import T_frLocale from './fr';
import T_arLocale from './ar';

export const DAYS = 250;

export const regions = {
  EGP_200: { rate: 200, sym: 'EGP', lbl: 'EGP / hr' },
  DZD_1500: { rate: 1500, sym: 'DZD', lbl: 'DZD / hr' },
  SAR_85: { rate: 85, sym: 'SAR', lbl: 'SAR / hr' },
  AED_90: { rate: 90, sym: 'AED', lbl: 'AED / hr' },
  MAD_120: { rate: 120, sym: 'MAD', lbl: 'MAD / hr' },
  EUR_35: { rate: 35, sym: 'EUR', lbl: 'EUR / hr' },
  USD_45: { rate: 45, sym: 'USD', lbl: 'USD / hr' },
};

export const T = {
  en: T_enLocale,
  fr: T_frLocale,
  ar: T_arLocale,
};
