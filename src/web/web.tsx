import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Showcase } from '../components/showcase';
import { LoginPage } from './pages/login/login.page';
import { InvalidLoginPage } from './pages/login/invalid-login.page';

export function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/invalid-login" element={<InvalidLoginPage />} />
        <Route
          path="showcase"
          element={<Showcase title="Web - Alarmas Pico Placa" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
