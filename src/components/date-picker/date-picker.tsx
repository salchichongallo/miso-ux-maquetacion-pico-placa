import {
  Dialog,
  Popover,
  DateValue,
  ValidationResult,
  DatePickerProps as RADatePickerProps,
} from 'react-aria-components';
import { useRef, useState } from 'react';
import { MdToday } from 'react-icons/md';
import { useDatePickerState } from 'react-stately';
import { useDateFormatter, useDatePicker, usePress } from 'react-aria';
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

import { Button } from '../button/button';
import { Calendar } from '../calendar/calendar';
import { IconButton } from '../icon-button/icon-button';

import { YearHeader } from './year-header';
import { MonthHeader } from './month-header';

interface DatePickerProps<T extends DateValue> extends RADatePickerProps<T> {
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  const formatter = useDateFormatter({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const state = useDatePickerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(() => today(getLocalTimeZone()));
  const { dialogProps, calendarProps } = useDatePicker(props, state, ref);

  const { pressProps } = usePress({ onPress: () => state.toggle() });

  const onCancel = () => {
    if (state.dateValue) {
      setValue(state.dateValue as CalendarDate);
    } else {
      setValue(today(getLocalTimeZone()));
    }
    state.close();
  };

  const onConfirm = () => state.setDateValue(value);

  const valueString = value
    ? formatter.format(value.toDate(getLocalTimeZone()))
    : '';

  return (
    <div style={{ width: '100%' }}>
      <div ref={ref} style={{ display: 'flex', width: '100%' }}>
        <input
          {...pressProps}
          readOnly
          value={valueString}
          placeholder="Seleccionar"
          style={{ width: '100%' }}
        />
        <IconButton onPress={state.toggle} icon={MdToday} />
      </div>
      <Popover isOpen={state.isOpen} triggerRef={ref} placement="bottom start">
        <Dialog
          {...dialogProps}
          style={{
            background: 'var(--surface-container)',
            boxShadow: 'var(--elevation--1)',
            borderRadius: '1rem',
          }}
        >
          <div
            className="flex justify-between text--label-large"
            style={{ height: '4rem', width: '100%' }}
          >
            <MonthHeader value={value} setValue={setValue} />
            <YearHeader value={value} setValue={setValue} />
          </div>
          <div style={{ padding: '0 0.75rem 0.25rem 0.75rem' }}>
            <Calendar
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...(calendarProps as any)}
              hideHeader
              value={value}
              onChange={setValue}
              focusedValue={value}
              minValue={null}
              maxValue={null}
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.5rem 0.75rem',
              justifyContent: 'flex-end',
            }}
          >
            <Button onPress={onCancel} text="Cancelar" variant="inline" />
            <Button onPress={onConfirm} text="Listo" />
          </div>
        </Dialog>
      </Popover>
    </div>
  );
}
