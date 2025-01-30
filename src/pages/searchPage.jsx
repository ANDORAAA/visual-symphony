import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchArtworksByTitle, fetchArtworksByArtist } from '../services/api';
import Button from 'react-bootstrap/Button';
import ArtworkCard from '../components/artworkCard';
import Modal from '../components/modal';
import Loader from '../components/loader';
import PaginationControls from '../components/paginationControls';
import '../styles/searchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState(null);
  const {
    searchResults,
    setSearchResults,
    setSpinner,
    spinner,
    currentPage,
    setTotalPages,
    selectedArtwork,
    setSelectedArtwork,
    setCurrentPage,
  } = useContext(Ctx);

  useEffect(() => {
    setSearchResults([]);
  }, []);

  const fetchData = async () => {
    if (!query || !searchBy) return;
    setSpinner(true);
    try {
      let response = null;
      if (searchBy === 'artist') {
        response = await fetchArtworksByArtist(query, currentPage);
      } else if (searchBy === 'title') {
        response = await fetchArtworksByTitle(query, currentPage);
      }

      if (!response || !response.data) {
        setSearchResults([]);
        setTotalPages(1);
        return;
      }

      setSearchResults(response.data);
      setTotalPages(response.pagination?.total_pages || 1);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
    setSpinner(false);
  };

  const handleSearch = (type) => {
    setSearchBy(type);
    setCurrentPage(1);
    fetchData();
  };

  return (
    <div className='search-page-wrapper'>
      <h3>
        Search for public domain paintings from the Art Institute of Chicago's
        collection.
      </h3>

      <div className='search-bar'>
        <input
          type='text'
          placeholder='Enter artist name or title...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant='secondary' onClick={() => handleSearch('artist')}>
          By artist
        </Button>
        <Button variant='secondary' onClick={() => handleSearch('title')}>
          By title
        </Button>
      </div>

      <div className='d-flex flex-column mt-3' style={{ maxHeight: '90vh' }}>
        {searchResults.length > 0 && <PaginationControls />}
        {spinner ? (
          <Loader />
        ) : (
          <div className='artworks-wrapper'>
            {searchResults.length > 0 ? (
              searchResults.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
      </div>

      {selectedArtwork && (
        <Modal
          selectedArtwork={selectedArtwork}
          setSelectedArtwork={setSelectedArtwork}
        />
      )}
    </div>
  );
};

export default SearchPage;
