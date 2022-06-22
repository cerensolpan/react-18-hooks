import  { useState, useTransition } from 'react';
import { generateProducts } from './data';
import ProductList from './components/ProductList';


const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [filterTerm, setFilterTerm] = useState('');
  const [isPending, startTransition] = useTransition()

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {  
    // startTransition(()=>{
    //   setFilterTerm(event.target.value);
    // })

      setFilterTerm(event.target.value);
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {/* {isPending && <h1>Loading...</h1>} */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
