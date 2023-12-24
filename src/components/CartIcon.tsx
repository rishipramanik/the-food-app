"use client";

import { useCartStore } from "@/utils/store";
import React, { useEffect } from "react";
import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

function CartIcon() {
  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href={"/cart"} className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  );
}

export default CartIcon;
