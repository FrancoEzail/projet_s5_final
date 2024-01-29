import Welcome from './page/Welcome';
import Login from './page/Login';
import Inscrit from './page/Inscrit';
import Accueil from './page/Accueil';
import Profil from './page/Profil';
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
          <Route path='/accueil' exact element={<Accueil />} />
          <Route path='/profil' exact element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
