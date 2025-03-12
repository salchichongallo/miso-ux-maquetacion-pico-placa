import { useState } from 'react';
import { MdCheck } from 'react-icons/md';

import { Modal } from '../../../components/modal/modal';
import { Button } from '../../../components/button/button';
import { AppShell } from '../../components/app-shell/app-shell';
import { TimePicker } from '../../../components/time-picker/time-picker';

import { VehicleSelector } from './vehicle-selector';
import { StartingDaySelector } from './starting-day-selector';
import { NotificationTypesSelector } from './notification-types-selector';

export function RegisterAlarmPage() {
  const [opened, setOpened] = useState(false);
  const [modal, setModal] = useState<string>(null!);
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
              <NotificationTypesSelector
                value={modal}
                onChange={value => {
                  setModal(value);
                  setOpened(true);
                }}
              />
              {modal === 'start-of-week' && (
                <div className="pl-2">
                  <StartingDaySelector />
                </div>
              )}
            </div>
          </main>
          <TimePicker
            title="Indica una hora"
            isOpen={opened && modal === 'previous-day'}
            initialTime={null}
            onOpenChange={isOpen => {
              if (!isOpen) {
                setOpened(isOpen);
              }
            }}
            onOk={() => setModal('confirm-previous-day')}
          />
          <Modal
            isOpen={opened && modal === 'confirm-previous-day'}
            isDismissable={false}
            title="Confirmar creación de alarma"
            description="El día anterior - 7:00 a. m."
            style={{ maxWidth: '19.5rem' }}
            buttons={[
              () => (
                <Button
                  onPress={() => setModal('previous-day')}
                  text="No"
                  variant="inline"
                />
              ),
              () => <Button onPress={() => setModal('success')} text="Sí" />,
            ]}
          />
          <Modal
            isOpen={opened && modal === 'success'}
            isDismissable={false}
            title="Registro Exitoso"
            icon={MdCheck}
            style={{ maxWidth: '19.5rem' }}
            buttons={[
              () => (
                <Button
                  onPress={() => alert('TODO: redirect')}
                  text="Continuar"
                />
              ),
            ]}
          />
          <TimePicker
            title="Indica un tiempo"
            isOpen={opened && modal === 'before-begin'}
            // TODO: hide am/pm and change labels
            initialTime={null}
            onOpenChange={isOpen => {
              if (!isOpen) {
                setOpened(isOpen);
              }
            }}
            onOk={() => setModal('confirm-before-begin')}
          />
          <Modal
            isOpen={opened && modal === 'confirm-before-begin'}
            isDismissable={false}
            title="Confirmar creación de alarma"
            description="Antes de iniciar - 30 min"
            style={{ maxWidth: '19.5rem' }}
            buttons={[
              () => (
                <Button
                  onPress={() => setModal('before-begin')}
                  text="No"
                  variant="inline"
                />
              ),
              () => <Button onPress={() => setModal('success')} text="Sí" />,
            ]}
          />
        </div>
      </div>
    </AppShell>
  );
}
