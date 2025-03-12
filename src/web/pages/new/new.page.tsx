import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdCheck, MdError } from 'react-icons/md';
import { DialogTrigger, ListBoxItem } from 'react-aria-components';

import { AppLogo } from '../../components/app-logo';
import { Modal } from '../../../components/modal/modal';
import { Button } from '../../../components/button/button';
import { Divider } from '../../../components/divider/divider';
import { ComboBox } from '../../../components/combobox/combobox';
import { TimeInput } from '../../../components/time-input/time-input';
import { IconButton } from '../../../components/icon-button/icon-button';
import { PreventNavigateModal } from '../../components/prevent-navigate-modal';
import { DatePicker } from '../../../components/date-picker/date-picker';

import { AddChips } from './add-chips';

export function NewPage() {
  const navigate = useNavigate();
  const [created, setCreated] = useState(false);

  return (
    <div className="pt-6 pb-8">
      <div className="w-full mx-auto" style={{ maxWidth: '34.5rem' }}>
        <header className="flex justify-between items-center px-8 py-6">
          <DialogTrigger>
            <AppLogo skipNavigate />
            <PreventNavigateModal />
          </DialogTrigger>
        </header>
        <main
          className="flex flex-col rounded-2xl"
          style={{ background: 'var(--surface-container-low)' }}
        >
          <div className="pt-6 pr-8 pb-6 pl-4 flex gap-2 items-start">
            <DialogTrigger>
              <IconButton icon={MdArrowBack} />
              <PreventNavigateModal />
            </DialogTrigger>
            <div>
              <h1 className="text--title-large">Nuevo pico y placa</h1>
              <p className="text--body-medium mt-1">
                Ingresa la siguiente información
              </p>
            </div>
          </div>
          <form className="px-8 flex flex-col gap-6">
            <ComboBox label="Ciudad" placeholder="Seleccionar">
              <ListBoxItem>Pasto</ListBoxItem>
              <ListBoxItem>Medellín - Área Metropolitana</ListBoxItem>
              <ListBoxItem>Bogotá - Área Metropolitana</ListBoxItem>
              <ListBoxItem>Manizales</ListBoxItem>
              <ListBoxItem>Cali</ListBoxItem>
              <ListBoxItem>Pereira</ListBoxItem>
            </ComboBox>

            <ComboBox label="Tipo de vehículo" placeholder="Seleccionar">
              <ListBoxItem>Carro particular</ListBoxItem>
              <ListBoxItem>Moto 2 tiempos</ListBoxItem>
              <ListBoxItem>Moto 4 tiempos</ListBoxItem>
              <ListBoxItem>Taxi</ListBoxItem>
            </ComboBox>

            <div className="flex items-center gap-2">
              <TimeInput label="Hora inicio" pickerTitle="Seleccionar" />
              <Divider className="w-4 mt-4" />
              <TimeInput label="Hora fin" pickerTitle="Seleccionar" />
            </div>

            <DatePicker label="Vigente desde" value={null} />

            <AddChips />

            <div className="pt-6 pb-8 flex items-center justify-center">
              <DialogTrigger>
                <Button text="Crear pico y placa" />
                <Modal
                  title="¿Está seguro de crear el pico y placa?"
                  style={{ maxWidth: '19.5rem' }}
                  icon={MdError}
                  buttons={[
                    close => (
                      <Button
                        onPress={close}
                        text="Cancelar"
                        variant="inline"
                      />
                    ),
                    close => (
                      <Button
                        text="Crear"
                        onPress={() => {
                          setCreated(true);
                          close();
                        }}
                      />
                    ),
                  ]}
                />
              </DialogTrigger>
            </div>
          </form>
          <Modal
            isOpen={created}
            title="¡Pico y placa creado!"
            icon={MdCheck}
            buttons={[
              () => <Button text="Listo" onPress={() => navigate('/home')} />,
            ]}
          />
        </main>
      </div>
    </div>
  );
}
