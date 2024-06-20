import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
UserProfile=[

  {
    id:101,
    name:'Poonam',
    Age:23,
    City:'Pune'

  },
  {
    id:102,
    name:'Sanika',
    Age:22,
    City:'Beed'
  },
  {
    id:103,
    name:'Chaitali',
    Age:21,
    City:'Mumbai'
  },
  {
    id:104,
    name:'Aditi',
    Age:24,
    City:'Nagapur'
  },


]

  

msg='Hello Angular'
img='assets/Image/1.jpg';
}
