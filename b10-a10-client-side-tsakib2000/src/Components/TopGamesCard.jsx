import { MdOutlineExplore } from "react-icons/md";


const TopGamesCard = ({ game }) => {
  const {
    title,
    rating,
    genre,
    release_date,
    platforms,
    image_url,
    description,
  } = game;

  return (
    <div>
      <div className="card bg-base-100 image-full h-96  shadow-xl hover:scale-105 duration-200">
        <figure>
          <img className="" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body font-bold *:text-white">
          <h2 className=" text-2xl font-black">{title}</h2>
          <p>{genre}</p>
          <p >
         {platforms.map((platform,idx)=><span key={idx}>{platform},</span>)}
          </p>
          <p>Release date: {release_date}</p>

          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-rose-800 border-none text-white font-bold">
              <MdOutlineExplore /> Explore Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGamesCard;
