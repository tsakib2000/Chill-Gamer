import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const loadedReview = useLoaderData();
  const {
    _id,
    name,
    email,
    photo,
    title,
    description,

    publishing_Year,
    genre,
  } = loadedReview;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const publishing_Year = form.published.value;
    const genre = form.genre.value;
    const review = {
      name,
      email,
      photo,
      title,
      description,
      rating,
      publishing_Year,
      genre,
    };
    fetch(`https://chill-gamer-server-sage.vercel.app/updateReview/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if(data.modifiedCount > 0){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your review has updated",
                showConfirmButton: false,
                timer: 2000
              });
        };
      });
  };
  return (
    <>
      <h3 className="font-bold text-2xl text-center">Update Your Review</h3>

      <div className="card bg-base-100 w-full  shrink-0 bg-rose-50 border border-rose-200 m-6">
        <form className="card-body" onSubmit={handleUpdate}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Cover Photo</span>
            </label>
            <input
              defaultValue={photo}
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
              defaultValue={title}
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
            <textarea
              defaultValue={description}
              name="description"
              type="text"
              placeholder="description"
              className="input input-bordered text-xs h-28"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div className="rating">
              <input
                type="radio"
                name="rating"
                value="1"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                defaultChecked
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
              defaultValue={publishing_Year}
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
            <select
              defaultValue={genre}
              name="genre"
              className="select select-bordered w-full max-w-xs"
              required
            >
              <option>Action</option>
              <option>RPG</option>
              <option>Adventure</option>
              <option>Simulation</option>
              <option>Strategy</option>
              <option>Sports</option>
            </select>
          </div>
          <div className="badge rounded-lg bg-rose-100  border-rose-300 p-4">
            Name: {user?.displayName}
          </div>
          <div className="badge rounded-lg bg-rose-100  border-rose-300 p-4">
            Email: {user?.email}
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="btn bg-rose-700 text-white">Add Review</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateReview;
