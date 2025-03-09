import { MdClose, MdError } from 'react-icons/md';
import { IconButton } from '../icon-button/icon-button';
import './alert.css';
import clsx from 'clsx';

enum Types {
  error = 'error',
  warning = 'warning',
}

type AlertType = keyof typeof Types;

type Props = {
  message: string;
  type?: AlertType;
};

export function Alert({ message, type = Types.error }: Props) {
  return (
    <div
      role="alert"
      className={clsx('alert', `alert--type-${type}`)}
      aria-describedby="alert-description"
    >
      <div className="alert__icon">
        <MdError size="1.5rem" color="currentColor" />
      </div>
      <p id="alert-description" className="text--body-medium">
        {message}
      </p>
      <IconButton
        icon={MdClose}
        color="currentColor"
        className="alert__action"
      />
    </div>
  );
}
