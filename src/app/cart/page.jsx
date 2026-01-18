import CartItem from "@/components/cards/Cartitem";
import Cart from "@/components/home/Cart";
import { TbHorseToy } from "react-icons/tb";
import React from "react";
import { FaShopify } from "react-icons/fa";
import Link from "next/link";
import { getCart } from "@/actions/server/cart";

const CartPage = async () => {
  const cartItems = await getCart();
  // console.log(cartItems[0]);
  const formattedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
    productId: item.productId?.toString(),
  }));

  return (
    <div>
      <div className="">
        <h2 className="text-4xl py-8 text-center px-6  font-semibold">
          My Cart
        </h2>
      </div>
      {cartItems.length == 0 ? (
        <>
          <div className="text-center py-12 space-y-6 px-6">
            <h2 className="text-center font-bold text-cyan-800 mb-10 text-3xl">
              আপনি কার্টে কোন প্রোডাক্ট এড করেন নি
            </h2>
            <Link
              href={"/products"}
              className="btn bg-cyan-700 text-white btn-lg btn-wide"
            >
              পন্য দেখুন
            </Link>
          </div>
        </>
      ) : (
        <div className="bg-base-200 pb-18 px-6">
          <Cart cartItem={formattedItems}></Cart>
        </div>
      )}
    </div>
  );
};

export default CartPage;
