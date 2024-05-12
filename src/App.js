import { useEffect, useState } from "react";
import { data } from "./exports";
import { Header, Footer, Banner } from "./exports";
import { Outlet } from "react-router-dom";
function App() {
  //productData------------------------
  // additionalImageUrls-availableSizes-brandName
  // -category-description-gender-imageUrl-isInStock-
  // name-price-productCode-productionDate-rating
  //reviews-totalReviewCount

  return (
    <div className="box-border m-0 p-0 bg-black h-screen text-white">
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default App;
