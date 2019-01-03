import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
  id = 1;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getUsers().subscribe(d => {
      this.users = d;
      console.log(this.users);
    });
  }

  onSelect(id) {
    this.id = id + 1;
    this.router.navigate(['users', this.id]);
  }

}
