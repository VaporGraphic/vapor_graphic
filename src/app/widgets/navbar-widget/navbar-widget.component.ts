import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-widget',
  templateUrl: './navbar-widget.component.html',
  styleUrls: ['./navbar-widget.component.scss']
})
export class NavbarWidgetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url:string){
    this.router.navigate([url]);
  }

}
