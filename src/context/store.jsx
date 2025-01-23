import { createContext, useState } from 'react';

export const Ctx = createContext();

const Provider = ({ children }) => {
  const [artworks, setArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <Ctx.Provider
        value={{ artworks, setArtworks, currentPage, setCurrentPage }}
      >
        {children}
      </Ctx.Provider>
    </div>
  );
};

export default Provider;
