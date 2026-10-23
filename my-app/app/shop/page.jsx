import Link from 'next/link'

export default function Shop() {
  const products = [
    {
      id: 'green-smoothie-kit',
      name: 'Green Smoothie Kit',
      price: 29.99,
      image: '/images/product-1.jpg',
      inStock: true,
      rating: 4.6, 
      reviews: 128 
    },
    {
      id: 'quinoa-bowl-mix',
      name: 'Quinoa Bowl Mix',
      price: 24.99,
      image: '/images/product-2.jpg',
      inStock: true,
      rating: 4.2, 
      reviews: 64
    },
    {
      id: 'protein-power-pack',
      name: 'Protein Power Pack',
      price: 34.99,
      image: '/images/product-3.jpg',
      inStock: true,
      rating: 4.8, 
      reviews: 210
    },
    {
      id: 'mediterranean-essentials',
      name: 'Mediterranean Essentials',
      price: 39.99,
      image: '/images/product-4.jpg',
      inStock: true,
      rating: 4.1, 
      reviews: 35
    }
  ]

  return (
    <main>
      <section className="section">

       
      <div className="promo-bar">
        <span>🛒 Use code <b>SAVE10</b> for 10% off your first order!</span>
      </div>

        <h1 className="section-title">Shop Healthy Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <span className={`product-status ${product.inStock ? 'in-stock' : 'sold-out'}`}>
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                  </span>
                  <div className="rating">
                    <span className="rating-stars">
                      {"★".repeat(Math.round(product.rating))}
                      {"☆".repeat(5 - Math.round(product.rating))}
                    </span>
                    <span className="rating-text">
                      {product.rating.toFixed(1)} ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
