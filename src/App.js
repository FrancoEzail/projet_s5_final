import Welcome from './page/Welcome';
import Login from './page/Login';
import Inscrit from './page/Inscrit';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Welcome />} />
          <Route path='/home' exact element={<Welcome />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/inscription' exact element={<Inscrit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
