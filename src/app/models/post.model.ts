import {User} from './user.model';

export interface Post {
  user: User;
  location: string;
  numberOfLikes: number;
  likes: User[];
  numberOfComments: number;
  comments: {
    user: User,
    comment: string
  }[];
  commentingOn: boolean;
  isArchived: boolean;
  image: string;
  caption: string;
}
