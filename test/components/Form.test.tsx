import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../../src/components/Form';
import { vi } from 'vitest';

describe('Test in <Form/>', () => {
  test('Debe mostrar el input con el valor por defecto', () => {
    render(<Form searchGif={async () => { }} setIsLoading={() => { }} />);

    const input = screen.getByPlaceholderText('Buscar Gif') as HTMLInputElement;
    expect(input.value).toBe('');
  });

  test('Debe cambiar el valor del input cuando se escribe', () => {
    render(<Form searchGif={async () => { }} setIsLoading={() => { }} />);
    const input = screen.getByPlaceholderText('Buscar Gif') as HTMLInputElement;

    fireEvent.input(input, { target: { value: 'Goku' } });

    expect(input.value).toBe('Goku');
  });

  test('No debe llamar searchGif si inputValue está vacío', () => {
    const searchGif = vi.fn();
    render(<Form searchGif={searchGif} setIsLoading={() => { }} />);
    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(searchGif).not.toHaveBeenCalled();
  });

  test('Debe llamar las funciones al si el inputValue tiene texto', async () => {
    const setIsLoading = vi.fn();
    const searchGif = vi.fn().mockResolvedValue(undefined);
    render(<Form searchGif={searchGif} setIsLoading={setIsLoading} />);
    const inputValue = 'Goku';
    const input = screen.getByPlaceholderText('Buscar Gif') as HTMLInputElement;
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(setIsLoading).toHaveBeenCalledWith(true);
    expect(searchGif).toHaveBeenCalledWith(inputValue);
    expect(input.value).toBe('');
  });
});