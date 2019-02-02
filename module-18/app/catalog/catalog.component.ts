import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders,HttpHeaderResponse } from '@angular/common/http';
import { HttpErrorResponse,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  providers: [DataService],
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
public data={};
public data1;
public list=[1,2,3];
  constructor(private dataService : DataService ) { }

ngOnInit(){
   this.dataService.getJSON().subscribe(data => {
        this.data=data;
     
        this.data1=Object.keys(this.data).map(key => this.data[key]);
        console.log(this.data1);
    });
}
  

  // constructor (private router: Router, private dataService: DataService) { }
  // public error: any;
  // public headers: string[];
  // public jsonData={};
  // config: Config; 
  
  // showConfig() {
  //   this.dataService.getConfig()
  //     .subscribe(
  //       (data: Config) => this.config = { ...data }, // success path
  //       error => this.error = error // error path
  //     ); 
  // }
  

  // showConfigResponse() {
  //   this.dataService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  
  //       // access the body directly, which is typed as `Config`.
  //       this.config = { ... resp.body };
  //     });
  // }
  // makeError() {
  //   this.dataService.makeIntentionalError().subscribe(null, error => this.error = error );
  // }
  
 
  // ngOnInit() {
    
  // }

  // onselect(mobile) {
    
  // }

}
