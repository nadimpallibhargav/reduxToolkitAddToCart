import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store/cartSlice';

function App() {

  const dispatch = useDispatch();

  const { products, total } = useSelector( (state) => state.cart );

  const handleSelect = (e) => {
    const productValue = parseInt(e.target.value);
    dispatch(addToCart(productValue));
  }

  return (
    <div className="App">
      <select onChange={(e) => handleSelect(e)}>
        {products.map((product, index) => {
          return(
            <option value={product.price} key={index}>{product.name}</option>
          );
        })}
      </select>

      <div>
        <h2>Total Amount</h2>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default App;
