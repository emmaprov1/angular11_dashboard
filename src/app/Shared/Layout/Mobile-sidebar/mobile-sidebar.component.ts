import { Component, OnInit, Input } from '@angular/core'; 
 

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.css']
})
export class MobileSidebarComponent implements OnInit {

  public toggleSidenav: any =0
  public show:boolean = false
 
  @Input() event = '';
  constructor() { 
  }
   
  ngDoCheck(){ 
    this.refresh(); 
  } 
  

  ngOnInit(): void {
    this.refresh();  
  }
  refresh(){  
    console.log(this.event) 
    this.toggleSidenav = this.event
    if(this.event){
      this.show = !this.show 
    }
  }

}
