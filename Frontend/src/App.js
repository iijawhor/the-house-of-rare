import { useSelector } from "react-redux";
import "./App.css";
import { Header, Footer, Banner } from "./exports";
import { Outlet } from "react-router-dom";
function App() {
  const product = useSelector((state) => state.cart.cartItems);
  console.log("Products in APP >>>>>>", product);
  return (
    <div className="box-border m-0 p-0 h-auto">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default App;
