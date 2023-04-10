import { convertPixelToRem } from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';

interface SpacerProps {
  $space: number;
}

export const VerticalSpacer = styled.div<SpacerProps>`
  ${({ $space }) => css`
    padding-top: ${convertPixelToRem($space / 2)};
    padding-bottom: ${convertPixelToRem($space / 2)};
  `};
`;

export const HorizontalSpacer = styled.span<SpacerProps>`
  ${({ $space }) => css`
    padding-left: ${convertPixelToRem($space / 2)};
    padding-right: ${convertPixelToRem($space / 2)};
  `};
`;
