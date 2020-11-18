import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-checkout-success',
    templateUrl: './checkout-success.component.html',
    styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent implements OnInit {
   orderId: any;

    constructor(public activeRoute: ActivatedRoute) {
        this.activeRoute.params.subscribe(routes => {
            if (routes['id']) {
                this.orderId = routes['id'];
            }
        });
    }

    ngOnInit() {
    }
}