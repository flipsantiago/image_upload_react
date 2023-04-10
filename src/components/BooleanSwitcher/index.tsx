import { DefaultTheme } from 'styled-components';

import { SwitcherContainer, SwitcherButton } from './styles';

interface BooleanSwitcherProps {
  leftText: string;
  rightText: string;
  leftCallback: () => void;
  rightCallback: () => void;
  selectedColor?: keyof DefaultTheme['colors'];
  leftBoolean: boolean;
}

const BooleanSwitcher: React.FC<BooleanSwitcherProps> = ({
  leftText,
  rightText,
  leftCallback,
  rightCallback,
  selectedColor = 'valid',
  leftBoolean,
}) => {
  return (
    <SwitcherContainer>
      <SwitcherButton $selectedColor={selectedColor} $selected={leftBoolean} onClick={leftCallback}>
        {leftText}
      </SwitcherButton>

      <SwitcherButton
        $selectedColor={selectedColor}
        $selected={!leftBoolean}
        onClick={rightCallback}
      >
        {rightText}
      </SwitcherButton>
    </SwitcherContainer>
  );
};

export default BooleanSwitcher;
