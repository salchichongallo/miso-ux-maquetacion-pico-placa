import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Showcase } from '../components/showcase';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { NewPage } from './pages/new/new.page';
import { DetailPage } from './pages/detail/detail.page';
import { EditPage } from './pages/edit/edit.page';

export function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="nuevo-pico-placa" element={<NewPage />} />
        <Route path="detalle" element={<DetailPage />} />
        <Route path="editar" element={<EditPage />} />
        <Route
          path="showcase"
          element={<Showcase title="Web - Alarmas Pico Placa" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
