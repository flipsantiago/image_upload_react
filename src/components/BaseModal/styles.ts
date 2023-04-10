import styled from 'styled-components';
import { animated } from 'react-spring';
import { flex } from 'css-blocks-styled-components';

import { DialogOverlay, DialogContent } from '@reach/dialog';

const AnimatedDialogOverlay = animated(DialogOverlay);
const AnimatedDialogContent = animated(DialogContent);

export const StyledOverlay = styled(AnimatedDialogOverlay)`
  background: rgba(0, 0, 0, 0.53);
  inset: 0;
  overflow: hidden;
  position: fixed;
  transition: 200ms ease;

  ${flex.middle}
`;

interface ContentProps {
  $maxWidth?: number;
}

export const StyledContent = styled(AnimatedDialogContent)<ContentProps>`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : '600px')};
  width: 80%;
  margin: 0 auto;
`;
