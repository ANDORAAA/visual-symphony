import axios from 'axios';

export const fetchArtworks = async (page = 1, limit = 30) => {
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

export const fetchArtworksByYearRange = async (startYear, endYear, page) => {
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

  const response = await axios.get(API_URL, {
    params: { ...queryParams, page },
  });
  return response;
};

export const fetchAllArtworksForCenturies = async (century, page) => {
  const centuryMapRange = {
    '12th Century': { start: 1101, end: 1200 },
    '13th Century': { start: 1201, end: 1300 },
    '14th Century': { start: 1301, end: 1400 },
    '15th Century': { start: 1401, end: 1500 },
    '16th Century': { start: 1501, end: 1600 },
    '17th Century': { start: 1601, end: 1700 },
    '18th Century': { start: 1701, end: 1800 },
    '19th Century': { start: 1801, end: 1900 },
    '20th Century': { start: 1901, end: 2000 },
  };
  if (century && centuryMapRange[century]) {
    return await fetchArtworksByYearRange(
      centuryMapRange[century].start,
      centuryMapRange[century].end,
      page
    );
  }
  return [];
};

export const fetchArtworksByArtist = async (
  artistName,
  page = 1,
  limit = 10
) => {
  try {
    const API_URL = `https://api.artic.edu/api/v1/artworks/search`;
    const queryParams = {
      'query[bool][must][0][term][is_public_domain]': true,
      'query[bool][must][1][term][artwork_type_id]': 1,
      'query[bool][must][2][match_phrase][artist_display]': artistName,

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

export const fetchArtworksByTitle = async (title, page = 1, limit = 10) => {
  try {
    const API_URL = `https://api.artic.edu/api/v1/artworks/search`;
    const queryParams = {
      'query[bool][must][0][term][is_public_domain]': true,
      'query[bool][must][1][term][artwork_type_id]': 1,
      'query[bool][must][2][match][title]': title,
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

export const fetchArtworkByArtist = async (
  artistName,
  page = 1,
  limit = 30
) => {
  try {
    const API_URL = `https://api.artic.edu/api/v1/artworks/search`;
    const queryParams = {
      'query[bool][must][0][term][is_public_domain]': true,
      'query[bool][must][1][match][artist_display]': artistName,
      fields:
        'id,image_id,artist_display,title,date_display,date_end,medium_display,style_title,place_of_origin,short_description,dimensions,description',
      page,
      limit,
    };

    const response = await axios.get(API_URL, { params: queryParams });
    return response.data;
  } catch (error) {
    console.error('Error fetching artworks by artist:', error);
    throw error;
  }
};
