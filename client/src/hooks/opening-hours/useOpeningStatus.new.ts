'use client';

import { useGetOpeningHours } from '@/hooks/api/useGetOpeningHours';
import { type OpeningStatus } from '@shared/types/opening-hours.type';
import { resolveOpeningStatus } from '@shared/util/opening-hours.util';
import { useMemo } from 'react';

/** מצב ההזמנות — נקבע לפי המתג שהמנהלן שולט בו (`isOrderingEnabled`). */
export const useOpeningStatus = (): { status: OpeningStatus | null; isPending: boolean } => {
  const { data, isPending } = useGetOpeningHours();

  const status = useMemo(() => (data ? resolveOpeningStatus(data.openingHours) : null), [data]);

  return { status, isPending };
};
