import { useEffect, useState } from "react";
import Products from "../Products/Products";

const AllComponents = ({handleSelctedProduct}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="w-2/3 grid md:grid-cols-2 gap-5">
           {
            products.map(product=> <Products 
                key={product.id} 
                product={product}
                handleSelctedProduct={handleSelctedProduct}
            ></Products> )
           }
        </div>
    );
};

export default AllComponents;