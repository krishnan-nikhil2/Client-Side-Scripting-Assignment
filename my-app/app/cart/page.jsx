'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Cart() {
  const [items, setItems] = useState([])
  const [success, setSuccess] = useState(false)

  // 1. The "Background" Sync: Pull data once on page load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setItems(savedCart)
  }, [])

  const handleIncrement = (id) => {
    const updated = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item 
    })
    setItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const handleDecrement = (id) => {
    const updated = items.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    setItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const removeItem = (id) => {
    const updated = items.filter(item => item.id !== id)
    setItems(updated) 
    localStorage.setItem('cart', JSON.stringify(updated)) 
  }
  const grandTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  const clearCart = () => {
  // Simple browser confirmation to prevent accidental clicks
  if (window.confirm("Are you sure you want to empty your cart?")) {
    setItems([]); // Clear the screen
    localStorage.removeItem('cart'); // Wipe the browser memory
  }};

  const handleCheckout = () => {
    setSuccess(true);
    setItems([]);
    localStorage.removeItem('cart');
  };

  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [msg, setMsg] = useState("");

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === "SAVE10") {
      setDiscount(0.10); // 10%
      setMsg("Promo applied: 10% off!");
    } else {
      setDiscount(0);
      setMsg("Invalid promo code.");
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - (subtotal * discount);

  return (
    <section className="cart-page">
        {success && (
            <div className="success-banner">
            🎉 Order Successful! Check your email for a receipt.
            Thank you for shopping with us.
            </div>
            )}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
       <h1 className="cart-title">Your Cart</h1>
       {items.length > 0 && (
        <button onClick={clearCart} className="clear-btn">
        Clear Cart
        </button>
        )}
        </div>
       
       {items.length === 0 ? (
         <div className="empty-cart">
           <p>Your basket is empty!</p>
           <Link href="/shop" className="btn-primary">Back to Shop</Link>
         </div>
       ) : (
         <div className="cart-content">
           {/* Item List */}
           <div className="cart-list">
             {items.map((item) => (
               <div key={item.id} className="item-card">
                 <img src={item.image} alt={item.name} className="item-img" />
                 <div className="item-info">
                   <h3>{item.name}</h3>
                   <div className="quantity-selector">
                     <button onClick={() => handleDecrement(item.id)} className="quantity-btn">-</button>
                     <span className="quantity-display">{item.quantity}</span>
                     <button onClick={() => handleIncrement(item.id)} className="quantity-btn">+</button>
                   </div>
                   <p className="item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                 </div>
                 <button onClick={() => removeItem(item.id)} className="remove-btn">
                   Remove
                 </button>
               </div>
             ))}
           </div>

           {/* Grand Total Footer */}
           <div className="cart-footer">
             

             <div style={{ marginTop: "15px" }}>
              <h3>Promo Code</h3>

              <input
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Enter code (SAVE10)"
                style={{ padding: "8px", marginRight: "10px" }}
              />

              <button onClick={applyPromo} style={{ padding: "8px 14px" }}>
                Apply
              </button>

              <p style={{ marginTop: "10px" }}>{msg}</p>

              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Discount: -${(subtotal * discount).toFixed(2)}</p>
              <h2>Total: ${total.toFixed(2)}</h2>

             
             <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>

            </div>

           </div>
         </div>
       )}


      

    </section>
    
    
  
    

  )
}
