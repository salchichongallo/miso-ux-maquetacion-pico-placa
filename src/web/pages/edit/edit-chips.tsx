import { useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';

import { Chip, Chips } from '../../../components/chip';
import { Day, DayModal } from '../../components/day-modal';

export function EditChips() {
  const [selected, setSelected] = useState<number | null>(null);
  const [chips, setChips] = useState<Day[]>([
    {
      id: 0,
      day: 'Lunes',
      plates: '3 y 4',
    },
    {
      id: 1,
      day: 'Martes',
      plates: '2 y 8',
    },
    {
      id: 2,
      day: 'Miércoles',
      plates: '5 y 9',
    },
    {
      id: 3,
      day: 'Jueves',
      plates: '1 y 7',
    },
    {
      id: 4,
      day: 'Viernes',
      plates: '0 y 6',
    },
  ]);

  const handleDelete = (day?: Day) => {
    setChips(items => items.filter(it => it.id !== day?.id));
    setSelected(null);
  };

  const handleEdit = (day: Day) => {
    setChips(items => items.map(it => (it.id === day.id ? day : it)));
    setSelected(null);
  };

  const selectedChip = chips.find(it => it.id === selected);

  return (
    <div>
      <div
        className="text--body-small mb-1"
        style={{ color: 'var(--on-surface)' }}
      >
        Dígitos
      </div>
      <Chips>
        <DayModal
          isOpen={selected !== null}
          day={selectedChip}
          title="Editar día"
          onDelete={handleDelete}
          onDone={handleEdit}
          onCancel={() => setSelected(null)}
        />
        {chips.map(item => (
          <Chip
            key={item.id}
            text={`${item.day}: ${item.plates}`}
            icon={MdOutlineEdit}
            onPress={() => setSelected(item.id)}
          />
        ))}
      </Chips>
    </div>
  );
}
