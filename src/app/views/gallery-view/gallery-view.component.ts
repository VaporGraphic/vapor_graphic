import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {

  constructor() { }

  listExamples = [1,2,3,4,5,6,7,8,9,10,11,12,13]

  ngOnInit(): void {
  }

}
