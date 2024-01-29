import { BrowserRouter as Router, Route,BrowserRouter, Routes } from 'react-router-dom';
import Login from './page/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/login' exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
