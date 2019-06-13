export interface User {
  username: string;
  fullName: string;
  profilePic?: string;
  isPrivate: boolean;
  followers: number;
  following: number;
  posts: number;
  isBusinessAccount: boolean;
  password: string;
  email: string;
}
