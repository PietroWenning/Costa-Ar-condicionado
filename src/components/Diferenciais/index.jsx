import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { diferenciais } from '../../data'

export default function Diferenciais() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Por que nos escolher
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
          >
            Nossos Diferenciais
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            O que faz a Costa Ar Condicionado ser a escolha certa para o seu projeto.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-5 p-6 rounded-2xl hover:bg-[#F8FAFC] hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-[#0F172A] font-bold text-lg mb-2 group-hover:text-[#0066FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
