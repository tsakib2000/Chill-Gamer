import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = () => {
    return (
<div className="container flex flex-wrap justify-between items-center mx-auto bg-white rounded-md dark:bg-slate-500">
    <div className="text-center border-dashed border-2 border-slate-200 dark:border-slate-100 rounded-md w-full p-20">
      <i className='bx bxs-contact bx-lg mb-5 dark:text-white'></i>
      <p className="text-xl mb-2 uppercase font-bold dark:text-white">No Games in Watch List</p>
      <spam className="text-m text-slate-400 block mb-10 dark:text-slate-50">Get started by Adding a new Game</spam>
      <Link to='/allReviews' className="btn bg-rose-400 rounded-full px-5 py-3 text-white hover:bg-blue-500 w-52">Add to WatchLis</Link>
      </div>
  </div> 
    );
};

export default EmptyState;