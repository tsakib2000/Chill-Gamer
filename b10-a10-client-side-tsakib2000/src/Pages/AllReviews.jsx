import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../Components/AllReviewCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ColorRing } from "react-loader-spinner";

const AllReviews = () => {
  const{loading}=useContext(AuthContext);
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);
  const sortbyYear=()=>{
    const sortedReview = [...reviews].sort((a,b)=> parseInt(b.publishing_Year) - parseInt(a.publishing_Year));
    setReviews(sortedReview)
  }
  const sortbyRating=()=>{
    const sortedReview = [...reviews].sort((a,b)=> parseInt(b.rating) - parseInt(a.rating));
    setReviews(sortedReview)
  }

  const handleFilter=e=>{
const filterGenre=e.target.innerText;
const filterReview=loadedReviews.filter(review=>review.genre == filterGenre );
setReviews(filterReview)
  }
  const handleFilterAll=e=>{
    const filterGenre=e.target.innerText;
    const allReview=loadedReviews.filter(review=>review.genre !== filterGenre);
    setReviews(allReview);
  }
  if(loading){
    return <div className="flex justify-center items-center h-screen">
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
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">What Gamers Are Saying</h1>
        <p className="font-semibold text-sm text-center">
          Dive into the thoughts and opinions of fellow gamers. These reviews
          reflect real experiences, helping you make the best gaming decisions.
        </p>
      </div>
      <div className="flex justify-end">
      <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 bg-rose-800 text-white">
           Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li >
            <a className="text-xs" onClick={handleFilterAll} > All</a>
            </li>
            <li >
            <a className="text-xs" onClick={handleFilter} >Action</a>
            </li>
            <li >
            <a className="text-xs" onClick={handleFilter} >RPG</a>
            </li>
            <li >
            <a className="text-xs" onClick={handleFilter} >Adventure</a>
            </li>
            <li >
            <a className="text-xs" onClick={handleFilter} >Simulation</a>
            </li>
            <li >
            <a className="text-xs" onClick={handleFilter} >Strategy</a>
            </li>
       
            <li >
            <a className="text-xs" onClick={handleFilter} >Sports</a>
            </li>
            <li >
            <a className="text-xs" onClick={handleFilter} >Racing</a>
            </li>
       
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 bg-rose-800 text-white">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li >
            <a className="text-xs" onClick={sortbyYear}> published year</a>
            </li>
            <li>
              <a className="text-xs" onClick={sortbyRating}>Rating</a>
            </li>
          </ul>
        </div>
    
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        {reviews?.map((review) => (
          <AllReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
