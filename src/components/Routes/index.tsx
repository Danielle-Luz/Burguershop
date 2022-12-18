import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { UserProvider } from '../../providers/UserContext';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path='/user' element={<UserProvider />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </RoutesWrapper>
  );
}