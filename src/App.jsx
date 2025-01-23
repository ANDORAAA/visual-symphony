import Home from './pages/home';
import LandingPage from './pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  console.log('app');
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
