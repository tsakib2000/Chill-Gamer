
const BehindTheController = () => {
  return (
    <div id="Expert_opinion" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Behind the Controller</h2>
        <p className="text-gray-400 text-lg">
          Explore the stories of creators, gamers, and influencers shaping the
          gaming world.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        <div className="border border-rose-50  p-6 rounded-lg shadow-lg hover:scale-105 duration-200">
          <img
            src="https://i.ibb.co.com/CMpJBNj/Person-Portrait-Hidetaka-Miyazaki.jpg"
            alt="Developer"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-center">
            Hidetaka Miyazaki
          </h3>
          <p className="text-sm text-center text-gray-400 mb-4">
            Game Director - Elden Ring
          </p>
          <p className="text-sm ">
            Discover how this legendary director transformed the gaming world
            with his iconic storytelling.
          </p>
        </div>

        <div className="border border-rose-50  p-6 rounded-lg shadow-lg hover:scale-105 duration-200">
          <img
            src="https://i.ibb.co.com/rGL0bPz/Krystalogy-Jess-Ninja-and-Typical-Gamer-relaxing-in-the-State-Farm-Gamerhood-52899874282-cropped-3.jpg"
            alt="Streamer"
            className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Ninja</h3>
          <p className="text-sm text-center text-gray-400 mb-4">
            Professional Streamer
          </p>
          <p className="text-sm ">
            Learn how Ninja built a career in streaming and became one of the
            most recognizable faces in gaming.
          </p>
        </div>

        <div className="border border-rose-50  p-6 rounded-lg shadow-lg hover:scale-105 duration-200">
          <img
            src="https://i.ibb.co.com/bmZ8Pn1/images.jpg"
            alt="Indie Dev"
            className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Eric Barone</h3>
          <p className="text-sm text-center text-gray-400 mb-4">
            Creator of Stardew Valley
          </p>
          <p className="text-sm ">
            Read about how one indie developer created a game that captured
            millions of hearts.
          </p>
        </div>
      </div>

      <div className="mt-12 py-8 px-6 rounded-lg shadow-lg">
        <h3 className="text-2xl italic font-semibold text-center">
          "Gaming is the one medium where the player becomes the storyteller." –
          Hideo Kojima
        </h3>
      </div>

      <div className="mt-12 bg-rose-800 py-6 px-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-center mb-4">
          Did You Know?
        </h3>
        <p className="text-center text-white">
          The concept art for Elden Ring took over 3 years to develop!
        </p>
      </div>
    </div>
  );
};

export default BehindTheController;
