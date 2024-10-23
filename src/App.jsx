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

  const [price, setPrice] = useState(500)
  const handleIncreasePrice= (pr) =>{
    setPrice(price+pr)
  }
  const handleDecreasePrice= (id) =>{
    const product = selectedProduct.find((product)=> product.id=== id)
    setPrice(price-product.price)
  }

  const [selectedProduct, setSelectedProduct] = useState([])
  const handleSelctedProduct = (product) => {
    handleIncreasePrice(product.price)
    const isExits= selectedProduct.find(p=>p.id === product.id)
    if(!isExits){
      const newProduct = [...selectedProduct, product]
      setSelectedProduct(newProduct)
    }
    else{
      alert("Already Product added")
    }
  }

  const handleDeleteProduct = (id) => {
    handleDecreasePrice(id)
    const newProducts = selectedProduct.filter(p=> p.id !== id)
    setSelectedProduct(newProducts)
    
  }

  return (
    <>
     <div>
      {/* nav section  */}
      <Navbar 
      selectedProduct={selectedProduct}
      price={price}
      ></Navbar>
      {/* products */}
      <section className="flex justify-around gap-5 mt-10 container mx-auto px-6">
        <AllComponents handleSelctedProduct={handleSelctedProduct}
        ></AllComponents>
        <CartContainer 
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
        selectedProduct={selectedProduct}
        handleDeleteProduct={handleDeleteProduct}
        ></CartContainer>
      </section>
     </div>
    </>
  )
}

export default App
