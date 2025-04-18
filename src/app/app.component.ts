import { Component } from '@angular/core';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API_Calling';
  toDo:any[]=[];
  constructor(private dummyservice:DummyService){
  }
  getdata(){
    this.dummyservice.getalldata().subscribe((data => {
    this.toDo=data.todos;

    }));
  }
}
