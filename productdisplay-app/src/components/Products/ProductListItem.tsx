import { ProductItemProps } from "../../utils/types";

const ProductListItem: React.FC<ProductItemProps> = ({ collection }) => {
    const { title, default_product_image } = collection;

    try {
        console.log(collection.handle, collection.collection_id)
    } catch {
        console.error('error')
    }

    return (
        <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            {default_product_image && (
                <img className="w-full h-auto" src={default_product_image.src} alt={title} />
            )}
        </div>
    );
};

export default ProductListItem;
