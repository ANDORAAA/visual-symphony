export const fetchArtworks = async (page = 1, limit = 48) => {
  try {
    const API_URL = `https://api.artic.edu/api/v1/artworks/search?query[bool][must][0][term][is_public_domain]=true&query[bool][must][1][term][artwork_type_id]=1&fields=id,image_id,artist_display,title,date_display,medium_display,short_description,dimensions,description&page=${page}&limit=${limit}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching artworks:', error);
  }
};
