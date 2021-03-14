import { Component, ViewChild, OnInit } from '@angular/core';
import { Todo } from './../../../../Core/Models';
import { Store } from '@ngrx/store';
import * as todoAction from '../../../../Core/Actions/todoAction';   
import { Color } from 'ng2-charts';

 
  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  todos!: Array<Todo>;
  message!: string;
  bgClass!: string;
  loading: boolean = true; 
  current: number = 0; 
  total: number = 0; 
  nextPage: number = 0;
  limit: number = 10;
  start: number = 0;
  end: number = 10;
  p = 1; 
  
 

  constructor(private store: Store<any>) { 
 

  }
 
  next () {
    this.limit = 10 
    this.start = this.limit + this.start 
    this.end = this.limit + this.start 
    this.total = this.todos.length; 
    this.nextPage = this.limit + this.current;
   console.log(this.start)
   console.log(this.end)
 }

 prev () {
   this.limit = 10 
   this.start = this.start - this.limit 
   this.end = this.end - this.limit 
   this.total = this.todos.length;
   this.nextPage =  this.current - this.limit;
  console.log(this.start)
  console.log(this.end)
}

  title = '';



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 29, 50, 31, 67, 75, 90], label: 'Series A'}, 
  ];
  lineChartColors: Color[] = [
    {
      borderColor: '#8cceff',
      backgroundColor: '#8cceff',
    },
  ];

 

  ngOnInit() {
 
    this.store.dispatch(new todoAction.GetTodos());
    this.store.select('todos').subscribe(response => {


      this.todos = response[0].todoList;
      this.message = response[0].message;
      this.bgClass = response[0].infoClass;
      this.loading = response[0].loading;
  
      console.log(response[0])
 
    }, error => {
      console.log(error);
    });
  } 
}
