import { convertPixelToRem, flex, getPadding } from 'css-blocks-styled-components';
import styled, { Colors, css } from 'styled-components';

import { ButtonSize, ButtonType } from '.';
import { QUERIES } from '../../../utils/appConstants';

interface ButtonProps {
  $size?: ButtonSize;
  $variant: ButtonType;
}

type ButtonTypeToConfig = {
  [key in ButtonType]: {
    border: keyof Colors;
    background: keyof Colors;
    text: keyof Colors;
    hoverBackground: keyof Colors;
  };
};

const buttonTypeToConfig: ButtonTypeToConfig = {
  PrimaryAction: {
    background: 'action',
    border: 'action',
    text: 'actionText',
    hoverBackground: 'actionHover',
  },
  SecondaryAction: {
    background: 'transparent',
    border: 'action',
    text: 'action',
    hoverBackground: 'actionInvertedHover',
  },
  NegativeAction: {
    background: 'transparent',
    border: 'invalid',
    text: 'invalid',
    hoverBackground: 'invalidHover',
  },
};

export const Button = styled.button<ButtonProps>`
  ${getPadding(6, 10)}
  ${flex.middle}

  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.boxShadows.button};
  letter-spacing: 0.05em;
  text-transform: uppercase;

  min-width: ${convertPixelToRem(70)};
  min-height: ${({ $size }) => convertPixelToRem($size === 'large' ? 36 : 27)};

  transition: background-color 0.3s ease, border-color 0.3s ease;

  ${({ theme, $variant }) => css`
    border: 2px solid ${theme.colors[buttonTypeToConfig[$variant].border]};
    color: ${theme.colors[buttonTypeToConfig[$variant].text]};
    background-color: ${theme.colors[buttonTypeToConfig[$variant].background]};

    &:hover {
      background-color: ${theme.colors[buttonTypeToConfig[$variant].hoverBackground]};
      border-color: ${theme.colors[buttonTypeToConfig[$variant].hoverBackground]};
    }
  `};

  ${QUERIES.TABLETS} {
    border-radius: 4px;
  }
`;
