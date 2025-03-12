import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

import './navigation-item.css';

type Props = {
  to: string;
  text: string;
  icon: IconType;
};

export function NavigationItem({ text, icon: Icon, to }: Props) {
  return (
    <NavLink
      to={to}
      className="navigation-item w-full flex flex-col gap-1 items-center justify-center"
      style={{ minHeight: '5rem' }}
    >
      <div className="navigation-item__icon-container">
        <Icon size="1.5rem" color="var(--on-surface-variant)" />
      </div>
      <div
        className="text--label-medium"
        style={{ color: 'var(--on-surface-variant)' }}
      >
        {text}
      </div>
    </NavLink>
  );
}
