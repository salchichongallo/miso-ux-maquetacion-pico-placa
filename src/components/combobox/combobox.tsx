import {
  Input,
  ListBox,
  Popover,
  Label,
  ComboBox as RAComboBox,
  ComboBoxStateContext,
  Text,
} from 'react-aria-components';
import { useContext } from 'react';
import { MdArrowDropDown, MdOutlineCancel } from 'react-icons/md';

import { IconButton } from '../icon-button/icon-button';

import './combobox.css';
import './combobox-field.css';

type Props = {
  label: string;
  children: React.ReactNode;
  placeholder?: string;
  description?: string;
};

export function ComboBox({ label, placeholder, description, children }: Props) {
  const hasSupport = !!description;
  return (
    <RAComboBox menuTrigger="focus">
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
