import { FC, ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

export type ButtonSize = 'small' | 'large';

export type ButtonType = 'PrimaryAction' | 'SecondaryAction' | 'NegativeAction';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant: ButtonType;
}

const ActionButton: FC<ActionButtonProps> = ({ children, size = 'large', variant, ...props }) => {
  return (
    <Button $size={size} $variant={variant} type="button" {...props}>
      {children}
    </Button>
  );
};

export default ActionButton;
