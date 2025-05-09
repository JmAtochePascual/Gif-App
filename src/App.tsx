import { useState } from "react"
import { getGifts } from "./services/getGifs";
import type { GifSection } from "./models/GifSection";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [gifs, setGifs] = useState<GifSection[]>([]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.trim();
    setInputValue(text);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length <= 0) return;

    setInputValue('');
    const newGifSection = await getGifts(inputValue);
    setGifs([newGifSection, ...gifs]);
  };

  return (
    <>
      <h1 className="mb-8 text-5xl font-black text-center">
        Gif App
      </h1>

      <form
        onSubmit={onSubmit}
        className="mb-8" >
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={onChangeInput}
          className="w-full p-2 rounded-md border outline-none focus:ring-2 focus:ring-indigo-600 border-gray-400" />
      </form>
    </>
  )
}

export default App
