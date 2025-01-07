export const useCartInit = () => {
  const cookieCartProduct = useCookie("cartProduct", {
    maxAge: 60 * 60 * 24 * 30,
    default: () => [],
  });
  // if (cookieCartProduct.value?.length < 1) {
  //   cookieCartProduct.value = [
  //     { id: 1, localCount: 1 },
  //     { id: 2, localCount: 4 },
  //     { id: 3, localCount: 3 },
  //   ];
  // }

  const cartProduct = useState("cartProduct", () => cookieCartProduct.value);

  watch(
    () => cartProduct.value,
    (cur) => {
      cookieCartProduct.value = cur;
    }
  );

  return {
    cartProduct,
    cookieCartProduct,
  };
};

export default () => {
  const cartProduct = useState("cartProduct", () => []);

  const cartProductIsExists = (productId) =>
    cartProduct.value.find((item) => item?.id === productId);

  const cartProductAdd = ({ productId, localCount = 1 }) => {
    if (cartProductIsExists(productId)) return;

    cartProduct.value = [...cartProduct.value, { id: productId, localCount }];
  };

  const cartProductToggle = ({ productId, localCount = 1 }) => {
    const findedId = cartProductIsExists(productId);

    if (!findedId) {
      cartProduct.value = [...cartProduct.value, { id: productId, localCount }];
      return;
    }

    const products = [...cartProduct.value];
    products.splice(
      cartProduct.value.findIndex((item) => item?.id === productId),
      1
    );
    cartProduct.value = products;
  };

  // const productDelete = (productId) => {
  //   console.log(productId);
  //   const findedId = cartProductIsExists(productId);
  //   if (!findedId) return;

  //   const products = [...cartProduct.value];
  //   products.splice(
  //     cartProduct.value.findIndex((item) => item?.id === findedId),
  //     1
  //   );
  //   cartProduct.value = products;
  // };

  return {
    cartProduct,
    cartProductIsExists,
    cartProductAdd,
    cartProductToggle,
  };
};
