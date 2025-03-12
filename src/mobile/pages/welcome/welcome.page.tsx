import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components/button/button';
import { AuthTemplate } from '../../components/templates/auth/auth.template';
import onboardingWelcome from '../../../assets/img/illustrations/onboarding-welcome.svg';

export function WelcomePage() {
  const navigate = useNavigate();
  return (
    <AuthTemplate>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text--headline-large">Bienvenido</h2>
          <img src={onboardingWelcome} width={168} alt="" />
          <h1 className="text--display-large">Pico • Placa</h1>
        </div>
        <p className="mt-6 mb-12">Para que nunca se te olvide.</p>
        <Button onPress={() => navigate('/inicio')} text="Continuar" />
      </div>
    </AuthTemplate>
  );
}
