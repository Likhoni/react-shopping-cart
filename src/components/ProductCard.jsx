import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../utils/formatPrice.js';

function ProductCard({ product }) {
  const { items, addToCart } = useCart();
  const inCart = items.find((item) => item.id === product.id);

  return (
    <article className="card">
      <div className="card__image">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="card__body">
        <span className="card__category">{product.category}</span>
        <h3 className="card__title">{product.title}</h3>
        <p className="card__price">{formatPrice(product.price)}</p>
        <button
          className="btn btn--primary"
          type="button"
          onClick={() => addToCart(product)}
        >
          {inCart ? `Add another (${inCart.quantity} in cart)` : 'Add to cart'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
