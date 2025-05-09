export const getGifts = async (category: string) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${category}&limit=12`;

  const response = await fetch(URL);
  const { data } = await response.json();
  return data;
};