import NavBar from '../components/navBar';
import MasonryLayout from '../components/masonryLayout';
import PaginationControls from '../components/paginationControls';
import Loader from '../components/loader';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <NavBar />
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
