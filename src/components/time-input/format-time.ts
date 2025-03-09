import { Time } from '@internationalized/date';

export function formatTime(time: Time) {
  const isAm = time.hour < 12;
  let hour = isAm ? time.hour : time.hour - 12;
  if (hour === 0) {
    hour = 12;
  }

  const minutes = time.minute.toString().padStart(2, '0');
  const period = isAm ? 'a. m.' : 'p. m.';

  return `${hour.toString().padStart(1, '0')}:${minutes} ${period}`;
}
