import { createContext, useState } from 'react';

export const Ctx = createContext();

const Provider = ({ children }) => {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [centuries, setCenturies] = useState([
    '12th Century',
    '13th Century',
    '14th Century',
    '15th Century',
    '16th Century',
    '17th Century',
    '18th Century',
    '19th Century',
    '20th Century',
  ]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

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
        selectedArtwork,
        setSelectedArtwork,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export default Provider;
