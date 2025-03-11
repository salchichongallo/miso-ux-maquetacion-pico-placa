import { Link } from 'react-router-dom';
import { usePress } from 'react-aria';

type Props = {
  skipNavigate?: boolean;
};

export const AppLogo = function AppLogo({ skipNavigate = false }: Props) {
  const { pressProps } = usePress({});
  return (
    <Link
      {...pressProps}
      onClick={event => {
        if (skipNavigate) {
          event.preventDefault();
        }
      }}
      to="/home"
      className="text--title-medium"
    >
      PICO • PLACA
    </Link>
  );
};
