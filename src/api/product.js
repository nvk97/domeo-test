import productUrls from "@/config/URLs/product";
import { defaultRequest, requestWithParams } from "./requests";

export const getAllProducts = () => defaultRequest(productUrls.product);
export const getProductsWithParams = (query) =>
  requestWithParams(productUrls.product, query);
export const getProductId = (id) => defaultRequest(productUrls.productById(id));
