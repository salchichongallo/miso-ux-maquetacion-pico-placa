import { DateSegment, DateSegmentProps } from 'react-aria-components';
import { SegmentInput } from './segment-input';
import { DayPeriodGroup } from './day-period-group';

type Props = {
  segment: DateSegmentProps['segment'];
};

export function TimeSegments({ segment }: Props) {
  const isHour = segment.type === 'hour';
  const isMinute = segment.type === 'minute';
  if (isHour || isMinute) {
    return <SegmentInput segment={segment} />;
  }

  const isSeparator = segment.type === 'literal' && segment.text === ':';
  if (isSeparator) {
    return <DateSegment segment={segment} className="segment-separator" />;
  }

  if (segment.type === 'dayPeriod') {
    return <DayPeriodGroup segment={segment} />;
  }

  return <DateSegment segment={segment} className="segment-literal" />;
}
