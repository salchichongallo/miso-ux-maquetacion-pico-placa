import clsx from 'clsx';
import { useContext, useRef } from 'react';
import {
  useRadio,
  useFocusRing,
  AriaRadioProps,
  VisuallyHidden,
} from 'react-aria';
import { RadioContext } from './radio-context';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import './radio.css';

export function Radio(props: AriaRadioProps) {
  const { children } = props;
  const state = useContext(RadioContext);
  const ref = useRef(null);
  const { inputProps, isSelected, isDisabled, isPressed } = useRadio(
    props,
    state,
    ref,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  const classes = clsx('radio', {
    'radio--focused': isFocusVisible,
    'radio--pressed': isPressed,
    'radio--selected': isSelected,
    'radio--disabled': isDisabled,
    'radio--enabled': !isDisabled,
  });

  return (
    <label className={classes}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div className="radio__container">
        <div className="radio__input">
          {isSelected ? (
            <MdRadioButtonChecked size="1.5rem" aria-hidden />
          ) : (
            <MdRadioButtonUnchecked size="1.5rem" aria-hidden />
          )}
        </div>
      </div>
      {children}
    </label>
  );
}
