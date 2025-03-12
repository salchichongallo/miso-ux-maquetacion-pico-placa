import { MdCheck } from 'react-icons/md';
import { DialogTrigger } from 'react-aria-components';

import { Modal } from '../../../components/modal/modal';
import { Button } from '../../../components/button/button';
import { AppleIcon } from '../../../components/icons/apple.icon';
import { GoogleIcon } from '../../../components/icons/google.icon';
import { FacebookIcon } from '../../../components/icons/facebook.icon';
import { AuthTemplate } from '../../components/templates/auth/auth.template';
import onboardingMedia from '../../../assets/img/illustrations/onboarding-media.svg';

export function LoginPage() {
  return (
    <AuthTemplate>
      <div className="flex flex-col items-center">
        <header className="flex flex-col items-center">
          <img src={onboardingMedia} width={240} />
          <h1 className="text--display-large mt-8 mb-6">Ingresar</h1>
          <p className="text--title-medium">
            Guarda tus alarmas para Pico y Placa.
          </p>
        </header>
        <main className="mt-8" style={{ maxWidth: 230 }}>
          <div className="w-full flex flex-col gap-6">
            <DialogTrigger>
              <Button
                icon={GoogleIcon}
                text="Ingresar con Google"
                variant="outlined"
              />
              <Button
                icon={AppleIcon}
                text="Ingresar con Apple"
                variant="outlined"
              />
              <Button
                icon={FacebookIcon}
                text="Ingresar con Facebook"
                variant="outlined"
              />
              <Modal
                title="Registro exitoso"
                icon={MdCheck}
                buttons={[close => <Button onPress={close} text="Continuar" />]}
              />
            </DialogTrigger>
          </div>
        </main>
      </div>
    </AuthTemplate>
  );
}
