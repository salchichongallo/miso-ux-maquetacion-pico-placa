import clsx from 'clsx';
import { IconType } from 'react-icons';
import './icon-button.css';

type Props = {
  icon: IconType;
  disabled?: boolean;
};

type AllProps = Props & React.ComponentPropsWithoutRef<'button'>;

export function IconButton({
  icon: Icon,
  type = 'button',
  ...restProps
}: AllProps) {
  const classes = clsx('icon-button', restProps.className);
  return (
    <button {...restProps} type={type} className={classes}>
      <div className="icon-button__content">
        <Icon size="1.5rem" className="icon-button__icon" />
      </div>
    </button>
  );
}
