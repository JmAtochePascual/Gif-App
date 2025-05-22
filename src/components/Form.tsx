import { useState } from "react";

type FormProps = {
  searchGif: (inputValue: string) => Promise<void>;
  setIsLoading: (value: boolean) => void;
};

const Form = ({ searchGif, setIsLoading }: FormProps) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length <= 0) return;

    setIsLoading(true);
    searchGif(inputValue);
    setInputValue('');
  };

  return (
    <form
      role="form"
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