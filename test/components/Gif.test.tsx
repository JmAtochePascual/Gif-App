import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GIf from '../../src/components/Gif'
import { Gift } from '../../src/models/Gift';


describe('Test <Gif/>', () => {
  const gif: Gift = {
    id: 'asdasdasd',
    title: 'Titulo del componente',
    image: 'https://goku.com/goku.jpg'
  };

  test('Debe mostrar el url y el alt indicado', () => {
    render(<GIf gif={gif} />);
    // expect(screen.getByRole('img').src).toBe(gif.image);
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;
    expect(src).toBe(gif.image);
    expect(alt).toBe(gif.title);
  });
});