import { FilterComponentProps } from "../utils/types";

const CollectionFilter: React.FC<FilterComponentProps> = ({ collections, onSelect }) => {
    return (
        <div className="flex flex-wrap" style={{ backgroundColor: "lightgray" }}>
            {collections.map((collection) => (
                <button
                    key={collection.collection_id}
                    onClick={() => onSelect(collection.collection_id)}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg m-2"
                >
                    {collection.title}
                </button>
            ))}
        </div>
    );
};

export default CollectionFilter;
