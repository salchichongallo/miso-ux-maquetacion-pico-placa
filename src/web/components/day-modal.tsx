import { useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { ListBoxItem } from 'react-aria-components';

import { Modal } from '../../components/modal/modal';
import { Button } from '../../components/button/button';
import { ComboBox } from '../../components/combobox/combobox';
import { LeadingAction } from '../../components/modal/leading-action';
import { IconButton } from '../../components/icon-button/icon-button';

export interface Day {
  id: number;
  day: string;
  plates: string;
}

type Props = {
  title: string;
  day?: Day;
  onCancel?: () => void;
  onDelete?: (day?: Day) => void;
  onDone?: (day: Day) => void;
};

export function DayModal({ title, day, onCancel, onDelete, onDone }: Props) {
  const [value, setValue] = useState<Partial<Day> | null>(day || null);

  const clear = () => setValue(null);

  return (
    <Modal
      title={title}
      buttons={[
        close => (
          <LeadingAction>
            <IconButton
              onPress={() => {
                onDelete?.(day);
                clear();
                close();
              }}
              icon={MdOutlineDelete}
            />
          </LeadingAction>
        ),
        close => (
          <Button
            onPress={() => {
              onCancel?.();
              clear();
              close();
            }}
            text="Cancelar"
            variant="inline"
          />
        ),
        close => (
          <Button
            onPress={() => {
              onDone?.(value! as Day);
              clear();
              close();
            }}
            text="Listo"
            isDisabled={!value?.day || !value?.plates}
          />
        ),
      ]}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <ComboBox
          inputValue={value?.day || undefined}
          onSelectionChange={selectedDay =>
            setValue(current => ({ ...current, day: selectedDay as string }))
          }
          label="Día"
          placeholder="Seleccionar"
        >
          <ListBoxItem id="Lunes">Lunes</ListBoxItem>
          <ListBoxItem id="Martes">Martes</ListBoxItem>
          <ListBoxItem id="Miércoles">Miércoles</ListBoxItem>
          <ListBoxItem id="Jueves">Jueves</ListBoxItem>
          <ListBoxItem id="Viernes">Viernes</ListBoxItem>
        </ComboBox>
        <ComboBox
          inputValue={value?.plates || undefined}
          onSelectionChange={selectedPlates =>
            setValue(current => ({
              ...current,
              plates: selectedPlates as string,
            }))
          }
          label="Dígitos"
          placeholder="Seleccionar"
          description="Separados por coma"
        >
          <ListBoxItem id="1, 2">1, 2</ListBoxItem>
          <ListBoxItem id="3, 4">3, 4</ListBoxItem>
          <ListBoxItem id="5, 6">5, 6</ListBoxItem>
          <ListBoxItem id="7, 8">7, 8</ListBoxItem>
          <ListBoxItem id="9, 0">9, 0</ListBoxItem>
        </ComboBox>
      </div>
    </Modal>
  );
}
