import {
  CalendarDate,
  startOfMonth,
  getLocalTimeZone,
} from '@internationalized/date';
import { useDateFormatter } from 'react-aria';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { IconButton } from '../icon-button/icon-button';

type Props = {
  value?: CalendarDate;
  setValue: React.Dispatch<React.SetStateAction<CalendarDate>>;
};

export function YearHeader({ value, setValue }: Props) {
  const yearFormatter = useDateFormatter({ year: 'numeric' });

  const onPrevYear = () => {
    setValue(current => {
      const year = startOfMonth(current);
      const prevYear = year.subtract({ years: 1 });
      return prevYear as CalendarDate;
    });
  };

  const onNextYear = () => {
    setValue(current => {
      const year = startOfMonth(current);
      const nextYear = year.add({ years: 1 });
      return nextYear as CalendarDate;
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onPress={onPrevYear} icon={MdChevronLeft} />
      <span
        style={{
          padding: '0 0.5rem',
          color: 'var(--on-surface-variant)',
          textTransform: 'capitalize',
        }}
      >
        {value && yearFormatter.format(value.toDate(getLocalTimeZone()))}
      </span>
      <IconButton onPress={onNextYear} icon={MdChevronRight} />
    </div>
  );
}
