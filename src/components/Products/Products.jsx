
const Products = ({product, handleSelctedProduct}) => {
    const {id, name, price, image, category, description, stock,rating} = product
    return (
        <div>
             <div className="card border mb-5">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="divider"></div>
                    <p className="font-bold">${price}</p>
                    <div className="card-actions">
                        <button 
                        className="btn bg-green-500"
                        onClick={()=>handleSelctedProduct(product)}
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;