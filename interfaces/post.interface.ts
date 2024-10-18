import { User } from "./user.interface";

export interface Post {
  title: string;
  description: string;
  isActive: boolean;
  user: User;
}
