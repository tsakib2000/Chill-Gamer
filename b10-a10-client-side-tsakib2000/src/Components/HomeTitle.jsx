import { Typewriter } from "react-simple-typewriter";

const HomeTitle = () => {
  return (
    <div className=" flex justify-center items-center my-5">
      <h1
        className="text-5xl font-bold text-center "
      >
        <Typewriter
          words={["Elite Game Review", "Player Perspective", "The Review Saga"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
    </div>
  );
};

export default HomeTitle;
