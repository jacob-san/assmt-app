// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Signin from '../features/signin';
import Dashboard from '../features/dashboard';
import '@localization/web';
import { ThemeProvider } from '@components/web';
import { AuthProvider, useAuth } from '@auth';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

const AppRouter = () => {
  const { country } = useAuth();
  return (
    <ThemeProvider value={{ country: country }}>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    navigate('/');
  }
  return <Outlet />;
};

export default App;
