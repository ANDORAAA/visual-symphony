import { Ctx } from '../context/store';
import { useContext, useEffect } from 'react';
import { CiCircleChevRight, CiCircleChevLeft } from 'react-icons/ci';
import '../styles/paginationControls.css';
import { fetchArtworks } from '../services/api';

const PaginationControls = () => {
  const { currentPage, setCurrentPage, totalPages, setArtworks, setSpinner } =
    useContext(Ctx);

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        setSpinner(true);
        const data = await fetchArtworks(currentPage);
        setArtworks(data?.data || []);
      } catch (error) {
        console.error('Error loading artworks:', error);
      } finally {
        setSpinner(false);
      }
    };

    loadArtworks();
  }, [currentPage, setArtworks, setSpinner]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  return (
    <div className='pagination-controls'>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        <CiCircleChevLeft />
      </button>
      <span>{`${currentPage} | ${totalPages}`}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        <CiCircleChevRight />
      </button>
    </div>
  );
};

export default PaginationControls;
