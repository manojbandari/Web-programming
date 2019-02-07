import { Component, OnInit } from '@angular/core';
import { books } from '../books';
import { Router } from '@angular/router';
import { ActivatedRoute }     from '@angular/router';
 

import { Observable }     from 'rxjs';
import { switchMap }      from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  products=books.items;
 
  ngOnInit() {
    
  }
 
}

