/* eslint-disable react/prop-types */
import About from "../About/About";
import Cart from "../Cart/Cart";

const CartContainer = ({ handleIsActiveState, isActive, selectedProduct, handleDeleteProduct }) => {
    return (
        <div className="w-1/3">
            <h1 className="text-3xl font-bold">Cart Container</h1>
            <div className="flex justify-around mt-5">
                <div onClick={() => handleIsActiveState("cart")}
                    className={`${isActive.cart ? "btn bg-green-500" : "btn"}`}>
                    <button>Cart</button>
                </div>
                <div onClick={() => handleIsActiveState("about")}
                    className={`${isActive.cart ? "btn" : "btn bg-green-500"}`}>
                    <button>Cart</button>
                </div>
            </div>

            <section>
                {
                    isActive.cart?<Cart
                    selectedProduct={selectedProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    ></Cart>:<About></About>
                }
                
                
            </section>
        </div>
    );
};

export default CartContainer;