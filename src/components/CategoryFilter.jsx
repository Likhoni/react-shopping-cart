function CategoryFilter({ categories, active, onChange }) {
  return (
    <nav className="filters" aria-label="Product categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`filters__chip ${active === category ? 'is-active' : ''}`}
          aria-pressed={active === category}
          onClick={() => onChange(category)}
        >
          {category === 'all' ? 'All products' : category}
        </button>
      ))}
    </nav>
  );
}

export default CategoryFilter;
