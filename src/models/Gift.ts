type GiftParams = {
  id: string;
  title: string;
  image: string;
};

export class Gift {
  id: string;
  title: string;
  image: string;

  constructor({ id, title, image }: GiftParams) {
    this.id = id;
    this.title = title;
    this.image = image;
  };
};