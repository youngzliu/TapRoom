import { Component, OnInit } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  addShown = false;
  MasterKegList: Keg[] = [
    new Keg('Aest','Best',50,10, 1),
    new Keg('Cest2','Aest3',20,50, 2),
    new Keg('Eest3','Test3',3,5, 3)
  ];
  currentSort = "";

  ngOnInit() {
    this.sortKegs("alcohol");
  }

  sortKegs(option){
    this.currentSort = option;
    this.MasterKegList.sort(function(a, b){
      if(option === "alcohol"){
        return a.alcoholContent - b.alcoholContent;
      } else if(option === "price"){
        return a.price - b.price;
      } else if(option === "name"){
          if(a.name < b.name){
            return -1;
          } else if(a.name > b.name){
            return 1;
          } else {
            return 0;
          }
      } else if(option === "brand"){
          if(a.brand < b.brand){
            return -1;
          } else if(a.brand > b.brand){
            return 1;
          } else {
            return 0;
          }
        }
    });
  }

  selectedKeg: Keg = null;
  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  buyKeg(numberOfPintsBought: number){
    if((this.selectedKeg.pintsLeft - numberOfPintsBought) < 0){
      this.selectedKeg.pintsLeft = 0;
    } else{
      this.selectedKeg.pintsLeft = this.selectedKeg.pintsLeft - numberOfPintsBought;
    }

    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg){
    this.MasterKegList.push(newKeg);
    this.sortKegs(this.currentSort);
  }

  addNew(){
    this.addShown = !(this.addShown);

  }
}
