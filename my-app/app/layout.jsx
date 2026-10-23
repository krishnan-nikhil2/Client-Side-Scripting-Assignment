import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Healthy Eating - Easy & Delicious Recipes',
  description: 'Discover easy and healthy recipes for a better lifestyle',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
              <Link href="/" className="nav-brand">
                <img src="/images/logo.jpg" alt="HealthyEats logo" className="nav-logo-img" />
                <span className="nav-logo-text" id="nav-brand-name">HealthyEats</span>
              </Link>
            
            <ul className="nav-menu">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/faq" className="nav-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className='nav-link'>Cart</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        {children}

        <footer className="footer">
          <div className="footer-links">
            <Link href="/about" className="footer-link">
              About
            </Link>
            <Link href="/faq" className="footer-link">
              FAQ
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </div>
          
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              F
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              I
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              T
            </a>
          </div>
          
          <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
            © 2026 HealthyEats. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}