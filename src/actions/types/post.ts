export type Post = {
  id: string;
  title: string;
  content: string;
  summary: string;
  thumbnail: string;
  author: string;
  tags: string[];
  timeToReadInMinutes: number;
  created: string;
  updated: string;
  collectionId: string;
};
