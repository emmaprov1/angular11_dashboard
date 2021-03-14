import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  public showIcon:boolean = false
  @Output() eventClicked = new EventEmitter<number>();
 
  constructor(private store: Store<any>) { }
  
  openSidenav() {  
      this.showIcon = !this.showIcon
      this.eventClicked.emit(1); 
    } 

  closeSidenav() {
    // this.store.dispatch(new HideSidenav());
  }

  toggleSidenav() {
     
  }


  ngOnInit(): void {
  }

}
