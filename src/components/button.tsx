import clsx from 'clsx';
import './button.css';

type Props = {
  text: string;
  variant?: Variant;
  disabled?: boolean;
};

enum Variant {
  primary = 'primary',
}

type AllProps = Props &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>;

export function Button(props: AllProps) {
  const { text, type = 'button', variant = Variant.primary } = props;
  const classes = clsx('button', props.className, `button--variant-${variant}`);
  return (
    <button {...props} type={type} className={classes}>
      <span className="button__text text--label-large">{text}</span>
    </button>
  );
}
