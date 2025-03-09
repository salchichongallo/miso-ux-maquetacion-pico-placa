import {
  MdOutlineCancel,
  MdArrowBack,
  MdAdd,
  MdMobileFriendly,
  MdOutlineOpenInNew,
  MdOutlineSchedule,
} from 'react-icons/md';
import { DialogTrigger, ListBoxItem } from 'react-aria-components';

import { Button } from './button/button';
import { RadioGroup, Radio } from './radio';
import { TextField } from './text-field/text-field';
import { IconButton } from './icon-button/icon-button';
import { ComboBox } from './combobox/combobox';
import { Modal } from './modal/modal';
import { TimePicker } from './time-picker/time-picker';

type Props = {
  title: string;
};

export function Showcase({ title }: Props) {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 className="text--display-large" style={{ margin: 0, padding: 0 }}>
        {title}
      </h1>
      <p>Listado de componentes:</p>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <DialogTrigger>
          <Button
            icon={MdOutlineOpenInNew}
            text="Abrir modal"
            variant="outlined"
          />
          <Modal
            title="Título del modal"
            description="Texto de soporte para dar más contexto."
            icon={MdMobileFriendly}
            buttons={[
              close => (
                <Button onPress={close} text="Cancelar" variant="inline" />
              ),
              close => <Button onPress={close} text="Listo" />,
            ]}
          >
            <ComboBox label="Día" placeholder="Seleccionar">
              <ListBoxItem>Lunes</ListBoxItem>
              <ListBoxItem>Martes</ListBoxItem>
              <ListBoxItem>Miércoles</ListBoxItem>
              <ListBoxItem>Jueves</ListBoxItem>
              <ListBoxItem>Viernes</ListBoxItem>
            </ComboBox>
          </Modal>
        </DialogTrigger>
        <DialogTrigger>
          <Button
            icon={MdOutlineSchedule}
            text="Abrir TimePicker"
            variant="outlined"
          />
          <TimePicker
            title="Selecciona"
            defaultTime={{ hour: 10, minute: 59 }}
          />
        </DialogTrigger>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <ComboBox label="Label" placeholder="Seleccionar">
          <ListBoxItem>Aardvark</ListBoxItem>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </ComboBox>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <TextField
          label="Label"
          placeholder="Input"
          description="Texto de soporte"
          trailingIcon={<IconButton icon={MdOutlineCancel} />}
        />
        <TextField
          label="Label"
          placeholder="Input"
          errorMessage="Texto de soporte"
          isInvalid
        />
      </div>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <RadioGroup label="Choose your pet" name="pet" defaultValue="orni">
          <Radio value="dogs">Dog</Radio>
          <Radio value="cats">Cat</Radio>
          <Radio value="dragon">Dragon</Radio>
          <Radio isDisabled value="orni">
            Ortinorrinco
          </Radio>
        </RadioGroup>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <IconButton icon={MdArrowBack} />
        <IconButton icon={MdArrowBack} disabled />
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button text="Label" />
        <Button disabled text="Label" />
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button icon={MdAdd} text="Label" />
        <Button icon={MdAdd} disabled text="Label" />
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button variant="outlined" text="Label" />
        <Button variant="outlined" disabled text="Label" />
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button icon={MdAdd} variant="outlined" text="Label" />
        <Button icon={MdAdd} variant="outlined" disabled text="Label" />
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button variant="inline" text="Label" />
        <Button variant="inline" disabled text="Label" />
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button icon={MdAdd} variant="inline" text="Label" />
        <Button icon={MdAdd} variant="inline" disabled text="Label" />
      </div>
    </div>
  );
}
