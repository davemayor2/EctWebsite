'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  title: string
  author: string
  position: string
  avatar?: string
  delay?: number
}

const TestimonialCard = ({ 
  quote, 
  title, 
  author, 
  position, 
  avatar, 
  delay = 0 
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-secondary-800 border-2 border-gray-600 p-7 rounded-lg hover:border-primary-500 transition-all duration-300"
    >
      <div className="flex flex-col space-y-6">
        {/* Quote Icon */}
        <div className="flex justify-start">
          <Quote className="w-8 h-8 text-primary-500" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white font-plus-jakarta">
            {title}
          </h4>
          <p className="text-gray-300 text-lg font-dm-sans leading-relaxed">
            {quote}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600"></div>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
            {avatar ? (
              <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <span className="text-white font-semibold text-lg">
                {author.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="text-white font-semibold text-lg font-dm-sans">
              {author}
            </p>
            <p className="text-gray-400 text-sm font-dm-sans">
              {position}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard

