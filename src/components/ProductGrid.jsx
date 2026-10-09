import ProductCard from './ProductCard.jsx';

function ProductGrid({ products, loading, error }) {
  if (loading) {
    return <p className="status" role="status">Loading products…</p>;
  }

  return (
    <section aria-label="Products">
      {error && <p className="notice">{error}</p>}

      {products.length === 0 ? (
        <p className="status">No products match your search.</p>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
