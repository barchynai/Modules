import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items=[
    {title:'Why this sky is blue?', content:'Just because'},
    {title: 'Why stars are so faraway', content: 'Just because'},
    {title: 'Why the ocean is so deep', content:'Just because'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
   this.modalOpen = !this.modalOpen
  }

}
