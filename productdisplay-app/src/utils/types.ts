export interface ProductImage {
    src: string;
    width: number;
    height: number;
}

export interface ProductItemProps {
    collection: {
        collection_id: number;
        title: string;
        handle: string;
        default_product_image: ProductImage;
    };
}

export interface Collection {
    collection_id: number;
    updated_at: string;
    body_html: string;
    default_product_image: {
        id: number;
        created_at: string;
        position: number;
        updated_at: string;
        product_id: number;
        src: string;
        variant_ids: unknown[];
        width: number;
        height: number;
    };
    handle: string;
    image: null | string;
    title: string;
    sort_order: string;
    published_at: string;
}

export interface ProductsProps {
    collections: Collection[];
}

export interface FilterComponentProps {
    collections: Collection[];
    onSelect: (collectionId: number) => void;
}

export interface ProductDetailsProps {
    collectionId: number;
}
