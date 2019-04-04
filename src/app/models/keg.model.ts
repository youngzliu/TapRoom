export class Keg {
  public pintsLeft: number = 124;
  public shown: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public id: number){}
}
