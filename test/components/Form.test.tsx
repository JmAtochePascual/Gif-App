import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../../src/components/Form';
import { vi } from 'vitest';

describe('Test in <Form/>', () => {
  test('Debe mostrar el input con el valor por defecto', () => {
    render(<Form
      inputValue="Naruto"
      setInputValue={() => { }}
      searchGif={async () => { }}
      setIsLoading={() => { }}
    />);

    const input = screen.getByPlaceholderText('Buscar Gif') as HTMLInputElement;
    expect(input.value).toBe('Naruto');
  });

  test('Debe llamar a setInputValue cuando se escribe', () => {
    const setInputValue = vi.fn();

    render(
      <Form
        inputValue=""
        setInputValue={setInputValue}
        searchGif={async () => { }}
        setIsLoading={() => { }}
      />
    );

    const input = screen.getByPlaceholderText('Buscar Gif');
    fireEvent.change(input, { target: { value: 'Goku' } });

    expect(setInputValue).toHaveBeenCalledWith('Goku');
  });

  test('No debe llamar searchGif si inputValue está vacío', () => {
    const searchGif = vi.fn();
    const setInputValue = vi.fn();
    const setIsLoading = vi.fn();

    render(
      <Form
        inputValue=""
        setInputValue={setInputValue}
        searchGif={searchGif}
        setIsLoading={setIsLoading}
      />
    );

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(searchGif).not.toHaveBeenCalled();
    expect(setIsLoading).not.toHaveBeenCalled();
  });

  test('Debe llamar funciones al enviar si inputValue tiene texto', async () => {
    const setInputValue = vi.fn();
    const setIsLoading = vi.fn();
    const searchGif = vi.fn().mockResolvedValue(undefined);

    render(
      <Form
        inputValue="One Piece"
        setInputValue={setInputValue}
        searchGif={searchGif}
        setIsLoading={setIsLoading}
      />
    );

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(setIsLoading).toHaveBeenCalledWith(true);
    expect(searchGif).toHaveBeenCalledWith('One Piece');
    expect(setInputValue).toHaveBeenCalledWith('');
  });
});