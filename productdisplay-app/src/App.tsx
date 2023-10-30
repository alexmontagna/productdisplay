import { useEffect, useState } from 'react';
import Products from './components/Products/Products';

export default function App() {
  const [collectionListings, setCollectionListings] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json'
        );
        const { collection_listings } = await response.json();
        setCollectionListings(collection_listings);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-0 px-0">
      <header className="bg-slate-400 w-full">
        <h1 className="text-4xl font-semibold mb-4 p-4">Retrievables</h1>
      </header>
      <Products collections={collectionListings} />
    </div>
  );
}
