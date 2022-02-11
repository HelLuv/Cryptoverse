export interface INewsItem {
  name: string;
  description: string;
  url: string;
  image?: { thumbnail?: { contentUrl?: string } }
  provider: Array<{ name: string, image?: { thumbnail?: { contentUrl?: string } } }>
  datePublished: string;
}