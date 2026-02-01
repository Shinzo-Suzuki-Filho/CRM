// Mock Supabase Client
// Este arquivo simula a interface do Supabase para desenvolvimento sem chaves reais.

export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: (callback: any) => {
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
    signInWithPassword: async () => ({ data: { user: { id: 'mock-user' } }, error: null }),
    signOut: async () => ({ error: null }),
  },
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (col: string, val: any) => ({
        single: async () => ({ data: {}, error: null }),
        maybeSingle: async () => ({ data: {}, error: null }),
        order: (col: string) => ({ data: [], error: null }),
      }),
      order: (col: string) => ({
        limit: (n: number) => ({ data: [], error: null }),
        data: [],
        error: null
      }),
    }),
    insert: async (data: any) => ({ data, error: null }),
    update: (data: any) => ({ eq: (col: string, val: any) => ({ error: null }) }),
  }),
};

export default supabase;
