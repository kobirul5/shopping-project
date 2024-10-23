
const Navbar = ({selectedProduct}) => {
    return (
        <div>
            
            <div className="navbar justify-between bg-lime-100">
                <div className="">
                    <a className="btn btn-ghost text-xl">Bd-Shopping</a>
                </div>
                <div className="flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Products</a></li>
                        <li><a>Cart:- {selectedProduct.length}</a></li>
                        <li><a>500 $</a></li>

                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;