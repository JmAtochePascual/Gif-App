import { act, renderHook } from '@testing-library/react';
import useGif from '../../src/hooks/useGif';
import { describe, test, expect } from 'vitest';

describe('useGif Hook', () => {
  test('Debe tener estado inicial correcto', () => {
    const { result } = renderHook(() => useGif());

    expect(result.current.sections).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  test('Debe actualizar el estado al hacer una búsqueda', async () => {
    const { result } = renderHook(() => useGif());

    await act(async () => {
      await result.current.searchGif('Goku');
    });

    expect(result.current.sections.length).toBe(1);
    expect(result.current.sections[0].title).toBe('Goku');
    expect(result.current.isLoading).toBe(false);
  });
});
