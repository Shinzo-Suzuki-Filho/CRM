import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

const resources = {
  pt: {
    translation: {
      welcome: "Bem-vindo à Elite Premium",
      dashboard: "Painel Executivo",
      settings: "Configurações",
      secure_vault: "Cofre Seguro",
      business_metrics: "Métricas de Negócio",
      language: "Idioma",
      login: "Entrar",
      logout: "Sair",
    }
  },
  en: {
    translation: {
      welcome: "Welcome to Elite Premium",
      dashboard: "Executive Dashboard",
      settings: "Settings",
      secure_vault: "Secure Vault",
      business_metrics: "Business Metrics",
      language: "Language",
      login: "Login",
      logout: "Logout",
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a Elite Premium",
      dashboard: "Panel Ejecutivo",
      settings: "Ajustes",
      secure_vault: "Bóveda Segura",
      business_metrics: "Métricas de Negocio",
      language: "Idioma",
      login: "Acceso",
      logout: "Cerrar sesión",
    }
  },
  jp: {
    translation: {
      welcome: "エリートプレミアムへようこそ",
      dashboard: "エグゼクティブ・ダッシュボード",
      settings: "設定",
      secure_vault: "セキュア・ヴォルト",
      business_metrics: "ビジネス指標",
      language: "言語",
      login: "ログイン",
      logout: "ログアウト",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.locale.split('-')[0], // Pega apenas o código da língua (ex: 'pt')
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
