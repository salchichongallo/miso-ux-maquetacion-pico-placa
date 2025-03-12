import {
  Input,
  ListBox,
  Popover,
  Label,
  ComboBox as RAComboBox,
  ComboBoxStateContext,
  Text,
  ComboBoxProps,
  ValidationResult,
} from 'react-aria-components';
import { useContext } from 'react';
import { MdArrowDropDown, MdOutlineCancel } from 'react-icons/md';

import { IconButton } from '../icon-button/icon-button';

import './combobox.css';
import './combobox-field.css';

interface AllProps<T extends object>
  extends Omit<ComboBoxProps<T>, 'children'> {
  label: string;
  children: React.ReactNode;
  placeholder?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function ComboBox<T extends object>({
  label,
  placeholder,
  description,
  children,
  ...props
}: AllProps<T>) {
  const hasSupport = !!description;
  return (
    <RAComboBox {...props} menuTrigger="focus">
      <div className="combobox-field__wrapper">
        <fieldset className="combobox-field">
          <legend className="combobox-field__legend">
            <Label className="combobox-field__label text--body-small">
              {label}
            </Label>
          </legend>
          <Input placeholder={placeholder} className="combobox-field__input" />
        </fieldset>
        <ToggleIconButton />
        {hasSupport && (
          <Text
            slot="description"
            className="text--body-small combobox__supporting"
          >
            {description}
          </Text>
        )}
      </div>
      <Popover offset={2}>
        <ListBox>{children}</ListBox>
      </Popover>
    </RAComboBox>
  );
}

function ToggleIconButton() {
  const state = useContext(ComboBoxStateContext);
  return (
    <div className="combobox-field__trailing-icon">
      {state?.inputValue ? (
        <IconButton
          onPress={() => {
            state.setSelectedKey(null);
            state.setInputValue('');
          }}
          icon={MdOutlineCancel}
        />
      ) : (
        <IconButton icon={MdArrowDropDown} />
      )}
    </div>
  );
}
