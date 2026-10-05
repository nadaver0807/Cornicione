'use client';

import { useGetOpeningHours } from '@/hooks/api/useGetOpeningHours';
import {
  getClockServerSnapshot,
  getClockSnapshot,
  subscribeToClock,
} from '@/hooks/opening-hours/clock.store';
import { type OpeningStatus } from '@shared/types/opening-hours.type';
import { resolveOpeningStatus } from '@shared/util/opening-hours.util';
import { useMemo, useSyncExternalStore } from 'react';

/** מחשב את מצב הפעילות ומרענן אותו כל דקה, כדי שהסטטוס לא יישאר תקוע. */
export const useOpeningStatus = (): { status: OpeningStatus | null; isPending: boolean } => {
  const { data, isPending } = useGetOpeningHours();

  const minuteStamp = useSyncExternalStore(
    subscribeToClock,
    getClockSnapshot,
    getClockServerSnapshot,
  );

  const status = useMemo(
    () => (data && minuteStamp ? resolveOpeningStatus(data.openingHours, new Date()) : null),
    [data, minuteStamp],
  );

  return { status, isPending };
};
