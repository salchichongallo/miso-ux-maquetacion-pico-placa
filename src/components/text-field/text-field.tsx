import clsx from 'clsx';
import { ReactNode, useRef, useState } from 'react';
import { AriaTextFieldProps, useFocus, useTextField } from 'react-aria';
import './text-field.css';

type Props = {
  label: string;
  description: string;
  errorMessage?: string;
  isInvalid?: boolean;
};

type AllProps = Props & AriaTextFieldProps;

export function TextField(props: AllProps) {
  const { label, errorMessage } = props;
  const [isFocused, setFocused] = useState(false);
  const ref = useRef(null);
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
  } = useTextField(props, ref);
  const { focusProps } = useFocus({
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  });

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
  });

  const hasSupport = isInvalid || !!props.errorMessage;

  return (
    <div className="text-field__wrapper">
      <fieldset className={fieldClasses}>
        <legend className="text-field__legend">
          <label {...labelProps} className={labelClasses}>
            {label}
          </label>
        </legend>
        <input
          {...inputProps}
          {...focusProps}
          ref={ref}
          className={inputClasses}
        />
      </fieldset>
      {hasSupport && (
        <div className="text-field__supporting text--body-small">
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
