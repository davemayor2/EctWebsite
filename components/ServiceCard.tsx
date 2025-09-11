'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-secondary-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 card-hover"
    >
      <div className="flex flex-col items-start space-y-6">
        {/* Icon */}
        <div className="bg-primary-500 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black font-plus-jakarta">
            {title}
          </h3>
          <p className="text-gray-600 text-lg font-dm-sans leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard

