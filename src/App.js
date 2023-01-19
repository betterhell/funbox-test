import {products} from "./data/products";
import ProductCard from "./components/ProductCard/ProductCard"

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Ты сегодня покормил кота?</h1>
      <div className="products">
        {products.map((product) =>
            <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
}

export default App;
