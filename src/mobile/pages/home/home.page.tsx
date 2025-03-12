import { AppHeader } from '../../components/app-header';

import { CarStatusCard } from './car-status-card';

export function HomePage() {
  return (
    <div>
      <AppHeader />
      <div className="p-4">
        <CarStatusCard />
      </div>
    </div>
  );
}
