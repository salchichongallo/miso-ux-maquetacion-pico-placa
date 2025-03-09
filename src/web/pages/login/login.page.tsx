import { MdArrowForward } from 'react-icons/md';
import { Button } from '../../../components/button/button';
import { TextField } from '../../../components/text-field/text-field';

export function LoginPage() {
  return (
    <div className="flex items-center flex-col justify-center h-screen p-3">
      <h1 className="text--headline-large mb-8">PICO • PLACA</h1>
      <form
        className="p-8 pt-6 rounded-xl w-full flex flex-col gap-6"
        style={{
          maxWidth: '22.0625rem',
          background: 'var(--surface-container-low)',
        }}
      >
        <h2 className="text--title-medium text-center">Login</h2>
        <div className="flex flex-col gap-6">
          <TextField label="Usuario" placeholder="Ingresa tu usuario" />
          <TextField
            label="Clave"
            placeholder="Ingresa tu clave"
            type="password"
          />
        </div>
        <a href="#" className="text-center underline text--body-medium">
          ¿Olvidaste tu clave?
        </a>
        <Button type="submit" text="Ingresar" icon={MdArrowForward} />
      </form>
    </div>
  );
}
