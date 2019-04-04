import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-new',
  templateUrl: './keg-new.component.html',
  styleUrls: ['./keg-new.component.css']
})
export class KegNewComponent implements OnInit {

  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: string, alcohol: string){
    let newKeg = new Keg(name, brand, parseInt(price), parseInt(alcohol), 15);
    this.sendKeg.emit(newKeg);
  }

  constructor() { }

  ngOnInit() {
  }

}
