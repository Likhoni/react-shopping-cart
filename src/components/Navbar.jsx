import { useCart } from '../context/CartContext.jsx';

function Navbar({ search, onSearchChange }) {
  const { totalItems, openCart } = useCart();

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a className="navbar__brand" href="/">
          Shop<span>Cart</span>
        </a>

        <input
          className="navbar__search"
          type="search"
          placeholder="Search products"
          aria-label="Search products"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <button
          className="navbar__cart"
          type="button"
          onClick={openCart}
          aria-label={`Open cart, ${totalItems} items`}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM1 2v2h2l3.6 7.6-1.3 2.4A2 2 0 0 0 7 17h12v-2H7.4l1.1-2h7.5a2 2 0 0 0 1.7-1l3.6-6.5A1 1 0 0 0 20.4 4H5.2l-.9-2H1Z"
            />
          </svg>
          <span className="navbar__badge">{totalItems}</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
