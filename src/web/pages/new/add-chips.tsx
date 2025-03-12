import { useState } from 'react';
import { MdAdd, MdCancel } from 'react-icons/md';
import { DialogTrigger } from 'react-aria-components';

import { Chip, Chips } from '../../../components/chip';
import { Day, DayModal } from '../../components/day-modal';

export function AddChips() {
  const [chips, setChips] = useState<Day[]>([]);

  const handleDelete = (day?: Day) =>
    setChips(items => items.filter(it => it.id !== day?.id));

  const handleDone = (day: Day) =>
    setChips(items => [...items, { ...day, id: items.length + 1 }]);

  return (
    <div>
      <div
        className="text--body-small mb-1"
        style={{ color: 'var(--on-surface)' }}
      >
        Dígitos
      </div>
      <Chips>
        <DialogTrigger>
          <Chip text="Agregar" icon={MdAdd} />
          <DayModal
            title="Agregar día"
            onDelete={handleDelete}
            onDone={handleDone}
          />
        </DialogTrigger>
        {chips.map(item => (
          <Chip
            key={item.id}
            text={`${item.day}: ${item.plates}`}
            icon={MdCancel}
            onPress={() => handleDelete(item)}
          />
        ))}
      </Chips>
    </div>
  );
}
