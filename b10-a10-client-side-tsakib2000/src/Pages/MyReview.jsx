import React, {  useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyReviewTable from "../Components/MyReviewTable";


const MyReview = () => {

  const loadedReview = useLoaderData();
  const [myReview, setMyReview] = useState(loadedReview);
  return (
    <div className="m-4">
      <div>
        <h1 className="text-4xl text-center my-5">My Review Hub</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Game</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
        
          {
 
  myReview.map(review=> <MyReviewTable key={review._id} myReview={myReview} review={review}setMyReview={setMyReview}/>)
          }
         
      
          </tbody>
        </table>
      </div>




    </div>
  );
};

export default MyReview;
