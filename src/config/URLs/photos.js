import getUrl from "./getUrl";

const base = "photos";

export default {
  photos: {
    url: getUrl(`${base}`),
    method: "get",
  },
};
