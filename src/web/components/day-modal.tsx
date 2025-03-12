import { useEffect, useState } from 'react';
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
  isOpen?: boolean;
  onCancel?: () => void;
  onDelete?: (day?: Day) => void;
  onDone?: (day: Day) => void;
};

const DAY_OPTIONS = [
  {
    id: 0,
    text: 'Lunes',
  },
  {
    id: 1,
    text: 'Martes',
  },
  {
    id: 2,
    text: 'Miércoles',
  },
  {
    id: 3,
    text: 'Jueves',
  },
  {
    id: 4,
    text: 'Viernes',
  },
];

const PLATES_OPTIONS = [
  { id: 0, text: '3, 4' },
  { id: 1, text: '2, 8' },
  { id: 2, text: '5, 9' },
  { id: 3, text: '1, 7' },
  { id: 4, text: '0, 6' },
];

export function DayModal({
  isOpen,
  title,
  day,
  onCancel,
  onDelete,
  onDone,
}: Props) {
  const [value, setValue] = useState<Partial<Day> | null>(null);

  useEffect(() => {
    if (day) {
      setValue(day);
    }
  }, [day]);

  const clear = () => setValue(null);

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      alignTitle="left"
      style={{ maxWidth: '19.5rem' }}
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
          onSelectionChange={id =>
            setValue(current => {
              const selectedDay = DAY_OPTIONS.find(it => it.id === id);
              return { ...current, day: selectedDay?.text };
            })
          }
          defaultSelectedKey={day?.id}
          label="Día"
          placeholder="Seleccionar"
          items={DAY_OPTIONS}
        >
          {item => <ListBoxItem>{item.text}</ListBoxItem>}
        </ComboBox>
        <ComboBox
          onSelectionChange={id =>
            setValue(current => {
              const selectedPlates = PLATES_OPTIONS.find(
                it => it.id === id,
              )!.text;
              return {
                ...current,
                plates: selectedPlates,
              };
            })
          }
          label="Dígitos"
          placeholder="Seleccionar"
          description="Separados por coma"
          defaultSelectedKey={day?.id}
          items={PLATES_OPTIONS}
        >
          {item => <ListBoxItem>{item.text}</ListBoxItem>}
        </ComboBox>
      </div>
    </Modal>
  );
}
