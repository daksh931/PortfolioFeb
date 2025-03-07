import React from 'react'

function testomonials() {
  return (
    <div>
       {/* Happy Clients */}
       <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Happy Clients</h2>
        <p className="text-lg text-gray-700 mt-2">
          Our customers love what we do! See their feedback below.
        </p>

        {/* Testimonial Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700">"{client.quote}"</p>
              <h3 className="mt-4 font-semibold text-gray-900">
                - {client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default testomonials
