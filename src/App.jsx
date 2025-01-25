import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Protextedroute from "./components/Protextedroute";


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Protextedroute element={<Success />} />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      
    </BrowserRouter>

     
  )
}

export default App