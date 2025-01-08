import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginBg from '../assets/cool-background.svg'
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import LoginLottie from '../assets/login.json'
import Lottie from "lottie-react";
const Login = () => {
  const navigate=useNavigate()
  const{singInUser,setUser,googleSignIn}=useContext(AuthContext)
  const location=useLocation();
    const handleLogIn=async(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
       
    await  singInUser(email,password)
      .then(result=>{
        setUser(result.user);
        toast.success('User signIn successful')
        navigate(location?.state ? location.state : '/')

      })
      .catch(error=>{
        
        toast.error(`⚠️${error.message.split('/')[1]}`)
      })
    }

    const handleGoogleSignIn=(email,password)=>{
      googleSignIn(email,password)
      .then(result=>{
        setUser(result.user)
        toast.success('User log in successful')
        navigate(location?.state ? location.state : '/')
      })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Sign In now!</h1>
          
      
      <Lottie className='hidden lg:block' animationData={LoginLottie} loop={true} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-4">
                <button className="btn ">Sign In</button>
                <button onClick={handleGoogleSignIn} type='button' className="btn ">Sign In With Google</button>
             <p className='text-sm'>New here?<Link to='/register'> Register Now</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;