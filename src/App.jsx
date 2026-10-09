import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Cart from './components/Cart.jsx';
import useProducts from './hooks/useProducts.js';

function App() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  // Unique category list derived from the loaded products
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  // Apply the category filter and the search text together
  const visibleProducts = products.filter((p) => {
    const matchesCategory = category === 'all' || p.category === category;
    const matchesSearch = p.title.toLowerCase().includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} />
      <main className="container">
        <CategoryFilter
          categories={categories}
          active={category}
          onChange={setCategory}
        />
        <ProductGrid
          products={visibleProducts}
          loading={loading}
          error={error}
        />
      </main>
      <Cart />
    </>
  );
}

export default App;
