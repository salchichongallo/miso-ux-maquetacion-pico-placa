import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
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

import { EditChips } from './edit-chips';

export function EditPage() {
  const navigate = useNavigate();
  const [edited, setEdited] = useState(false);

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
          <div className="pt-6 pr-8 pb-6 pl-4 flex gap-2 items-center">
            <DialogTrigger>
              <IconButton icon={MdArrowBack} />
              <PreventNavigateModal />
            </DialogTrigger>
            <div>
              <h1 className="text--title-large">Editar este pico y placa</h1>
            </div>
          </div>
          <form className="px-8 flex flex-col gap-6">
            <ComboBox
              defaultSelectedKey={1}
              label="Ciudad"
              placeholder="Seleccionar"
              defaultItems={[
                { id: 0, text: 'Pasto' },
                { id: 1, text: 'Medellín - Área Metropolitana' },
                { id: 2, text: 'Bogotá - Área Metropolitana' },
                { id: 3, text: 'Manizales' },
                { id: 4, text: 'Cali' },
                { id: 5, text: 'Pereira' },
              ]}
            >
              {item => <ListBoxItem>{item.text}</ListBoxItem>}
            </ComboBox>

            <ComboBox
              defaultSelectedKey={0}
              defaultItems={[
                { id: 0, text: 'Carro particular' },
                { id: 1, text: 'Moto 2 tiempos' },
                { id: 2, text: 'Moto 4 tiempos' },
                { id: 3, text: 'Taxi' },
              ]}
              label="Tipo de vehículo"
              placeholder="Seleccionar"
            >
              {item => <ListBoxItem>{item.text}</ListBoxItem>}
            </ComboBox>

            <div className="flex items-center gap-2">
              <TimeInput
                label="Hora inicio"
                defaultTime={{ hour: 5, minute: 0 }}
                pickerTitle="Seleccionar"
              />
              <Divider className="w-4 mt-4" />
              <TimeInput
                label="Hora fin"
                defaultTime={{ hour: 20, minute: 0 }}
                pickerTitle="Seleccionar"
              />
            </div>

            <DatePicker
              label="Vigente desde"
              value={null}
              shouldFlip={false}
              placement="top start"
            />

            <EditChips />

            <div className="pt-6 pb-8 flex items-center justify-center">
              <DialogTrigger>
                <Button text="Guardar cambios" />
                <Modal
                  title="Confirmar"
                  description="¿Editar el pico y placa?"
                  style={{ maxWidth: '19.5rem' }}
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
                        text="Editar"
                        onPress={() => {
                          setEdited(true);
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
            isOpen={edited}
            title="¡Pico y placa editado!"
            isDismissable={false}
            icon={MdCheck}
            buttons={[
              () => (
                <Button text="Listo" onPress={() => navigate('/detalle')} />
              ),
            ]}
          />
        </main>
      </div>
    </div>
  );
}
