import clsx from 'clsx';
import { useRef } from 'react';
import type { CalendarProps, DateValue } from 'react-aria-components';
import {
  Text,
  Heading,
  CalendarCell,
  CalendarGrid,
  Calendar as RACalendar,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
} from 'react-aria-components';
import { getLocalTimeZone, isToday } from '@internationalized/date';

import './calendar.css';
import { IconButton } from '../icon-button/icon-button';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface MyCalendarProps<T extends DateValue> extends CalendarProps<T> {
  errorMessage?: string;
  hideHeader?: boolean;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  hideHeader,
  ...props
}: MyCalendarProps<T>) {
  const calendarClasses = clsx('pp-calendar', props.className);
  const timeZone = useRef(getLocalTimeZone());
  return (
    <RACalendar {...props} className={calendarClasses}>
      {!hideHeader && (
        <header className="flex gap-4 items-center justify-center">
          <IconButton icon={MdChevronLeft} slot="previous" />
          <Heading />
          <IconButton icon={MdChevronRight} slot="previous" />
        </header>
      )}
      <CalendarGrid weekdayStyle="short">
        <CalendarGridHeader>
          {day => (
            <CalendarHeaderCell className="pp-calendar-header-cell text--body-large">
              {
                {
                  dom: 'D',
                  lun: 'L',
                  mar: 'M',
                  mié: 'X',
                  jue: 'J',
                  vie: 'V',
                  sáb: 'S',
                }[day]
              }
            </CalendarHeaderCell>
          )}
        </CalendarGridHeader>
        <CalendarGridBody>
          {date => (
            <CalendarCell
              date={date}
              className={clsx('pp-calendar-cell text--body-large', {
                'pp-calendar-cell--today': isToday(date, timeZone.current),
              })}
            >
              {({ defaultChildren }) => (
                <div className="pp-calendar-cell__content">
                  {defaultChildren}
                </div>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>

      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </RACalendar>
  );
}
