import React, { ReactNode } from 'react'
import { motion } from "framer-motion"

const OptionHover = ({ children }: { children: ReactNode }) => {

  return(
    <motion.div whileHover={{ scale: 1.5 }}>
      {children}
    </motion.div>
  )
}

export default OptionHover