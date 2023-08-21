export type BlogItemType = {
  id: string;
  title: string;
  description: string;
  imageUrl: null;
  userId: string;
  createdAt: string;
  updatedAt: string;
  location: string;
  categoryId: string;
  isProfile: boolean;
};

export type UserItemType = {
  id: string;
  name: string;
  email: string;
  blogs: BlogItemType[];
  _count: {
    blogs: number;
  };
  message: string
};
