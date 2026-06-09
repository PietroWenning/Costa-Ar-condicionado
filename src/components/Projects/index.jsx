import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand, FaHome, FaBuilding, FaIndustry } from 'react-icons/fa'

const projectCategories = ['Todos', 'Residencial', 'Comercial', 'Industrial']

const projects = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: [
    'Instalação Residencial - Florianópolis',
    'Sistema Comercial - Escritório',
    'Projeto Industrial - Galpão',
    'Climatização Completa - Casa',
    'Multi-split Comercial',
    'Sistema Central Industrial',
    'Instalação Apartamento',
    'Manutenção Preventiva Empresa',
    'Infraestrutura Nova Obra',
  ][i],
  category: ['Residencial', 'Comercial', 'Industrial', 'Residencial', 'Comercial', 'Industrial', 'Residencial', 'Comercial', 'Residencial'][i],
  icon: [FaHome, FaBuilding, FaIndustry, FaHome, FaBuilding, FaIndustry, FaHome, FaBuilding, FaHome][i],
}))

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('Todos')
  const [modal, setModal] = useState(null)

  const filtered = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projetos" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Portfólio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
          >
            Projetos Realizados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Veja alguns dos trabalhos que realizamos para nossos clientes.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-200'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#0066FF]/40 hover:text-[#0066FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative bg-gradient-to-br from-slate-800 to-[#0F172A] rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300"
                  onClick={() => setModal(project)}
                >
                  {/* Placeholder */}
                  <div className="flex flex-col items-center text-white/20 gap-3">
                    <Icon size={40} />
                    <span className="text-xs">Adicionar foto</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0066FF]/0 group-hover:bg-[#0066FF]/80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                      <FaExpand className="text-white text-2xl mx-auto mb-2" />
                      <p className="text-white font-semibold text-sm">{project.title}</p>
                      <span className="text-blue-200 text-xs">{project.category}</span>
                    </div>
                  </div>

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-[#0066FF] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setModal(null)}
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                className="bg-[#0F172A] rounded-2xl max-w-2xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-[#0D2347] flex items-center justify-center">
                  {(() => { const Icon = modal.icon; return <Icon size={60} className="text-white/20" /> })()}
                </div>
                <div className="p-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">{modal.title}</h3>
                    <span className="text-[#0066FF] text-sm">{modal.category}</span>
                  </div>
                  <button
                    onClick={() => setModal(null)}
                    className="text-slate-400 hover:text-white transition-colors p-1"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
