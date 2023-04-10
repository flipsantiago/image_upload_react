import AppProvider from './providers';
import AppRoutes from './routes';

function App(): JSX.Element {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
