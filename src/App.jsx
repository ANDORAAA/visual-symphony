import Home from './pages/home';
import LandingPage from './pages/landingPage';
import Centuries from './pages/centuries';
import ArtworkDetails from './pages/artworkDetails';
import NavBar from './components/navBar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/centuries' element={<Centuries />} />
        <Route path='/artworkdetails' element={<ArtworkDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
