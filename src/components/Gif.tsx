import type { Gift } from "../models/Gift"

type GifProps = {
  gif: Gift;
}

const Gif = ({ gif }: GifProps) => {
  return (
    <div key={gif.id}>
      <img
        src={gif.image}
        alt={gif.title}
        className="w-full h-36 object-cover" />
    </div>
  )
}

export default Gif