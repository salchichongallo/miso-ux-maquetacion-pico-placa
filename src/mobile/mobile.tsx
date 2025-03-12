import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/login.page';
import { WelcomePage } from './pages/welcome/welcome.page';

export function Mobile() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/bienvenida" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
