import Styles from '@components/shared/page-container/PageContainer.style';
import { Box } from '@mui/material';
import { type FC, type ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ children }) => (
  <Box sx={Styles.container}>{children}</Box>
);

export default PageContainer;
