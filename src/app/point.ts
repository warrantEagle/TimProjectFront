export class Point {
  public idResult: number;
  public index: number;
  public longitude: number;
  public latitude: number;
  constructor(longitude: number, latitude: number, index: number) {
    this.longitude = longitude;
    this.latitude = latitude;
    this.index = index;
  }

}
