"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FileText, Calendar, Mail, Phone } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="w-16 h-16 bg-primary-100 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-500" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Terms & <span className="text-primary-500">Conditions</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 text-gray-600"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Effective Date: 25th September, 2025</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to Ekpombang Consulting & Training (EC&T) Limited. By using our website, enrolling in our training programs, or engaging our services, you agree to the following terms and conditions:
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1: Services */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  EC&T provides consulting, auditing, financial advisory, and professional training programs (e.g., ACCA, PMP, taxation, software training, etc.).
                </p>
              </div>

              {/* Section 2: Enrollment & Payments */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Enrollment & Payments</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Course registrations are confirmed only upon receipt of payment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Fees are non-refundable except where EC&T cancels a program.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Participants must meet program requirements (where applicable).</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Intellectual Property */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All course materials, website content, and resources are the property of EC&T and may not be copied, distributed, or reproduced without permission.
                </p>
              </div>

              {/* Section 4: User Responsibilities */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Provide accurate information during consultation or enrollment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Use EC&T services for lawful purposes only.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Respect the learning environment and trainers during training programs.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5: Limitation of Liability */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  EC&T is not liable for indirect losses (e.g., loss of income, business opportunities) arising from use of our services. Our liability is limited to the fees paid for the specific service.
                </p>
              </div>

              {/* Section 6: Privacy */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  All personal information is handled in accordance with our Privacy Policy.
                </p>
              </div>

              {/* Section 7: Governing Law */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms & Conditions are governed by the laws of the Republic of Cameroon.
                </p>
              </div>

              {/* Section 8: Contact Us */}
              <div className="pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <div className="bg-gray-50 p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">Email: info@ect-pro.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">Phone: +237 694064887 or +237 678364320</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 p-6 bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <strong>Last Updated:</strong> September 25, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
