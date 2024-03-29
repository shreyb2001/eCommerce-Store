import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="border rounded-md p-8 my-4 flex flex-col gap-4 text-xl">
      <p>
        <span className="font-semibold">Order ID</span> : {order.orderId}
      </p>
      {order.items.map((item, key) => (
        <div key={key} className="flex gap-4">
          <Image
            src={item.image}
            height={100}
            width={100}
            className="rounded-md"
          />
          <div className="text-lg py-2">
            <p>Item name : {item.name}</p>
            <p>Item price : ₹{item.price}</p>
            <p>Item quantity : x{item.quantity}</p>
          </div>
        </div>
      ))}
      <Separator className="mt-2" />
      <p className="pt-4 text-right">Total Amount : ₹{order.totalPrice}</p>
    </div>
  );
};

export default OrderCard;
