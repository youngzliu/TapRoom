import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css']
})
export class KegEditComponent implements OnInit {
  @Input() childSelectedKeg: Keg;
  @Output() sendPintsToBuy = new EventEmitter();

  buyKeg(pints: number){
    this.sendPintsToBuy.emit(pints);
  }

  constructor() { }

  ngOnInit() {
  }

}
