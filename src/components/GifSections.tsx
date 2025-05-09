import type { Section } from "../models/Section"
import Gif from "./Gif";

type GifSectionsProps = {
  sections: Section[];
};

const GifSections = ({ sections }: GifSectionsProps) => {
  const hasSections = sections.length > 0;

  return (
    <>
      {
        hasSections
          ? sections.map(({ id, title, gifs }) =>
            <div
              key={id}
              className="mb-12">
              <h2 className="mb-4 text-3xl font-bold">{title}</h2>

              <div className="grid gap-4 md:grid-cols-3">
                {
                  gifs.map(gif =>
                    <Gif
                      key={gif.id}
                      gif={gif}
                    />
                  )
                }
              </div>
            </div>
          )
          : <p className="my-32 text-3xl text-center text-gray-300">Realiza una busqueda</p>
      }
    </>
  )
}

export default GifSections