import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const AllReviewCard = ({review}) => {
const{_id,name,photo,title, rating,publishing_Year}=review;
    return (
<div className="card bg-base-100 h-96 shadow-xl hover:scale-105 duration-200">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-start">
    <h2 className="card-title">{title}</h2>
    <p>Reviewer Name :{name}</p>
    <p>Rating :{rating}</p>
    <p>Published on :{publishing_Year}</p>
    <div className="card-actions">
      <Link to={`/reviewDetails/${_id}`} className="btn bg-rose-800 text-white font-bold"><TbListDetails /> Details</Link>
    </div>
  </div>
</div>
    );
};

export default AllReviewCard;