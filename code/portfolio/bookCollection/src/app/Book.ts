import { Guid } from "guid-typescript";

export class Book {
  constructor() {}
  
  public id: string;
  public title: string;
  public authors: string;
  public year: Number;
  public img: string;
 

  setDefaultImg() {
    this.img = "https://image.ibb.co/eA7QJ9/book_Cover.png";

  }

  edit(data) {
    
    this.title = data.title;
    this.authors = data.authors;
    this.year = data.year;
    if (data.img) {
      this.img = data.img
    }
  }
  getIdFromGuidObj(obj) {
    return obj.value
  }

  initialize() {
    this.id = this.getIdFromGuidObj(Guid.create())
    this.setDefaultImg()
  }
}