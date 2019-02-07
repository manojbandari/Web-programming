import { Component, OnInit, Input } from '@angular/core';
import { books } from '../books';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products=books.items;
  
  i:any;
  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.i = this.route.snapshot.paramMap.get('id');
    console.log(this.i);
  }
  

}
