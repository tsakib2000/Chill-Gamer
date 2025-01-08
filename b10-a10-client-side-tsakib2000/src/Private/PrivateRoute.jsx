import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ColorRing } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
  const{user,loading}=useContext(AuthContext);
  const location=useLocation();
  if(loading){
    return  <div className="flex justify-center items-center h-screen">
      <ColorRing
      visible={true}
      height="300"
      width="300"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  }
  if(user){
    return children
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
