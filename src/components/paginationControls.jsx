import { Ctx } from '../context/store';
import { useContext } from 'react';

const PaginationControls = () => {
  const { currentPage, setCurrentPage, totalPages } = useContext(Ctx);

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
      <span>{currentPage + "/" + totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};
export default PaginationControls;
