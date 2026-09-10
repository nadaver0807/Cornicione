'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QUERY_STALE_TIME_MS } from '@shared/consts/site.const';
import RtlCacheProvider from '@theme/RtlCacheProvider';
import theme from '@theme/theme';
import { useState, type FC, type ReactNode } from 'react';
import { CartProvider } from '@/hooks/cart/CartProvider';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: QUERY_STALE_TIME_MS, refetchOnWindowFocus: false },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RtlCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </RtlCacheProvider>
    </QueryClientProvider>
  );
};

export default Providers;
