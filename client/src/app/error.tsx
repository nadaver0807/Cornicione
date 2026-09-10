'use client';

import EmptyState from '@components/shared/empty-state/EmptyState';
import { Button } from '@mui/material';

type ErrorPageProps = {
  reset: () => void;
};

const ErrorPage = ({ reset }: ErrorPageProps) => (
  <EmptyState title="משהו השתבש" message="אירעה שגיאה בטעינת הדף. אפשר לנסות שוב.">
    <Button variant="outlined" color="inherit" onClick={reset}>
      נסה שוב
    </Button>
  </EmptyState>
);

export default ErrorPage;
