import React from 'react';
import {
  Dialog,
  Heading,
  ModalOverlay,
  Modal as RAModal,
} from 'react-aria-components';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import './modal.css';

type ActionButton = (close: () => unknown) => JSX.Element;

type Props = {
  title?: string;
  description?: string;
  icon?: IconType;
  isDismissable?: boolean;
  buttons: ActionButton[];
  children?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => unknown;
  className?: string;
  style?: React.CSSProperties;
};

export function Modal({
  title,
  description,
  buttons,
  icon: Icon,
  children,
  isDismissable = true,
  isOpen,
  onOpenChange,
  className,
  style,
}: Props) {
  const hasIcon = !!Icon;
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={!isDismissable}
      className="modal-overlay"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <RAModal className="modal__container">
        <Dialog
          role="alertdialog"
          className={clsx('modal', className)}
          style={style}
        >
          {({ close }) => (
            <>
              <div
                className={clsx('modal__heading', {
                  'modal__heading--has-icon': hasIcon,
                })}
              >
                {Icon && <Icon size="1.5rem" />}
                {title && (
                  <Heading
                    slot="title"
                    className="modal__title text--headline-small"
                  >
                    {title}
                  </Heading>
                )}
                {!title && (
                  <Heading
                    slot="title"
                    className="modal__description text--body-medium"
                  >
                    {description}
                  </Heading>
                )}
                {title && description && (
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
  );
}
