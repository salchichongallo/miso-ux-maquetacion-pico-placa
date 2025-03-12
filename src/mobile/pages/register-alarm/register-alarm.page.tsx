import { AppShell } from '../../components/app-shell/app-shell';

import { VehicleSelector } from './vehicle-selector';
import { NotificationTypesSelector } from './notification-types-selector';

export function RegisterAlarmPage() {
  return (
    <AppShell>
      <div className="pt-14">
        <div className="px-4">
          <h1 className="text--display-large text-center mb-14">
            Registra tu alarma
          </h1>
          <main>
            <div
              className="rounded-3xl p-6"
              style={{ background: 'var(--surface-container-low)' }}
            >
              <VehicleSelector />
              <NotificationTypesSelector onChange={console.info} />
            </div>
          </main>
        </div>
      </div>
    </AppShell>
  );
}
