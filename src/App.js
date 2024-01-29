import Welcome from './page/Welcome';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Welcome />} />
          <Route path='/home' exact element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
