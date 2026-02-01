import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function WelcomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View className="flex-1 bg-background items-center justify-center px-6">
      <StatusBar style="light" />
      
      <View className="items-center mb-12">
        <Image 
          source={require('../assets/logo.png')} 
          style={{ width: 220, height: 220 }}
          resizeMode="contain"
          className="mb-8"
        />
        <Text className="text-primary text-4xl font-bold tracking-widest uppercase">
          Elite
        </Text>
        <Text className="text-accent text-lg font-light tracking-[10px] uppercase">
          Premium
        </Text>
      </View>

      <Text className="text-text text-center text-xl mb-12 font-light opacity-80">
        {t('welcome')}
      </Text>

      <TouchableOpacity 
        onPress={() => router.push('/(tabs)')}
        className="bg-primary px-12 py-4 rounded-full shadow-lg shadow-primary/50"
      >
        <Text className="text-secondary text-lg font-bold uppercase tracking-wider">
          {t('login')}
        </Text>
      </TouchableOpacity>
      
      <View className="absolute bottom-10">
        <Text className="text-accent/30 text-xs tracking-tighter uppercase font-bold">
          © 2026 Elite Premium Enterprise
        </Text>
      </View>
    </View>
  );
}
