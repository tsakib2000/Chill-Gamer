import { Link } from "react-router-dom";



const ErrorPage = () => {
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-rose-900 text-white">
        {/* Game Controller Icon */}
        <div className="mb-6">
          <img
            src='https://i.ibb.co.com/28Y9qyK/backiee-274647-landscape-removebg-preview.png'
            alt="Game Controller"
            className="w-40 mx-auto animate-bounce"
          />
        </div>
  
        {/* 404 Title */}
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
  
        {/* Subtitle */}
        <h2 className="text-2xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
  
        {/* Description */}
        <p className="text-gray-400 text-center max-w-lg mx-auto">
          It seems you've wandered off into uncharted territory. Return to the homepage or explore our game collection to get back on track.
        </p>
  
        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <Link to='/'
            className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
            
          >
            Back to Home
          </Link>

        </div>
      </div>
    );
};

export default ErrorPage;