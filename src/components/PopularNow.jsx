import React from "react";
import Products from "./Products";
const PopularNow = () => {
  return (
    <div className="flex flex-col gap-8 container justify-between mx-auto p-4 mb-12">
      <h1 className="text-4xl font-bold">Popular Now</h1>
      <div className="flex justify-around items-center">
        <Products
          productName="Vanilla Latte"
          productDescription="A hazelnut or vanilla latte or a caramel cappuccino are classic coffee drinks that don't taste much like coffee. The milk and flavoring in these espresso drinks can help ease you into the taste of coffee. The espresso flavor still shines through a bit, but it isn't overwhelming in the scheme of the drink."
          productImg="/static/vanillaLatte.png"
        />
        <Products
          productName="Cappuccino"
          productDescription="Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cocoa powder or cinnamon."
          productImg="/static/espresso.png"
        />
        <Products
          productName="Hazelnut Latte"
          productDescription="How To Make Hazelnut Flavored Latte. Press 1 oz (30 ml) espresso coffee into a mug or heatproof glass. Froth 5 oz (150 ml) hot milk using a milk frother or your espresso machine. Add 1 oz (30 ml) hazelnut syrup to the espresso coffee and stir to combine."
          productImg="/static/HazelNut.png"
        />
      </div>
    </div>
  );
};

export default PopularNow;
