import { MdArrowForward, MdDone } from 'react-icons/md';
import { DialogTrigger, Link } from 'react-aria-components';
import { useFormik } from 'formik';

import { Modal } from '../../../components/modal/modal';
import { Button } from '../../../components/button/button';
import { TextField } from '../../../components/text-field/text-field';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../../../components/icon-button/icon-button';

export function LoginPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    initialTouched: { username: true, password: true },
    validateOnChange: true,
    onSubmit: () => navigate('/showcase'),
    validate: values => {
      const errors: Record<string, string> = {};
      if (!values.username) {
        errors.username = 'No puede estar vacío';
      }
      if (!values.password) {
        errors.password = 'No puede estar vacío';
      }
      return errors;
    },
  });
  return (
    <div className="flex items-center flex-col justify-center h-screen p-3">
      <h1 className="text--headline-large mb-8">PICO • PLACA</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="p-8 pt-6 rounded-xl w-full flex flex-col gap-6"
        style={{
          maxWidth: '22.0625rem',
          background: 'var(--surface-container-low)',
        }}
      >
        <h2 className="text--title-medium text-center">Login</h2>

        <div className="flex flex-col gap-6">
          <TextField
            name="username"
            validationBehavior="native"
            value={formik.values.username}
            onChange={formik.handleChange('username')}
            isInvalid={!!formik.errors.username}
            errorMessage={formik.errors.username}
            label="Usuario"
            placeholder={formik.errors.username ? '' : 'Ingresa tu usuario'}
            trailingIcon={
              formik.touched.username &&
              !formik.errors.username &&
              formik.values.username ? (
                <IconButton icon={MdDone} />
              ) : undefined
            }
          />
          <TextField
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange('password')}
            isInvalid={!!formik.errors.password}
            errorMessage={formik.errors.password}
            label="Clave"
            placeholder={formik.errors.password ? '' : 'Ingresa tu clave'}
            trailingIcon={
              formik.touched.password &&
              !formik.errors.password &&
              formik.values.password ? (
                <IconButton icon={MdDone} />
              ) : undefined
            }
            type="password"
          />
        </div>
        <DialogTrigger>
          <Link
            href="#"
            className="text-center underline text--body-medium outline-none"
          >
            ¿Olvidaste tu clave?
          </Link>
          <Modal
            description="Se ha enviado un correo con instrucciones para restablecer tu contraseña."
            icon={MdDone}
            buttons={[close => <Button onPress={close} text="Listo" />]}
            style={{ maxWidth: '19.5rem' }}
          />
        </DialogTrigger>
        <Button type="submit" text="Ingresar" icon={MdArrowForward} />
      </form>
    </div>
  );
}
