import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EmptyState from "../Components/EmptyState";
import WatchListTable from "../Components/WatchListTable";

const WatchList = () => {
  const loadedWatchList = useLoaderData();
  const [watchList, setWatchList] = useState(loadedWatchList);
  return (
    <>
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-3xl font-bold text-center">Your Ultimate Gaming Wishlist</h1>
        <p className="text-sm text-center">
          Keep track of your dream games, from epic RPGs to thrilling
          adventures, all in one place.
        </p>
      </div>
      <div>
        {watchList.length <= 0 ? (
          <EmptyState />
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Game Name</th>
                  <th>Description</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {watchList?.map((watch) => (
                  <WatchListTable key={watch._id} watch={watch} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default WatchList;
