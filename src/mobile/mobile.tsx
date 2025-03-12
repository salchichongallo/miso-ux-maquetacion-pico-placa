import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/login.page';

export function Mobile() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
