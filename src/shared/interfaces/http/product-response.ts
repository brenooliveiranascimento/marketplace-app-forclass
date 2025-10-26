import { ProductInterface } from "../product";

export interface ProductReponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: ProductInterface[];
}
