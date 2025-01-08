import React from "react";

const ErasOfGames = () => {
  return (
    <div   id="eras_OfGaming" className="py-16  ">
      <div className="text-center" >
        <h2 className="text-4xl font-bold mb-4">Gaming Through the Ages</h2>

        <p className="text-gray-400 text-lg">
          Explore how gaming has evolved, one milestone at a time.
        </p>
      </div>

      <div className="grid gap-8 px-6">
        <div className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg">
          <img
            src="https://i.ibb.co.com/DrRfT8N/adca5a92-9d99-4620-8ce6-e66552cf7df0-Arcade1-Up-cabinet.webp"
            alt="1970s–1980s"
            className="w-32 h-32 md:w-48 md:h-48 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold">1970s–1980s</h3>
            <p className="text-gray-400 mt-2">
              The rise of arcade gaming with timeless classics like Pac-Man and
              Space Invaders. Consoles like Atari revolutionized home gaming.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-lg">
          <img
            src="https://i.ibb.co.com/BGn5vFY/images-1.jpg"
            alt="1990s"
            className="w-32 h-32 md:w-48 md:h-48 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold">1990s</h3>
            <p className="text-gray-400 mt-2">
              The golden age of gaming consoles like Super Nintendo and Sega
              Genesis. This era introduced iconic franchises like Mario and
              Sonic.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-lg">
          <img
            src="https://i.ibb.co.com/7rJJdQX/c5321fc77757872291682e97c87c79e2.jpg"
            alt="2000s"
            className="w-32  h-32 object-cover md:w-48 md:h-48 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold">2000s</h3>
            <p className="text-gray-400 mt-2">
              Online multiplayer and immersive 3D worlds took center stage.
              Titles like Halo and World of Warcraft defined this decade.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-lg">
          <img
            src="https://i.ibb.co.com/J5ztghX/sddefault.jpg"
            alt="2010s–2020s"
            className="w-32 h-32 md:w-48 md:h-48 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold">2010s–2020s</h3>
            <p className="text-gray-400 mt-2">
              Cutting-edge graphics, virtual reality, and eSports dominate
              modern gaming. Franchises like Fortnite and The Witcher 3 set new
              standards.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-rose-800 py-6 px-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-center mb-4">
          Did You Know?
        </h3>
        <p className="text-center text-white">
          The first video game, "Tennis for Two," was created in 1958!
        </p>
      </div>
    </div>
  );
};

export default ErasOfGames;
