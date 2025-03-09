import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { AppLogo } from '../../components/app-logo';
import { Button } from '../../../components/button/button';

import { CityItem } from './city-item/city-item';

export function HomePage() {
  return (
    <div className="pt-6 pb-8">
      <div className="w-full mx-auto" style={{ maxWidth: '34.5rem' }}>
        <header className="flex justify-between items-center px-8 py-6">
          <AppLogo />
          <Link to="/nuevo-pico-placa">
            <Button icon={MdAdd} text="Nuevo pico y placa" />
          </Link>
        </header>
        <main
          className="flex flex-col gap-6 rounded-2xl py-6 px-8"
          style={{ background: 'var(--surface-container-low)' }}
        >
          <div>
            <h1 className="text--headline-medium">Todos los pico y placas</h1>
            <p className="text--body-medium mt-1">
              Selecciona una ciudad para ver su detalle
            </p>
          </div>

          <ul className="w-full flex flex-col gap-4">
            <CityItem city="Medellín" description="Área Metropolitana" />
            <CityItem city="Bogotá" description="Área Metropolitana" />
            <CityItem city="Manizales" />
            <CityItem city="Cali" />
            <CityItem city="Pereira" />
          </ul>
        </main>
      </div>
    </div>
  );
}
