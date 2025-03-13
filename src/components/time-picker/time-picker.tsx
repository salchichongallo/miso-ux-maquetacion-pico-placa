import {
  Dialog,
  Heading,
  ModalOverlay,
  Modal as RAModal,
  DateInput,
  TimeField as RATimeField,
  Form,
} from 'react-aria-components';
import clsx from 'clsx';
import { useState } from 'react';
import { Time } from '@internationalized/date';

import { Button } from '../button/button';
import { TimeSegments } from './time-segments';
import './time-picker.css';

type OkParams = {
  time: Time | null;
  close: () => void;
};

type Props = {
  title: string;
  isDismissable?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => unknown;
  initialTime: Time | null;
  onOk: (params: OkParams) => void;
  hidePeriod?: boolean;
};

export function TimePicker({
  title,
  isDismissable = true,
  isOpen,
  onOpenChange,
  initialTime,
  onOk,
  hidePeriod,
}: Props) {
  const [time, setTime] = useState<Time | null>(initialTime);
  return (
    <ModalOverlay
      isOpen={isOpen}
      isDismissable={isDismissable}
      onOpenChange={onOpenChange}
      isKeyboardDismissDisabled={!isDismissable}
      className="time-picker-overlay"
    >
      <RAModal className="time-picker__container">
        <Dialog
          role="alertdialog"
          className={clsx('time-picker', {
            'time-picker--hide-period': hidePeriod,
          })}
        >
          {({ close }) => (
            <Form
              onSubmit={event => {
                event.preventDefault();
                onOk({ time, close });
              }}
            >
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
                <Button type="submit" text="Listo" />
              </div>
            </Form>
          )}
        </Dialog>
      </RAModal>
    </ModalOverlay>
  );
}
