import { useEffect, useState } from "react";
import TopGamesCard from "./TopGamesCard";
import toast from "react-hot-toast";

const TopRatedGames = () => {
  const [topGames, setTopGames] = useState([]);
  useEffect(() => {
    fetch("https://chill-gamer-server-sage.vercel.app/games")
      .then((res) => res.json())
      .then((data) => setTopGames(data))
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);
  return (
    <div className="my-4">
      <h1 className="text-center text-3xl font-bold mb-4">Top Rated Games</h1>
      <p className="text-center text-sm font-bold mb-4">
        Discover the highest-rated titles that have captivated gamers worldwide.
        From epic adventures to thrilling shooters, these games set the gold
        standard in storytelling, gameplay, and innovation.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topGames.map((game) => (
          <TopGamesCard key={game._id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedGames;
