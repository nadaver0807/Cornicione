'use client';

import ItemDialog from '@components/menu/item-dialog/ItemDialog';
import MenuItemCard from '@components/menu/menu-item-card/MenuItemCard';
import Styles from '@components/menu/menu-page/MenuPage.style';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { TAKEAWAY_WINDOW } from '@shared/consts/site.const';
import { PIZZA_CATEGORY_LABEL, type PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type Pizza } from '@shared/types/pizza.type';
import { useMemo, useState, type FC } from 'react';
import { useGetPizzas } from '@/hooks/api/useGetPizzas';

const MenuPage: FC = () => {
  const { data, isPending, isError } = useGetPizzas();
  const [selected, setSelected] = useState<Pizza | null>(null);

  const grouped = useMemo(() => {
    const map = new Map<PizzaCategory, Pizza[]>();

    data?.pizzas.forEach((pizza) => {
      map.set(pizza.menuCategory, [...(map.get(pizza.menuCategory) ?? []), pizza]);
    });

    return [...map.entries()];
  }, [data]);

  return (
    <Box>
      <PageHero
        eyebrow="01 — הזמנה"
        title="טייקאווי ומשלוחים"
        subtitle={`${TAKEAWAY_WINDOW.dayLabel} | ${TAKEAWAY_WINDOW.hoursLabel}`}
      >
        <Typography sx={Styles.notice}>
          ההזמנות מתבצעות מראש או במהלך היום דרך האתר. כמות הבצק מוגבלת — מומלץ להזמין מוקדם.
        </Typography>
        <Box sx={Styles.windowChip}>הזמנה מראש · כמות מוגבלת</Box>
      </PageHero>
      <PageSection>
        {isPending ? <Typography sx={Styles.state}>טוען תפריט…</Typography> : null}
        {isError ? <Typography sx={Styles.state}>שגיאה בטעינת התפריט</Typography> : null}
        {grouped.map(([category, pizzas]) => (
          <Box key={category} sx={Styles.categoryGroup}>
            <Typography variant="h3" sx={Styles.categoryTitle}>
              {PIZZA_CATEGORY_LABEL[category]}
            </Typography>
            <Box sx={Styles.grid}>
              {pizzas.map((pizza) => (
                <MenuItemCard key={pizza.uuid} pizza={pizza} onSelect={setSelected} />
              ))}
            </Box>
          </Box>
        ))}
      </PageSection>
      <ItemDialog pizza={selected} onClose={() => setSelected(null)} />
    </Box>
  );
};

export default MenuPage;
