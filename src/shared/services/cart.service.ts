import { CartProduct, OmitedProductCart } from "../store/cart-store";

export const cartService = {
  findExistingProduct: (productList: CartProduct[], productId: number) =>
    productList.some(({ id }) => id === productId),
  addProdcutToCart: (
    productList: CartProduct[],
    newProduct: OmitedProductCart
  ) => {
    const exitingProduct = cartService.findExistingProduct(
      productList,
      newProduct.id
    );

    if (exitingProduct) {
      const products = productList.map((product) => {
        if (product.id == newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      const total = cartService.calculateTotal(products);

      return { products, total };
    }
    const products = [...productList, { ...newProduct, quantity: 1 }];
    const total = cartService.calculateTotal(products);
    return {
      prodcts: products,
      total,
    };
  },
  calculateTotal: (productList: CartProduct[]) => {
    return productList.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity;
    }, 0);
  },
  removeProductFromList: (productList: CartProduct[], productId: number) => {
    const products = productList.filter(({ id }) => id !== productId);
    const total = cartService.calculateTotal(products);
    return {
      products,
      total,
    };
  },
};
