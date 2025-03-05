import clsx from 'clsx';
import { IconType } from 'react-icons';
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

type AllProps = Props &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>;

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
    <button {...restProps} type={type} className={classes}>
      {hasIcon && (
        <Icon size="1.5rem" color="currentColor" className="button__icon" />
      )}
      <span className="button__text text--label-large">{text}</span>
    </button>
  );
}
