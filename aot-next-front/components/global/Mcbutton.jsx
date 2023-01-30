import {motion, AnimatePresence, MotionConfig} from 'framer-motion'
import { top, middle, bottom } from '../../utils/motion/motionObjects'

export default function Mcbutton({ styles, menuOpen, toggleMenuOpen }){

  return(
    <div className={ styles.mcbuttonContainer } onClick={ () => { toggleMenuOpen() } }>
      <AnimatePresence>
        <MotionConfig transition={{ duration: .5, type: "spring", stiffness: 200  }}>
          { !menuOpen && <motion.div 
            className={ styles.mcbutton }
            key="mcButtonClosed"
            initial="initial"
            animate="animate"
            exit="exit"
            >
            <motion.b variants={ top.openToClosed }></motion.b>
            <motion.b variants={ middle.openToClosed }></motion.b>
            <motion.b variants={ bottom.openToClosed }></motion.b>
          </motion.div> }

          { menuOpen && <motion.div 
            className={ styles.mcbutton }
            key="mcButtonOpen"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.b variants={ top.closedToOpen }></motion.b>
            <motion.b variants={ middle.closedToOpen }></motion.b>
            <motion.b variants={ bottom.closedToOpen }></motion.b>
          </motion.div> }
        </MotionConfig>
      </AnimatePresence>
    </div>
  );
}