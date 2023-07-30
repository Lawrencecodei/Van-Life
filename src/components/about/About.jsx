import './about.css';
import image54 from '../../assets/image54.png'
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';




const About = () => {
    return (
      <>
     <div className="about">
     <div className= "about__image-bg">
    <img src={image54} alt=""/>
   
     </div>
     <div className="about__text">
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1> {" "}
     <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉) <br />
<br />
Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
     </div>
     <div className="about__text-box">
      <h4>Your destination is waiting. <br />
        Your van is ready.</h4>
        <div className="about__btn">
        <Link to="/">
        <p>Explore our vans</p>
        </Link>
        </div>
     </div>
     
     </div>
     <div>
      <Footer  />
      </div>
     </>
    )
  }

  export default About;