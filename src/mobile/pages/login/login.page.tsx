import { AuthTemplate } from '../../components/templates/auth/auth.template';
import onboardingMedia from '../../../assets/img/illustrations/onboarding-media.svg';
import { Button } from '../../../components/button/button';
import { GoogleIcon } from '../../../components/icons/google.icon';
import { AppleIcon } from '../../../components/icons/apple.icon';
import { FacebookIcon } from '../../../components/icons/facebook.icon';

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
          </div>
        </main>
      </div>
    </AuthTemplate>
  );
}
