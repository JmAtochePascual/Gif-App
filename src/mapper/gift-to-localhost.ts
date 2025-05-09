import { Gift } from "../models/Gift";

export const giftToLocalhost = (gifApi) => {
  const { id, title, src: images } = gifApi;

  return new Gift({
    id,
    title,
    src: images.downsized_medium.url
  });
};