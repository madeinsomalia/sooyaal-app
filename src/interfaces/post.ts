export interface Post {
  id: number;
  title: string;
  content: string;
  photoURL: string[];
  published: boolean;
  isPublic: boolean;
  authorId: string;
  author: {
    id: number;
    name: string;
    email: string;
    photoURL: string;
  };
  createdAt: string;
  updatedAt: string;
}
