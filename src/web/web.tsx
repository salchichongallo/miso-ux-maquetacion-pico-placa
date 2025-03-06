import { MdAdd, MdArrowBack, MdOutlineCancel } from 'react-icons/md';
import { Button } from '../components/button/button';
import { IconButton } from '../components/icon-button/icon-button';
import { RadioGroup, Radio } from '../components/radio';
import { TextField } from '../components/text-field/text-field';

export function Web() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 className="text--display-large">Web - Alarmas Pico Placa</h1>
      <p>Listado de componentes:</p>
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
