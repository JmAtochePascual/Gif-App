import React from 'react';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import GifSections from '../../src/components/GifSections';
import type { Section } from '../../src/models/Section';


describe('Test en <GifSections />', () => {
  test('Debe mostrar el mensaje de inicio cuando no hay secciones', () => {
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
});
