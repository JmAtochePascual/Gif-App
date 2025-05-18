import { renderHook, act } from '@testing-library/react';
import useGif from '../../src/hooks/useGif';
import * as getGiftsService from '../../src/services/getGifs';
import { describe, test, vi, expect, beforeEach } from 'vitest';

describe('useGif Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Debe tener estado inicial correcto', () => {
    const { result } = renderHook(() => useGif());

    expect(result.current.inputValue).toBe('');
    expect(result.current.sections).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  test('Debe actualizar el estado al hacer una búsqueda', async () => {
    const mockGif = {
      id: '123',
      title: 'Goku',
      images: { downsized_medium: { url: 'http://test.gif' } },
    };

    vi.spyOn(getGiftsService, 'getGifts').mockResolvedValue([mockGif]);

    const { result } = renderHook(() => useGif());

    act(() => {
      result.current.setInputValue('Goku');
      result.current.setIsLoading(true);
    });

    await act(async () => {
      await result.current.searchGif('Goku');
    });

    expect(result.current.sections.length).toBe(1);
    expect(result.current.sections[0].title).toBe('Goku');
    expect(result.current.sections[0].gifs[0].id).toBe('123');
    expect(result.current.isLoading).toBe(false);
  });
});
