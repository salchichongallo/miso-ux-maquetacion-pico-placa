import { MdUndo } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components/button/button';
import { AppShell } from '../../components/app-shell/app-shell';

import { VehiclePictogram } from './vehicle-pictogram';

export function VehiclesPage() {
  const navigate = useNavigate();
  return (
    <AppShell className="flex flex-col h-screen">
      <div className="flex flex-col justify-center items-center h-full p-4">
        <div className="p-5">
          <VehiclePictogram />
        </div>
        <h1 className="text--display-large mt-4">Vehículos</h1>
        <p className="text--headline-small mt-6 mb-12">Próximamente.</p>
        <Button
          text="Regresar al inicio"
          icon={MdUndo}
          onPress={() => navigate('/inicio')}
          variant="outlined"
        />
      </div>
    </AppShell>
  );
}
