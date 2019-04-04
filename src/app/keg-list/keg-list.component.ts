import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output () clickSender = new EventEmitter();
  @Output() kegToSort = new EventEmitter();


  onChange(option){
    this.kegToSort.emit(option);
  }

  titleColor(keg){
    if(keg.alcoholContent < 5){
      return 'bg-success';
    } else if(keg.alcoholContent < 10){
      return 'bg-info';
    } else  if(keg.alcoholContent < 25){
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }

  showDetails(keg){
    keg.shown = !(keg.shown);
  }

  editKeg(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }
  constructor() { }

  ngOnInit() {
  }

}
