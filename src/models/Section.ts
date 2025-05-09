import { v4 as uuidv4 } from 'uuid';
import type { Gift } from './Gift';

export class Section {

  id: string;
  title: string;
  gifs: Gift[];

  constructor(title: string, gifs: Gift[]) {
    this.id = uuidv4();
    this.title = title;
    this.gifs = gifs;
  };
};