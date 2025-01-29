import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchArtworksByTitle, fetchArtworksByArtist } from '../services/api';
import Button from 'react-bootstrap/Button';
import ArtworkCard from '../components/artworkCard';
import Loader from '../components/loader';
import PaginationControls from '../components/paginationControls';
import Footer from '../components/footer';
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
    setSelectedArtwork,
  } = useContext(Ctx);

  useEffect(() => {
    setSearchResults([]);
  }, []);

  useEffect(() => {
    fetchData()
  }, [currentPage, searchBy])

  const fetchData = async () => {
    if (!query) return;
    setSpinner(true);
    try {
      let response = null;
      if(searchBy === 'artist'){
        response = await fetchArtworksByArtist(query, currentPage);
      }
      else if(searchBy === 'title'){
        response = await fetchArtworksByTitle(query, currentPage);
      }
      setSearchResults(response.data || []);
      setTotalPages(response.pagination?.total_pages || 1);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
    setSpinner(false);
    setSearchBy(null);
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
        <Button
          variant='secondary'
          onClick={() => setSearchBy('artist')}
        >
          By artist
        </Button>
        <Button
          variant='secondary'
          onClick={() => setSearchBy('title')}
        >
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
    </div>
  );
};

export default SearchPage;
