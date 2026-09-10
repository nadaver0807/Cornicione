import Styles from '@components/shared/empty-state/EmptyState.style';
import { Box, Typography } from '@mui/material';
import { type FC, type ReactNode } from 'react';

type EmptyStateProps = {
  title: string;
  message: string;
  children?: ReactNode;
};

const EmptyState: FC<EmptyStateProps> = ({ title, message, children }) => (
  <Box sx={Styles.wrapper}>
    <Typography variant="h2">{title}</Typography>
    <Typography sx={Styles.message}>{message}</Typography>
    {children}
  </Box>
);

export default EmptyState;
