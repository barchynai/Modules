import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
 
  data = [
    {name: 'James', age: 24, job: 'Designer'},
    {name: 'Jill', age: 29, job: 'Engineer'},
    {name: 'Elyse', age: 25, job: 'Engineer'}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
