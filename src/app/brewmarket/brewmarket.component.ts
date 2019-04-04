import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brewmarket',
  templateUrl: './brewmarket.component.html',
  styleUrls: ['./brewmarket.component.css']
})
export class BrewmarketComponent implements OnInit {
  constructor(private router: Router) { }

  MasterKegList: Keg[] = [
    new Keg('Aest','Best',50,10, 1),
    new Keg('Cest2','Aest3',20,50, 2),
    new Keg('Eest3','Test3',3,5, 3)
  ];

  goToDetaiLPage(clickedKeg: Keg){
    this.router.navigate(['market', clickedKeg.id]);
  }


  ngOnInit() {
  }

}
