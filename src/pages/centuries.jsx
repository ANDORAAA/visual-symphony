import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchAllArtworksForCenturies } from '../services/api';
import CenturyTimeline from '../components/centuryTimeline';
import ArtworkCard from '../components/artworkCard';
import Loader from '../components/loader';
import '../styles/centuries.css';
import PaginationControls from '../components/paginationControls.jsx';

const Centuries = () => {
  const {
    artworks,
    setArtworks,
    centuries,
    spinner,
    setSpinner,
    currentPage,
    setCurrentPage,
    setTotalPages,
  } = useContext(Ctx);

  const [selectedCentury, setSelectedCentury] = useState(null);

  useEffect(() => {
    const loadAllArtworks = async () => {
      setArtworks([]);
      setSpinner(true);
      try {
        const res = await fetchAllArtworksForCenturies(
          selectedCentury,
          currentPage
        );
        setTotalPages(res.data.pagination.total_pages);
        const artworksData = res.data.data.map((artwork) => {
          const year =
            artwork.date_end ||
            artwork.date_display?.match(/\d{4}(?!.*\d{4})/)?.[0];
          return {
            id: artwork.id,
            image_id: artwork.image_id,
            title: artwork.title,
            artist: artwork.artist_display,
            origin: artwork.place_of_origin,
            year: year ? Number(year) : null,
          };
        });

        setArtworks(artworksData);
        console.log(artworks);
      } catch (error) {
        console.error('Error loading artworks:', error);
      }
      setSpinner(false);
    };

    loadAllArtworks();
  }, [selectedCentury, currentPage]);

  const handleCenturyClick = (century) => {
    setSelectedCentury(century);
    setCurrentPage(1);
  };

  console.log('render centuries');

  return (
    <div className={`centuries-page ${spinner ? 'loading' : ''}`}>
      <div className='timeline-wrapper'>
        <CenturyTimeline
          centuries={centuries}
          onCenturyClick={handleCenturyClick}
          selectedCentury={selectedCentury}
        />
      </div>
      <div className='d-flex flex-column mt-3' style={{ maxHeight: '90vh' }}>
        {artworks.length > 0 && <PaginationControls />}
        {spinner ? (
          <Loader />
        ) : (
          <div className='artworks-wrapper'>
            {artworks.length > 0 ? (
              artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))
            ) : (
              <p>Select a century to view paintings</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Centuries;
