
import Directory from '../../components/Directory/Directory.component'

import './Home.styles.scss'
const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "children",
      "imageUrl": "https://www.news-medical.net/image.axd?picture=2016%2F3%2FChildren_playing_sunset_-_Zurijeta_8c5bdac77e44431bb1bfec67b9c87208-620x480.jpg",
      "size":'large'
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      "size":'large'

    }
  ];
  

  return (
    <div className="home-container"> 
      <Directory Categories={categories}/>
    </div>
  );
};

export default Home;