export class Gift {
  id: string;
  title: string;
  imageURL: string;

  constructor({ id, title, imageURL }) {
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
  };
};