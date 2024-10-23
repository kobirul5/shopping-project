
const Cart = ({ selectedProduct }) => {
    return (
        <div>
            {
                selectedProduct.map(p => (
                    <div>
                        <img  src={p.image} alt="" />
                    </div>

                ))
            }
        </div>
    );
};

export default Cart;