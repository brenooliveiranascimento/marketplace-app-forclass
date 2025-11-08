import { marketPlaceApiClient } from "../api/market-place";
import { ProductRequest } from "../interfaces/http/product";
import { GetProductDetailInterface } from "../interfaces/http/product-detail";
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

export const getProductDetail = async (id: number) => {
  const { data } = await marketPlaceApiClient.get<GetProductDetailInterface>(
    `/products/${id}`
  );

  return data;
};
