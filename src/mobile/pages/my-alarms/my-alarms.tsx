import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { AlarmCard } from './alarm-card';

import { Button } from '../../../components/button/button';
import { AppShell } from '../../components/app-shell/app-shell';

export function MyAlarms() {
  const navigate = useNavigate();
  return (
    <AppShell>
      <header className="p-4 pt-14">
        <h1 className="text--display-large text-center">Alarmas</h1>
        <div className="flex items-center justify-around gap-4 mt-5">
          <p className="text--headline-small">Tus alarmas</p>
          <Button
            onPress={() => navigate('/alarmas/registrar')}
            text="Crear alarma"
            icon={MdAdd}
          />
        </div>
      </header>
      <div className="px-4 pt-7">
        <AlarmCard />
      </div>
    </AppShell>
  );
}
