import { useState } from 'react';
import ProductListItem from './ProductListItem';
import ProductDetails from './ProductDetails';
import { ProductsProps } from '../../utils/types';

const ProductList: React.FC<ProductsProps> = ({ collections }) => {
    const [selectedCollection, setSelectedCollection] = useState<number | null>(null);
    console.log("Current selectedCollection x: ", selectedCollection);

    return (
        <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {collections.map((collection) => (
                    <li key={collection.collection_id} onClick={() => setSelectedCollection(collection.collection_id)}>
                        <ProductListItem collection={collection} />
                    </li>
                ))}
            </ul>
            {selectedCollection && <ProductDetails collectionId={selectedCollection} />}
        </div>
    );
};

export default ProductList;
