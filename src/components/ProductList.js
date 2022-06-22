// import {useDeferredValue} from "react";

function ProductList({ products }) {
  // const deferredProducts = useDeferredValue(products)

  return (
    <ul>
         {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
