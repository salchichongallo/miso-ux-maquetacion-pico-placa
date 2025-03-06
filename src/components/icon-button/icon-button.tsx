import clsx from 'clsx';
import { IconType } from 'react-icons';
import './icon-button.css';

type Props = {
  icon: IconType;
  disabled?: boolean;
  color?: string;
};

type AllProps = Props & React.ComponentPropsWithoutRef<'button'>;

export function IconButton({
  icon: Icon,
  type = 'button',
  color,
  ...restProps
}: AllProps) {
  const classes = clsx('icon-button', restProps.className);
  return (
    <button {...restProps} type={type} className={classes}>
      <div className="icon-button__content">
        <Icon size="1.5rem" className="icon-button__icon" color={color} />
      </div>
    </button>
  );
}
