import { I18nProvider } from 'react-aria';
import './index.css';

type Props = {
  children: React.ReactNode;
};

export function App({ children }: Props) {
  return <I18nProvider locale="es-CO">{children}</I18nProvider>;
}
