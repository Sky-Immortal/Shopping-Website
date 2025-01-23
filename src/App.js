import './styles.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Brands from './Components/Reusables/brands/brands';
import Footer from './Components/Reusables/footer/footer';
import NewArrivals from './Components/New Arrivals/NewArrivals';
import Discounts from './Components/Discounts/Discounts';
import YoungsFavourite from './Components/YoungsFavourite/YoungsFavourite';
import Download from './Components/Download/Download';
import Community from './Components/Community/Community';

function App() {
  return (
    <div>
      <Navbar /> 
      <Home />
      <Brands />
      <NewArrivals />
      <Discounts />
      <YoungsFavourite />
      <Download />
      <Community />
      <Footer /> 
    </div>
  );
}

export default App;
