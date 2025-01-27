import { createContext, useState } from 'react';

export const Ctx = createContext();

const Provider = ({ children }) => {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [centuries, setCenturies] = useState([]);
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <Ctx.Provider
      value={{
        artworks,
        setArtworks,
        filteredArtworks,
        setFilteredArtworks,
        currentPage,
        setCurrentPage,
        spinner,
        setSpinner,
        totalPages,
        setTotalPages,
        centuries,
        setCenturies,
        hasAccount,
        setHasAccount,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export default Provider;
