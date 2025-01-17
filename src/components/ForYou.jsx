import React from "react";
import Products from "./Products";
import img from "../static/vanillaLatte.png";
const ForYou = () => {
  return (
    <div className="xl:p-20 p-4 pt-16" id="Products">
      <div className="container mx-auto flex flex-col gap-3 xl:p-5">
        <h1 className="xl:text-4xl text-3xl font-bold text-black xl:mb-10 mb-5">
          Special Menu{" "}
          <u className="underline decoration-4 decoration-amber-700">for you</u>
        </h1>
        {/* Products Cards Section*/}
        <div className="flex flex-wrap w-full gap-5 xl:justify-between justify-center items-center">
          {/* Call products Here through props */}
          {/* Different PRoduct */}
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg={img}
            hasButton={false}
            aboutProduct="A hazelnut or vanilla latte or a caramel cappuccino."
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg={img}
            hasButton={false}
            aboutProduct="A hazelnut or vanilla latte or a caramel cappuccino."
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg={img}
            hasButton={false}
            aboutProduct="A hazelnut or vanilla latte or a caramel cappuccino."
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg={img}
            hasButton={false}
            aboutProduct="A hazelnut or vanilla latte or a caramel cappuccino."
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg={img}
            hasButton={false}
            aboutProduct="A hazelnut or vanilla latte or a caramel cappuccino."
          />
          <Products
            productName="Vanilla Latte"
            productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
            productImg={img}
            hasButton={false}
            aboutProduct="A hazelnut or vanilla latte or a caramel cappuccino."
          />
        </div>
      </div>
    </div>
  );
};

export default ForYou;
