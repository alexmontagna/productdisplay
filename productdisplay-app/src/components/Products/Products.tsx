import { useState } from 'react';
import CollectionFilter from '../CollectionFilter';
import ProductList from './ProductList';
import { ProductsProps } from './../../utils/types'

const Products: React.FC<ProductsProps> = ({ collections }) => {
    const [selectedCollection, setSelectedCollection] = useState<number | null>(null);
    console.log("Current selectedCollection: ", selectedCollection);

    const handleSelectCollection = (collectionId: number) => {
        setSelectedCollection(collectionId);
    };

    return (
        <div className="container mx-auto px-4">
            <CollectionFilter collections={collections} onSelect={handleSelectCollection} />
            <ProductList collections={collections} />
        </div>
    );
};

export default Products;
