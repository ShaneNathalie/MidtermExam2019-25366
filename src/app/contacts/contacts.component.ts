import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contacts= [
    
    {'id':1,'name':'Facebook Account','description':'Username:Shane Holasca','image':'../../assets/fb.png'},
    {'id':2,'name': 'Gmail Account','description':'Email:shane04nathalie@gmail.com','image':'../../assets/gmail.png'},
    {'id':3,'name':'Instagram Account','description':'Username:Shanang0225','image':'../../assets/insta.jfif'},
    {'id':4,'name':'Call or Text','description':'Number: 09518515381','image':'../../assets/download.png'},
  
  ]
}
