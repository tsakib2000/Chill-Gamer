import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div  className="w-full h-full mx-auto">
    <div className="bg-rose-800 h-[136px] flex justify-center items-center mt-0 md:h-[100px] lg:h-[136px]">

   <Navbar />
   
    </div>
      <div className="min-h-[calc(100vh-292px)] w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
