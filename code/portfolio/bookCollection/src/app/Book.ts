import { Guid } from "guid-typescript";

export class Book {
  constructor() {}
  
  public id: string;
  public title: string;
  public authors: string;
  public year: Number;
  public img: string;
 

  setDefaultImg() {
    this.img = "https://i.pinimg.com/564x/7a/22/76/7a22768b8614eedca08e86c0e333b96c.jpg";

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