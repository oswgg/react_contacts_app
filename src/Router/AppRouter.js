import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../Pages/App';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
