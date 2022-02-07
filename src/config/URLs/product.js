import getUrl from "./getUrl";

const base = "posts";

export default {
  product: {
    url: getUrl(`${base}`),
    method: "get",
  },
  productById: (id) => ({
    url: getUrl(`${base}/${id}`),
    method: "get",
  }),
};
