import { giftToLocalhost } from "../mapper/gift-to-localhost";
import { GifSection } from "../models/GifSection";

export const getGifts = async (category: string) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${category}&limit=10`;

  const response = await fetch(URL);
  const { data } = await response.json();
  console.log(data);

  const gifts = data.map((gifApi: GifType) => giftToLocalhost(gifApi));
  console.log(gifts)
  return new GifSection(category, gifts);
};