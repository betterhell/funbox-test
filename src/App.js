import { products } from "./data/products";
import ProductCard from "./components/ProductCard/ProductCard";

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Ты сегодня покормил кота?</h1>
      <div className="App__products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
