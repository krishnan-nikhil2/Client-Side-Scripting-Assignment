export default function Contact() {
  return (
    <main className="section">
      <h1 className="section-title">Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-section">
          <h2>Get In Touch</h2>
          <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '2rem' }}>
            We'd love to hear from you! Whether you have questions about our products, 
            need help with a recipe, or just want to share your healthy eating journey, 
            our team is here to help.
          </p>
        </div>

        <div className="contact-section">
          <h2>Email Address</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>General Inquiries:</strong>
              <a href="mailto:info@healthyeats.com">info@healthyeats.com</a>
            </div>
            <div className="contact-item">
              <strong>Customer Support:</strong>
              <a href="mailto:support@healthyeats.com">support@healthyeats.com</a>
            </div>
            <div className="contact-item">
              <strong>Partnership:</strong>
              <a href="mailto:partners@healthyeats.com">partners@healthyeats.com</a>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>Customer Service Hotline</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Phone:</strong>
              <span>+65 8000-HEALTHY (+65 8000 5849)</span>
            </div>
            <div className="contact-item">
              <strong>Hours:</strong>
              <span>Monday - Friday: 9:00 AM - 6:00 PM SGT</span>
            </div>
            <div className="contact-item">
              <strong>Hours:</strong>
              <span>Saturday: 10:00 AM - 4:00 PM SGT</span>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>Social Media</h2>
          <p style={{ color: '#555', marginBottom: '1rem' }}>
            Connect with us on social media for daily healthy eating tips, recipe ideas, 
            and inspiration from our community!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Facebook:</strong>
              <a href="https://facebook.com/healthyeats" target="_blank" rel="noopener noreferrer">
                facebook.com/healthyeats
              </a>
            </div>
            <div className="contact-item">
              <strong>Instagram:</strong>
              <a href="https://instagram.com/healthyeats" target="_blank" rel="noopener noreferrer">
                @healthyeats
              </a>
            </div>
            <div className="contact-item">
              <strong>Twitter:</strong>
              <a href="https://twitter.com/healthyeats" target="_blank" rel="noopener noreferrer">
                @healthyeats
              </a>
            </div>
          </div>
        </div>

        <div className="contact-section" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
          <h2>Office Location</h2>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            <strong>HealthyEats Headquarters</strong><br />
            123 Ngee Ann Healthy Eats<br />
            Floor #02-02<br />
            Singapore, 123456<br />
            Singapore
          </p>
        </div>
      </div>
    </main>
  )
}
