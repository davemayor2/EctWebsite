"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type TrainingItem = {
  title: string
  description: string
}

const trainings: TrainingItem[] = [
  {
    title: 'Professional Certification Courses (ACCA, PMP, etc.)',
    description:
      'Lorem ipsum dolor sit amet consectetur. Netus sit id suspendisse odio magna semper tempor. Donec quis magna netus sit id suspendisse odio magna.',
  },
  {
    title: 'Financial and Accounting Training',
    description:
      'Lorem ipsum dolor sit amet consectetur. Netus sit id suspendisse odio magna semper tempor. Donec quis magna netus sit id suspendisse odio magna.',
  },
  {
    title: 'Business & Management Development',
    description:
      'Lorem ipsum dolor sit amet consectetur. Netus sit id suspendisse odio magna semper tempor. Donec quis magna netus sit id suspendisse odio magna.',
  },
  {
    title: 'Marketing & Sales Mastery',
    description:
      'Lorem ipsum dolor sit amet consectetur. Netus sit id suspendisse odio magna semper tempor. Donec quis magna netus sit id suspendisse odio magna.',
  },
  {
    title: 'Software Implementation & Digital Tools',
    description:
      'Lorem ipsum dolor sit amet consectetur. Netus sit id suspendisse odio magna semper tempor. Donec quis magna netus sit id suspendisse odio magna.',
  },
  {
    title: 'Custom Corporate Training',
    description:
      'Lorem ipsum dolor sit amet consectetur. Netus sit id suspendisse odio magna semper tempor. Donec quis magna netus sit id suspendisse odio magna.',
  },
]

export default function TrainingPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Training <span className="text-primary-500">Programs</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-gray-600 max-w-3xl mx-auto"
            >
              Upskill with globally recognized courses and tailored corporate training designed to empower individuals and organizations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Training Categories grid */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-xl font-semibold mb-6">Training Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="rounded-xl border bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-md border-2 border-primary-400 flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-primary-400 rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold leading-6">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <div className="h-64 w-full relative overflow-hidden">
                <Image
                  src="/get-started-cta.png"
                  alt="Get Started CTA Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-white text-xl sm:text-2xl font-semibold max-w-2xl">
                  Ready to take the next step? Partner with us to unlock your potential and achieve lasting impact.
                </h3>
                <Link href="/contact" className="mt-5 bg-primary-500 text-white px-5 py-3 font-semibold btn-hover">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}