import { useState } from 'react';
import { Time } from '@internationalized/date';

import { TextField } from '../text-field/text-field';
import { TimePicker } from '../time-picker/time-picker';
import { formatTime } from './format-time';

type PlainTime = {
  hour: number;
  minute: number;
};

type Props = {
  label: string;
  placeholder?: string;
  defaultTime?: PlainTime;
};

export function TimeInput({
  label,
  defaultTime,
  placeholder = 'Seleccionar',
}: Props) {
  const [isOpen, setOpen] = useState(false);
  const [time, setTime] = useState<Time | null>(() =>
    defaultTime ? new Time(defaultTime.hour, defaultTime.minute) : null,
  );
  const valueLabel = time ? formatTime(time) : placeholder || '';

  return (
    <TextField
      value={valueLabel}
      label={label}
      placeholder={placeholder}
      onClick={() => setOpen(true)}
      isReadOnly
      trailingIcon={
        <TimePicker
          title="Selecciona"
          isOpen={isOpen}
          onOpenChange={setOpen}
          initialTime={time}
          onOk={({ time: newTime }) => {
            setTime(newTime);
            setOpen(false);
          }}
        />
      }
    />
  );
}
