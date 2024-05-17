import './index.css';
import './App.css';
import Products from './Components/ProductsComponents/Products';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
        <div className='block'>
           <AllCategories/>
           <Cart/>
        </div>
        <div className='block'>
           <Products/> 
        </div>       
    </div>
  );
}

export default App;
