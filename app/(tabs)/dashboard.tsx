import { View, Text, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { DashboardService, DashboardData } from '../../services/api';

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
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null as DashboardData | null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await DashboardService.getPerformanceData();
        setData(result);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !data) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <ActivityIndicator size="large" color="#D4AF37" />
        <Text className="text-primary mt-4 uppercase tracking-widest">{t('loading')}</Text>
      </View>
    );
  }

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
          data={{
            labels: data.labels,
            datasets: [{ data: data.revenue }]
          }}
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

      <View className="flex-row justify-between mb-8">
        <View className="bg-card p-5 rounded-3xl border border-white/5 flex-1 mr-3">
          <Text className="text-accent/50 text-xs uppercase mb-1 font-bold">{t('totalRevenue')}</Text>
          <Text className="text-primary text-2xl font-bold">{data.kpis.totalRevenue}</Text>
        </View>
        <View className="bg-card p-5 rounded-3xl border border-white/5 flex-1 ml-3">
          <Text className="text-accent/50 text-xs uppercase mb-1 font-bold">{t('activeDeals')}</Text>
          <Text className="text-accent text-2xl font-bold">{data.kpis.activeDeals}</Text>
        </View>
      </View>

      <View className="bg-card p-6 rounded-3xl border border-white/5 mb-8">
        <Text className="text-text text-lg font-bold mb-4">{t('marketGrowth')}</Text>
        <View className="flex-row items-end justify-between">
          <View>
            <Text className="text-primary text-4xl font-bold">{data.kpis.growth}</Text>
            <Text className="text-accent/50 text-sm">{t('vsLastMonth')}</Text>
          </View>
          <BarChart
            data={{
              labels: ["Q1", "Q2", "Q3", "Q4"],
              datasets: [{ data: [20, 45, 28, 80] }]
            }}
            width={150}
            height={100}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              ...chartConfig,
              backgroundGradientFrom: "#121212",
              backgroundGradientTo: "#121212",
              decimalPlaces: 0,
            }}
            withInnerLines={false}
            withHorizontalLabels={false}
            withVerticalLabels={false}
            style={{
              borderRadius: 16,
            }}
          />
        </View>
      </View>

      <View className="mb-12">
        <Text className="text-text text-lg font-bold mb-4">{t('performanceSummary')}</Text>
        <View className="bg-primary/10 p-5 rounded-2xl border border-primary/20">
          <Text className="text-primary text-sm leading-relaxed">
            {t('dashboardInsight')}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
