import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdEdit } from 'react-icons/md';

import { AppLogo } from '../../components/app-logo';
import { Chip, Chips } from '../../../components/chip';
import { Button } from '../../../components/button/button';
import { Divider } from '../../../components/divider/divider';
import { IconButton } from '../../../components/icon-button/icon-button';

import { LabelField } from './label-field';

export function DetailPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-6 pb-8">
      <div className="w-full mx-auto" style={{ maxWidth: '34.5rem' }}>
        <header className="flex justify-between items-center px-8 py-6">
          <AppLogo />
        </header>
        <main
          className="flex flex-col rounded-2xl"
          style={{ background: 'var(--surface-container-low)' }}
        >
          <div className="pt-6 pr-8 pb-6 pl-4 flex gap-2 items-center">
            <IconButton onPress={() => navigate('/home')} icon={MdArrowBack} />
            <div className="flex-1">
              <h1 className="text--title-large">Detalles del pico y placa</h1>
            </div>
            <Button text="Editar" icon={MdEdit} />
          </div>
          <div className="px-8 pb-8 flex flex-col gap-6">
            <LabelField label="Ciudad" text="Medellín - Área Metropolitana" />
            <LabelField label="Tipo de vehículo" text="Carro particular" />
            <div className="flex items-center gap-2">
              <LabelField label="Hora inicio" text="5:00 a. m." />
              <Divider className="w-4" />
              <LabelField label="Hora fin" text="8:00 p. m." />
            </div>
            <LabelField label="Dígitos">
              <Chips>
                <Chip text="Lunes: 3 y 4" />
                <Chip text="Martes: 2 y 8" />
                <Chip text="Miércoles: 5 y 9" />
                <Chip text="Jueves: 1 y 7" />
                <Chip text="Viernes: 0 y 6" />
              </Chips>
            </LabelField>
            <LabelField label="Vigente desde" text="3 de febrero de 2025" />
          </div>
        </main>
      </div>
    </div>
  );
}
