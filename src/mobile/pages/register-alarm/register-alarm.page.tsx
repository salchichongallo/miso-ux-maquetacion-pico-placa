import { MdDirectionsCarFilled, MdTwoWheeler } from 'react-icons/md';

import { Radio, RadioGroup } from '../../../components/radio';
import { AppShell } from '../../components/app-shell/app-shell';

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
              <p className="text--label-large mb-1">Selecciona tu vehículo</p>
              <RadioGroup
                label="Selecciona tu vehículo"
                name="vehicle"
                defaultValue="abc123"
              >
                <Radio value="abc123" isDisabled>
                  <span
                    className="flex items-center gap-2"
                    style={{ color: 'var(--secondary)' }}
                  >
                    <MdDirectionsCarFilled size="1.5rem" color="currentColor" />
                    <span>ABC123</span>
                  </span>
                </Radio>
                <Radio value="xyz789">
                  <span
                    className="flex items-center gap-2"
                    style={{ color: 'var(--secondary)' }}
                  >
                    <MdTwoWheeler size="1.5rem" color="currentColor" />
                    <span>XYZ789</span>
                  </span>
                </Radio>
              </RadioGroup>
            </div>
          </main>
        </div>
      </div>
    </AppShell>
  );
}
