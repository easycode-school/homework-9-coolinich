import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-sort',
  templateUrl: './pipe-sort.component.html',
  styleUrls: ['./pipe-sort.component.css']
})
export class PipeSortComponent implements OnInit {
  public usersList = [
    {
      name: 'Boris',
      age: 18,
      'hobby': 'travelling',
      hasPet: true
    },
    {
      name: 'Andrew',
      age: 50,
      'hobby': 'cycling',
      hasPet: false
    },
    {
      name: 'Dmitro',
      age: 19,
      hobby: 'alpinism',
      hasPet: true
    },
    {
      name: 'Harry',
      age: 49,
      'hobby': 'hiking',
      hasPet: false
    }
  ];

  // Copy of initial array to test pipe functionality
  public userListCopy = this.usersList.slice();
  constructor() { }

  ngOnInit() {
  }

}
