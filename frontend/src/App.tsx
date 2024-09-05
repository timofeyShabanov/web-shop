import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import Register from './pages/register/register.tsx';
import Login from './pages/login/login.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="*" element={<Navigate to="/error" />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
