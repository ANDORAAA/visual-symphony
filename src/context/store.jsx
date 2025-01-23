import { createContext, useState } from 'react';

export const Ctx = createContext();

const Provider = ({ children }) => {
  const [artworks, setArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [spinner, setSpinner] = useState(false);
  return (
    <div>
      <Ctx.Provider
        value={{ artworks, setArtworks, currentPage, setCurrentPage, totalPages, setTotalPages, spinner, setSpinner}}
      >
        {children}
      </Ctx.Provider>
    </div>
  );
};

export default Provider;
