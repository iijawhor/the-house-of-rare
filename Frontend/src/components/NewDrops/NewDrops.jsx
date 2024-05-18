import React, { useEffect, useState } from "react";
import { Card, data } from "../../exports";
import { useNavigate } from "react-router-dom";
function NewDrops() {
  const [products, setProducts] = useState(data.products);
  const [newDrops, setNewDrops] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const productItems = products.map((product) => {
      return product;
    });
    setNewDrops(productItems.slice(0, 4));
  }, []);
  const handleNavigate = (id, product) => {
    navigate("/products", { state: { allProducts: products } });
  };
  const handleNavigateToProductDetails = (id, product) => {
    navigate("/product-details/:id", { state: { productDetails: product } });
  };
  return (
    <section className=" w-full relative flex px-2  py-8 items-center jusitfy-center">
      <div className="relative py-1 w-full md:w-10/12 m-auto flex flex-col items-center justify-center md:gap-8">
        <button className="border px-3 py-1 rounded-lg uppercase font-jost text-sm font-base text-black tracking-widest">
          New drops
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-5 items-center">
          {newDrops.map((product) => (
            <div
              className="h-4/6 md:h-full cursor-pointer"
              onClick={() => {
                handleNavigateToProductDetails(product.id, product);
              }}
            >
              <Card
                productImage={product.imageUrl}
                productName={product.name}
                productSize={product.availableSizes}
                productPrice={product.price.current.text}
              />
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-0">
          <button
            onClick={handleNavigate}
            className="font-jost text-black font-base tracking-widest text-sm border px-3 py-1 rounded-lg cursour-pointer"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewDrops;
