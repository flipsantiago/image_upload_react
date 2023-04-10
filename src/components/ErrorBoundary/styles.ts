import styled from 'styled-components';
import { getPadding, convertPixelToRem, getMargin, flex } from 'css-blocks-styled-components';

export const Container = styled.div`
  ${getPadding(0, 20)};
  height: 100vh;

  ${flex.alignCenterColumn}

  h2 {
    ${getMargin(15, 0)}
    font-size: ${convertPixelToRem(34)};
    line-height: ${convertPixelToRem(40)};
    text-align: center;
  }
`;
