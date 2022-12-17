import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </RoutesWrapper>
  );
}