import photosUrl from "@/config/URLs/photos";
import { defaultRequest, requestWithParams } from "./requests";

export const getPhotoByQuery = (query) =>
  requestWithParams(photosUrl.photos, query);
