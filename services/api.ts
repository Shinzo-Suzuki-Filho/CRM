// API Services
// Abstração para chamadas de dados do sistema Elite Premium

export interface FinancialMetric {
  label: string;
  value: number;
}

export interface DashboardData {
  revenue: number[];
  labels: string[];
  kpis: {
    totalRevenue: string;
    activeDeals: number;
    growth: string;
  };
}

export const DashboardService = {
  getPerformanceData: async (): Promise<DashboardData> => {
    // Simulando delay de rede
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
      revenue: [20, 45, 28, 80, 99, 43],
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      kpis: {
        totalRevenue: "$1.2M",
        activeDeals: 42,
        growth: "+15.4%",
      }
    };
  },

  getMarketMetrics: async (): Promise<number[]> => {
    return [40, 45, 28, 80, 99, 43];
  }
};

export const SecurityService = {
  getVaultAuditLogs: async () => {
    return [
      { id: 1, event: 'Encryption', date: '2026-02-01' },
      { id: 2, event: 'Access', date: '2026-02-01' },
    ];
  }
};
