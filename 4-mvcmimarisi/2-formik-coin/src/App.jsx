import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import MainPageController from './controllers/MainPageController';
import HeaderView from './views/HeaderView';

function App() {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPageController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
