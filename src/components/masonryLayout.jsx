// import { useContext, useEffect, useState } from 'react';
// import { Ctx } from '../context/store';
// import { fetchArtworks } from '../services/api';
// import Modal from '../components/modal';
// import '../styles/masonryLayout.css';

// const MasonryLayout = () => {
//   const {
//     artworks,
//     setArtworks,
//     currentPage,
//     setTotalPages,
//     setSpinner,
//     selectedArtwork,
//     setSelectedArtwork,
//   } = useContext(Ctx);

//   useEffect(() => {
//     const fetchData = async () => {
//       setSpinner(true);
//       try {
//         const data = await fetchArtworks(currentPage);
//         setArtworks(data?.data || []);
//         setTotalPages(data?.pagination?.total_pages || 1);
//       } catch (error) {
//         console.error('Error fetching artworks:', error);
//       } finally {
//         setSpinner(false);
//       }
//     };
//     fetchData();
//   }, [currentPage]);

//   return (
//     <>
//       <div className='masonry-layout'>
//         {artworks?.map((artwork) => (
//           <img
//             key={artwork.id}
//             src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
//             alt={artwork.title}
//             loading='lazy'
//             onClick={() => setSelectedArtwork(artwork)}
//           />
//         ))}
//       </div>

//       {selectedArtwork && (
//         <Modal
//           selectedArtwork={selectedArtwork}
//           setSelectedArtwork={setSelectedArtwork}
//         />
//       )}
//     </>
//   );
// };

// export default MasonryLayout;
import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../context/store';
import { fetchArtworks } from '../services/api';
import Image from './image';
import Modal from '../components/modal';
import '../styles/masonryLayout.css';

const MasonryLayout = () => {
  const {
    artworks,
    setArtworks,
    currentPage,
    setTotalPages,
    setSpinner,
    selectedArtwork,
    setSelectedArtwork,
  } = useContext(Ctx);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);
      try {
        const data = await fetchArtworks(currentPage);
        setArtworks(data?.data || []);
        setTotalPages(data?.pagination?.total_pages || 1);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setSpinner(false);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      <div className='masonry-layout'>
        {artworks?.map((artwork) => (
          <Image
            key={artwork.id}
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
            loading='lazy'
            onClick={() => setSelectedArtwork(artwork)}
            onError={() => setError(true)}
          />
        ))}
      </div>

      {selectedArtwork && (
        <Modal
          selectedArtwork={selectedArtwork}
          setSelectedArtwork={setSelectedArtwork}
        />
      )}
    </>
  );
};

export default MasonryLayout;
