import { MdAdd } from 'react-icons/md';
import { Button } from '../components/button';

export function Web() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 className="text--display-large">Web - Alarmas Pico Placa</h1>
      <p>Listado de botones:</p>
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
