import clsx from 'clsx';
import { IconType } from 'react-icons';
import { Button, ButtonProps } from 'react-aria-components';
import './chip.css';

type Props = {
  text: string;
  icon?: IconType;
};

type AllProps = Props & ButtonProps;

export function Chip({
  text,
  icon: Icon,
  type = 'button',
  ...props
}: AllProps) {
  return (
    <Button
      {...props}
      type={type}
      className={clsx('chip text--label-large', { 'chip--icon': !!Icon })}
    >
      <span>{text}</span>
      {Icon && <Icon size="1.125rem" color="currentColor" />}
    </Button>
  );
}
