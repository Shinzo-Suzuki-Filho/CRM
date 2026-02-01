import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LucideLock, LucideEye, LucideRefreshCcw } from 'lucide-react-native';
import { Security } from '../../lib/security';
import React, { useState } from 'react';

export default function VaultScreen() {
  const { t } = useTranslation();
  const [data, setData] = useState('');
  const [encrypted, setEncrypted] = useState('');

  const handleEncrypt = async () => {
    if (!data) return;
    const result = await Security.encrypt(data);
    setEncrypted(result);
    Alert.alert("LGPD Success", "Dados criptografados com padrão de ponta.");
  };

  return (
    <ScrollView className="flex-1 bg-background p-6">
      <View className="mb-8">
        <LucideLock color="#D4AF37" size={48} className="mb-4" />
        <Text className="text-primary text-3xl font-bold">{t('secure_vault')}</Text>
        <Text className="text-accent/60 text-sm mt-2">
          Proteção de dados em conformidade com a LGPD usando algoritmos de alta segurança.
        </Text>
      </View>

      <View className="bg-card p-6 rounded-3xl border border-white/5 mb-8">
        <Text className="text-text font-semibold mb-4 text-lg">Entrada de Dados Sensíveis</Text>
        <TextInput 
          className="bg-background border border-accent/20 rounded-xl p-4 text-text mb-6"
          placeholder="Ex: CPF, Dados Bancários..."
          placeholderTextColor="#666"
          value={data}
          onChangeText={setData}
        />
        
        <TouchableOpacity 
          onPress={handleEncrypt}
          className="bg-primary py-4 rounded-xl flex-row items-center justify-center"
        >
          <LucideRefreshCcw color="#121212" size={20} className="mr-2" />
          <Text className="text-secondary font-bold text-lg uppercase">Criptografar</Text>
        </TouchableOpacity>
      </View>

      {encrypted ? (
        <View className="bg-card p-6 rounded-3xl border border-primary/20 shadow-lg shadow-primary/10">
          <View className="flex-row items-center mb-4">
            <LucideEye color="#D4AF37" size={20} className="mr-2" />
            <Text className="text-primary font-bold">Estado Criptografado (DB-Safe)</Text>
          </View>
          <Text className="text-accent/50 font-mono text-xs leading-5">
            {encrypted}
          </Text>
          <View className="mt-4 p-3 bg-white/5 rounded-lg">
            <Text className="text-accent/40 text-[10px] uppercase font-bold text-center">
              Acesso restrito via Row Level Security (RLS)
            </Text>
          </View>
        </View>
      ) : null}

      <View className="mt-12 opacity-40 items-center">
        <Text className="text-text text-xs text-center">
          Tecnologia Elite Encryption 2.0 • 256-bit AES Standard
        </Text>
      </View>
    </ScrollView>
  );
}
