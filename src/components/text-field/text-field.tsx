import clsx from 'clsx';
import { MdError } from 'react-icons/md';
import { ReactNode, useRef, useState } from 'react';
import {
  AriaTextFieldProps,
  mergeProps,
  useFocus,
  useTextField,
} from 'react-aria';
import { IconButton } from '../icon-button/icon-button';
import './text-field.css';

type Props = {
  label: string;
  description?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  trailingIcon?: ReactNode;
  onClick?: () => void;
};

type AllProps = Props & AriaTextFieldProps;

export function TextField(props: AllProps) {
  const { label, errorMessage, trailingIcon, description } = props;
  const [isFocused, setFocused] = useState(false);
  const ref = useRef(null);
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
  } = useTextField(props, ref);
  const { focusProps } = useFocus(
    mergeProps(
      {
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
      },
      { onFocus: props.onFocus },
    ),
  );

  const labelClasses = clsx(
    'text-field__label',
    'text--body-small',
    labelProps.className,
  );
  const inputClasses = clsx(
    'text-field__input',
    'text--body-large',
    inputProps.className,
  );
  const fieldClasses = clsx('text-field', {
    'text-field--focused': isFocused,
    'text-field--invalid': isInvalid,
    'text-field--with-trailing-icon': !!trailingIcon,
  });

  const hasSupport = description || !!props.errorMessage;
  const supportClasses = clsx('text-field__supporting text--body-small', {
    'text-field__supporting--invalid': isInvalid,
  });
  const trailingClasses = clsx('text-field__trailing-icon', {
    'text-field__trailing-icon--invalid': isInvalid,
  });

  return (
    <div className="text-field__wrapper">
      <fieldset className={fieldClasses}>
        <legend className="text-field__legend">
          <label {...labelProps} className={labelClasses}>
            {label}
          </label>
        </legend>
        <input
          {...mergeProps(inputProps, focusProps, { onClick: props.onClick })}
          ref={ref}
          className={inputClasses}
        />
      </fieldset>
      {(trailingIcon || isInvalid) && (
        <div className={trailingClasses}>
          {isInvalid ? (
            <IconButton icon={MdError} color="var(--error)" />
          ) : (
            trailingIcon
          )}
        </div>
      )}
      {hasSupport && (
        <div className={supportClasses}>
          {isInvalid ? (
            <span {...errorMessageProps}>{errorMessage as ReactNode}</span>
          ) : (
            <span {...descriptionProps}>{props.description}</span>
          )}
        </div>
      )}
    </div>
  );
}
