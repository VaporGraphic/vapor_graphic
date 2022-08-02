import { SocialUrlsServiceService } from './../../services/urls/social-urls-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {

  constructor(public socialUrlsServiceService:SocialUrlsServiceService) { }

  ngOnInit(): void {
  }

}
