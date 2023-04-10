import styled, { css, DefaultTheme } from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';
import { TransparentButton } from '../Buttons';

const BORDER_RADIUS = 50;

export const SwitcherContainer = styled.div`
  ${flex.alignCenter}
  padding: ${convertPixelToRem(5)};

  border-radius: ${BORDER_RADIUS}px;
  border: 1px solid ${({ theme }) => theme.colors.grayBorder};
`;

interface SwitcherButtonProps {
  $selected: boolean;
  $selectedColor: keyof DefaultTheme['colors'];
}

export const SwitcherButton = styled(TransparentButton)<SwitcherButtonProps>`
  padding: ${convertPixelToRem(8)};
  border-radius: ${BORDER_RADIUS}px;
  min-width: ${convertPixelToRem(77)};

  ${({ $selected, $selectedColor, theme }) =>
    $selected
      ? css`
          background-color: ${theme.colors[$selectedColor]};
          color: #fff;
        `
      : css`
          color: ${theme.colors.grayBorder};
        `};
`;
