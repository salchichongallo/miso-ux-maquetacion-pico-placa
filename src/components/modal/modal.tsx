import React from 'react';
import {
  Dialog,
  Heading,
  ModalOverlay,
  DialogTrigger,
  Modal as RAModal,
} from 'react-aria-components';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { Button } from '../button/button';
import './modal.css';

type ActionButton = (close: () => unknown) => JSX.Element;

type Props = {
  title: string;
  description?: string;
  icon?: IconType;
  isDismissable?: boolean;
  buttons: ActionButton[];
  children?: React.ReactNode;
};

export function Modal({
  title,
  description,
  buttons,
  icon: Icon,
  children,
  isDismissable = true,
}: Props) {
  const hasIcon = !!Icon;
  return (
    <DialogTrigger>
      <Button text="Abrir modal" />
      <ModalOverlay
        isDismissable={isDismissable}
        isKeyboardDismissDisabled={!isDismissable}
        className="modal-overlay"
      >
        <RAModal className="modal__container">
          <Dialog role="alertdialog" className="modal">
            {({ close }) => (
              <>
                <div
                  className={clsx('modal__heading', {
                    'modal__heading--has-icon': hasIcon,
                  })}
                >
                  {Icon && <Icon size="1.5rem" />}
                  <Heading
                    slot="title"
                    className="modal__title text--headline-small"
                  >
                    {title}
                  </Heading>
                  {description && (
                    <p className="modal__description text--body-medium">
                      {description}
                    </p>
                  )}
                </div>
                {children && <div className="modal__children">{children}</div>}
                <div className="modal__actions">
                  <div className="modal__buttons">
                    {buttons.map((callback, index) => (
                      <React.Fragment key={index}>
                        {callback(close)}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </>
            )}
          </Dialog>
        </RAModal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
