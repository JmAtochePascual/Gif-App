import { getGifts } from '../../src/services/getGifs';

describe('Test en getGift', () => {
  test('Debe retornar un arreglo de gifs', async () => {
    const category = 'Goku';
    const data = await getGifts(category);
    expect(data.length).toBe(12);
  });
});