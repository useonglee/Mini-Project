export interface videoItemType {
  etag: string;
  id: string;
  kind: string;
  snippet: videoSnippetType;
}

export interface videoSnippetType {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: thumbnailsType<thumbnailsDetailType>;
  title: string;
}

export interface thumbnailsType<T> {
  default: T;
  medium: T;
  high: T;
}

export interface thumbnailsDetailType {
  width: number;
  height: number;
  url: string;
}
