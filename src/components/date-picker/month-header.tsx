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

export function MonthHeader({ value, setValue }: Props) {
  const monthFormatter = useDateFormatter({ month: 'short' });

  const onPrevMonth = () => {
    setValue(current => {
      const month = startOfMonth(current);
      const prevMonth = month.subtract({ months: 1 });
      return prevMonth as CalendarDate;
    });
  };

  const onNextMonth = () => {
    setValue(current => {
      const month = startOfMonth(current);
      const prevMonth = month.add({ months: 1 });
      return prevMonth as CalendarDate;
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onPress={onPrevMonth} icon={MdChevronLeft} />
      <span
        style={{
          padding: '0 0.5rem',
          color: 'var(--on-surface-variant)',
          textTransform: 'capitalize',
        }}
      >
        {value && monthFormatter.format(value.toDate(getLocalTimeZone()))}
      </span>
      <IconButton onPress={onNextMonth} icon={MdChevronRight} />
    </div>
  );
}
