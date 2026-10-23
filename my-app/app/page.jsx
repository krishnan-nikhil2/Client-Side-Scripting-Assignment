'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * Home Page Component
 * This is the main landing page for the HealthyEats website
 * Features: Hero section, quote slider, auto image slider, gallery, products, newsletter
 */

export default function Home() {
  // State Management
  // currentQuote: Tracks which quote is displayed (0-3)
  const [currentQuote, setCurrentQuote] = useState(0)

  // currentImage: Tracks which image is shown in the auto-slider (0-2)
  const [currentImage, setCurrentImage] = useState(0)

  // email: Stores the user's email input for newsletter subscription
  const [email, setEmail] = useState('')

  // Array of inspirational quotes about healthy eating
  const quotes = [
    "Let food be thy medicine and medicine be thy food. - Hippocrates",
    "Take care of your body. It's the only place you have to live. - Jim Rohn",
    "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison. - Ann Wigmore",
    "Your diet is a bank account. Good food choices are good investments. - Bethenny Frankel"
  ]

  // Array of image paths for the automatic slider
  const healthyImages = [
    '/images/healthy-food-1.jpg',
    '/images/healthy-food-2.jpg',
    '/images/healthy-food-3.jpg'
  ]

  // Product data with details for each item
  const products = [
    {
      id: 'green-smoothie-kit',
      name: 'Green Smoothie Kit',
      price: 29.99,
      image: '/images/product-1.jpg',
      inStock: true
    },
    {
      id: 'quinoa-bowl-mix',
      name: 'Quinoa Bowl Mix',
      price: 24.99,
      image: '/images/product-2.jpg',
      inStock: true
    },
    {
      id: 'protein-power-pack',
      name: 'Protein Power Pack',
      price: 34.99,
      image: '/images/product-3.jpg',
      inStock: false
    },
    {
      id: 'mediterranean-essentials',
      name: 'Mediterranean Essentials',
      price: 39.99,
      image: '/images/product-4.jpg',
      inStock: true
    }
  ]

  const services = [
    {
      title: 'Payment Facilities',
      desc: 'Pay online or choose cash on delivery for convenience.',
      icon: '💳',
    },
    {
      title: 'Fast Delivery',
      desc: 'Quick delivery options so you get healthy food on time.',
      icon: '🚚',
    },
    {
      title: 'Fresh & High Quality',
      desc: 'Carefully sourced ingredients with quality checks.',
      icon: '✅',
    },
    {
    title: 'Eco-Friendly Packaging',
    desc: "All meals arrive in 100% biodegradable or recyclable containers to protect the planet.",
    icon: '🌱',
    },
    {
      title: 'All Day Service',
      desc: 'Support is available to assist you throughout the day.',
      icon: '📞',
    },
    {
      title: 'Various Products',
      desc: 'A variety of healthy products to match your lifestyle.',
      icon: '🛒',
    },
  ]

  const REVIEWS = [
    {
      name: "Alyssa T.",
      title: "Verified Purchase",
      rating: 5,
      text: "Super fresh ingredients and the recipes are actually easy. The smoothie kit is my go-to.",
    },
    {
      name: "Ben K.",
      title: "Verified Purchase",
      rating: 4,
      text: "Delivery was quick and everything was packed nicely. Quinoa bowl mix tastes great.",
    },
    {
      name: "Cynthia L.",
      title: "Verified Purchase",
      rating: 5,
      text: "Love the clean design of the site. Checkout and cart were smooth, and the promo code worked.",
    },
  ]

  function Stars({ rating = 0 }) {
    const full = "★".repeat(Math.max(0, Math.min(5, rating)))
    const empty = "☆".repeat(Math.max(0, 5 - Math.max(0, Math.min(5, rating))))
    return <span className="review-stars-text" aria-label={`${rating} out of 5 stars`}>{full}{empty}</span>
  }

  /**
   * Navigate to the next quote
   * Uses modulo operator (%) to loop back to first quote after the last one
   */
  const handleNextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  /**
   * Navigate to the previous quote
   * Adds quotes.length before modulo to handle negative numbers correctly
   */
  const handlePrevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  /**
   * Auto Image Slider Effect
   * Uses useEffect hook to automatically change images every 3 seconds
   * The cleanup function (return) clears the interval when component unmounts
   */

  useEffect(() => {
    const interval = setInterval(() => {
      // Update currentImage, loop back to 0 after reaching the end
      setCurrentImage((prev) => (prev + 1) % healthyImages.length)
    }, 3000) // Change image every 3 seconds

    // Cleanup: Clear interval to prevent memory leaks
    return () => clearInterval(interval)
  }, [healthyImages.length]) // Dependency: Re-run if image array length changes

  /**
   * Handle newsletter form submission
   * Prevents default form behavior and displays success message
   * @param {Event} e - Form submit event
   */
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with: ${email}`)
    setEmail('')
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Eat Healthy, Live Better</h1>
          <p>Discover delicious and nutritious recipes for a healthier you</p>
          {/* Link component provides client-side navigation without page reload */}
          <Link href="/shop">
            <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Quote Slider */}
      <section className="quote-slider">
        {/* Display current quote using array indexing */}
        <div className="quote-text">
          "{quotes[currentQuote]}"
        </div>
        <div className="slider-buttons">
          {/* Previous button decrements the quote index */}
          <button onClick={handlePrevQuote} className="btn btn-secondary">
            ← Previous
          </button>
          {/* Next button increments the quote index */}
          <button onClick={handleNextQuote} className="btn btn-secondary">
            Next →
          </button>
        </div>
      </section>

      {/* Image Changer - Auto Slider */}
      <section className="section image-changer">
        <h2 className="section-title">Healthy Lifestyle</h2>
        <div className="image-slider-container">
          {/* 
            Transform property shifts images horizontally
            translateX(-100%) moves one full image width to the left
            Multiplying by currentImage creates the sliding effect
          */}
          <div 
            className="image-slider-track"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {/* Map function creates an img element for each image in the array */}
            {healthyImages.map((image, index) => (
              <img
                key={index} // Unique key required by React for list items
                src={image}
                alt={`Healthy eating ${index + 1}`}
                className="slider-image"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Grid of community images */}
      <section className="section">
        <h2 className="section-title">Our Community</h2>
        <div className="gallery">
           {/* Static gallery items */}
          <div className="gallery-item">
            <img src="/images/gallery-1.jpg" alt="Person eating healthy meal" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery-2.jpg" alt="Family enjoying healthy food" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery-3.jpg" alt="Friends having healthy lunch" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery-4.jpg" alt="Couple cooking together" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {/* 
            Map function iterates through products array
            Each product is wrapped in a Link for navigation to product detail page
          */}
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
                  <p className="product-price">${product.price}</p>
                  {/* 
                    Conditional rendering: Shows different styles based on stock status
                    Ternary operator: condition ? valueIfTrue : valueIfFalse
                  */}
                  <span className={`product-status ${product.inStock ? 'in-stock' : 'sold-out'}`}>
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>


      <section className="reviews-section">
            <div className="reviews-head">
              <h2>What Customers Say</h2>
              <p>Real feedback from people who tried our healthy kits.</p>
            </div>

            <div className="reviews-grid">
              {REVIEWS.map((r, i) => (
                <div className="review-card" key={i}>
                  <div className="review-top">
                    <div className="avatar" aria-hidden="true">
                      {r.name.split(" ").map(x => x[0]).join("").slice(0,2)}
                    </div>
                    <div>
                      <div className="review-name">{r.name}</div>
                      <div className="review-title">{r.title}</div>
                    </div>
                  </div>

                  <div className="review-stars">
                    <Stars rating={r.rating} />
                    <span className="rating-num">{r.rating}.0</span>
                  </div>

                  <p className="review-text">“{r.text}”</p>
                </div>
              ))}
            </div>
      </section>
        
      


      {/* Services */}
      <section>
          <div className="services-header">
            <h2 className="section-title">Our Services</h2>
            <p className="content-text" id="service-text">
            Start your journey towards a healthy and balanced life today with our service that aims to enhance your health and comfort.
            </p>
        </div>

          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
         </div>
        ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </section>

      
      {/* Newsletter */}
      <section className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>Get weekly healthy recipes and tips delivered to your inbox</p>
        {/* Form with controlled input - value is managed by React state */}
        <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
          <input
            type="email" // HTML5 email validation
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            required // HTML5 email validation
            className="newsletter-input"
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  )
}