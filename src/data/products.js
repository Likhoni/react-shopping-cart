// Local mock catalog. Used as a fallback when the remote API is unreachable.
const img = (seed) => `https://picsum.photos/seed/${seed}/400/400`;

const products = [
  { id: 1, title: 'Wireless Noise-Cancelling Headphones', category: 'electronics', price: 129.99, image: img('headphones') },
  { id: 2, title: 'Mechanical Gaming Keyboard', category: 'electronics', price: 74.5, image: img('keyboard') },
  { id: 3, title: 'Portable Bluetooth Speaker', category: 'electronics', price: 39.99, image: img('speaker') },
  { id: 4, title: '27-inch 4K Monitor', category: 'electronics', price: 319.0, image: img('monitor') },
  { id: 5, title: 'Classic Cotton T-Shirt', category: "men's clothing", price: 14.99, image: img('tshirt') },
  { id: 6, title: 'Slim Fit Denim Jacket', category: "men's clothing", price: 59.9, image: img('jacket') },
  { id: 7, title: 'Everyday Running Sneakers', category: "men's clothing", price: 64.0, image: img('sneakers') },
  { id: 8, title: 'Floral Summer Dress', category: "women's clothing", price: 42.5, image: img('dress') },
  { id: 9, title: 'Lightweight Rain Coat', category: "women's clothing", price: 55.0, image: img('raincoat') },
  { id: 10, title: 'Knitted Winter Scarf', category: "women's clothing", price: 18.75, image: img('scarf') },
  { id: 11, title: 'Sterling Silver Pendant Necklace', category: 'jewelery', price: 88.0, image: img('necklace') },
  { id: 12, title: 'Gold Plated Hoop Earrings', category: 'jewelery', price: 36.4, image: img('earrings') },
];

export default products;
