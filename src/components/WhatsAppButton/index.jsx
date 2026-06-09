import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { WHATSAPP_URL } from '../../utils/constants'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    const tooltipTimer = setTimeout(() => setTooltip(false), 6000)
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-[#0F172A] text-white text-sm px-4 py-3 rounded-xl shadow-xl max-w-[200px] leading-snug relative"
              >
                Solicite seu orçamento agora! 👋
                <button
                  onClick={() => setTooltip(false)}
                  className="absolute -top-2 -right-2 bg-slate-600 hover:bg-slate-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transition-colors"
                >
                  <FaTimes size={8} />
                </button>
                {/* Arrow */}
                <div className="absolute right-4 -bottom-2 w-4 h-4 bg-[#0F172A] rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
            className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20B858] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors"
          >
            <FaWhatsapp className="text-white text-3xl" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
