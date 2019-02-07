import { Component, OnInit } from '@angular/core';
import { books } from '../books';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products=books.items;
  i:any;
  quantity=2;
  constructor(private route:ActivatedRoute,private router: Router) {}
  
  ngOnInit() {
    this.i = this.route.snapshot.paramMap.get('id');
  }
  continue(){
    this.router.navigate(['/home']);
  }

}
