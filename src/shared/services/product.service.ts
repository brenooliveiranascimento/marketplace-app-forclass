import { marketPlaceApiClient } from "../api/market-place";
import { ProductRequest } from "../interfaces/http/product";
import { ProductReponse } from "../interfaces/http/product-response";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductReponse>(
    "/products",
    params
  );

  return data;
};
