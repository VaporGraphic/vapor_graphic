import { SocialUrlsServiceService } from './../../services/urls/social-urls-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-widget',
  templateUrl: './footer-widget.component.html',
  styleUrls: ['./footer-widget.component.scss']
})
export class FooterWidgetComponent implements OnInit {

  constructor(public socialUrlsServiceService:SocialUrlsServiceService) { }

  ngOnInit(): void {
  }

}
