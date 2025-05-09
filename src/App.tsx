import { useState } from "react"
import { getGifts } from "./services/getGifs";
import { Section } from "./models/Section";
import { giftToLocalhostMapper } from "./mapper/gift-to-localhost";
import type { GifAPIResponseType } from "./types";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [sections, setSections] = useState<Section[]>([]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textInput = event.target.value.trim();
    setInputValue(textInput);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length <= 0) return;

    const data = await getGifts(inputValue);

    const gifs = data.map((gifApi: GifAPIResponseType) => giftToLocalhostMapper(gifApi));

    const newSection = new Section(inputValue, gifs);

    setSections([newSection, ...sections]);

    setInputValue('');
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

      {
        sections.length > 0
          ? sections.map(section =>
            <div
              key={section.id}
              className="mb-12">
              <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>

              <div className="grid gap-4 md:grid-cols-3">
                {
                  section.gifs.map(gift =>
                    <div
                      key={gift.id}>
                      <img
                        src={gift.image}
                        alt={gift.title}
                        className="w-full h-40 object-cover" />
                    </div>
                  )
                }
              </div>
            </div>
          )
          : <p className="mt-48 text-center text-2xl text-gray-500/30">Inicia realizando una búsqueda</p>
      }
    </>
  )
}

export default App
