import EmptyState from '@components/shared/empty-state/EmptyState';
import AppLink from '@components/shared/app-link/AppLink';
import { Route } from '@shared/enums/route.enum';

const NotFound = () => (
  <EmptyState title="404" message="הדף שחיפשת לא קיים.">
    <AppLink href={Route.Home}>חזרה לעמוד הבית</AppLink>
  </EmptyState>
);

export default NotFound;
