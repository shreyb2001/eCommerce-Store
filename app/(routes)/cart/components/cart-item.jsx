import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import Counter from "@/components/ui/counter";
import { useState } from "react";

const CartItem = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(data.quantity);
  const [disabled, setDisabled] = useState(false);

  const increaseCounter = () => {
    setQuantity(quantity + 1);
    cart.increaseCount(data._id);
  };

  const onRemove = () => {
    cart.removeItem(data._id);
  };

  const decreaseCounter = () => {
    if (quantity <= 1) {
      onRemove();
      setDisabled(true);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <Counter
              increaseCounter={increaseCounter}
              decreaseCounter={decreaseCounter}
              disabled={disabled}
              quantity={quantity}
            />
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.sizeId.name}
            </p>
          </div>
          <Currency value={data.price * quantity} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
