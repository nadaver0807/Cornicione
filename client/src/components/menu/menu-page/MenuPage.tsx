'use client';

import ClosedDialog from '@components/menu/closed-dialog/ClosedDialog';
import ItemDialog from '@components/menu/item-dialog/ItemDialog';
import MenuItemCard from '@components/menu/menu-item-card/MenuItemCard';
import Styles from '@components/menu/menu-page/MenuPage.style';
import { useMenuPage } from '@components/menu/menu-page/useMenuPage';
import OpeningStatusBadge from '@components/shared/opening-status-badge/OpeningStatusBadge';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { PIZZA_CATEGORY_LABEL } from '@shared/enums/pizza-category.enum';
import { type FC } from 'react';

const MenuPage: FC = () => {
  const {
    grouped,
    isPending,
    isError,
    status,
    isClosed,
    selected,
    selectPizza,
    closeItemDialog,
    isClosedDialogOpen,
    closeClosedDialog,
  } = useMenuPage();

  return (
    <Box>
      <PageHero eyebrow='01 — הזמנה' title='טייקאווי ומשלוחים' subtitle={status?.windowLabel}>
        <Typography sx={Styles.notice}>
          התפריט מוגש פעם בשבוע בלבד. ההזמנות מתבצעות מראש או במהלך היום דרך האתר, וכמות הבצק מוגבלת
          — מומלץ להזמין מוקדם.
        </Typography>
        <Box sx={Styles.statusRow}>
          <OpeningStatusBadge isProminent />
        </Box>
      </PageHero>
      <PageSection>
        {isPending ? <Typography sx={Styles.state}>טוען תפריט…</Typography> : null}
        {isError ? <Typography sx={Styles.state}>שגיאה בטעינת התפריט</Typography> : null}
        {grouped.map(([category, pizzas]) => (
          <Box key={category} sx={Styles.categoryGroup}>
            <Typography variant='h3' sx={Styles.categoryTitle}>
              {PIZZA_CATEGORY_LABEL[category]}
            </Typography>
            <Box sx={Styles.grid}>
              {pizzas.map((pizza) => (
                <MenuItemCard
                  key={pizza.uuid}
                  pizza={pizza}
                  isClosed={isClosed}
                  onSelect={selectPizza}
                />
              ))}
            </Box>
          </Box>
        ))}
      </PageSection>
      <ItemDialog pizza={selected} onClose={closeItemDialog} />
      <ClosedDialog isOpen={isClosedDialogOpen} status={status} onClose={closeClosedDialog} />
    </Box>
  );
};

export default MenuPage;
