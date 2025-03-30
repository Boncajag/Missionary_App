export interface User {
  user_id: number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  mission: string;
  home_city: string;
  home_state: string;
  home_country: string;
  birthday: string;
  profile_picture: string | null;
}

export interface Post {
  post_id: number;
  title: string;
  user_id: number;
  text: string;
  image: string | null;
  created_at: string;
  first_name: string;
  last_name: string;
  mission: string;
}

export interface Reply {
  reply_id: number;
  post_id: number;
  user_id: number;
  text: string;
  created_at: string;
}

export interface AllData {
  users: User[];
  posts: Post[];
  replies: Reply[];
}
