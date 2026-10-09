import { useEffect, useState } from 'react';
import localProducts from '../data/products.js';

const API_URL = 'https://fakestoreapi.com/products';

// Loads products from the remote API and falls back to local mock data on failure.
function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('Request failed');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setProducts(localProducts);
        setError('Live catalog unavailable. Showing sample products.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return { products, loading, error };
}

export default useProducts;
