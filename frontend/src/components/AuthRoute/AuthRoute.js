import { Navigate, useLocation } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function AuthRoute({ children }) {
  const location = useLocation();
  const { user } = useAuthentication();
  return user ? (
    children
  ) : (
    <Navigate to={`/login?returnUrl=${location.pathname}`} replace />
  );
}