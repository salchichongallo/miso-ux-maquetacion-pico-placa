import clsx from 'clsx';
import { useRef, useState } from 'react';
import { AriaTextFieldProps, useFocus, useTextField } from 'react-aria';
import './text-field.css';

type Props = {
  label: string;
};

type AllProps = Props & AriaTextFieldProps;

export function TextField(props: AllProps) {
  const { label } = props;
  const [isFocused, setFocused] = useState(false);
  const ref = useRef(null);
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
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
  });

  return (
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
      {props.description && (
        <div {...descriptionProps}>{props.description}</div>
      )}
      {isInvalid && (
        <div {...errorMessageProps}>{validationErrors.join(' ')}</div>
      )}
    </fieldset>
  );
}
