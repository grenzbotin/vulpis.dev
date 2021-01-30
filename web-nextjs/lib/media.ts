import { getStrapiURL } from "./api";


export const getMedia = (media: Record<string, string>): string => {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;

  return imageUrl;
}