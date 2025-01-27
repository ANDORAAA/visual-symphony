import { useContext, useEffect } from 'react';
import { Ctx } from '../context/store';
import { fetchAllArtworksForCenturies } from '../services/api';
import CenturyTimeline from '../components/centuryTimeline';
import ArtworkCard from '../components/artworkCard';
import Loader from '../components/loader';
import '../styles/centuries.css';

const Centuries = () => {
  const {
    artworks,
    setArtworks,
    filteredArtworks,
    setFilteredArtworks,
    centuries,
    setCenturies,
    spinner,
    setSpinner,
  } = useContext(Ctx);

  useEffect(() => {
    const loadAllArtworks = async () => {
      setSpinner(true);
      try {
        const data = await fetchAllArtworksForCenturies();
        const artworksData = data.map((artwork) => {
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

        const uniqueCenturies = [
          ...new Set(
            artworksData
              .map((artwork) => {
                const year = artwork.year;
                if (!year) return null;
                return `${Math.ceil(year / 100)}th Century`;
              })
              .filter(Boolean)
          ),
        ].sort();

        setCenturies(uniqueCenturies);
      } catch (error) {
        console.error('Error loading artworks:', error);
      }
      setSpinner(false);
    };

    loadAllArtworks();
  }, [setSpinner, setArtworks, setCenturies]);

  const handleCenturyClick = (century) => {
    const filtered = artworks.filter((artwork) => {
      if (!artwork.year) return false;
      const artworkCentury = `${Math.ceil(artwork.year / 100)}th Century`;
      return artworkCentury === century;
    });

    setFilteredArtworks(filtered);
  };

  return (
    <div className={`centuries-page ${spinner ? 'loading' : ''}`}>
      {spinner ? (
        <Loader />
      ) : (
        <>
          <div className='timeline-wrapper'>
            <CenturyTimeline
              centuries={centuries}
              onCenturyClick={handleCenturyClick}
            />
          </div>
          <div className='artworks-wrapper'>
            {filteredArtworks.length > 0 ? (
              filteredArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))
            ) : (
              <p>Select a century to view paintings</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Centuries;
