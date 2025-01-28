import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchAllArtworksForCenturies } from '../services/api';
import CenturyTimeline from '../components/centuryTimeline';
import ArtworkCard from '../components/artworkCard';
import Loader from '../components/loader';
import Modal from '../components/modal';
import PaginationControls from '../components/paginationControls';
import { IoHomeOutline } from 'react-icons/io5';
import '../styles/centuries.css';

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
    selectedArtwork,
    setSelectedArtwork,
  } = useContext(Ctx);

  const [selectedCentury, setSelectedCentury] = useState(null);

  useEffect(() => {
    setArtworks([]);
    const loadAllArtworks = async () => {
      setSpinner(true);
      try {
        const res = await fetchAllArtworksForCenturies(
          selectedCentury,
          currentPage
        );
        setTotalPages(res.data.pagination.total_pages);

        console.log(res.data.data);
        const artworksData = res.data.data.map((artwork) => {
          const date_display =
            artwork.date_end ||
            artwork.date_display?.match(/\d{4}(?!.*\d{4})/)?.[0];
          return {
            id: artwork.id,
            image_id: artwork.image_id,
            title: artwork.title,
            artist_display: artwork.artist_display,
            place_of_origin: artwork.place_of_origin,
            // year: year ? Number(year) : null,
            short_description: artwork.short_description || ' ',
            date_display: date_display ? Number(date_display) : null,
          };
        });

        setArtworks(artworksData);
      } catch (error) {
        console.error('Error loading artworks:', error);
      }
      setSpinner(false);
    };

    if (selectedCentury) loadAllArtworks();
  }, [selectedCentury, currentPage]);

  const handleCenturyClick = (century) => {
    setSelectedCentury(century);
    setCurrentPage(1);
  };

  return (
    <div className={`centuries-page ${spinner ? 'loading' : ''}`}>
      <IoHomeOutline style={{ fontSize: '1.5rem', margin: '0.2rem' }} />
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
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              ))
            ) : (
              <p>Select a century to view paintings</p>
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

export default Centuries;
