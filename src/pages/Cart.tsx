import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { menuItems } from '../components/MenuItems';
import Counter from '../components/Counter';
import { useDispatch } from 'react-redux';
import { clearCart } from '../cartSlice';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);
  const dispatch = useDispatch();

  // Filter menuItems to only include items that are in the cart
  const itemsInCart = menuItems.filter(item => cartItems[item.id] && cartItems[item.id] > 0);

  // Calculate total price
  const totalPrice = itemsInCart.reduce((sum, item) => {
    return sum + (item.price * (cartItems[item.id] || 0));
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (totalCount === 0) {
    return (
      <div className="min-h-screen bg-Rose font-montserrat flex flex-col items-center justify-center">
        <div className="bg-white/20 border border-orange-200/40 rounded-lg p-8 max-w-md text-center">
          <h1 className="text-2xl font-semibold text-orange-700 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-700">Add some delicious items from our menu!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-Rose font-montserrat">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-orange-700">Your Order</h1>
          <button 
            onClick={handleClearCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {itemsInCart.map(item => (
              <div 
                key={item.id} 
                className="bg-white/20 border border-orange-200/40 rounded-lg p-6 mb-4 flex flex-col md:flex-row items-center"
              >
                <img 
                  src={item.image_url} 
                  alt={item.name} 
                  className="h-16 w-16 object-contain mr-6"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <span className="text-orange-600 font-bold mr-4">
                    ${(item.price * (cartItems[item.id] || 0)).toFixed(2)}
                  </span>
                  <Counter 
                    itemId={item.id} 
                    initialCount={cartItems[item.id] || 0} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/20 border border-orange-200/40 rounded-lg p-6 h-fit sticky top-8">
            <h2 className="text-xl font-semibold text-orange-700 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              {itemsInCart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} × {cartItems[item.id]}
                  </span>
                  <span>${(item.price * (cartItems[item.id] || 0)).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="border-t border-orange-200/40 pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full mt-6 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;