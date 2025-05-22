import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem } from '../cartSlice';

interface CounterProps {
  itemId:number;
  initialCount?: number;
}

function Counter({ itemId, initialCount = 0 }: CounterProps) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(itemId));
  };

  return (
    <div className="flex items-center bg-orange-200 rounded-full overflow-hidden font-semibold font-montserrat text-lg">
      <button className="px-3 py-1 text-orange-800" onClick={handleDecrement}>
        -
      </button>
      <span className="px-4 text-orange-800">{initialCount}</span>
      <button className="px-3 py-1 text-orange-800" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;