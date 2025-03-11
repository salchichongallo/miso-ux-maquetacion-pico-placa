import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdError, MdToday } from 'react-icons/md';
import { DialogTrigger, ListBoxItem } from 'react-aria-components';

import { AppLogo } from '../../components/app-logo';
import { Modal } from '../../../components/modal/modal';
import { Button } from '../../../components/button/button';
import { Divider } from '../../../components/divider/divider';
import { ComboBox } from '../../../components/combobox/combobox';
import { TimeInput } from '../../../components/time-input/time-input';
import { TextField } from '../../../components/text-field/text-field';
import { IconButton } from '../../../components/icon-button/icon-button';

export function NewPage() {
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
          <div className="pt-6 pr-8 pb-6 pl-6 flex gap-2 items-start">
            <DialogTrigger>
              <IconButton icon={MdArrowBack} />
              <Modal
                title="¿Desea salir?"
                description="Perderá su progreso."
                icon={MdError}
                buttons={[
                  close => (
                    <Button onPress={close} text="Cancelar" variant="inline" />
                  ),
                  close => (
                    <Button
                      text="Salir"
                      onPress={() => {
                        close();
                        navigate(-1);
                      }}
                    />
                  ),
                ]}
              />
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

            <TextField
              label="Vigente desde"
              placeholder="Seleccionar"
              trailingIcon={
                <IconButton
                  onPress={() => alert('TODO: open date picker')}
                  icon={MdToday}
                />
              }
            />

            {/* TODO: add digits field */}

            <div className="pt-6 pb-8 flex items-center justify-center">
              <Button isDisabled type="submit" text="Crear pico y placa" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
