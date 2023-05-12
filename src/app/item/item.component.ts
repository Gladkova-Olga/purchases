import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  // id: number | undefined;
  // private subscription: Subscription;
  // constructor(private activateRoute: ActivatedRoute) {
    // this.id = activateRoute.snapshot.params['id'];
    // this.subscription = activateRoute.params.subscribe(params => this.id=params['id']);

   
  // }

 // OR
  ngOnInit() {
    // this.activateRoute.paramMap.pipe(
    //   switchMap(params => params.getAll('id'))
    // )
    // .subscribe(data => this.id = +data)
  }
id: any;
product: any;
price: any;

private routeSubscriptoin: Subscription;
private querySubscription: Subscription;
constructor(private route: ActivatedRoute) {
  this.routeSubscriptoin = route.params.subscribe(params =>this.id=params['id']);
  this.querySubscription = route.queryParams.subscribe(
    (queryParams: any) => {
      this.product = queryParams['product'];
      this.price = queryParams['price']
    }
  )
}


}
