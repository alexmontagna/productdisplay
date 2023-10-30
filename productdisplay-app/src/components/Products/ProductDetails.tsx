import { useEffect, useState } from 'react';
import { ProductDetailsProps } from '../../utils/types';

const ProductDetails: React.FC<ProductDetailsProps> = ({ collectionId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${collectionId}/products.json`)
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error fetching products:', error));
    }, [collectionId]);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    {/* Render your product details here */}
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductDetails;
