import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardTable from './Components/Dashboard';
import TablePage from './Components/TablePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<DashboardTable />} />
          <Route path='/processed-data' element={<TablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
