import { Component, OnInit } from '@angular/core';
import { DATA } from '../data';

@Component({
  selector: 'ang-table',
  templateUrl: './ang-table.component.html',
  styleUrls: ['./ang-table.component.css']
})
export class AngTableComponent implements OnInit {

  studentsData = [];
  constructor() { }

  ngOnInit() {
  	this.studentsData = DATA[0].table;
  }

}
