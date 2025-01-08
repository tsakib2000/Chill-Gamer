
import Slider from '../Components/Slider';
import TopRatedGames from '../Components/TopRatedGames';

import HomeTitle from '../Components/HomeTitle';
import BehindTheController from '../Components/BehindTheController';
import ErasOfGames from '../Components/ErasOfGames';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    // const {name}=useContext(AuthContext)
    return (
        <div>
          <HomeTitle/>
        <div className='w-full'>
        <Slider/>
        </div>
        <TopRatedGames/>

        <BehindTheController/>
        <ErasOfGames/>
       
       <NewsLetter/>
       
        </div>
    );
};

export default Home;