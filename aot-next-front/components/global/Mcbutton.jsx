import {motion, AnimatePresence} from 'framer-motion'
import { mcbuttonTop, mcbuttonMiddle, mcbuttonBottom } from '../../utils/motion/motionObjects'

export default function Mcbutton({ styles, menuOpen, toggleMenuOpen }){


  return(
    <div className={ styles.mcbuttonContainer } onClick={ () => { toggleMenuOpen() } }>
      <AnimatePresence>
        { !menuOpen && <motion.div 
          className={ styles.mcbutton }
          key="mcButtonClosed"
          initial="initial"
          animante="animate"
          exit="exit"
          >
          <motion.b variants={ mcbuttonTop.openToClosed }></motion.b>
          <motion.b variants={ mcbuttonMiddle.openToClosed }></motion.b>
          <motion.b variants={ mcbuttonBottom.openToClosed }></motion.b>
        </motion.div> }

        { menuOpen && <motion.div 
          className={ styles.mcbutton }
          key="mcButtonOpen"
          initial="initial"
          animante="animate"
          exit="exit"
        >
          <motion.b variants={ mcbuttonTop.closedToOpen }></motion.b>
          <motion.b variants={ mcbuttonMiddle.closedToOpen }></motion.b>
          <motion.b variants={ mcbuttonBottom.closedToOpen }></motion.b>
        </motion.div> }
      </AnimatePresence>
    </div>
  );
}