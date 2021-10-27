import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile= [
    {'id':1,'name':'Know my Background','description':'I am Shane Nathalie H. Acebo. I live in Brgy. Minuhang Barugo Leyte. I am a college student, taking Bachelor of Science in Information Technology','image':'../../assets/profile.jfif'},
    {'id':2,'name':'Know my Family Background','description':'My mother is Jasmin Holasca and my father is Nathaniel Acebo. I have 5 brothers and I am the eldest. I also have my super wonderful daughter, and yes I am a Mother','image':'../../assets/fam.png'},
    {'id':3,'name':'Know my Hobby','description':'I love reading books and novels, and I love playing with my daugter.','image':'../../assets/hobby.jfif'},
    {'id':4,'name':'Know my Favorites','description':'My favorite food is Beefsteak, my favorite color is purple, my favorite and dream place is France.','image':'../../assets/fav.jfif'},

  ]
}
