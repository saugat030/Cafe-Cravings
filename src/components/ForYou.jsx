import React from "react";
import Products from "./Products";
const ForYou = () => {
  return (
    <div className="mt-28 p-20 border-2 border-black">
      <div className="container mx-auto flex flex-col border border-red-500 gap-3 p-5">
        <h1 className="text-4xl font-bold text-black mb-10">
          Special Menu{" "}
          <u className="underline decoration-4 decoration-amber-700">for you</u>
        </h1>
        {/* Products Cards Section*/}
        <div className="flex flex-wrap w-full gap-5 justify-between items-center">
          {/* Call products Here through props */}
          {/* Different PRoduct */}
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg="/static/vanillaLatte.png"
            hasButton={false}
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg="/static/vanillaLatte.png"
            hasButton={false}
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg="/static/vanillaLatte.png"
            hasButton={false}
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg="/static/vanillaLatte.png"
            hasButton={false}
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg="/static/vanillaLatte.png"
            hasButton={false}
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg="/static/vanillaLatte.png"
            hasButton={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ForYou;
