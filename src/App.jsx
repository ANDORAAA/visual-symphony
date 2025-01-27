import Home from './pages/home';
import LandingPage from './pages/landingPage';
import Authentication from './pages/authentication';
import Centuries from './pages/centuries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/centuries' element={<Centuries />} />
      </Routes>
    </Router>
  );
}

export default App;
