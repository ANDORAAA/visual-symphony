import SearchBar from '../components/searchBar';
import HamburgerMenu from '../components/hamburgerMenu';
import '../styles/home.css';
import MasonryGrid from '../components/masonryGrid';
import PaginationControls from '../components/paginationControls';
import Loader from '../components/loader';

const Home = () => {
  return (
    <div className='home'>
      <div className='app-name'>Visual Symphony</div>
      <div className='top-bar'>
        <SearchBar />
        <HamburgerMenu />
      </div>
      <div className='hero-text'>
        <h2>Visual Symphony</h2>
        <h1>Your Visual Journey</h1>
      </div>
      <div className='content'>
        <MasonryGrid />
        <PaginationControls />
      </div>
      <Loader />
    </div>
  );
};

export default Home;
