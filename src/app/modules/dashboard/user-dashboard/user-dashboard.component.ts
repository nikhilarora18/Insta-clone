import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post.model';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  posts: Post[] = [
    {
      user: {
        username: 'nikhil_na',
        // tslint:disable-next-line:max-line-length
        profilePic: 'https://fsa.zobj.net/crop.php?r=YMiaoE1yDbt_EXzmm9Mhop-dKmD9vUppXqAfkkVA-D8XFF0Ec5FXA9FOK3BT9lv03SkhMJLTpp5iTi5VQo5xIjzO6kCDSjSDXIiHVrDWAyGe6hPsaNKNOFO9FxlB5uKYFGaXdEi2LwL-bfWD'
      } as User,
      location: 'New York',
      image: 'https://wallpapercave.com/wp/6lvp4zT.jpg',
      caption: 'Part of journey is the end'
    } as Post,
    {
      user: {
        username: 'nikhil_na',
        // tslint:disable-next-line:max-line-length
        profilePic: 'https://fsa.zobj.net/crop.php?r=YMiaoE1yDbt_EXzmm9Mhop-dKmD9vUppXqAfkkVA-D8XFF0Ec5FXA9FOK3BT9lv03SkhMJLTpp5iTi5VQo5xIjzO6kCDSjSDXIiHVrDWAyGe6hPsaNKNOFO9FxlB5uKYFGaXdEi2LwL-bfWD'
      } as User,
      location: 'New York',
      image: 'https://wallpapercave.com/wp/6lvp4zT.jpg',
      caption: 'I am Iron Man'
    } as Post
  ];

  ngOnInit() {
  }

}
