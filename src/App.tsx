import Form from "./components/Form";
import GifSections from "./components/GifSections";
import useGif from "./hooks/useGif";

function App() {
  const { sections, isLoading, searchGif, setIsLoading } = useGif();

  return (
    <>
      <h1 className="mb-8 text-5xl font-black text-center">Gif App</h1>

      <Form
        searchGif={searchGif}
        setIsLoading={setIsLoading}
      />

      {isLoading && <p className="font-medium text-center">Loading...</p>}

      <GifSections sections={sections} />
    </>
  )
}

export default App
