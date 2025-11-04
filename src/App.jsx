import { AuthProvider } from './context/AuthContext';
import AllRoutes from './routes/Routes';

function App() {
  return (
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  );
}

export default App;
