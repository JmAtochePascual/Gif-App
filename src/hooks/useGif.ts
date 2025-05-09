import { useState } from "react";
import { Section } from "../models/Section";
import { getGifts } from "../services/getGifs";
import type { GifAPIResponseType } from "../types";
import { giftToLocalhostMapper } from "../mapper/gift-to-localhost";

const useGif = () => {
  const [inputValue, setInputValue] = useState('');
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchGif = async (inputValue: string) => {
    const data = await getGifts(inputValue);

    const gifs = data.map((gifApi: GifAPIResponseType) => giftToLocalhostMapper(gifApi));

    const newSection = new Section(inputValue, gifs);

    setIsLoading(false);

    setSections([newSection, ...sections]);
  };

  return {
    sections,
    inputValue,
    isLoading,
    setInputValue,
    setSections,
    searchGif,
    setIsLoading,
  }
}

export default useGif