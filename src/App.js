import Header from "./component/header";
import Ara from "./component/ara";
import {BrowserRouter, Routes,Route} from "react-router-dom"



  const App = () =>{ 

  return (
  <BrowserRouter>
    <div className="container">
   <Header />
   <Ara/>
    </div>

    </BrowserRouter>
   
    
  )
}
export default App;
