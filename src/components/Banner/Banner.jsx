import React, { useEffect, useState } from "react";
import { data } from "../../exports";
function Banner() {
  const [bannerData, setBannerData] = useState(data.bannerData);
  //   console.log(bannerData.imageUrl);
  let [bannerDataIndex, setbannerDataIndex] = useState(0);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setbannerDataIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [bannerDataIndex]);
  const background = "bg-[url(" + bannerData[bannerDataIndex].imageUrl + ")]";
  return (
    <section className="w-full relative h-fit">
      <div
        style={{
          backgroundImage: `url(${bannerData[bannerDataIndex].imageUrl})`,
          position: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "70vh",
          backgroundPosition: "center",
          textShadow: "#fff 30px 0 10px",
          opacity: ".8",
          transition: "background-image 0.5s ease-in-out"
        }}
        className="h-11/12 w-full flex items-center justify-center cursor-pointer"
      >
        <p
          style={{ transition: "background-image 0.5s ease-in-out" }}
          className="relative drop-shadow-lg uppercase tracking-widest text-5xl font-medium font-Cormorant italic text-black"
        >
          {bannerData[bannerDataIndex].name}
        </p>
      </div>
    </section>
  );
}

export default Banner;
