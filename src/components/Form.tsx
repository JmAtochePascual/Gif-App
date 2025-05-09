type FormProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  searchGif: (inputValue: string) => Promise<void>;
  setIsLoading: (value: boolean) => void;
};

const Form = ({ inputValue, setInputValue, searchGif, setIsLoading }: FormProps) => {

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value.trim());

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length <= 0) return;

    setIsLoading(true);
    searchGif(inputValue);
    setInputValue('');
  };

  return (
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
  )
}

export default Form