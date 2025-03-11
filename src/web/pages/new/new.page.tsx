import { MdArrowBack } from 'react-icons/md';
import { IconButton } from '../../../components/icon-button/icon-button';
import { AppLogo } from '../../components/app-logo';

export function NewPage() {
  return (
    <div className="pt-6 pb-8">
      <div className="w-full mx-auto" style={{ maxWidth: '34.5rem' }}>
        <header className="flex justify-between items-center px-8 py-6">
          <AppLogo />
        </header>
        <main
          className="flex flex-col gap-6 rounded-2xl"
          style={{ background: 'var(--surface-container-low)' }}
        >
          <div className="pt-6 pr-8 pb-6 pl-6 flex gap-2 items-start">
            <IconButton icon={MdArrowBack} />
            <div>
              <h1 className="text--title-large">Nuevo pico y placa</h1>
              <p className="text--body-medium mt-1">
                Ingresa la siguiente información
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
