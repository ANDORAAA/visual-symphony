import axios from 'axios';

export const fetchArtworks = async (page = 1, limit = 100) => {
  try {
    const API_URL = `https://api.artic.edu/api/v1/artworks/search`;
    const queryParams = {
      'query[bool][must][0][term][is_public_domain]': true,
      'query[bool][must][1][term][artwork_type_id]': 1,
      fields:
        'id,image_id,artist_display,title,date_display,date_end,medium_display,style_title,place_of_origin,short_description,dimensions,description',
      page,
      limit,
    };

    const response = await axios.get(API_URL, { params: queryParams });
    return response.data;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    throw error;
  }
};

export const fetchArtworksByYearRange = async (startYear, endYear) => {
  const API_URL = 'https://api.artic.edu/api/v1/artworks/search';
  const queryParams = {
    'query[bool][must][0][term][is_public_domain]': true,
    'query[bool][must][1][term][artwork_type_id]': 1,
    'query[bool][must][2][range][date_end][gte]': startYear, // Filter by year range
    'query[bool][must][2][range][date_end][lte]': endYear,
    fields:
      'id,image_id,artist_display,title,date_display,date_end,medium_display,style_title,place_of_origin,short_description,dimensions,description',
    limit: 100,
  };

  let page = 1;
  let artworks = [];
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await axios.get(API_URL, {
        params: { ...queryParams, page },
      });
      if (response.data && response.data.data) {
        artworks = [...artworks, ...response.data.data];
        const { total_pages } = response.data.pagination;
        page += 1;
        hasMore = page <= total_pages; // Stop if no more pages
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Throttle
      } else {
        hasMore = false;
      }
    } catch (error) {
      console.error(
        `Error fetching artworks for ${startYear}-${endYear}:`,
        error
      );
      break;
    }
  }

  return artworks;
};

export const fetchAllArtworksForCenturies = async () => {
  const yearRanges = [
    { start: 1000, end: 1500 },
    { start: 1501, end: 1600 },
    { start: 1601, end: 1700 },
    { start: 1701, end: 1800 },
    { start: 1801, end: 1900 },
    { start: 1901, end: 2000 },
  ];

  let allArtworks = [];

  for (const range of yearRanges) {
    const artworks = await fetchArtworksByYearRange(range.start, range.end);
    allArtworks = [...allArtworks, ...artworks];
  }

  return allArtworks;
};
