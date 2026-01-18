import CheckOut from "@/components/home/CheckOut";
import React from "react";
import { TbHorseToy } from "react-icons/tb";
import Link from "next/link";
import { getCart } from "@/actions/server/cart";

const checkOutPage = async () => {
  const cartItems = await getCart();

  // const formattedItems = cartItems.map((item) => ({
  //   ...item,
  //   _id: item._id.toString(),
  // }));

  const formattedItems = JSON.parse(JSON.stringify(cartItems));

  return (
    <div>
      {/* title  */}
      <div className="">
        <h2 className="text-2xl py-4 font-semibold border-l-8 border-primary pl-8">
          Check Out Page
        </h2>
      </div>
      {cartItems.length == 0 ? (
        <>
          <div className="text-center py-20 space-y-5">
            <h2 className="text-4xl font-bold">
              আপনি কোন প্রোডাক্ট সিলেক্ট করেন নি
            </h2>
            <Link
              href={"/products"}
              className="btn bg-cyan-700 btn-lg btn-wide"
            >
              <TbHorseToy></TbHorseToy> পন্য দেখুন
            </Link>
          </div>
        </>
      ) : (
        <CheckOut cartItems={formattedItems}></CheckOut>
      )}
    </div>
  );
};

export default checkOutPage;
