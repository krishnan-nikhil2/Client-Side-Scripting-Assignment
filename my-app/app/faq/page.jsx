'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What makes your recipes healthy?',
      answer: 'All our recipes are created by certified nutritionists and focus on whole, unprocessed ingredients. We prioritize nutrient-dense foods, balanced macronutrients, and minimal added sugars or unhealthy fats. Each recipe includes detailed nutritional information to help you make informed choices.'
    },
    {
      question: 'Are your products organic?',
      answer: 'Yes! We source organic ingredients whenever possible. All our product kits contain certified organic components, and we work directly with local farmers and suppliers who share our commitment to sustainable, organic farming practices.'
    },
    {
      question: 'Do you offer gluten-free options?',
      answer: 'Absolutely! We have a wide selection of gluten-free products and recipes. Each product is clearly labeled with dietary information, including gluten-free, dairy-free, vegan, and other common dietary requirements. Use our filters on the shop page to find exactly what you need.'
    },
    {
      question: 'How long do the products stay fresh?',
      answer: 'Our products have varying shelf lives depending on the ingredients. Most dry goods last 6-12 months when stored properly in a cool, dry place. Each product includes a best-by date and storage instructions. We recommend using fresh products within the timeframe indicated for optimal taste and nutrition.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We want you to be completely satisfied with your purchase. If you\'re not happy with any product, you can return it within 30 days of purchase for a full refund. Products must be unopened and in original packaging. Contact our customer service team to initiate a return.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship within the United States and Canada. We\'re working on expanding our shipping options to more countries. Subscribe to our newsletter to be notified when we start shipping to your region.'
    },
    {
      question: 'Can I customize my order?',
      answer: 'Yes! Many of our product kits can be customized to suit your dietary preferences and restrictions. Contact us at support@healthyeats.com with your requirements, and our team will work with you to create a personalized order.'
    },
    {
      question: 'Are your recipes suitable for beginners?',
      answer: 'Definitely! We design our recipes with all skill levels in mind. Each recipe includes step-by-step instructions, cooking times, and helpful tips. We also offer video tutorials for more complex recipes on our social media channels.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="section">
      <h1 className="section-title">Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleFAQ(index)}
              className="faq-question"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? '' : 'hidden'}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
