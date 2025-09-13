"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    question: "When does registration close?",
    answer: "Registration typically closes 2 weeks before the start of each program. Please check our training calendar for specific dates."
  },
  {
    question: "What's the cost to enter?",
    answer: "Our training programs have different pricing tiers depending on the course and duration. Contact us for detailed pricing information."
  },
  {
    question: "What categories can I compete in?",
    answer: "We offer various professional certification courses including ACCA, PMP, and specialized training programs in finance, accounting, and business management."
  },
  {
    question: "Are there prizes/awards?",
    answer: "Yes! We provide certificates of completion and professional recognition for all our training programs. Some courses also offer industry-recognized certifications."
  },
  {
    question: "Do food vendors need a license?",
    answer: "This question doesn't apply to our consulting and training services. We focus on professional development and business consulting."
  }
]

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact-us.png"
            alt="Contact Us Hero Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white"
            >
              Contact <span className="text-primary-500">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-white text-lg max-w-3xl mx-auto"
            >
              From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">Contact</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                  <p className="text-gray-600">+237 694064887 / +237 678364320</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                  <p className="text-gray-600">EkpombangConsultingandTraining@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">CEAC Bwitingi - Buea, South West Region, Republic of Cameroon. </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">Request a Quote</h2>
              <form className="space-y-6">
                {/* Row 1: Request Type | Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                      Request a Quote
                    </label>
                    <select id="requestType" className="w-full px-3 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none">
                      <option value="general">General Inquiry</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="training">Training Programs</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full px-3 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none" placeholder="Enter your name" />
                  </div>
                </div>

                {/* Row 2: Company | Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input type="text" id="company" className="w-full px-3 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none" placeholder="Enter company name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" className="w-full px-3 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none" placeholder="Enter phone number" />
                  </div>
                </div>

                {/* Row 3: Email | How heard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-3 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none" placeholder="Enter email address" />
                  </div>
                  <div>
                    <label htmlFor="heard" className="block text-sm font-medium text-gray-700 mb-2">
                      How you heard about us
                    </label>
                    <select id="heard" className="w-full px-3 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none">
                      <option value="">Select an option</option>
                      <option value="website">Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none resize-none" placeholder="Enter your message" />
                </div>

                <button type="submit" className="w-full bg-primary-500 text-white py-3 px-6 font-semibold hover:bg-primary-600 transition-colors btn-hover">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
