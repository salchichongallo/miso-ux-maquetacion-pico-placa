import { DateSegment, DateSegmentProps } from 'react-aria-components';

type Props = {
  segment: DateSegmentProps['segment'];
};

export function SegmentInput({ segment }: Props) {
  return (
    <div className="my-date-input__container">
      <DateSegment segment={segment} className="segment-input" />
      <span className="segment-input__helper text--body-small">
        {segment.type === 'hour' ? 'Hora' : 'Minuto'}
      </span>
    </div>
  );
}
