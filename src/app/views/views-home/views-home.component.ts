import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpg',
      title: 'Couch',
      desc: 'This is a great couch to sit on',
    },
    {
      image: '/assets/images/dresser.jpg',
      title: 'Dresser',
      desc: 'This is a great couch to put stuff in',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
