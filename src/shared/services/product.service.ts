import { marketPlaceApiClient } from "../api/market-place";
import { ProductRequest } from "../interfaces/http/product";
import { ProductReponse } from "../interfaces/http/product-response";
import { ProductCategory } from "../interfaces/product";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductReponse>(
    "/products",
    params
  );

  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    "/products/categories"
  );

  return data;
};
