import { SocialUrlsModel } from './../../models/urls/social-urls-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialUrlsServiceService {

  socialUrls: SocialUrlsModel[] = [
    {
      icon:"bi-instagram",
      type:"Instagram",
      url:"https://www.instagram.com/czar_uribeortiz/"
    },
    {
      icon:"bi-dribbble",
      type:"Dribble",
      url:"https://dribbble.com/vapor_graphic"
    }
  ]

  constructor() { }
}
