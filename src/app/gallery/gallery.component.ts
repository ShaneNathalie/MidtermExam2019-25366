import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gallery=[
    {'id':1,'image':'../../assets/img6.jpg'},
    {'id':2,'image':'../../assets/img7.jpg'},
    {'id':3,'image':'../../assets/img11.jpg'},
    {'id':4,'image':'../../assets/img8.jpg'},
    {'id':5,'image':'../../assets/img12.jpg'},
    {'id':6,'image':'../../assets/img10.jpg'},
    {'id':7,'image':'../../assets/img1.JPG'}, 
    {'id':8,'image':'../../assets/img2.jpg'},
  ]
}
