import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Board from './page/Board';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Board />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
