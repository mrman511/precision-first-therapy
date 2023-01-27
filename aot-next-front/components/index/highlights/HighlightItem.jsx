import { motion, AnimatePresence, useCycle } from "framer-motion";
import Router, { useRouter } from "next/router";

export default function HighLightItem({ styles, highlight, i }){

  const [showLink, toggleShowLink] = useCycle(false, true);
  const [hover, toggleHover]= useCycle(false, true);

  const handleClick = (e) => {
    e.preventDefault();
    toggleShowLink();
  }

  const handleOver = (e) => {
    e.preventDefault();
    !hover ? toggleHover() : '';
    !showLink ? toggleShowLink() : '';
  }

  const handleOut = (e) => {
    e.preventDefault();
    hover ? toggleHover() : '';
    showLink ? toggleShowLink(): '';
  }

  const handleRouting = (id) => {
    Router.push({ pathname: 'services/service', query: { id: HighLightItem.id } })
  }

  const title = (
    <motion.div 
      className={ styles.motionContainer }
      key={ `highlight-title${i}` }
      initial={{ left: '100%', }}
      animate={{ left: 0, transition: { duration: .75 } }}
      exit={{ left: '-100%', transition: { duration: .75 } }}
    >
      <h3>
        { highlight.title }
      </h3>
    </motion.div>
  );

  const button = (
    <motion.div 
      className={ styles.motionContainer }
      key={ `highlight-button${i}` }
      initial={{ left: '100%', }}
      animate={{ left: 0, transition: { duration: .75 } }}
      exit={{ left: '-100%', transition: { duration: .75 } }}
    >
      <button 
        className={ [styles.btn, styles.btnLg].join(' ') }>
          Details
      </button>
    </motion.div>
  );
  
  return(
    <article 
      className={[styles.highlightCard, styles[highlight.id_tag]].join(' ')}
      onMouseOver={(e) => { handleOver(e) }}
      onMouseOut={(e) => { handleOut(e) }}
    >
      
      <div className={ [styles.titleContainer, styles.wide].join(' ') }>
        <AnimatePresence >
          { !showLink && title }
          { showLink && button }
        </AnimatePresence>
      </div>

      <div className={ styles.mobile } onClick={(e) => { handleClick(e) }}>
        <div className={ styles.titleContainer }>
          <AnimatePresence >
          { !showLink && title }
          { showLink && button }
          </AnimatePresence>
        </div>
      </div>

    </article>
  );
}