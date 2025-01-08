import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { MdAddToQueue } from "react-icons/md";
import toast from "react-hot-toast";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedDetails = useLoaderData();

  const {
    name,
    email,
    photo,
    title,
    description,
    rating,
    publishing_Year,
    genre,
  } = loadedDetails;
  const handleAddToWatch = () => {
    if(!user)return toast.error('Please Login First')
    const watchList = {
      name:user.displayName,
      email:user.email,
      photo,
      title,
      description,
      rating,
      publishing_Year,
      genre,
    };
    fetch("https://chill-gamer-server-sage.vercel.app/watchList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added to watch list",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="flex flex-col gap-4 border border-rose-400 bg-rose-50 p-4 m-4 rounded-lg">
      <div className="w-full h-[300px] ">
        <img className="w-full h-full rounded-lg" src={photo} alt="" />
      </div>
      <div>
        <h1 className="text-center text-5xl font-bold">{title}</h1>
        <h3 className=" font-bold">Reviewer: {name}</h3>
        <p>Email: {email}</p>
        <p>Rating: {rating}</p>
        <p>Publishing Year: {publishing_Year}</p>
        <p>Genre: {genre}</p>
        <p>
          Review Description : <span className="text-sm"> {description}</span>
        </p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleAddToWatch}
          className="btn bg-rose-800 text-white"
        >
          <MdAddToQueue />
          Add to watch list
        </button>
      </div>
    </div>
  );
};

export default ReviewDetails;
