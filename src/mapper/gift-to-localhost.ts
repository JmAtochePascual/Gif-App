import { Gift } from "../models/Gift";
import type { GifAPIResponseType } from "../types";

export const giftToLocalhostMapper = (gifApi: GifAPIResponseType) => {
  const { id, title, images: { downsized_medium: { url } } } = gifApi;

  return new Gift({
    id,
    title,
    image: url
  });
};