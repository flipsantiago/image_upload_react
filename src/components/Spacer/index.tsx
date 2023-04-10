import { FC } from 'react';

import { HorizontalSpacer, VerticalSpacer } from './styles';

interface SpacerProps {
  children?: never;
  orientation: 'horizontal' | 'vertical';
  space: number;
}

const Spacer: FC<SpacerProps> = ({ orientation, space }) => {
  const Element = orientation === 'vertical' ? VerticalSpacer : HorizontalSpacer;

  return <Element $space={space} />;
};

export default Spacer;
