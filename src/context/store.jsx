import { createContext, useState, useEffect } from 'react';

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
  const [searchResults, setSearchResults] = useState([]);
  const [artisticMovements, setArtisticMovements] = useState([
    // Western Art Movements
    'Impressionism',
    'Pointillism',
    'Mannerism',
    'Renaissance',
    'Modernism',
    'Realism',
    'Pre-Raphaelite',
    'Baroque',
    'Neoclassicism',
    'Barbizon School',
    'Synthetism',

    // Asian & Middle Eastern Art Movements
    'Japanese',
    'Chinese',
    'Korean',
    'South Asian',
    'Indian',
    'Islamic',
    'Himalayan',
    'Mughal',
    'Safavid',

    // American & Folk Art
    'American Colonial',
    'Flemish',
    'Folk Art',

    // Ancient & Other
    'Ancient',
  ]);
  const [user, setUser] = useState(null);

  const [favourites, setFavourites] = useState([]);

  //  Load favourites from localStorage on initial render
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites'));
    if (savedFavourites) {
      setFavourites(savedFavourites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (artwork) => {
    if (!favourites.some((fav) => fav.id === artwork.id)) {
      const updatedFavourites = [...favourites, artwork];
      setFavourites(updatedFavourites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavourites));
    }
  };

  const removeFromFavourites = (artworkId) => {
    const updatedFavourites = favourites.filter((fav) => fav.id !== artworkId);
    setFavourites(updatedFavourites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavourites));
  };

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
        searchResults,
        setSearchResults,
        artisticMovements,
        setArtisticMovements,
        user,
        setUser,
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export default Provider;
