import { SocialUrlsServiceService } from './../../services/urls/social-urls-service.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  

  constructor(private scroller: ViewportScroller, private router: Router, public socialUrlsServiceService:SocialUrlsServiceService) { }

  ngOnInit(): void {
  }

  scrollToGallery(){
    this.scroller.scrollToAnchor("gallery");
  }


  navigate(url:string){
    this.router.navigate([url]);
  }
}
