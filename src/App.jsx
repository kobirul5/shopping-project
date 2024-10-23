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

  const [selectedProduct, setSelectedProduct] = useState([])
  const handleSelctedProduct = (product) => {
    const isExits= selectedProduct.find(p=>p.id === product.id)
    if(!isExits){
      const newProduct = [...selectedProduct, product]
      setSelectedProduct(newProduct)
    }
    else{
      alert("Already Product added")
    }
  }
console.log(selectedProduct)

  return (
    <>
     <div>
      {/* nav section  */}
      <Navbar selectedProduct={selectedProduct}
      ></Navbar>
      {/* products */}
      <section className="flex justify-around gap-5 mt-10 container mx-auto px-6">
        <AllComponents handleSelctedProduct={handleSelctedProduct}
        ></AllComponents>
        <CartContainer 
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
        selectedProduct={selectedProduct}
        ></CartContainer>
      </section>
     </div>
    </>
  )
}

export default App
