/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const Cart = ({ selectedProduct,handleDeleteProduct }) => {
    return (
        <div>
            {
                selectedProduct.map(p => (
                    <div className=" space-y-10 flex justify-between items-center gap-2">
                        <img className="w-10" src={p.image} alt="" />
                        <p className="font-bold">{p.name}</p>
                        <button 
                        className="btn bg-green-300"
                        onClick={()=>handleDeleteProduct(p.id)}
                        >Delete</button>
                    </div>

                ))
            }
        </div>
    );
};

export default Cart;