import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(d => {
      this.users = d;
      console.log(this.users);
    });

  }

}
