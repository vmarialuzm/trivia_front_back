import './App.css';
import { Vista1 } from './pages/Vista1';
import { Vista2 } from './pages/Vista2';
import { NotFoundPage } from './pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vista1/>} />
        <Route path='/vista2' element={<Vista2/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App