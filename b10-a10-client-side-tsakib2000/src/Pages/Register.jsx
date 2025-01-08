import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import RegisterLottie from '../assets/register.json'
const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const upperCase = /^(?=.*[A-Z]).*$/;
  const lowerCase = /^(?=.*[a-z]).*$/;
  const length = /^.{6,}$/;
  const handleRegister = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!upperCase.test(password)) {
      return toast.error("⚠️Password Must have an Uppercase letter ");
    };
    if (!lowerCase.test(password)) {
      return toast.error("⚠️Password Must have an Lowercase letter ");
    };
    if (!length.test(password)) {
      return toast.error("⚠️Password Length must be at least 6 character ");
    };
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          toast.success("Register successful");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
   <>
      <h1 className="text-4xl font-bold my-4 text-center">Join the Community</h1>
    <div className="flex justify-center items-center gap-4  flex-row-reverse  my-6">
   
     
   <Lottie className="hidden md:block h-[532px]" animationData={RegisterLottie}></Lottie>

 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
   <form className="card-body" onSubmit={handleRegister}>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input
         name="name"
         type="text"
         placeholder="Name"
         className="input input-bordered"
         required
       />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Photo</span>
       </label>
       <input
         name="photo"
         type="text"
         placeholder="PhotoURL"
         className="input input-bordered"
         required
       />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input
         name="email"
         type="email"
         placeholder="email"
         className="input input-bordered"
         required
       />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input
         name="password"
         type="password"
         placeholder="password"
         className="input input-bordered"
         required
       />

     </div>
     <div className="form-control mt-6">
       <button className="btn ">Sign Up Now</button>
       <p className="text-sm mt-2">
         Already Have an account?<Link to="/login">Sign In Now</Link>
       </p>
     </div>
   </form>
 </div>

</div></>
  );
};

export default Register;
