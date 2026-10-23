export default function About() {
  return (
    <main className="section">
      <h1 className="section-title">About HealthyEats</h1>
      
      {/* Staff Section */}
      <div className="about-section staff-section">
        <img
          src="/images/staff.jpg"
          alt="Our team"
          className="staff-image"
        />
        <div className="content-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p>
            Founded in 2020, HealthyEats was born from a simple belief: eating healthy 
            should be easy, delicious, and accessible to everyone. Our team of nutritionists, 
            chefs, and food enthusiasts work together to bring you the best recipes and 
            products for a healthier lifestyle.
          </p>
          <p>
            We're passionate about making healthy eating simple and enjoyable. Every product 
            we curate and every recipe we share is designed to help you achieve your health 
            goals without sacrificing taste or spending hours in the kitchen.
          </p>
        </div>
      </div>

      {/* Content Row - Image Left */}
      <div className="content-row">
        <img
          src="/images/about-1.jpg"
          alt="Fresh ingredients"
          className="content-image"
        />
        <div className="content-text">
          <h2 style={{ color: '#2d5016', marginBottom: '1rem' }}>Our Mission</h2>
          <p>
            At HealthyEats, we believe that good nutrition is the foundation of a vibrant, 
            fulfilling life. Our mission is to empower people to take control of their health 
            through informed food choices and practical, delicious recipes.
          </p>
          <p>
            We source only the highest quality ingredients, working directly with organic 
            farmers and sustainable producers. Every product in our collection meets our 
            strict standards for nutrition, taste, and environmental responsibility.
          </p>
        </div>
      </div>

      {/* Content Row - Image Right */}
      <div className="content-row" style={{ direction: 'rtl' }}>
        <img
          src="/images/about-2.jpg"
          alt="Cooking healthy meals"
          className="content-image"
        />
        <div className="content-text" style={{ direction: 'ltr' }}>
          <h2 style={{ color: '#2d5016', marginBottom: '1rem' }}>Our Commitment</h2>
          <p>
            We're committed to transparency in everything we do. From ingredient sourcing 
            to nutritional information, we believe you have the right to know exactly what 
            you're putting into your body. That's why we provide detailed information about 
            every product and recipe.
          </p>
          <p>
            Our community is at the heart of everything we do. We listen to your feedback, 
            celebrate your successes, and continuously work to bring you new products and 
            recipes that make healthy eating easier and more enjoyable.
          </p>
        </div>
      </div>
    </main>
  )
}
