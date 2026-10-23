'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ProductDetail() {
  const params = useParams()
  const productId = params.product_name

  const [quantity, setQuantity] = useState(1)

  const products = {
    'green-smoothie-kit': {
      name: 'Green Smoothie Kit',
      price: 29.99,
      image: '/images/product-1.jpg',
      description: 'Our Green Smoothie Kit contains everything you need to create delicious and nutritious green smoothies at home. Packed with organic superfoods, this kit helps you kickstart your healthy eating journey with ease.',
      recipe: [
        'Add 1 cup of spinach to your blender',
        'Include 1 banana for natural sweetness',
        'Add 1 cup of almond milk',
        'Mix in 1 tablespoon of our superfood blend',
        'Blend until smooth and enjoy!'
      ],
      shipping: 'Free shipping on orders over $50. Standard delivery takes 3-5 business days. Express shipping available at checkout.'
    },
    'quinoa-bowl-mix': {
      name: 'Quinoa Bowl Mix',
      price: 24.99,
      image: '/images/product-2.jpg',
      description: 'Create delicious and filling quinoa bowls in minutes. Our premium quinoa mix includes organic quinoa, dried vegetables, and aromatic herbs that come together to create a perfect meal.',
      recipe: [
        'Cook 1 cup of quinoa mix with 2 cups of water',
        'Bring to a boil, then simmer for 15 minutes',
        'Let stand for 5 minutes',
        'Fluff with a fork',
        'Top with your favorite vegetables and proteins'
      ],
      shipping: 'Free shipping on orders over $50. Standard delivery takes 3-5 business days. Express shipping available at checkout.'
    },
    'protein-power-pack': {
      name: 'Protein Power Pack',
      price: 34.99,
      image: '/images/product-3.jpg',
      description: 'Fuel your workouts and recovery with our Protein Power Pack. This comprehensive package includes plant-based protein powder, energy bars, and protein-rich snacks to keep you energized throughout the day.',
      recipe: [
        'Mix 1 scoop of protein powder with 8oz of water or milk',
        'Shake well until fully dissolved',
        'Enjoy post-workout or as a meal replacement',
        'Pair with our energy bars for sustained energy',
        'Store in a cool, dry place'
      ],
      shipping: 'Free shipping on orders over $50. Standard delivery takes 3-5 business days. Express shipping available at checkout.'
    },
    'mediterranean-essentials': {
      name: 'Mediterranean Essentials',
      price: 39.99,
      image: '/images/product-4.jpg',
      description: 'Experience the flavors of the Mediterranean with our curated collection of premium olive oils, herbs, and spices. Perfect for creating authentic Mediterranean dishes at home.',
      recipe: [
        'Drizzle olive oil over fresh vegetables',
        'Season with Mediterranean herbs',
        'Add lemon juice for brightness',
        'Grill or roast to perfection',
        'Garnish with fresh herbs before serving'
      ],
      shipping: 'Free shipping on orders over $50. Standard delivery takes 3-5 business days. Express shipping available at checkout.'
    }
  }
  const product = products[productId]

  if (!product) {
    return (
      <main className="section">
        <h1>Product not found</h1>
      </main>
    )
  }
  
  const [notif,setnotif] = useState(false)
  const addtocart = () =>{
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cartData.findIndex(item => item.id === productId);
    if (existingItemIndex > -1) {
      // If it exists, add the new quantity to the old one
      cartData[existingItemIndex].quantity += quantity;
    } else {
      // If it's new, "push" the product object into the array
      cartData.push({
        id: productId, // Uses the ID from useParams
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }
    localStorage.setItem('cart', JSON.stringify(cartData));

    setnotif(true)

    setTimeout(() => {
      setnotif(false)
    }, 3000);
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const totalPrice = (product.price * quantity).toFixed(2)

  return (
    <main className="section">
      <div className="product-detail">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          
          <div className="quantity-selector">
            <span>Quantity:</span>
            <button onClick={handleDecrement} className="quantity-btn">-</button>
            <span className="quantity-display">{quantity}</span>
            <button onClick={handleIncrement} className="quantity-btn">+</button>
          </div>
          
          <div className="total-price">
            Total: ${totalPrice}
          </div>
          
          <button onClick={addtocart}className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Add to Cart
          </button>

          <div className="product-section">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="product-section">
            <h2>Recipe Instructions</h2>
            <ul>
              {product.recipe.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
          {notif && <div className='notification'>✅ {quantity} {product.name}(s) added!
            <Link href="/cart" className='cart-button'>
              View Cart →
          </Link>
            </div>}

          <div className="product-section">
            <h2>Shipping Information</h2>
            <p>{product.shipping}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
