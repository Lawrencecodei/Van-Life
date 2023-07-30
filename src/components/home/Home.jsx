import Footer from '../footer/Footer';
import './home.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
      <>
   <div className="home">
    <div className="intro">
<div className="home__text">
  <h1>You got the travel plans, we got the travel vans.</h1>
  <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
  <div className="home__btn">
<Link to="/">
<p>Find your van</p>
</Link>
</div>
</div>

    </div>
     
    </div>
    <div>
      <Footer />
    </div>
    </>
    )
  }

  export default Home;