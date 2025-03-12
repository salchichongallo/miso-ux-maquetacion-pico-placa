import {
  MdAccessTime,
  MdOutlineDirectionsCar,
  MdStarBorder,
} from 'react-icons/md';

import { NavigationBar } from '../navigation-bar/navigation-bar';
import { NavigationItem } from '../navigation-bar/navigation-item';

type Props = {
  children: React.ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div style={{ paddingBottom: '5rem' }}>
      {children}
      <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <NavigationBar>
          <NavigationItem to="/inicio" text="Inicio" icon={MdStarBorder} />
          <NavigationItem
            to="/vehiculos"
            text="Vehículos"
            icon={MdOutlineDirectionsCar}
          />
          <NavigationItem to="/alarmas" text="Alarmas" icon={MdAccessTime} />
        </NavigationBar>
      </div>
    </div>
  );
}
