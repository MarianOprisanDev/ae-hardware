import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id : any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
  }

}
