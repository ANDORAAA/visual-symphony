import { Ctx } from '../context/store';
import { useContext } from 'react';

const PaginationControls = () => {
  const { currentPage, setCurrentPage } = useContext(Ctx);

  const handlePrevious = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleNext = () => {
    setCurrentPage((page) => page + 1);
  };

  return (
    <div className='pagination-controls'>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default PaginationControls;
