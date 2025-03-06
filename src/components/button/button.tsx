import clsx from 'clsx';
import { IconType } from 'react-icons';
import { ButtonProps, Button as RAButton } from 'react-aria-components';
import './button.css';

type Props = {
  text: string;
  variant?: Variant;
  disabled?: boolean;
  icon?: IconType;
};

enum Variants {
  primary = 'primary',
  outlined = 'outlined',
  inline = 'inline',
}

type Variant = keyof typeof Variants;

type AllProps = Props & ButtonProps;

export function Button({
  text,
  icon: Icon,
  type = 'button',
  variant = Variants.primary,
  ...restProps
}: AllProps) {
  const hasIcon = !!Icon;
  const classes = clsx(
    'button',
    restProps.className,
    `button--variant-${variant}`,
    {
      'button--with-icon': hasIcon,
    },
  );
  return (
    <RAButton
      {...restProps}
      type={type}
      className={classes}
      isDisabled={restProps.disabled || restProps.isDisabled}
    >
      {hasIcon && (
        <Icon size="1.5rem" color="currentColor" className="button__icon" />
      )}
      <span className="button__text text--label-large">{text}</span>
    </RAButton>
  );
}
