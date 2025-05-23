import Counter from "../components/Counter";
import { menuItems } from "../components/MenuItems";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementItem } from "../cartSlice";


const Menu: React.FC = () => {
  
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const categories = [...new Set(menuItems.map((item) => item.category))];
  const dispatch = useDispatch()
  return (
    <div className="bg-Rose h-full font-montserrat">
      <div className="container mx-auto  px-4 py-8">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-orange-700 mb-6 border-b-2 border-orange-500/50 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg bg-white/20 border border-orange-200/40
             hover:-translate-y-1 hover:shadow-xl transition
             overflow-hidden p-6 flex flex-col items-center text-center space-y-2"
                  >
                    <div className="p-6">
                      <div className="flex justify-center items-center mb-2 flex-col">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="h-24 w-24 object-contain"
                        />
                        <span className="text-orange-600 font-bold">
                          ${item.price.toFixed(2)}
                        </span>
                        <p className="text-gray-600">{item.description}</p>
                        <div className="flex flex-row items-center gap-2.5 md:gap-4 mt-2">
                          <button 
                           onClick={() => {
                            if (!cartItems[item.id] || cartItems[item.id] === 0) {
                              dispatch(incrementItem(item.id));
                            }
                          }}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap">
                            Add to Order
                          </button>
                           <Counter 
                            itemId={item.id} 
                            initialCount={cartItems[item.id] || 0} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
