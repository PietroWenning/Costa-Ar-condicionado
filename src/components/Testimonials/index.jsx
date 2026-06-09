import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../../data'
import 'swiper/css'
import 'swiper/css/pagination'

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-slate-300'} size={14} />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full flex flex-col">
      <FaQuoteLeft className="text-[#0066FF]/20 text-4xl mb-4 flex-shrink-0" />
      <p className="text-slate-600 text-base leading-relaxed flex-1 mb-6">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#0066FF] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {testimonial.name[0]}
          </div>
          <div>
            <div className="text-[#0F172A] font-semibold text-sm">{testimonial.name}</div>
            <div className="text-slate-400 text-xs">{testimonial.role}</div>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            O que dizem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
          >
            Depoimentos de Clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Mais de 200 clientes satisfeitos na Grande Florianópolis. Veja o que eles dizem.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
