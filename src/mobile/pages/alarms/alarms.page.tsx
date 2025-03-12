import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components/button/button';
import { AppShell } from '../../components/app-shell/app-shell';

import { NotificationPictogram } from './notification-pictogram';

export function AlarmsPage() {
  const navigate = useNavigate();
  return (
    <AppShell className="flex flex-col h-screen">
      <div className="flex flex-col justify-center items-center h-full p-4">
        <div className="p-5">
          <NotificationPictogram />
        </div>
        <h1 className="text--display-large mt-4">Alarmas</h1>
        <p className="text--headline-small mt-6 mb-12">Tus alarmas</p>
        <Button
          text="Crear alarma"
          icon={MdAdd}
          onPress={() => navigate('/alarmas/registrar')}
        />
      </div>
    </AppShell>
  );
}
