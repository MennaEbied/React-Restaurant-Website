import { useState } from "react";
import { useCart } from "../contexts/CartContext";

function Counter() {
  const [count, setCount] = useState(0);
  const { increment, decrement } = useCart();

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    increment();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      decrement();
    }
  };

  return (
    <div className="flex items-center bg-orange-200 rounded-full overflow-hidden mt-4 font-semibold font-montserrat text-lg">
  <button className=" px-3 py-1 text-orange-800 " onClick={handleDecrement}>-</button>
  <span className="px-4 text-orange-800">{count}</span>
  <button className=" px-3 py-1 text-orange-800 " onClick={handleIncrement}>+</button>
</div>
  );
}

export default Counter;
