import { Component} from '@angular/core'; 
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
   
  public clickedEvent: number | undefined; 

  // tslint:disable-line: no-input-rename
  childEventClicked(event: number) { 
    this.clickedEvent = event;   
  }
}
 