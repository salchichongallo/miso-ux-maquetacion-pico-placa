import {
  DateSegmentProps,
  Button as RAButton,
  TimeFieldStateContext,
  DateSegment as RADateSegment,
} from 'react-aria-components';
import clsx from 'clsx';
import { useContext, useEffect, useRef } from 'react';

type DayPeriodGroupProps = {
  segment: DateSegmentProps['segment'];
};

export function DayPeriodGroup({ segment }: DayPeriodGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const state = useContext(TimeFieldStateContext)!;

  useEffect(() => {
    ref.current!.contentEditable = 'false';
  }, []);

  const isAm = segment.text === 'a. m.';

  const changeToAm = () => state.setSegment('dayPeriod', 0);
  const changeToPm = () => state.setSegment('dayPeriod', 12);

  return (
    <RADateSegment ref={ref} segment={segment} className="segment-day-period">
      <RAButton
        onPress={changeToAm}
        type="button"
        className={clsx(
          'segment-day-period__selector text--title-medium',
          'segment-day-period__selector-am',
          { 'segment-day-period__selector-am--selected': isAm },
        )}
      >
        AM
      </RAButton>
      <RAButton
        onPress={changeToPm}
        type="button"
        className={clsx(
          'segment-day-period__selector text--title-medium',
          'segment-day-period__selector-pm',
          { 'segment-day-period__selector-pm--selected': !isAm },
        )}
      >
        PM
      </RAButton>
    </RADateSegment>
  );
}
