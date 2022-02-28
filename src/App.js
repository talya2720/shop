import './App.css';
import Header from './components/Header/Header';
import Product from './components/product/product';
import Products from './components/products/products';


function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Product/>
    </div>
  );
}

export default App;
