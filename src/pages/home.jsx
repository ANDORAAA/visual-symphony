import HamburgerMenu from '../components/hamburgerMenu';
import MasonryLayout from '../components/masonryLayout';
import PaginationControls from '../components/paginationControls';
import Loader from '../components/loader';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='nav-bar'>
        <h5>Visual Symphony</h5>
        <HamburgerMenu />
      </div>

      <div className='hero-text'>
        <h2>Visual Symphony</h2>
        <h1>Your Visual Journey</h1>
      </div>
      <div className='content'>
        <PaginationControls />
        <MasonryLayout />
      </div>
      <Loader />
    </div>
  );
};

export default Home;
