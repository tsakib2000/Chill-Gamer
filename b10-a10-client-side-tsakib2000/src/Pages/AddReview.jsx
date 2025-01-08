import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
    const{user}=useContext(AuthContext);
   
  const handleAddReview = (e) => {
      e.preventDefault();
   
    const form = e.target;
    const photo=form.photo.value;
    const title=form.title.value;
    const description=form.description.value;
    const rating = form.rating.value;
    const publishing_Year=form.published.value;
const genre=form.genre.value;
const email=form.email.value;
const name=form.name.value;
const review={name,email,photo,title,description,rating,publishing_Year,genre};
   
    fetch('https://chill-gamer-server-sage.vercel.app/reviews',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your review added successfully",
                showConfirmButton: false,
                timer: 1500
              });
        };
    })
  };
  return (
    <div className=" my-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">Share Your Thoughts</h1>
        <p className="font-semibold text-sm text-center">
          our opinion matters! Use this page to share your thoughts on the games
          you’ve played. Whether you loved it, hated it, or anything in between,
          your review can guide other gamers in their journey. Just provide a
          title, your rating, and a detailed description to let the community
          know what you think!
        </p>
      </div>

      <div className="flex justify-center items-center mt-4 rounded-xl border">
        <div className="card bg-base-100 w-full  shrink-0 ">
          <form className="card-body" onSubmit={handleAddReview}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Cover Photo</span>
              </label>
              <input
                name="photo"
                type="text "
                placeholder="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <div className="rating" >
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  defaultChecked
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  
                  className="mask mask-star-2 bg-yellow-400"
                />
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Publishing Year</span>
              </label>
              <input
              name="published"
                type="number"
                placeholder="Year"
                className="input input-bordered w-full max-w-xs"
                min="1958"
                max="2100"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Genres</span>
              </label>
              <select name="genre"  className="select select-bordered w-full max-w-xs" required>
           
                <option>Action</option>
                <option>RPG</option>
                <option>Adventure</option>
                <option>Simulation</option>
                <option>Strategy</option>
                <option>Sports</option>
                <option>Racing</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={user?.email}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
            <div className="form-control mt-6 space-y-4">
              <button className="btn ">Add Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
