import { Header, Footer, Banner } from "./exports";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="box-border m-0 p-0 bg-black text-white h-auto">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default App;
