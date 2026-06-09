import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheckCircle, FaChevronDown } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../../utils/constants'
import { useScrollToSection } from '../../hooks/useScrollSpy'

const badges = [
  'Atendimento rápido',
  'Equipe especializada',
  'Garantia nos serviços',
  'Residencial, comercial e industrial',
]

const stats = [
  { value: COMPANY.clients, label: 'Clientes Satisfeitos' },
  { value: COMPANY.projects, label: 'Projetos Realizados' },
  { value: COMPANY.experience, label: 'Anos de Experiência' },
]

export default function Hero() {
  const scrollTo = useScrollToSection()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#0D2347]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#0052CC]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#3385FF] text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse" />
              Grande Florianópolis - SC
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Especialistas em{' '}
              <span className="text-[#0066FF]">Climatização</span>{' '}
              Residencial, Comercial e Industrial
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg"
            >
              Soluções completas em instalação, manutenção e infraestrutura para sistemas de ar-condicionado.
              Qualidade e conforto para sua casa, empresa ou indústria.
            </motion.p>

            {/* Badges */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2 mb-10"
            >
              {badges.map((badge) => (
                <li key={badge} className="flex items-center gap-3 text-slate-300 text-sm">
                  <FaCheckCircle className="text-[#00C853] flex-shrink-0" />
                  {badge}
                </li>
              ))}
            </motion.ul>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B858] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 active:scale-95"
              >
                <FaWhatsapp size={22} />
                Falar no WhatsApp
              </a>
              <button
                onClick={() => scrollTo('#servicos')}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 active:scale-95"
              >
                Ver Serviços
              </button>
            </motion.div>
          </div>

          {/* Right column — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-6"
          >
            {/* Big stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-colors"
                >
                  <div className="text-4xl font-bold text-[#0066FF] mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight card */}
            <div className="bg-gradient-to-br from-[#0066FF]/20 to-[#003D99]/20 border border-[#0066FF]/30 rounded-2xl p-8">
              <div className="text-[#3385FF] text-sm font-semibold uppercase tracking-wider mb-3">Por que escolher a Costa?</div>
              <p className="text-white text-xl font-semibold leading-snug mb-4">
                "Ajudamos você a ter um ar mais puro e conforto o ano todo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0066FF] rounded-full flex items-center justify-center text-white font-bold text-sm">C</div>
                <div>
                  <div className="text-white text-sm font-semibold">Costa Ar Condicionado</div>
                  <div className="text-slate-400 text-xs">Grande Florianópolis - SC</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden grid grid-cols-3 gap-3 mt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#0066FF]">{stat.value}</div>
              <div className="text-slate-400 text-xs mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#servicos')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <FaChevronDown size={20} />
      </motion.button>
    </section>
  )
}
