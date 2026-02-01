import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LucideGlobe, LucideLogOut, LucideChevronRight } from 'lucide-react-native';
import React from 'react';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' },
];

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <ScrollView className="flex-1 bg-background p-6">
      <View className="mb-8 mt-4">
        <Text className="text-primary text-3xl font-bold">{t('settings')}</Text>
      </View>

      <View className="mb-8">
        <View className="flex-row items-center mb-4">
          <LucideGlobe color="#D4AF37" size={20} className="mr-2" />
          <Text className="text-accent text-lg font-semibold">{t('language')}</Text>
        </View>

        <View className="bg-card rounded-3xl overflow-hidden border border-white/5">
          {languages.map((lang, index) => (
            <TouchableOpacity 
              key={lang.code}
              onPress={() => changeLanguage(lang.code)}
              className={`flex-row items-center justify-between p-5 ${index !== languages.length - 1 ? 'border-b border-white/5' : ''} ${i18n.language === lang.code ? 'bg-primary/5' : ''}`}
            >
              <View className="flex-row items-center">
                <Text className="text-xl mr-4">{lang.flag}</Text>
                <Text className={`text-text text-lg ${i18n.language === lang.code ? 'text-primary font-bold' : ''}`}>
                  {lang.name}
                </Text>
              </View>
              {i18n.language === lang.code && <LucideChevronRight color="#D4AF37" size={20} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity className="bg-red-900/20 p-5 rounded-2xl flex-row items-center justify-center border border-red-900/30 mt-12 mb-12">
        <LucideLogOut color="#ff4444" size={20} className="mr-2" />
        <Text className="text-red-500 font-bold text-lg uppercase tracking-widest">{t('logout')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
