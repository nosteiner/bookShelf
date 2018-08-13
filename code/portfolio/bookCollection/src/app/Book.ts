import { Guid } from "guid-typescript";

export class Book {
  constructor() {
    this.setDefaultImg();

  }
  public id: Guid = Guid.create()
  public title: string;
  public authors: string;
  public year: Number;
  public img: string;
  public isInit: boolean = false;



  setDefaultImg() {
    this.img = "https://i.pinimg.com/564x/7a/22/76/7a22768b8614eedca08e86c0e333b96c.jpg";
  
  }

  edit(data) {
    this.title = data.title;
    this.authors = data.authors;
    this.year = data.year;
    this.isInit = true;
    if (data.img) {
      this.img = data.img
    }
  }
}