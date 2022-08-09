import { Link } from 'react-router-dom'
import './productCardStyle.css'

export const ProductCard = ({id, title, price, image, description}) => {
    return(
        <div>
            <section className="productInfo">
                <Link to ={`/product/${id}`}>
                    {title}
                </Link>
            </section>
            <img className="productImage" src={image} alt="Imagen de producto" />
            {description&&<p>{description}</p>}
            <p>Price: {price}</p>
        </div>
        
    )
}