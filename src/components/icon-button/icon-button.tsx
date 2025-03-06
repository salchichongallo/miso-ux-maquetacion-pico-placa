import clsx from 'clsx';
import { IconType } from 'react-icons';
import { ButtonProps, Button as RAButton } from 'react-aria-components';
import './icon-button.css';

type Props = {
  icon: IconType;
  disabled?: boolean;
  color?: string;
};

type AllProps = Props & ButtonProps;

export function IconButton({
  icon: Icon,
  type = 'button',
  color,
  ...restProps
}: AllProps) {
  const classes = clsx('icon-button', restProps.className);
  return (
    <RAButton
      {...restProps}
      type={type}
      className={classes}
      isDisabled={restProps.disabled || restProps.isDisabled}
    >
      <div className="icon-button__content">
        <Icon size="1.5rem" className="icon-button__icon" color={color} />
      </div>
    </RAButton>
  );
}
