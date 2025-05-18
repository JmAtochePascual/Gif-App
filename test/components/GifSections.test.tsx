import React from 'react';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import GifSections from '../../src/components/GifSections';
import type { Section } from '../../src/models/Section';
import { vi } from 'vitest';

// Mock del componente Gif para aislar la lógica
vi.mock('../../src/components/Gif', () => ({
  default: ({ gif }: { gif: { id: string } }) => <div data-testid="mock-gif">{gif.id}</div>,
}));

describe('Test en <GifSections />', () => {
  test('Debe mostrar el mensaje si no hay secciones', () => {
    render(<GifSections sections={[]} />);
    expect(screen.getByText('Realiza una busqueda')).toBeInTheDocument();
  });

  test('Debe mostrar los títulos de cada sección', () => {
    const sections: Section[] = [
      {
        id: '1',
        title: 'Naruto',
        gifs: [],
      },
      {
        id: '2',
        title: 'Dragon Ball',
        gifs: [],
      },
    ];

    render(<GifSections sections={sections} />);

    expect(screen.getByText('Naruto')).toBeInTheDocument();
    expect(screen.getByText('Dragon Ball')).toBeInTheDocument();
  });

  test('Debe renderizar un componente Gif por cada gif', () => {
    const sections: Section[] = [
      {
        id: '1',
        title: 'Anime',
        gifs: [
          { id: 'a1', title: 'Gif1', image: 'http://url1' },
          { id: 'a2', title: 'Gif2', image: 'http://url2' },
        ],
      },
    ];

    render(<GifSections sections={sections} />);
    expect(screen.getAllByTestId('mock-gif').length).toBe(2);
    expect(screen.getByText('a1')).toBeInTheDocument();
    expect(screen.getByText('a2')).toBeInTheDocument();
  });
});
