import Styles from './Marquee.style';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

type MarqueeProps = {
  text: string;
  variant?: 'light' | 'dark';
};

/** סרט טקסט נע לרוחב המסך — חוזר פעמיים כדי ליצור לולאה חלקה. */
const Marquee: FC<MarqueeProps> = ({ text, variant = 'light' }) => (
  <Box sx={[Styles.wrapper, variant === 'dark' ? Styles.wrapperDark : Styles.wrapperLight]}>
    <Box sx={Styles.track}>
      {[0, 1].map((group) => (
        <Box key={group} sx={Styles.group}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Typography key={index} component="span" sx={Styles.item}>
              {text}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  </Box>
);

export default Marquee;
