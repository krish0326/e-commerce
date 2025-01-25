import Cart from "../components/Cart"
import Categorymenu from "../components/Categorymenu"
import Fooditems from "../components/Fooditems"
import Navbar from "../components/Navbar"

 
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Categorymenu/>
    <Fooditems/>
    <Cart/>
    </div>
  )
}

export default Home