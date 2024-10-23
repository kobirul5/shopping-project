import { useState } from "react"
import AllComponents from "./components/AllComponentes/AllComponents"
import CartContainer from "./components/CartContainer/CartContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  const [isActive, setIsActive] = useState({cart: true, status: "cart"})
  const handleIsActiveState = (status) =>{
    if(status==="cart"){
      setIsActive({
        cart:true,
        status:"cart"
      })
    }
    else{
      setIsActive({
        isActive:false,
        status:"about"
      })
    }
  }

  return (
    <>
     <div>
      {/* nav section  */}
      <Navbar></Navbar>
      {/* products */}
      <section className="flex justify-around">
        <AllComponents></AllComponents>
        <CartContainer 
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
        ></CartContainer>
      </section>
     </div>
    </>
  )
}

export default App
