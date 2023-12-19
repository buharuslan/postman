import Home from './pages/home';
import DataProvider from './context/dataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
