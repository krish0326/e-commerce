import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
const Protextedroute = ({element}) => {
    const carditmes = useSelector((state) => state.cart.Cart);
  return carditmes.length > 0 ? element : <Navigate to="/" />
    
 
}

export default Protextedroute