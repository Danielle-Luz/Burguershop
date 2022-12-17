import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import { Login } from '../../pages/Login';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path='/login' element={<Login />} />
    </RoutesWrapper>
  );
}