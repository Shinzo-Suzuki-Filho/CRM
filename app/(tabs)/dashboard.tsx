import { View, Text, ScrollView, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LineChart, BarChart } from 'react-native-chart-kit';
import React from 'react';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1A1A1A",
  backgroundGradientTo: "#121212",
  color: (opacity = 1) => `rgba(212, 175, 55, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false 
};

export default function DashboardScreen() {
  const { t } = useTranslation();

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(212, 175, 55, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["Profit Growth (%)"]
  };

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <View className="mb-8 mt-4">
        <Text className="text-accent text-sm uppercase tracking-widest font-bold">
          {t('dashboard')}
        </Text>
        <Text className="text-primary text-3xl font-bold">
          Elite Insights
        </Text>
      </View>

      <View className="bg-card p-6 rounded-3xl mb-6 shadow-xl border border-white/5">
        <Text className="text-text text-lg mb-4 font-semibold">{t('business_metrics')}</Text>
        <LineChart
          data={data}
          width={screenWidth - 48}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>

      <View className="flex-row justify-between mb-6">
        <View className="bg-card p-5 rounded-2xl w-[48%] border border-white/5">
          <Text className="text-accent/50 text-xs uppercase mb-1">Total Revenue</Text>
          <Text className="text-primary text-xl font-bold">$2.4M</Text>
        </View>
        <View className="bg-card p-5 rounded-2xl w-[48%] border border-white/5">
          <Text className="text-accent/50 text-xs uppercase mb-1">Active Deals</Text>
          <Text className="text-primary text-xl font-bold">148</Text>
        </View>
      </View>

      <View className="bg-card p-6 rounded-3xl mb-12 border border-white/5">
        <Text className="text-text text-lg mb-4 font-semibold">Market Performance</Text>
        <BarChart
          data={{
            labels: ["EU", "US", "LATAM", "APAC"],
            datasets: [{ data: [40, 60, 35, 75] }]
          }}
          width={screenWidth - 48}
          height={200}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </ScrollView>
  );
}
