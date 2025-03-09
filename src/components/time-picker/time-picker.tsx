import {
  Dialog,
  Heading,
  ModalOverlay,
  Modal as RAModal,
  DateInput,
  TimeField as RATimeField,
} from 'react-aria-components';
import { useState } from 'react';
import { Time } from '@internationalized/date';
import { Button } from '../button/button';
import { TimeSegments } from './time-segments';
import './time-picker.css';

type PlainTime = {
  hour: number;
  minute: number;
};

type OkParams = {
  time: PlainTime;
  close: () => unknown;
};
type OkCallback = (params: OkParams) => unknown;

type Props = {
  title: string;
  isDismissable?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => unknown;
  defaultTime?: { hour: number; minute: number };
  onOk?: OkCallback;
};

export function TimePicker({
  title,
  isDismissable = true,
  isOpen,
  onOpenChange,
  defaultTime,
  onOk,
}: Props) {
  const [time, setTime] = useState<Time | null>(() =>
    defaultTime ? new Time(defaultTime.hour, defaultTime.minute) : null,
  );

  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={!isDismissable}
      className="time-picker-overlay"
    >
      <RAModal className="time-picker__container">
        <Dialog role="alertdialog" className="time-picker">
          {({ close }) => {
            const onOkHandle = () =>
              onOk
                ? onOk({
                    close,
                    time: { hour: time!.hour, minute: time!.minute },
                  })
                : close();

            return (
              <>
                <div className="time-picker__headline">
                  <Heading
                    slot="title"
                    className="time-picker__title text--title-small"
                  >
                    {title}
                  </Heading>
                </div>
                <div className="time-picker__input-selection">
                  <RATimeField
                    value={time}
                    onChange={setTime}
                    aria-label={title}
                    name="time"
                    shouldForceLeadingZeros
                    autoFocus
                  >
                    <DateInput className="my-date-input">
                      {segment => <TimeSegments segment={segment} />}
                    </DateInput>
                  </RATimeField>
                </div>
                <div className="time-picker__buttons">
                  <Button onPress={close} text="Cancelar" variant="inline" />
                  <Button onPress={onOkHandle} type="submit" text="Listo" />
                </div>
              </>
            );
          }}
        </Dialog>
      </RAModal>
    </ModalOverlay>
  );
}
